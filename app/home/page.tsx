"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("gun");
  }, []);
  return <h1>Home page</h1>;
}
