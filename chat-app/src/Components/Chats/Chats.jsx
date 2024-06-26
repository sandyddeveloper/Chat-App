import './chats.css'
import {avatar, info,phone,videoIcon, emoji, mic, camera,img} from '../../utils/asset'

const Chats = () => {
  return (
    <div className='App__chats'>
      <div className="top">
        <div className="user">
          <img src={avatar} alt="" />
          <div className="texts">
            <span>Santhosh</span>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={videoIcon} alt="" />
          <img src={info} alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
          </div>
          <input type="text" placeholder='Type a message...'/>
          <div className="emoji">
            <img src={emoji} alt="" />
          </div>
          <button className='sendButton'>Send</button> 
        </div>
      </div>
    
  );
}

export default Chats