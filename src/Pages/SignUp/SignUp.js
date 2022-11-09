import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container d-flex justify-content-between mt-5 shadow p-4'>
            <div>
                <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="" />
            </div>
            <div className="Auth-form-container mx-auto">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label>Name</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control mt-1"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Photo URL</label>
                            <input
                                type="text"
                                name='photoUrl'
                                className="form-control mt-1"
                                placeholder="photourl"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary fw-semibold">
                                Signup
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Not SignUp yet? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;