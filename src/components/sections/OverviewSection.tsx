import React from "react";


export default function OverviewSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      {/* 左側のコンテンツ */}
      <div className="md:w-1/2 p-5">
        <h1 className="text-4xl font-bold mb-4">タイトル</h1>
        <p className="text-lg text-gray-600">
          ここにアプリケーションの機能や説明文を記述します。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* 右側の画像 */}
      <div className="md:w-1/2">
        <img
          src="https://via.placeholder.com/400x400" // 画像のURLを指定してください
          alt="アプリケーションの画像"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}