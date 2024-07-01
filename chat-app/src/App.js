
import { useEffect } from 'react';
import { ChatList, Chats, Details, Login, Notification} from './utils/components'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/Firebase';

export default function App() {

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) =>{
      console.log(user);
    })
    return (unSub)
    
  },[]);

  const user = false;

  return (
    <div className='App_container'>
      {/* <ChatList />
            <Chats />
            <Details /> */}

       {
        user ? (
          <>
            <ChatList />
            <Chats />
            <Details />
          </>) : (<Login />
        )
      } 
      <Notification/>
    </div>
  )
}
