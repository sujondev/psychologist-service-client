import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReveiw from '../MyReveiw/MyReveiw';

const MyReveiws = () => {
    const { user } = useContext(AuthContext)
    const [myReveiws, setMyReveiws] = useState([])
    useEffect(() => {
        fetch(`https://psychologist-service-server.vercel.app/myreveiws?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReveiws(data))
    }, [user?.email])
    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    myReveiws.map(myReveiw => <MyReveiw key={myReveiw._id} myreveiw={myReveiw}></MyReveiw>)
                }
            </div>

        </div>
    );
};

export default MyReveiws;