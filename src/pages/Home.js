import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AppBar from '../components/AppBar';
import MyToDos from '../components/MyToDos';
import SideBar from '../components/SideBar';
import '../styles/Home/home.css'

export const Home = () => {
    return (
        <div className='home'>
            <AppBar />
            <Row className='row'>
                <Col lg={3}  sm={12}>
                <SideBar />
            </Col>
            <Col lg={9} sm={12}>
                <MyToDos />
            </Col>
            </Row>
        </div>
    )
}
