import React from 'react';

export default ({ user: { username, email } }) => {
    return(
        <li>
            {`${username}  -  ${email}`}
        </li>
    )
}