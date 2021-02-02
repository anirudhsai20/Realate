import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FiEye, FiEyeOff} from 'react-icons/fi';
import {toast} from 'react-toastify';
import styles from './SignIn.module.css';
import fb from './fb.png';
import gog from './gog.png';
import * as validator from '../../../utils/validator';
import Button from '../../Button/Button';

function SignIn() {

    const [passwordHide, setPasswordHide] = useState(false);

    function tooglePassword() {
        setPasswordHide(password => !password);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandle() {

        if(validator.empty(email)) {
            return toast.error("Email Field is Empty!");
        }
        if(validator.empty(password)) {
            return toast.error("Password Field is Empty!");
        }

        if(!validator.email(email)) {
            return toast.error("Invalid Email!");
        }

        toast.success("Validation Pass!");
    }

    return (
        <div className={styles.SignIn}>
            <div className={styles.title}>Sign In</div>
            <div className={styles.body}>
                <input type="text" className={styles.email} name="email" placeholder="Email Address"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.password_container}>
                    <input type={`${passwordHide ? 'text': 'password'}`} className={styles.password} name="password" placeholder="Enter Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.eye} onClick={tooglePassword}>
                        {
                            passwordHide ? <FiEyeOff /> : <FiEye/>
                        }
                    </div>
                </div>
                <div className={styles.forgot}>Forgot your password?</div>
                <Button title="Log In" onClick={submitHandle} style={styles.login}/>
                <div className={styles.or}>Or login using</div>
                <div className={styles.fb_gog}>
                    <div className={styles.fb}>
                        <img src={fb} alt="FaceBook"/>
                        <div>Facebook</div>
                    </div>
                    <div className={styles.gog}>
                        <img src={gog} alt="FaceBook"/>
                        <div>Google</div>
                    </div>
                </div>
                <div className={styles.already}>
                    <div className={styles.text}>New to Realate?</div>
                    <Link className={styles.link} to='/sign-up'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
