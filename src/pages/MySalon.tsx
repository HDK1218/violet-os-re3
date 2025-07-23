import React from 'react'

export default function MySalon() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* トップバー */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="text-sm">
            <div>通貨: 1000</div>
            <div>ポイント: 500</div>
          </div>
        </div>
        <img src="/logo.png" alt="Violet OS" className="w-24" />
      </div>

      {/* 右側縦並びボタン */}
      <div className="absolute top-1/4 right-4 space-y-4">
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🧑</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">✉️</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📦</button>
      </div>

      {/* 中央画像 */}
      <div className="flex items-center justify-center h-screen">
        <img src="/room.png" alt="Room" className="max-h-full object-contain" />
      </div>

      {/* チャットバー */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
        <input
          type="text"
          placeholder="メッセージを入力..."
          className="w-full border rounded p-2"
        />
      </div>
    </div>
  )
}
