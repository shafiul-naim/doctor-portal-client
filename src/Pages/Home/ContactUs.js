import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section className="my-28 py-16" style={{
        background: `url(${appointment})`
    }}>
      <div className="mx-auto flex flex-col w-2/5">
        <h3 className="my-2 text-primary text-xl text-center">Contact us</h3>
        <h2 className="text-3xl mb-3 text-center text-white">Stay Connected with us</h2>
        <div className="text-center mt-10">
        <input type="email" placeholder="Email address" class="input input-bordered input-sm  mb-3 w-full max-w-xs" />
        <input type="text" placeholder="Your name" class="input input-bordered input-sm  mb-3 w-full max-w-xs" />
        <input type="email" placeholder="Your message" class="input input-bordered  mb-3 h-24 w-full max-w-xs" />
        <h2 className=" mt-2"><PrimaryButton>Submit</PrimaryButton></h2>
        </div>
      </div>
    </section>
  );              
};

export default ContactUs;
