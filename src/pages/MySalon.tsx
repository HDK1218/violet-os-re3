import React from 'react'
import { mySalonLayout } from '../shared/data/mySalon'

export default function MySalon() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100">
      {/* 3Dルーム画像 */}
      <img
        src={mySalonLayout.background}
        alt="Room"
        className="max-w-full max-h-full object-contain"
      />

      {/* 配置オブジェクト */}
      {mySalonLayout.objects.map((obj) => (
        <div
          key={obj.id}
          className="absolute text-xs bg-white/80 px-1 rounded"
          style={{ left: `${obj.position[0] * 80}px`, top: `${obj.position[1] * 80}px` }}
        >
          {obj.name}
        </div>
      ))}

      {/* Violet OS ロゴ */}
      <img src="/assets/logo.png" alt="Violet OS" className="absolute top-4 right-4 w-24" />

      {/* ユーザー情報 */}
      <div className="absolute top-4 left-4 flex items-center space-x-4 bg-white/80 p-2 rounded">
        <img src="/assets/avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
        <div className="text-xs leading-tight">
          <div className="font-bold">{mySalonLayout.owner.name} Lv.{mySalonLayout.owner.level}</div>
          <div className="space-x-2">
            <span>💰{mySalonLayout.owner.vitcoin}</span>
            <span>💎{mySalonLayout.owner.vDiamond}</span>
            <span>🧠{mySalonLayout.owner.skillPoint}</span>
            <span>⭐{mySalonLayout.owner.famePoint}</span>
          </div>
        </div>
      </div>

      {/* 右下アイコン */}
      <div className="absolute bottom-4 right-4 space-y-4 flex flex-col items-end">
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🧑‍🦰</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📩</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📦</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🌐</button>
      </div>
    </div>
  )
}

