import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Appointment from '../Appointment/Appointment';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const  [user] = useAuthState(auth);

    useEffect( () => {
        if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        } )
        .then(res => res.json()
        .then(data => setAppointments(data)))
        }
    } , ([user]))
    return (
        <div>
            <h2>My appointment: {appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a, index) => <tr key={a.treatmentId}>
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>)
        }
     
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;