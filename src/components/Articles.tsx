import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import articles from './articles.json';

const Articles = () => {
  return (
    <Row>
      {
        articles && articles.map(({ id, title, fullText }) => (
          <Col span={8} key={id}>
            <Card title={title} style={{ width: 300 }}>
              <p>{fullText}</p>
              <p></p>
              <Link to={`/a/${id}`}>Details</Link>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default Articles;