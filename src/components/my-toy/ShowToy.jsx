/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ShowToy = ({data,handleBookingConfirm}) => {
    return (
        <tr>
            <th>
                <button  onClick={() => handleBookingConfirm(data._id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={data?.url} alt="" />
                    </div>
                </div>
            </td>
            <td>
               {
                data?.toyname
               }
            </td>
            <td>
                {data?.quantity}
            </td>
            <td>$ {data?.price}</td>
            <th>
               <button className='btn'> <Link to={`/edit/${data._id}`}>Edit</Link> </button>
            </th>
        </tr>
    );
};

export default ShowToy;