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
                        <div class="card text-dangerdark mb-2 ms-3 review-bg" style={{width:'18rem', height:'200px'}}>

                            <div class="card-header">{review.reviewerName}</div>

                            <div class="card-body review-text">
                                <h5 class="card-title">{review.topicName} <span className='bg-dark text-warning rounded ps-1 pe-1'>★ {review.rating}</span></h5>
                                {
                                    review.rating <= 0 ?
                                     <div className='text-danger fs-3'>☆☆☆☆☆</div>: 
                                     review.rating > 0 && review.rating <= 1 ?<div className='text-danger fs-3'>★☆☆☆☆</div>:
                                     review.rating > 1 && review.rating <= 1.5 ?<div className='text-danger fs-3'>★⯪☆☆☆</div>:
                                     review.rating > 1.5 && review.rating <= 2 ?<div className='text-danger fs-3'>★★☆☆☆</div>:
                                     review.rating > 2 && review.rating <= 2.5 ?<div className='text-danger fs-3'>★★⯪☆☆</div>:
                                     review.rating > 2.5 && review.rating <= 3 ?<div className='text-danger fs-3'>★★★☆☆</div>:
                                     review.rating > 3 && review.rating <= 3.5 ?<div className='text-danger fs-3'>★★★⯪☆</div>:
                                     review.rating > 3.5 && review.rating <= 4 ?<div className='text-danger fs-3'>★★★★☆</div>:
                                     review.rating > 4 && review.rating <= 4.5 ?<div className='text-danger fs-3'>★★★⯪☆</div>:
                                     <div className='text-danger fs-3'>★★★★★</div>
                                }
                                <p class="card-text">{review.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;