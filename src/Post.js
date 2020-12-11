import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types'

function Post({username , caption , imageUrl}) {

    Post.propTypes = {
        username : PropTypes.string,
        caption : PropTypes.string,
        imageUrl : PropTypes.string
      }
    return (
        <div className = "post">
            <div className = "post__header">
                <Avatar className="post__avatar" alt = {username} src = "/static/images/avatar/1.jpg">   
                </Avatar>
                <h3>{username}</h3>
            </div>

            <img className="post__image" src = {imageUrl}></img>
            <h4 className = "post__text"><strong>{username}</strong>&nbsp;{caption}</h4>
            
        </div>
    )
}
export default Post
