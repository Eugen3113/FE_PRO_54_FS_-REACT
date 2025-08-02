import React from "react";
import "./styles.css";

export default function User({ firstName, lastName, age, username, email }) {
  return (
    <div className="container">
      <div className="user_card">
        <p className="user_name">
          Name: {firstName} {lastName} properties
          {age >= 30 ? (
            <p className="user_age">Age: {age}</p>
          ) : (
            <p className="user_age warning">Age is below 30</p>
          )}
          <p className="user_user_name">Nickname: {username}</p>
          <p className="user_email">
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          
        </p>
      </div>
    </div>
  );
}


// Michail  31.07.2025

// import React from 'react'
// import '../components/User.css'



// export default function User({ firstname, lastname, age, username, email }) {
//   return (
//     <div className='container'>
//  <div className="user-card">
//       <p className="user-name">Name: {firstname} {lastname}</p>

//       {
//         age >= 30
//           ? <p className="user-age">Age: {age}</p>
//           : <p className="user-age warning">Age is below 30</p>
//       }

//       <p className="user-username">Username: {username}</p>

//       <p className="user-email">
//         Email: <a href={`mailto:${email}`}>{email}</a>
//       </p>
//     </div>
//     </div>
   
//   )
// }




// 1. Если возраст пользователя больше или равен 30,
//  то отображать параграф с возрастом. А если меньше,
//  то отображать параграф с текстом 'Age is below 30'

// 2. Каждому пользователю добавить параграф с Username.
//  При использовании компонента User передавать через пропсы
//  значение для параграфа Username

// 3. Каждому пользователю добавить кликабельную почту

//firstname,
//  lastname,
//  age,
//  username,
//  email

