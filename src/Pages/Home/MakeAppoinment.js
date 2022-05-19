import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center  '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 py-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h3 className='text-3xl text-white py-5'>Make an appointment</h3>
                <p className='text-white mb-3 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nemo sequi adipisci nisi ut aliquam optio laboriosam iure quas delectus facilis nesciunt repellendus unde eaque ab nostrum cupiditate ratione, obcaecati qui quod? Reprehenderit blanditiis architecto exercitationem accusamus deserunt voluptatum magnam.</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;