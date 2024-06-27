import './chats.css'
import {avatar, info,phone,videoIcon, emoji, mic, camera,img} from '../../utils/asset'
import EmojiPicker from "emoji-picker-react";
import { useState } from 'react';

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] =useState ("");
  const handleEmoji = e =>{
    setText(prev => prev+e.emoji);
    setOpen(false)

  };
  
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
      <div className="center">
        <div className="message">
          <img src={avatar} alt="" />
          <div className="texts">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, commodi voluptatem tempore magnam similique vel atque, earum veniam numquam omnis magni, dignissimos et aliquid ullam eius veritatis? Quisquam, unde.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, commodi voluptatem tempore magnam similique vel atque, earum veniam numquam omnis magni, dignissimos et aliquid ullam eius veritatis? Quisquam, unde.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={avatar} alt="" />
          <div className="texts">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, commodi voluptatem tempore magnam similique vel atque, earum veniam numquam omnis magni, dignissimos et aliquid ullam eius veritatis? Quisquam, unde.</p>
          
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://wallpapers.com/images/hd/marvel-desktop-endgame-ks94esjlehte9jr2.jpg" alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, commodi voluptatem tempore magnam similique vel atque, earum veniam numquam omnis magni, dignissimos et aliquid ullam eius veritatis? Quisquam, unde.</p>
          <span>1 min ago</span>
          </div>
        </div>
      </div>
      
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
          </div>
          <input type="text" placeholder='Type a message...' value={text}onChange={(e)=> setText(e.target.value)}/>

            {/* (e) => setText(e.target.value): This is an arrow function that takes the event object (e) as a parameter.
            
            e.target.value: This gets the current value of the input field.
            
            setText(e.target.value): This updates the text state with the new value from the input field. */}

          <div className="emoji">
            <img src={emoji} alt="" onClick={() =>setOpen(prev => !prev)}/>
              <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            
          </div>
          </div>
          <button className='sendButton'>Send</button> 
        </div>
      </div>
    
  );
}

export default Chats