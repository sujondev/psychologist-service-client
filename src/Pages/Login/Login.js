import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='container d-flex justify-content-between mt-5 shadow p-4'>
            <div>
                <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="" />
            </div>
            <div className="Auth-form-container mx-auto">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
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
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Not SignUp yet? <Link to="/signup">signup</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;