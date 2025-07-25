export const mySalonLayout = {
  background: "/assets/room-basic.png",
  owner: {
    name: "ほだか",
    level: 12,
    vitcoin: 1800,
    vDiamond: 45,
    skillPoint: 320,
    famePoint: 150,
  },
  objects: [
    { id: "plant", name: "観葉植物", position: [1, 1] },
    { id: "sofa", name: "ソファ", position: [2, 1] },
    { id: "chair", name: "椅子", position: [1, 2] },
  ],
} as const
