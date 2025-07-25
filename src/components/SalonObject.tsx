import React from "react"

type Props = {
  name: string
  position: [number, number]
}

export const SalonObject = ({ name, position }: Props) => {
  const [x, y] = position
  return (
    <div
      className="absolute text-xs bg-white px-2 py-1 rounded shadow"
      style={{ left: `${x * 100}px`, top: `${y * 100}px` }}
    >
      {name}
    </div>
  )
}
