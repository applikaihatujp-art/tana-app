// 新しいデザインのコード例
export default function Home() {
  // くすんだ色のパレット
  const bookColors = [
    "bg-sky-200", // くすんだ水色
    "bg-rose-200", // くすんだピンク
    "bg-emerald-200", // くすんだ緑
    "bg-orange-200", // くすんだオレンジ
    "bg-violet-200", // くすんだ紫
  ];

  return (
    // 背景をより温かみのある色に
    <main className="flex min-h-screen items-center justify-center bg-stone-50 font-sans">
      {/* 棚全体 - 質感のある背景とリッチな枠線 */}

      {/* 3. メインエリア（右側） */}
      <div className="flex-1 p-8"></div>

      <div
        className="w-240 h-[50rem] bg-stone-100 p-6 flex flex-col gap-6 rounded-3xl shadow-xl -ml-8 -mt-10"
        style={{
          border: "12px solid #bbf7d0",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* 棚板 1段目 */}
        <div className="relative pb-2 pt-5">
          <span className="absolute -top-3 left-1 text-xl text-[#5e412f]/70 font-medium font-bold tracking-wider">
            簿記アプリ
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* 本 - 少し高さを変え、角を丸く、テクスチャを追加 */}
            <div
              className={`w-52 h-auto ${bookColors[0]} rounded-md shadow-inner p-3 flex flex-col gap-2`}
            >
              <div className="flex gap-2 w-full">
                <img
                  src="/screenshots/bokiapp-001.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
                <img
                  src="/screenshots/bokiapp-002.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
                <img
                  src="/screenshots/bokiapp-003.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
              </div>

              {/* 下段：文字とボタンを配置するエリア */}

              {/* 1. 爆速！複式仕訳マスター */}
              <h3 className="font-bold text-sm text-[#5e412f]">
                爆速！複式仕訳マスター
              </h3>

              {/* 2. 簡単な説明 */}
              <p className="text-[12px] text-[#5e412f]/80 mt-1 line-clamp-3">
                正しい勘定科目を選んで、簿記3級の仕訳スキルを爆速でマスターしよう！
              </p>

              {/* 3. リンク先（一番下に配置） */}
              <a
                href="https://rine-apps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 w-fit bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-600 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all"
              >
                開く
              </a>
            </div>

            <div
              className={`w-52 h-auto ${bookColors[0]} rounded-md shadow-inner p-3 flex flex-col gap-2`}
            >
              <div className="flex gap-2 w-full">
                <img
                  src="/screenshots/bokiapp-001.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
                <img
                  src="/screenshots/bokiapp-002.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
                <img
                  src="/screenshots/bokiapp-003.png"
                  alt="爆速！複式仕訳マスターのプレイ画面"
                  className="w-1/3 h-24 object-cover object-center rounded-md"
                />
              </div>

              {/* 下段：文字とボタンを配置するエリア */}

              {/* 1. 爆速！複式仕訳マスター */}
              <h3 className="font-bold text-sm text-[#5e412f]">
                爆速！複式仕訳マスターV2（仮）
              </h3>

              {/* 2. 簡単な説明 */}
              <p className="text-[12px] text-[#5e412f]/80 mt-1 line-clamp-2">
                Ver2を26年7月末リリース予定
              </p>

              {/* 3. リンク先（一番下に配置） */}
              <a
                href="https://rine-apps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 w-fit bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-600 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all"
              >
                開く
              </a>
            </div>
            <div
              className={`w-52 h-30 ${bookColors[0]} rounded-md shadow-inner p-3 relative`}
            >
              {/* 1. 爆速！複式仕訳マスター */}
              <h3 className="font-bold text-sm text-[#5e412f]">開発中</h3>

              {/* 2. 簡単な説明 */}
              <p className="text-[12px] text-[#5e412f]/80 mt-1 line-clamp-2">
                開発中
              </p>

              {/* 3. リンク先（一番下に配置） */}
              <a
                href="https://rine-apps.com"
                target="_blank"
                className="absolute bottom-2 right-2 text-[12px] underline hover:text-blue-600"
              >
                開く
              </a>
            </div>
            <div
              className={`w-52 h-30 ${bookColors[0]} rounded-md shadow-inner p-3 relative`}
            >
              {/* 1. 爆速！複式仕訳マスター */}
              <h3 className="font-bold text-sm text-[#5e412f]">開発中</h3>

              {/* 2. 簡単な説明 */}
              <p className="text-[12px] text-[#5e412f]/80 mt-1 line-clamp-2">
                開発中
              </p>

              {/* 3. リンク先（一番下に配置） */}
              <a
                href="https://google.com"
                target="_blank"
                className="absolute bottom-2 right-2 text-[10px] underline hover:text-blue-600"
              >
                開く
              </a>
            </div>

            {/* 棚のラベル（小さなアクセント） */}
            <span className="absolute bottom-[-22px] left-1 text-xl text-[#5e412f]/70 font-medium font-bold tracking-wider">
              ゲーム
            </span>
          </div>
        </div>

        {/* 棚板 2段目 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className={`w-52 h-30 ${bookColors[1]} rounded-md shadow-inner p-3 relative`}
          >
            <h3 className="font-bold text-sm text-[#5e412f]">開発中</h3>
            <p className="text-[12px] text-[#5e412f]/80 mt-1 line-clamp-2">
              開発中
            </p>
            <a
              href="https://google.com"
              target="_blank"
              className="absolute bottom-2 right-2 text-[10px] underline hover:text-blue-600"
            >
              開く
            </a>
          </div>
          <div
            className={`w-52 h-30 ${bookColors[1]} rounded-md shadow-inner p-3 relative`}
          >
            <h3 className="font-bold text-sm text-[#5e412f]">開発中</h3>
            <p className="text-[10px] text-[#5e412f]/80 mt-1 line-clamp-2">
              開発中
            </p>
            <a
              href="https://rine-apps.com"
              target="_blank"
              className="absolute bottom-2 right-2 text-[10px] underline hover:text-blue-600"
            >
              開く
            </a>
          </div>
          <div
            className={`w-52 h-30 ${bookColors[1]} rounded-md shadow-inner`}
          ></div>
          <div
            className={`w-52 h-30 ${bookColors[1]} rounded-md shadow-inner`}
          ></div>
        </div>

        {/* 棚板 3段目 (空きスペース) */}
        <div className="flex flex-col -mt-1">
          <h2 className="text-xl font-medium text-[#5e412f]/80 mb-1">パズル</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-0">
            <div
              className={`w-52 h-30 ${bookColors[2]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[2]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[2]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[2]} rounded-md shadow-inner`}
            ></div>
          </div>
        </div>

        {/* 棚板 4段目 (空きスペース) */}
        <div className="flex flex-col -mt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className={`w-52 h-30 ${bookColors[3]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[3]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[3]} rounded-md shadow-inner`}
            ></div>
            <div
              className={`w-52 h-30 ${bookColors[3]} rounded-md shadow-inner`}
            ></div>
          </div>
        </div>

        {/* 棚板 3段目 (空きスペース) */}
      </div>
    </main>
  );
}
