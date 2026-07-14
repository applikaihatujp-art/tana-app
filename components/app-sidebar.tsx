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

          <SidebarGroupContent>
            <SidebarMenu></SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
