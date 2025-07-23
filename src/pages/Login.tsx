import React from 'react';

const Login: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      <div className="flex justify-center mt-8">
        <img src="/logo.png" alt="logo" className="h-16" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white bg-opacity-70 rounded-lg shadow backdrop-blur-md p-8 w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center text-purple-600">
            Violet-OSへようこそ
          </h1>
          <div className="flex justify-center space-x-4 text-purple-600">
            <span className="font-semibold border-b-2 border-purple-600">ログイン</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">新規登録</span>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="ユーザー名"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="パスワード"
              className="w-full p-2 border rounded"
            />
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="form-checkbox" />
              <span>ログイン情報を記憶する</span>
            </label>
            <button
              className="w-full py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
