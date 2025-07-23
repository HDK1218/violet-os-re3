import logo from '../assets/logo.png'
import bg from '../assets/background.jpg'

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-md shadow-md max-w-md w-full">
        <img src={logo} alt="Logo" className="mx-auto mb-6 w-32" />
        <form className="space-y-4">
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="パスワード"
            className="w-full px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            ログイン
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            パスワードを忘れましたか?
          </a>
        </div>
      </div>
    </div>
  )
}
