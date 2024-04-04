import { useContext } from "react";
import { ThemeContext } from "@/utils/context/Family.context";

export default function TestContext2() {
  const { username } = useContext(ThemeContext);

  return (
    <>
      <h1>com2 Name: {username}</h1>
    </>
  );
}
