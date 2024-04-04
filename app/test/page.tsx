"use client";
import { Button, Col, Flex, Input, Row } from "antd";
import { CSSProperties, ChangeEvent, useState } from "react";
import { DeleteFilled, PlusOutlined, SearchOutlined } from "@ant-design/icons";

const limit = 1;

export default function Test() {
  const initialItems = { id: 1, title: "test1", value: "", productItem: [] };
  const [items, setItems] = useState([initialItems]);
  const isLimitLength = items.length === limit;

  const addItem = () => {
    const idUnique = items[items.length - 1].id + 1;
    setItems([...items, { ...initialItems, id: idUnique }]);
  };

  const removeItem = (index: number) => {
    if (isLimitLength) {
      return;
    }
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const onChangeInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newItems = [...items];
    newItems[index].value = value;
    setItems(newItems);

    // ~ number only
    // const regex = /^[0-9\b]+$/;
    // if (value === "" || regex.test(value)) {}
  };

  return (
    <>
      <h1>Test components following the index</h1>
      <Row gutter={6} align={"middle"}>
        <Col>
          <Button
            onClick={() => log(items)}
            type="primary"
            icon={<SearchOutlined />}
          >
            console.log items
          </Button>
        </Col>
        <Col>
          <Button onClick={addItem} type="primary" icon={<PlusOutlined />}>
            Add
          </Button>
        </Col>
      </Row>

      <div id="divItems" style={{ marginTop: 30 }}>
        {items.map((item, index) => {
          return (
            <div key={item.id} style={containerStyle}>
              <Row gutter={16} align={"middle"}>
                <Col>
                  <Flex>{item.title}</Flex>
                </Col>
                <Col span={4}>
                  <Input
                    value={item.value}
                    onChange={(e) => onChangeInput(index, e)}
                    placeholder="input"
                  />
                </Col>
                <Col>
                  <Button
                    disabled={isLimitLength}
                    type="text"
                    danger
                    onClick={() => removeItem(index)}
                    icon={<DeleteFilled />}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </>
  );
}

const log = (values: any) => {
  console.log("log: ", values);
};

const containerStyle: CSSProperties = { paddingBlock: 4 };
