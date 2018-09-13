import React,{ Component } from 'react';
import './HeadNav.less'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

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
        return (
            <header>
                <div>
                    <nav>
                        <span>WL博客</span>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home"><Link to='/'>首页</Link></Menu.Item>
                            <Menu.Item key="web"><Link to='/web'>web前端</Link></Menu.Item>
                            <Menu.Item key="php"><Link to='/php'>php</Link></Menu.Item>
                            <Menu.Item key="nodejs">nodejs</Menu.Item>
                            <Menu.Item key="react">react</Menu.Item>
                            <Menu.Item key="vue">vue</Menu.Item>
                        </Menu>
                    </nav>
                </div>
            </header>
        );
    }
}