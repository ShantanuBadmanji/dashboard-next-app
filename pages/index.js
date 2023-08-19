import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  useEffect(() => {
    isLoggedIn ? router.replace("/dashboard") : router.replace("/login");
  }, [isLoggedIn, router]);
  return <></>;
}
