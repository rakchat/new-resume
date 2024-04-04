"use client";
import { useState } from "react";
import { BasePageProp } from "@/utils/types";
import { ThemeContext } from "@/utils/context/Family.context";
import TestContext1 from "@/components/family/TestContext1";
import TestContext2 from "@/components/family/TestContext2";

interface IProp {
  familyId: string;
}

export default function FamilyDetail(props: BasePageProp<IProp>) {
  const { params, searchParams } = props;
  const [username, setUsername] = useState("Suntorn Context");

  return (
    <>
      <div>
        <p>{params?.familyId && `Family detail id: ${params?.familyId}`}</p>
        <p>{searchParams?.tab && `tab is: ${searchParams?.tab}`}</p>
      </div>

      <ThemeContext.Provider value={{ username, setUsername }}>
        Top: {username}
        <TestContext1 />
        <TestContext2 />
      </ThemeContext.Provider>
    </>
  );
}
