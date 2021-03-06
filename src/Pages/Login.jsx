import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Row, Col, Typography, Layout, Menu, Divider } from 'antd';
import Polar from "../Assets/polar.png";
import styled from "styled-components";
import LoginForm from "../Components/LoginComponent";
import {organizationName} from "../Assets/Constants";

const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer } = Layout;


const LogoImage = styled.img`
  height: 60px;
  padding: 5px;
  padding-right: 10px;
`;

class Login extends Component {

    render() {
        return (
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <Menu.Item><LogoImage src={Polar} alt="Polar Logo" /></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div style={{ backgroundColor: "", overflow: "hidden", paddingTop: "10vh" }}>
                        <Row type="flex" justify="center" style={{ minHeight: "83vh" }}>
                            <Col md={24} lg={12}>
                                <Row type="flex" justify="center" alight="middle" style={{ textAlign: "center" }}>
                                    <Col span={12}>
                                        <Title>{organizationName}</Title>
                                        <Divider />
                                    </Col>
                                </Row>

                                <Row type="flex" justify="center" alight="middle" style={{ margin: "5vh" }}>
                                    <Col span={18}>
                                        <h3 style={{ textAlign: "center"}}>Welcome to Polar for {organizationName}!</h3>
                                        <Paragraph style={{ textAlign: "left"}}>
                                            Polar provides an all in one organizational management services for any organization. All the services you need in one easy to access online portal.
                                            <br />
                                            Our current services include:
                                            <ul>
                                                <li>User Management</li>
                                                <li>Inventory Management</li>
                                                <li>Mass Communication Services</li>
                                                <li>File Sharing</li>
                                                <li>Event Management</li>
                                            </ul>
                                        </Paragraph>
                                    </Col>

                                </Row>
                            </Col>
                            <Col md={24} lg={{span:10, offset:2}} >
                                <Row type="flex" justify="center" align="middle">
                                    <LoginForm />
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Polar ©2020</Footer>
            </Layout>

        )
    }
}

export default Login;