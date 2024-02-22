import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
const Login = () => {
  return (
    <div>
        <Link to={<App/>}>masuk oi</Link>
        <a href={<App/>}></a>
        <h1>kenek pora</h1>
    </div>
  )
}
export default Login;