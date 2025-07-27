import React from 'react'
import { mySalonLayout } from '@/shared/data/mySalon'

export default function MySalon() {
  return (
    <div className="relative w-screen h-screen bg-[url('/assets/background-salon.jpg')] bg-cover bg-center">
      {/* サイドバー */}
      <div className="absolute top-0 left-0 h-full w-24 bg-white/70 flex flex-col items-center py-4 space-y-4">
        <img src="/assets/avatar.png" alt="avatar" className="w-16 h-16 rounded-full" />
        <nav className="flex flex-col items-center space-y-2 text-xs text-gray-700">
          <div className="w-16 h-6 bg-gray-200 rounded" />
          <div className="w-16 h-6 bg-gray-200 rounded" />
          <div className="w-16 h-6 bg-gray-200 rounded" />
        </nav>
      </div>

      {/* 右上 通貨表示とロゴ */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="text-xs bg-black/40 text-white px-2 py-1 rounded">
          💰 {mySalonLayout.owner.vitcoin}
        </div>
        <img src="/assets/logo.png" alt="logo" className="w-20" />
      </div>

      {/* 右中央 丸ボタン */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-4">
        <button className="w-12 h-12 bg-white/70 rounded-full shadow flex items-center justify-center">Q</button>
        <button className="w-12 h-12 bg-white/70 rounded-full shadow flex items-center justify-center">I</button>
        <button className="w-12 h-12 bg-white/70 rounded-full shadow flex items-center justify-center">S</button>
        <button className="w-12 h-12 bg-white/70 rounded-full shadow flex items-center justify-center">M</button>
      </div>

      {/* チャット通知バー */}
      <div className="absolute bottom-24 right-4 bg-white/80 px-4 py-2 rounded shadow text-sm">
        〇〇さんからメッセージが届きました
      </div>

      {/* モチベーションゲージ */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10/12 max-w-md">
        <div className="text-center text-xs text-white mb-1">LV.{mySalonLayout.owner.level} モチベーション</div>
        <div className="w-full h-3 bg-gray-200 rounded">
          <div className="h-full bg-purple-500 rounded" style={{ width: '70%' }} />
        </div>
      </div>
    </div>
  )
}

