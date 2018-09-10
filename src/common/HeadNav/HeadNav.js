import React,{ Component } from 'react';
import './HeadNav.less'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class HeaderNav extends Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return <header>
            <nav>
                <span>WL博客</span>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">首页</Menu.Item>
                <Menu.Item key="web">web前端</Menu.Item>
                <Menu.Item key="php">php</Menu.Item>
                <Menu.Item key="nodejs">nodejs</Menu.Item>
                <Menu.Item key="react">react</Menu.Item>
                <Menu.Item key="vue">vue</Menu.Item>
              </Menu>
            </nav>
          </header>;
    }
}