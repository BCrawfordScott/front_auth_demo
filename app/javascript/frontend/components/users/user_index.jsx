import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getUsers, loggedIn, getCredentials } from '../../reducers/masterSelector'
import { fetchUsers } from '../../actions/user_actions'
import AuthForm from '../auth/auth_form';
import UserIndexItem from './user_index_item';

const UserIndex = ({ users, fetchUsers, loggedIn }) => {

    useEffect(() => {
       fetchUsers() 
    }, [])

    const displayUsers = () => {
        const userItems = users.map(user => <UserIndexItem key={user.id} user={user} />);

        return(
            <ul>
                {userItems}
            </ul>
        )
    };

    if (!loggedIn) {
        return <AuthForm />
    } else {
        return (
            <>
                <h2>Here are the users:</h2>
                {displayUsers()}
            </>
        )
    }
}

const msp = state => {
    return {
        users: getUsers(state),
        loggedIn: loggedIn(state),
        credentials: getCredentials(state),
    }
}

const mdp = dispatch => {
    return {
        fetchUsers: credentials => () => dispatch(fetchUsers(credentials)),
    }
}

const mp = ({users, loggedIn, credentials}, {fetchUsers}, ownProps) => {
    return {
        users,
        loggedIn,
        fetchUsers: fetchUsers(credentials),
        ...ownProps,
    }
}

export default connect(msp, mdp, mp)(UserIndex);    