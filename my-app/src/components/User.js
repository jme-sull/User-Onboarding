import React from 'react'


export default function User (props) {

   const { firstName, lastName, email } = props 

   return (
    <div>
        <h2>{firstName} {lastName}</h2>
        <p>Email: {email}</p>
    </div>
   )
}
