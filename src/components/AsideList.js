import React, { Component } from 'react';
import { Card, Icon, Row, Col } from "antd";
import './AsideList.less';

export default class AsideList extends Component {
	constructor(props){
		super(props);
		this.state = {
			success:false
		}
	}
    render() {
		console.log(this.props.data)
		return !this.props.data 
				? "loading" 
				: <Card bordered={false} style={{ margin: "20px 0" }}>
					<h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
					{this.props.title}
					</h3>
					<ul style={{paddingLeft:'0'}}>
					{this.props.data.map((item, index) => {
						return <li className="AsideList-li" key={index}>
				{!(this.props.title == "最新评论") 
					? <div>
                    	<Icon type="bars" theme="outlined" style={{ marginRight: "5px" }} />
						{item.title}
					  </div> 
					: <div>
						<div style={{float:'left',width:'50px'}}>
							<img src={item.head_img} alt=""/>
						</div>
						<div style={{paddingLeft:'10px'}}>
							<div>{item.name}</div>
							<div style={{color:'#333'}}>{item.content}</div>
							<div>评：{item.article}</div>
						</div>
					</div>
				}
              </li>;
					})}
					</ul>
				</Card>;
    }
}