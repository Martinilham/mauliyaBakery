import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {

  const [nama,setnama] = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate();

  
const ambiluser = () => {
    axios
    .get('https://mauliya-bakeryserve.vercel.app/daftar')
    .then((res) => {
        console.log(res.data)
    })
}

useEffect(() => {
  ambiluser()
}, [])



const handleLogin =  async (event) => {
  event.preventDefault();
  try {
      const response = await axios
      .post('https://mauliya-bakeryserve.vercel.app/login', { nama, password })
      const token = response.data.token
      alert('Login successful')
      setnama('')
      setpassword('')
      ambiluser();
      if(response.data.isAdmin){
        navigate("/dashboard")
      }
      window.location.reload();
      localStorage.setItem('token', token)
  } catch (error) {
      console.log('Login Error', error)
  }
}

  return (
    <div className='w-full h-screen flex'>
         <div className='w-[50%] h-[100%] bg-gray-600 text-white flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleLogin}
            >
                 {/*Username Input */}
                 <label>Username</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Username'
                value={nama}
                onChange={(e) => setnama(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                 <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setpassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Login</button>
            </form>
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <h2 className='text-3xl text-white '>Login</h2>
        </div>
    </div>
  )
}


export default Login;