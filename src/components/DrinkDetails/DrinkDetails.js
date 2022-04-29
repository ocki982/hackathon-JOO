import React from 'react';
import CommentsForm from '../commentsForm/commentsForm';

const DrinkDetails = () => {
    return (
        <div>
            <section>
                <img alt="drink"></img>
                <div>
                    <p>Some text about the drink</p>
                    <p>Alcohol Value</p>
                    <p>Price</p>
                    <button>Add</button>
                </div>
            </section>
            <CommentsForm/>
        </div>
    );
};

export default DrinkDetails