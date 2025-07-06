"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-blue-500 w-full h-20 fixed bottom-0 left-0 z-50 flex select-none">
      <div
        onClick={() => router.push("/")}
        className={`inline-block min-w-[50vw] h-20 ${pathname === "/" ? "bg-blue-400" : "bg-amber-50"} active:scale-105`}
      >
        <div className="flex items-center justify-center h-full text-black">📃 Tasks</div>
      </div>
      <div
        onClick={() => router.push("/completed")}
        className={`inline-block min-w-[50vw] h-20 ${pathname === "/completed" ? "bg-blue-400" : "bg-amber-50"} active:scale-105`}
      >
        <div className="flex items-center justify-center h-full text-black">✅ Completed</div>
      </div>
    </nav>
  );
};

export default BottomNav;
