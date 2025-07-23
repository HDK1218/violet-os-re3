import React from 'react'
import HeaderBar from '../components/HeaderBar'
import SideMenu from '../components/SideMenu'
import ChatBar from '../components/ChatBar'
import RoomView from '../components/RoomView'

export default function MySalon() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* トップバー */}
      <HeaderBar />

      {/* 右側縦並びボタン */}
      <SideMenu />

      {/* 中央画像 */}
      <RoomView />

      {/* チャットバー */}
      <ChatBar />
    </div>
  )
}
