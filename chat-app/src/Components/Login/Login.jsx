import { useState } from 'react'
import './login.css'
import {avatar} from '../../utils/asset';
// import { toast } from 'react-toastify';

const Login = () => {
 // i m juz create the obj to declare 
  const [avatars, setAvatar] = useState({
    file : null,
    url : ""
})

const handleAvatar = e =>
  // here i have declared that if the files [0] "1st index of pic" where selected na thn it should in webpage adhuku dha idha url ah generate oandra mathiri select panni iruken..
  {
    if(e.target.files[0]){

      setAvatar({
        file:e.target.files[0],
        url : URL.createObjectURL(e.target.files[0])
      })
    }

  }
const handleSubmit = e=>
{
  e.preventDefault()
  
}

  return (
   
    <div className="login">
      <div className="item">
        <h2>Welcome Back, Cheft</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter Your Email'  name='email' autoComplete='email'/>
          <input type="password" placeholder="Password" name="password" autoComplete="current-password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create The Account, Cheft</h2>
        <form >
          {/* im juzt declaring the file to upload but ennaku adha input vrathukuda nu i juz used lable and adha input ah hide pannita by using display:"none " nu   */}
          <label htmlFor="file">
          <img src={avatars.url || avatar} alt="" />
          Upload an image (Click)</label>
          <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
          <input type="text" placeholder='username' name='username' />
          <input type="email" placeholder='Enter Your Email' name='email' autoComplete='new-email' />
          <input type="password" placeholder="Password" name="NewPassword" autoComplete="new-password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
    
    
  )
}

export default Login