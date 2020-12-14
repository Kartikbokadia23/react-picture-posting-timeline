import './App.css';
import Post from './components/Post.js';
import React, { useEffect, useState } from "react";
import { auth, db } from './firebase/AppFirebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './components/ImageUpload';
import InstagramPost from './components/InstagramPost'
import PropTypes from 'prop-types'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  ImageUpload.propTypes = {
    username : PropTypes.string

  }

  const [posts, setPosts] = useState([])
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [openSignIn, setOpenSignIn] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        setUser(authUser)
      }
      else {
        setUser(null)
      }
    })
    return (() => {
      unsubscribe()
    })
  }, [user, username])


  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        post: doc.data(),
        id: doc.id
      })))
    })
  }, []);

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message));
    setOpen(false)

  }

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
    setOpenSignIn(false)
    setEmail('')
    setPassword('')
  }


  return (
    <div className="App">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <h1 className="app__brand">Photo Fiesta</h1>
            </center>
            <Input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={signUp}>Sign Up</Button>

          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
            <h1 className="app__brand">Photo Fiesta</h1>
            </center>
            <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={signIn}>Sign In</Button>

          </form>
        </div>
      </Modal>
      <div className="app__header">
      <h1 className="app__brand">Photo Fiesta</h1>
        {
        user ? (<Button onClick={() => auth.signOut()}>Log Out</Button>)
          :
          (<div className="app__loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
          )
      }
      </div>
      {user?.displayName ? (
        <React.Fragment>
        <ImageUpload username={user.displayName} />
        <div className = "app__posts">
        <div className="app__leftposts">
        {
          posts.map(({ post, id }) => {
            return <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          })
        }
        </div>
        <div className="app__rightposts">
          <InstagramPost />
        </div>
  
        </div>
        </React.Fragment>
      ):
      (
        <div className="app__welcome">
          <h1> Welcome To Our App.<br/>Please Sign/SignUp to Continue.</h1>
        </div>
      )}
    </div>
  );
}

export default App;
