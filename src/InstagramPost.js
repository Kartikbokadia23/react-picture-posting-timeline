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
            Picture-Posting-Timeline-with-React-and-Firebase🔥👉 <br/>
👉 Building a Photo-Posting App 💻<br/>
👉 Picture-Posting-Timeline-with-React-and-Firebase 🌐<br/>
👉 Picture-Posting-Timeline-with-React-and-Firebase🔑<br/>
👉 Picture-Posting-Timeline-with-React-and-Firebase🖥️<br/>
👉 RPicture-Posting-Timeline-with-React-and-Firebase🔥<br/>
<br/>
<br/>
🌟 Contents 🌟<br/>
⌨️: React Js<br/>
⌨️: Start your REACT project<br/>
⌨️: FireBase<br/>
⌨️: Materal Ui<br/>
⌨️: react icons<br/>
⌨️: html<br/>
⌨️: css<br/>
⌨️: <br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: How to implement Firebase Database<br/>
⌨️: Access Database, Authentication, and Storage from Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
⌨️: Picture-Posting-Timeline-with-React-and-Firebase<br/>
            </p>
            
        </div>
    )
}

export default InstagramPost
