import React from 'react'
import { ChatList,Chats,Details } from './utils/components'

export default function App() {
  return (
    <div className='App_container'>
      <ChatList/>
      <Chats/>
      <Details/>
    </div>
  )
}
