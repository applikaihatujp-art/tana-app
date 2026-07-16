"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Calculator, Gamepad2, Puzzle } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex h-16 items-center gap-2 px-6 border-b">
        <span className="text-xl">🏠</span> {/* ここに絵文字を追加 */}
        <h1 className="text-lg font-bold">rine-apps</h1>
      </div>

      <SidebarContent>
        <SidebarGroup className="mt-12">
          <SidebarGroupLabel className="pl-6 text-xl font-bold text-gray-600 mb-4">
            アプリ選択(工事中)
          </SidebarGroupLabel>

          {/* 1行目 */}
          <SidebarMenuItem className="pl-6 mb-3">
            <SidebarMenuButton className="font-bold text-lg">
              <a href="/" className="w-full h-full flex items-center">
                全部のアプリ
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* 1行目 */}
          <SidebarMenuItem className="pl-6 mb-3">
            <SidebarMenuButton className="font-bold text-lg">
              <a href="/" className="w-full h-full flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                簿記アプリ
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* 1行目 */}
          <SidebarMenuItem className="pl-6 mb-3">
            <SidebarMenuButton className="font-bold text-lg">
              <a href="/" className="w-full h-full flex items-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                ゲーム
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* 1行目 */}
          <SidebarMenuItem className="pl-6 mb-3">
            <SidebarMenuButton className="font-bold text-lg">
              <a href="/" className="w-full h-full flex items-center gap-2">
                <Puzzle className="w-5 h-5" />
                パズル
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="pl-6 mb-3">
            <SidebarMenuButton className="font-bold text-lg">
              <a href="/" className="w-full h-full flex items-center gap-2">
                その他
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarGroupContent className="px-2 mt-8">
            <textarea
              className="w-full h-40 p-3 text-sm bg-sky-50 border border-sky-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all resize-none"
              defaultValue={`[開発ロードマップ]
簿記3級: ✅ 公開中 Ver2開発開始
簿記2級: 🛠 開発予定（７月末リリース予定）
簿記1級: 🚀 8月末リリースに向けて準備中`}
              rows={8}
            />
          </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarMenu></SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
