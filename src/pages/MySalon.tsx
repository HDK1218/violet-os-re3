import React, { useEffect, useState } from 'react'
import { SalonObject } from '@/components/SalonObject'
import { mySalonLayout } from '@/shared/data/mySalon'

const furnitureList = [
  { id: 'plant', name: '観葉植物' },
  { id: 'sofa', name: 'ソファ' },
  { id: 'chair', name: '椅子' },
] as const

type PlacedObject = {
  uid: string
  id: string
  name: string
  position: [number, number]
}

export default function MySalon() {
  const [objects, setObjects] = useState<PlacedObject[]>(() => {
    const saved = localStorage.getItem('mySalonObjects')
    return saved ? (JSON.parse(saved) as PlacedObject[]) : mySalonLayout.objects.map((o) => ({ ...o, uid: o.id }))
  })
  const [selectedUid, setSelectedUid] = useState<string | null>(null)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    localStorage.setItem('mySalonObjects', JSON.stringify(objects))
  }, [objects])

  const handleAddFurniture = (item: { id: string; name: string }) => {
    const newObj: PlacedObject = { uid: `${item.id}-${Date.now()}`, id: item.id, name: item.name, position: [1, 1] }
    setObjects((prev) => [...prev, newObj])
    setShowList(false)
  }

  const handleRemoveSelected = () => {
    if (!selectedUid) return
    setObjects((prev) => prev.filter((o) => o.uid !== selectedUid))
    setSelectedUid(null)
  }

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100">
      {/* 3Dルーム画像とオブジェクト配置エリア */}
      <div className="relative">
        <img src={mySalonLayout.background} alt="Room" className="max-w-full max-h-full object-contain" />

        {/* 配置オブジェクト */}
        {objects.map((obj) => (
          <SalonObject
            key={obj.uid}
            name={obj.name}
            position={obj.position}
            selected={selectedUid === obj.uid}
            onClick={() => setSelectedUid(obj.uid)}
          />
        ))}
      </div>

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

      {/* 家具選択ポップアップ */}
      {showList && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" onClick={() => setShowList(false)}>
          <div className="bg-white p-4 rounded space-y-2" onClick={(e) => e.stopPropagation()}>
            {furnitureList.map((f) => (
              <button
                key={f.id}
                onClick={() => handleAddFurniture(f)}
                className="block w-32 text-left px-2 py-1 hover:bg-gray-100"
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 右下アイコン */}
      <div className="absolute bottom-4 right-4 space-y-4 flex flex-col items-end">
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🧑‍🦰</button>
        <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📩</button>
        <button onClick={() => setShowList(true)} className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">📦</button>
        {selectedUid && (
          <button onClick={handleRemoveSelected} className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">🗑️</button>
        )}
      </div>
    </div>
  )
}

