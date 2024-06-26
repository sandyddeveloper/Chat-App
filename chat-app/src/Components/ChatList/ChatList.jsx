import UserInfo from './UserInfo/UserInfo';
import UserList from './UserList/UserList';
import './chatlist.css'

const ChatList = () => {
  return (
    <div className='App__chatList'>
      <UserInfo/>
      <UserList/>
    </div>
  )
}

export default ChatList