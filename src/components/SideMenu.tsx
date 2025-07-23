import React from 'react'

export default function SideMenu() {
  return (
    <div className="absolute top-1/4 right-4 space-y-4">
      <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
        🧑
      </button>
      <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
        ✉️
      </button>
      <button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
        📦
      </button>
    </div>
  )
}
