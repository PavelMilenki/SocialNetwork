import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddNewPostFormRedux from "./AddNewPostForm";

const MyPosts = React.memo((props) => {

    const postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postBlocks}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});


export default MyPosts