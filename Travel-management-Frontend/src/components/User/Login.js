import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Sign/Signin.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user:[],
            email: "",
            password: "",
            show: false,
        }
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = () => {

        const user = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(user);

        axios.post("http://localhost:8070/user/log", user)
        .then((res)=> { alert(res.data.message);})
        .catch((err) => {alert(err)})
        .finally((res)=> window.location="/Viewuser");
    }

    render() {
        return (
                <section /*className="bg"*/>
                <div className="form1 logbody">

                    <Card className="card1">                        
                        <Card.Header className="text-center addHeader1">User Login</Card.Header>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Email :</Form.Label>
                                    <Form.Control type="email" id="email" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Password :</Form.Label>
                                    <Form.Control type="password" id="password" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                            </Form>

                            <div className="d-grid gap-2">
                                <Button variant="danger" size="lg" className="btnAddCancel" onClick={this.clickCancel} >Cancel</Button>
                                <Button type="submit" variant="success" className="btnuserReg" size="lg" onClick={this.onSubmit}>Login</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                </section>
        )
    }
}