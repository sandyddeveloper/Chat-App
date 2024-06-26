import './userlist.css'
import { search, plus, minus, avatar } from '../../../utils/asset'
import { useState } from 'react'

const UserList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='userList'>
      <div className="search">
        <div className="searchbar">
          <img src={search} alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? minus : plus} alt="" className='plus' onClick={() => setAddMode((prev) => !prev)}/>
      </div>
      <div className="items">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>santhosh</span>
          <p>Hey There!</p>
        </div>
      </div>
      <div className="items">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>santhosh</span>
          <p>Hey There!</p>
        </div>
      </div>
      <div className="items">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>santhosh</span>
          <p>Hey There!</p>
        </div>
      </div> <div className="items">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>santhosh</span>
          <p>Hey There!</p>
        </div>
      </div>
    </div>
  )
}

export default UserList