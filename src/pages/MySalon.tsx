import React from 'react'

export default function MySalon() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100">
      {/* 3Dルーム画像 */}
      <img
        src="/assets/room-basic.png"
        alt="Room"
        className="max-w-full max-h-full object-contain"
      />

      {/* Violet OS ロゴ */}
      <img src="/logo.png" alt="Violet OS" className="absolute top-4 right-4 w-24" />

      {/* ユーザー情報 */}
      <div className="absolute top-4 left-4 flex items-center space-x-4 bg-white/80 p-2 rounded">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="text-xs leading-tight">
          <div>Vitcoin: 0</div>
          <div>Vダイヤ: 0</div>
          <div>スキルP: 0</div>
          <div>名声P: 0</div>
        </div>
      </div>

      {/* 右下アイコン */}
      <div className="absolute bottom-4 right-4 space-y-4 flex flex-col items-end">
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">👤</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">✉️</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📦</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🌐</button>
      </div>
    </div>
  )
}
