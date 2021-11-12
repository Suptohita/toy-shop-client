import React, { useEffect } from 'react';
import { useState } from 'react';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/showreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <h3 className='mb-4 mt-3'><u>User's Reviews</u></h3>
            <div className='d-flex container mb-5 user-review'>
                {
                    reviews.map(review => <div>
                        <div class="card text-dark mb-2 ms-3 review-bg" style={{width:'18rem', height:'200px'}}>

                            <div class="card-header">{review.reviewerName}</div>

                            <div class="card-body review-text">
                                <h5 class="card-title">Light card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;