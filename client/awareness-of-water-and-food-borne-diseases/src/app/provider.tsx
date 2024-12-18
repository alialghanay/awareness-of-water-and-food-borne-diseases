"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { useRouter } from "next/navigation";
import store from "@/lib/store";

function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push} locale="ar-AR">
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}

export default Providers;
