"use client";
import { useEffect } from "react";

interface IProps {
  id: string;
}

// export default function HomeDetail() {
export default function HomeDetail(props: IProps) {
  console.log("props : ", props);

  // useEffect(() => {
  //   console.log("props : ", props);
  // }, [props]);

  return (
    <>
      <div>My detail id: {props.id}</div>
    </>
  );
}
