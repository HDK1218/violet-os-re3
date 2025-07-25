import React from "react"

type Props = {
  name: string
  position: [number, number]
  selected?: boolean
  onClick?: () => void
}

export const SalonObject = ({ name, position, selected, onClick }: Props) => {
  const [x, y] = position
  return (
    <div
      onClick={onClick}
      className={`absolute text-xs bg-white px-2 py-1 rounded shadow cursor-pointer ${
        selected ? 'ring-2 ring-blue-500' : ''
      }`}
      style={{ left: `${x * 100}px`, top: `${y * 100}px` }}
    >
      {name}
    </div>
  )
}
