import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions'
import { getCurrentUser, loggedIn, getCredentials } from "../../reducers/masterSelector";
import { fetchCurrentUser } from '../../actions/user_actions'

const Header = ({ loggedIn, currentUser, logout, fetchCurrentUser }) => {
    if (fetchCurrentUser) {
        useEffect(() => {
            fetchCurrentUser()
        }, []);
    }

    if (loggedIn) {
        return (
            <div>
                <h1>Welcome, {currentUser.username}!</h1>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}

const msp = state => {
    return {
        loggedIn: loggedIn(state),
        currentUser: getCurrentUser(state),
        credentials: getCredentials(state),
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchCurrentUser: credentials => () => dispatch(fetchCurrentUser(credentials))
    }
}

const mp = ({ loggedIn, currentUser, credentials }, { logout, fetchCurrentUser }, ownProps) => {

    return {
        fetchCurrentUser: credentials ? fetchCurrentUser(credentials) : null,
        loggedIn,
        currentUser,
        logout,
        ...ownProps,
    }
}

export default connect(msp, mdp, mp)(Header)