// 1 txt failshi iyo

import React from 'react'
// user ეწერა უნდა იყოს users
import { users } from './data2'


function UserList(props) {
  return (
    <div>
        <h2>მომხმარებელთა სია:</h2>
        <ul>
            {props.users.map(user =>{
                return(
                <li key = {user.id}>
                    <p>სახელი {user.name}</p>
                    <p>პროფესია {user.proffesion}</p>

                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default UserList