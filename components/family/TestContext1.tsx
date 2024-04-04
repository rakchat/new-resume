import { ChangeEvent, useContext, useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { ThemeContext } from "@/utils/context/Family.context";

export default function TestContext1() {
  const { username, setUsername } = useContext(ThemeContext);
  const [value, setValue] = useState("gun");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  const onSubmit = () => {
    setUsername?.(value);
  };

  return (
    <>
      <h1>TestContext1: {username}</h1>
      <Row gutter={6}>
        <Col>
          <Button type="primary" onClick={onSubmit}>
            set context is:
          </Button>
        </Col>
        <Col>
          <Input
            value={value}
            onChange={(e) => onChangeInput(e)}
            placeholder="input"
            onPressEnter={onSubmit}
          />
        </Col>
      </Row>
    </>
  );
}
