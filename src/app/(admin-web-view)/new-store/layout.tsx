"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Footer } from "@/components/admin-panel/footer";
import HeaderFormStore from "@/components/forms/header-form-store";
import FooterFormStore from "@/components/forms/footer-form-store";
import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/landing/header-web";

export default function NewStoreForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <header className={cn("transition-[margin-left] ease-in-out duration-300")}>
        <HeaderFormStore />
      </header>

      <main className={cn("min-h-[calc(100vh_-_128px)] bg-zinc-50 dark:bg-zinc-900")}>
        {children}
      </main>
      
      <footer className={cn("transition-[margin-left]")}>
        <FooterFormStore />
      </footer>
    </>
  );
}
