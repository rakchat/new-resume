"use client";
import { BasePageProp } from "@/utils/types";
import { Button } from "antd";

interface IProp {
  familyId: string;
}

export default function FamilyDetail(props: BasePageProp<IProp>) {
  const { params, searchParams } = props;
  console.log("props : ", props);

  return (
    <>
      <div>
        <p>{params?.familyId && `Family detail id: ${params?.familyId}`}</p>
        <p>{searchParams?.tab && `tab is: ${searchParams?.tab}`}</p>
      </div>
    </>
  );
}
