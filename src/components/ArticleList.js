import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { Card } from "antd";

export default class ArticleList extends Component {

  render() {
    return (
      <section style={{ margin: "20px 0" }}>
        <Card bordered={false}>
            <div className="art-title" style={{color:'#337ab7',fontSize:'20px',marginBottom:'20px'}}>{this.props.title}</div>
            <Row style={{ margin: "20px 0" }}>
                <Col span={6} style={{ padding: "0 15px" }}>
                    <Icon type="calendar" theme="outlined" />
                    {this.props.time}
                </Col>
                <Col span={6} style={{ padding: "0 15px" }}>
                    <Icon type="user" theme="outlined" />
                    By：{this.props.author}
                </Col>
                <Col span={6} style={{ padding: "0 15px" }}>
                    <Icon type="folder-open" theme="outlined" />
                    分类：{this.props.classify}
                </Col>
                <Col span={6} style={{ padding: "0 15px" }}>
                    <Icon type="eye" theme="outlined" />
                    浏览：{this.props.view}
                </Col>
            </Row>
            <Row style={{ margin: "20px 0" }}>
                <Col span={6} style={{ padding: "0 15px" }}>
                    <img src={this.props.img} alt="" />
                </Col>
                <Col span={18} style={{ padding: "0 15px" }}>
                    {this.props.brief}
                </Col>
            </Row>
            <div style={{ padding: "0 15px" }}>
                <Icon type="tags" theme="outlined" />
                {this.props.tag}
            </div>
        </Card>
      </section>
    );
  }
}
