import React from 'react';

const CommentsList = () => {
    return (
        <div>
            <div className="comments__info">
                <h3 className="comments__name">Name</h3>
                <p className="comments__date">Date</p>
            </div>
            <p className="comments__text">Comment</p>
        </div>
    );
};

export default CommentsList;