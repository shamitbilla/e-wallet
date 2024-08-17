"use client"

import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  if (typeof window !== 'undefined') {
    return (
        <RecoilRoot>
            <SessionProvider>
                {children}
            </SessionProvider>
        </RecoilRoot>
    );
  } else {
    return <>{children}</>;
  }
};