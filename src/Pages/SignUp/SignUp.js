import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {

    const { createUser, googleSignIn, profileUpdate } = useContext(AuthContext)
    const provider = new GoogleAuthProvider()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const handleProfile = (name, photoURL) => {
            const profile = { displayName: name, photoURL }
            profileUpdate(profile)
                .then(() => { })
                .catch(error => console.error(error))
        }



        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success("signup succesfull")
                handleProfile(name, photoURL)
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message
                toast.error(errorMessage)
            })

    }

    const handlegoogleSignIN = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("singIn successfull")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className='container d-flex flex-column flex-md-row justify-content-between mt-5 shadow p-4 w-100'>
            <div>
                <img className='mb-3' src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="" />
            </div>
            <div className="Auth-form-container mx-auto">
                <form onSubmit={handleSignUp} className="Auth-form">
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
                <button onClick={handlegoogleSignIN} style={{ color: "rgba(0, 0, 0, 0.54)", width: "300px" }} className='btn btn-light fw-semibold shadow mt-4 py-2 px-2'> <FcGoogle className='fs-3'></FcGoogle> <span className='ps-2' style={{ fontSize: "18px" }}>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default SignUp;