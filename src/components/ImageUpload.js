import React, {useState} from 'react';
import {Button, Input} from '@material-ui/core';
import {db, storage} from '../firebase/AppFirebase';
import firebase from "firebase";
import PropTypes from 'prop-types'
function ImageUpload({username}) {
    ImageUpload.propTypes = {
        username : PropTypes.string
    }

    const [image, setImage] = useState(null);
    const [progress, setProgress]=useState(0)
    const [caption, setCaption] = useState('')

    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error)=>{
                console.log(error);
                alert(error.message);
            },
            ()=>{
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption:caption,
                            imageUrl:url,
                            username: username
                        })

                        setProgress(0)
                        setCaption("")
                        setImage(null)
                    })
            }
        )
    } 
    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100"></progress>
            <Input type="text" placeholder="Enter a Caption.." onChange={(event=>setCaption(event.target.value))}></Input><br/>
            <center><input type="file" onChange={handleChange}></input></center>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
