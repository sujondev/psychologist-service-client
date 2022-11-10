import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Reveiw = ({ reveiw }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { email, reveiwText, name } = reveiw
    console.log(name)
    return (
        <div className='container mt-5 w-50 shadow p-3'>
            <div className='d-flex justify-content-between'>
                <img style={{ height: "20px", width: "20px" }} src={user?.photoURL} alt="" />
                <p>{name}</p>
                {email}
            </div>
            <p>{reveiwText}</p>
        </div>
    );
};

export default Reveiw;