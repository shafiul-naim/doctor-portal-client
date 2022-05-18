import React from "react";
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="p-12">
          <h1 class="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
