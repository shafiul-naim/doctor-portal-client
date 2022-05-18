import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi
          vero consectetur dolore pariatur tempora.
        </p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl">{review.name}</h4>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
