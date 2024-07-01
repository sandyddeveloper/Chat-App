import { useState } from 'react';
import './login.css';
import { avatar } from '../../utils/asset';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { profile } from '../../lib/ProfileUpload';

const Login = () => {
  // I just create the object to declare 
  const [avatars, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = e => {
    // Here I have declared that if the files [0] "1st index of pic" where selected na thn it should in webpage adhuku dha idha url ah generate oandra mathiri select panni iruken..

    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };


  //refer formDataobj notes for explaintion for thi handleRegister functions
  const handleRegister = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const { username, email, NewPassword } = formDataObj;
    console.log(username);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, NewPassword);

      const imgURL = await profile(avatars.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatars : imgURL,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "usercharts", res.user.uid), {
        charts: []
        
      });
       toast.success("Account Created Succesfully");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };



  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back, Cheft</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter Your Email' name='email' autoComplete='email' />
          <input type="password" placeholder="Password" name="password" autoComplete="current-password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create The Account, Cheft</h2>
        <form onSubmit={handleRegister}>
          {/* I'm just declaring the file to upload, but to hide the input element, I used a label and set input's display to "none". */}
          <label htmlFor="file">
            <img src={avatars.url || avatar} alt="" />
            Upload an image (Click)
          </label>
          <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" placeholder='username' name='username' />
          <input type="email" placeholder='Enter Your Email' name='email' autoComplete='new-email' />
          <input type="password" placeholder="Password" name="NewPassword" autoComplete="new-password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
