import React from 'react'
import Avatar from '@material-ui/core/Avatar';
//import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {FaRegHeart} from 'react-icons/fa'
import {RiChat3Line} from 'react-icons/ri'
import {FiUpload,FiBookmark} from 'react-icons/fi'
function InstagramPost() {
    return (
        <div className = "post">
            <div className = "ipost__header">
                <div className="ipost__avatar">
                    <Avatar className="post__avatar" alt = "React" src = "https://cdn.auth0.com/blog/react-js/react.png"></Avatar>
                    <div>
                    <h3>React</h3>
                    <h5 className="light__caption">100m Followers</h5>
                    </div>
                </div>
                <div>
                    <button className="ipost__button">View Profile</button>
                </div>

            </div>

            <img className="post__image" src = "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"></img>
            <div className="ipost__icons">
                <div className="post__icongroup">
                    <FaRegHeart className="ipost__licon"/>
                    <RiChat3Line className="ipost__licon"/>
                    <FiUpload className="ipost__licon"/> 
                </div>
                <div className="icon__save">
                    <FiBookmark className="ipost__ricon" />
                </div>
            </div>
            <h4 className = "post__text"><strong>1800 Likes</strong></h4>
            <h4 className = "post__text"><strong>React</strong></h4>
            <p className="ipost__text">
            Do you want to master REACT JS & learn how to make an income with those skills? Click here & enroll NOW 🔥👉 <a>https://www.cleverprogrammer.com/pwj?...</a>

In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRAM CLONE using React, Firebase & Material-UI... 👇

This training covers the following:<br/>
👉 Building a Instagram Clone App 💻<br/>
👉 Deploying a React app with Firebase Hosting 🌐<br/>
👉 How to handle authentication with Firebase 🔑<br/>
👉 How to upload images to Firebase Storage and use them on your site! 🖥️<br/>
👉 Real-time database with Firebase’s Firestore 🔥<br/>
<br/>
<br/>
🌟 Course Contents 🌟<br/>
⌨️: (0:00:00) What we'll be building<br/>
⌨️: (0:03:10) Start your REACT project (npx)<br/>
⌨️: (0:04:43) Create app on Firebase<br/>
⌨️: (0:07:09) Start your react app locally<br/>
⌨️: (0:07:53) Clean up your REACT app<br/>
⌨️: (0:08:53) Create input field<br/>
⌨️: (0:16:01) Add firebase hosting to your app<br/>
⌨️: (0:17:47) Add ability to send message<br/>
⌨️: (0:27:50) Question: Why use state instead of a normal variable?<br/>
⌨️: (0:30:54) Let's use Material-UI<br/>
⌨️: (0:37:29) CSS Styling<br/>
⌨️: (0:41:39) Add Image, Username, and Caption to Instagram Post<br/>
⌨️: (0:53:42) Render out multiple Posts<br/>
⌨️: (0:54:35) Is React better than Node.JS for back-end?<br/>
⌨️: (0:57:28) How to implement Firebase Database<br/>
⌨️: (1:08:17) Access Database, Authentication, and Storage from Firebase<br/>
⌨️: (1:09:12) How to use useEffect to Push and Pull data from Database<br/>
⌨️: (1:25:29) Firebase User Authentication<br/>
⌨️: (2:10:48) Storing IG posts & images in Firebase<br/>
⌨️: (2:44:07) Styling Image Uploader<br/>
⌨️: (2:52:13) Styling the Instagram Clone App<br/>
⌨️: (3:04:27) Add Comments to Instagram Posts<br/>
⌨️: (3:28:28) Final Step: Deploying our Instagram App to Firebase<br/>
            </p>
            
        </div>
    )
}

export default InstagramPost
