import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import styles from './SignUp.module.css';
import * as validator from '../../../utils/validator';
import Button from '../../Button/Button';

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function submitHandle() {
        
        if(validator.empty(name)) {
            return toast.error("Name Field is Empty!");
        }
        if(validator.empty(email)) {
            return toast.error("Email Field is Empty!");
        }
        if(validator.empty(mobile)) {
            return toast.error("Mobile Field is Empty!");
        }
        if(validator.empty(address)) {
            return toast.error("Address Field is Empty!");
        }
        if(validator.empty(password)) {
            return toast.error("Password Field is Empty!");
        }
        if(validator.empty(password2)) {
            return toast.error("Confirm Password Field is Empty!");
        }
        
        if(!validator.email(email)) {
            return toast.error("Invalid Email!");
        }
        if(!validator.mobile(mobile)) {
            return toast.error("Invalid Mobile!");
        }
        if(!validator.password(password)) {
            return toast.error("Password length must be more than 6.")
        }
        if(!validator.match(password, password2)) {
            return toast.error("Password and Confirm Password are not matching!")
        }

        toast.success("Validation Pass!");

    }

    return (
        <div className={styles.SignUp}>
            <div className={styles.title}>Sign Up</div>
            <div className={styles.body}>
                <input type="text" name="name" placeholder="Your Name"
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <input type="text" name="email" placeholder="Email Address"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="number" name="mobile" placeholder="Mobile Number"
                    value={mobile} onChange={(e) => setMobile(e.target.value)}
                />
                <input type="text" name="address" placeholder="Your Address"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                />
                <input type="password" name="password" placeholder="Enter Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <input type="password" name="password2" placeholder="Confirm Password"
                    value={password2} onChange={(e) => setPassword2(e.target.value)}
                />
                <Button title="Sign Up" style={styles.signup} onClick={submitHandle}/>
                <div className={styles.already}>
                    <div className={styles.text}>Already have an account?</div>
                    <Link className={styles.link} to='/sign-in'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
