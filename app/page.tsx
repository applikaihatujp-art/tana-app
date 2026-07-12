export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* 棚全体 */}
      <div className="w-80 h-96 bg-white border-4 border-amber-800 rounded-lg shadow-2xl p-4 flex flex-col gap-4">
        {/* 棚板 1段目 */}
        <div className="flex gap-2">
          <div className="w-12 h-20 bg-red-400 rounded-sm"></div>
          <div className="w-12 h-20 bg-blue-400 rounded-sm"></div>
          <div className="w-12 h-20 bg-yellow-400 rounded-sm"></div>
        </div>
        {/* 棚板 */}
        <div className="w-full h-2 bg-amber-800 rounded-full"></div>

        {/* 棚板 2段目 */}
        <div className="w-full h-2 bg-amber-800 rounded-full"></div>
        {/* 2段目：もっと本が並んでる */}
        <div className="flex gap-2">
          <div className="w-12 h-20 bg-green-400 rounded-sm"></div>
          <div className="w-12 h-20 bg-purple-400 rounded-sm"></div>
        </div>

        {/* 棚板 3段目 */}
        <div className="w-full h-2 bg-amber-800 rounded-full"></div>
      </div>
    </main>
  );
}
