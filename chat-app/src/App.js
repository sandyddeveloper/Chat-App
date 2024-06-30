import React from 'react'
import { ChatList, Chats, Details, Login, Notification} from './utils/components'

export default function App() {

  // const user = true;

  return (
    <div className='App_container'>
      <ChatList />
            <Chats />
            <Details />

      {/* {
        user ? (
          <>
            <ChatList />
            <Chats />
            <Details />
          </>) : (<Login />
        )
      } */}
      <Notification/>
    </div>
  )
}
