'use client';

import { SessionProvider } from "next-auth/react";
import {NextUIProvider} from "@nextui-org/react"

type Props = ({
  children: React.ReactNode;
  });

export default function AuthSession({ children }: Props) {
  return <SessionProvider> <NextUIProvider>{children} </NextUIProvider></SessionProvider>;
}