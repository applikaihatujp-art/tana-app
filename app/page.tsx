// 新しいデザインのコード例
export default function Home() {
  // くすんだ色のパレット
  const bookColors = [
    "bg-rose-300", // くすんだピンク
    "bg-sky-300", // くすんだ水色
    "bg-amber-300", // くすんだ黄色
    "bg-emerald-400", // くすんだ緑
    "bg-violet-400", // くすんだ紫
  ];

  return (
    // 背景をより温かみのある色に
    <main className="flex min-h-screen items-center justify-center bg-stone-50 font-sans">
      {/* 棚全体 - 質感のある背景とリッチな枠線 */}
      <div
        className="w-96 h-[30rem] bg-stone-100 p-6 flex flex-col gap-6 rounded-3xl shadow-xl"
        style={{
          border: "12px solid #5e412f", // より濃く、リッチな木目調の茶色
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* 棚板 1段目 */}
        <div className="flex items-end gap-2 h-36 relative border-b-4 border-[#5e412f]/50 pb-2">
          {/* 本 - 少し高さを変え、角を丸く、テクスチャを追加 */}
          <div
            className={`w-14 h-24 ${bookColors[0]} rounded-md shadow-inner transform -rotate-1`}
          ></div>
          <div
            className={`w-14 h-28 ${bookColors[1]} rounded-md shadow-inner transform rotate-1`}
          ></div>
          <div
            className={`w-14 h-25 ${bookColors[2]} rounded-md shadow-inner`}
          ></div>

          {/* 棚のラベル（小さなアクセント） */}
          <span className="absolute bottom-[-22px] left-1 text-xs text-[#5e412f]/70 font-medium tracking-wider">
            ESSAYS
          </span>
        </div>

        {/* 棚板 2段目 */}
        <div className="flex items-end gap-2 h-36 relative border-b-4 border-[#5e412f]/50 pb-2">
          <div
            className={`w-14 h-32 ${bookColors[3]} rounded-md shadow-inner transform rotate-2`}
          ></div>
          <div
            className={`w-14 h-30 ${bookColors[4]} rounded-md shadow-inner`}
          ></div>
          <span className="absolute bottom-[-22px] left-1 text-xs text-[#5e412f]/70 font-medium tracking-wider">
            FICTION
          </span>
        </div>

        {/* 棚板 3段目 (空きスペース) */}
        <div className="h-36 relative flex items-center justify-center">
          <div className="text-xl text-stone-400 font-light">New Arrivals</div>
        </div>
      </div>
    </main>
  );
}
