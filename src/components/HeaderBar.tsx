import React from 'react'

export default function HeaderBar() {
  return (
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
  )
}
