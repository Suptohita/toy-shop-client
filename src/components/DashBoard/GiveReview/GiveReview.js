import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';
import './GiveReview.css'

const GiveReview = () => {
    const {user} = useAuth()

    const [topicName, setTopicName] = useState()
    const [rating, setRating] = useState()
    const [comment, setComment] = useState()

    const handleTopicName = e =>{
        setTopicName(e.target.value)
    }

    const handleRating = e =>{
        setRating(e.target.value)
    }

    const handleComment = e =>{
        setComment(e.target.value)
    }
const handleReview = e => {
        const reviewerName = user.displayName

        const data = {reviewerName, topicName, rating, comment}
        

        fetch('http://localhost:8000/review/submit', {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    alert('Review Added')
                }
            })
    }


    return (
        <div>
            <DashBoard></DashBoard>
            <div className='mt-5'>
                <input type="text" onChange={handleTopicName} className='feedback-input' name="" placeholder='Topic Name' id="" />

                <input type="number" onChange={handleRating} className='rating mt-3' name="" placeholder='Rating On 5' id="" />

                <br />
                <br />

                <textarea name="" onChange={handleComment} className='feedback-input' cols="40" placeholder='Your Comment' rows="10"></textarea>
                <br />
                <button onClick={handleReview} id='review-submit' className='btn mt-2'>Submit</button>
            </div>
        </div>
    );
};

export default GiveReview;