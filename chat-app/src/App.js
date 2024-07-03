
import { useEffect } from 'react';
import { ChatList, Chats, Details, Login, Notification} from './utils/components'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/Firebase';
import { useUserStore } from './lib/AppStore';

export default function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) =>{
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className='App_container'>
      {/* <ChatList />
            <Chats />
            <Details /> */}

       {
        currentUser ? (
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
