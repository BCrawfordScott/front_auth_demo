import React, { useState } from 'react';
import { connect } from "react-redux";
import { getCredentials } from "../../reducers/masterSelector";
import { signIn, signUp } from '../../actions/user_actions';

const AuthForm = ({ signIn, signUp }) => {
    const [type, setType] = useState('Sign Up')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const oppositeType = type === 'Sign Up' ? 'Sign In' : 'Sign Up';

    const updateValue = cb => e => cb(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const submit = type === 'Sign In' ? signIn : signUp;

        submit({
            username,
            email,
            password
        })
    }

    const handleSwitch = e => {
        e.preventDefault();
        setType(oppositeType);
    }

    return (
        <>
            <h1>{`${type}`}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username: 
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={updateValue(setUsername)} 
                    />
                </label>
                <label htmlFor="email"> Email:
                    <input 
                        type="text" 
                        id="email" 
                        value={email}
                        onChange={updateValue(setEmail)} 
                    />
                </label>
                <label htmlFor="Password">Password:
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={updateValue(setPassword)} 
                    />
                </label>
                <input type="submit" value={type} />
                or
                <button onClick={handleSwitch}>
                    {oppositeType}
                </button>
            </form>
        </>
    )
}

const msp = state => {
    return {
        credentials: getCredentials(state),
    }
}

const mdp = (dispatch, ownProps) => {
    // debugger
    return {
        signIn: credentials => data => dispatch(signIn(data, credentials)),
        signUp: credentials => data => dispatch(signUp(data, credentials)),
    }
}

const mp = ({ type, credentials }, { signIn, signUp }, ownProps) => {
    return {
        type,
        signIn: signIn(credentials),
        signUp: signUp(credentials),
        ...ownProps,
    }
}

export default connect(msp, mdp, mp)(AuthForm);