import React from 'react';
import CommentsList from '../CommentsList/CommentsList';
import './CommentsForm.scss';

const CommentsForm = () => {
    return (
        <div className='comments'>
            <form className="comments__form">
                <div className="comments__box">
                    <label className="comments__label" htmlFor="comment" id="comment">Comments</label>
                    <input className="comments__input" name="comment" id="comment-form" placeholder="Add a new comment" required></input>
                </div>
                <button className="comments__button">Submit</button>
            </form>
            <CommentsList/>
        </div>
    );
};

export default CommentsForm;