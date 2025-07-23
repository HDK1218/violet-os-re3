import logo from '../assets/logo.png'

export default function Dashboard() {
  const missions = ['ミッション1', 'ミッション2', 'ミッション3']
  const items = [
    { name: 'アイテム1', image: logo },
    { name: 'アイテム2', image: logo },
    { name: 'アイテム3', image: logo },
  ]
  const message = '今日は良い天気ですね。頑張りましょう！'

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">ようこそ、ほだかさん</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">🪄 今週のミッション</h2>
          <ul className="list-disc pl-5 space-y-1">
            {missions.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">🎒 最近獲得したアイテム</h2>
          <div className="flex space-x-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain mb-1"
                />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">💬 あいちゃんからのメッセージ</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
