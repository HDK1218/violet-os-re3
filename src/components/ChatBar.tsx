import React from 'react'

export default function ChatBar() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
      <div className="text-gray-500 text-sm mb-1">システム：チャットメッセージがあります</div>
      <input
        type="text"
        placeholder="メッセージを入力..."
        className="w-full border rounded p-2"
      />
    </div>
  )
}
