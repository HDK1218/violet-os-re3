import React, { useEffect, useRef } from "react"

type Props = {
  name: string
  position: [number, number]
  selected?: boolean
  onClick?: () => void
  onMove?: (pos: [number, number]) => void
}

export const SalonObject = ({ name, position, selected, onClick, onMove }: Props) => {
  const [x, y] = position
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging.current = true
    const rect = ref.current!.getBoundingClientRect()
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    e.stopPropagation()
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return
      if (!ref.current) return
      const parentRect = ref.current.parentElement!.getBoundingClientRect()
      const newX = (e.clientX - parentRect.left - offset.current.x) / 100
      const newY = (e.clientY - parentRect.top - offset.current.y) / 100
      onMove?.([parseFloat(newX.toFixed(2)), parseFloat(newY.toFixed(2))])
    }
    const handleMouseUp = () => {
      dragging.current = false
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [onMove])
  return (
    <div
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className={`absolute text-xs bg-white px-2 py-1 rounded shadow cursor-pointer ${
        selected ? 'ring-2 ring-blue-500' : ''
      }`}
      ref={ref}
      style={{ left: `${x * 100}px`, top: `${y * 100}px` }}
    >
      {name}
    </div>
  )
}
