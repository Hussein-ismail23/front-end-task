import React from "react";
import styles from "./page.module.css";
import data from '../../public/companies.json'
import { Card } from "@/ui/Card";
import { Col, Flex, Row } from "antd";
export default function Home() {
  return (
    <div className="home">
      <section style={{ marginTop: '51px' }} >
        <h2 style={{ color: '#0097C2' }}>Get Support</h2>
        <Row style={{ padding: '32px 0' }}>
          {data.companies.map((item, index) => (
            <Col span={6} style={{ padding: '0 4px' }}>
              <Card key={index} data={item} />
            </Col>
          ))}
        </Row>

      </section>
    </div>
  );
}
