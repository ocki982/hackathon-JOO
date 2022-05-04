import React from 'react';

const CommentsList = () => {
    return (
        <div className="comments__comments">
            <div className="comments__info">
                <p className="comments__name">Name</p>
                <p className="comments__date">Date</p>
            </div>
            <p className="comments__text">Comment</p>
        </div>
    );
};

export default CommentsList;