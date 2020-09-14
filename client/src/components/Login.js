import React from "react";
import axios from 'axios';

const Login = (props) => {
  const user = {username: 'Lambda School', password: 'i<3Lambd4' }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const subForm = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', user)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
    })
    .catch(e => {
      console.log(e);
    });
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={subForm}>
        <p>{user.username}</p>
        <p>{user.password}</p>
        <button type='submit'>Login!</button>
      </form>
    </>
  );
};

export default Login;
