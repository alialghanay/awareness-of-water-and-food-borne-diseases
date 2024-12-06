"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider, useStore } from "react-redux";
import { useRouter } from "next/navigation";
import store from "@/lib/store";

function Providers({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push} locale="ar-AR">
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}

export default Providers;
