import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary mx-auto my-10 font-bold">{name}</h2>
        <p className=" mx-auto">
          {" "}
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">try another day</span>
          )}
        </p>
        <p className=" mx-auto">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length == 0}
            htmlFor="booking-modal"
            className="btn btn-sm border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
