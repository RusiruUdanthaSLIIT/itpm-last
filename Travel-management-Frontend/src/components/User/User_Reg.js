import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Header from "../Header";
import Footer from "../Footer";

import '../../Styles/Registration.css';

export default class Registration extends React.Component {

    constructor(props) {  // class constructor
        super(props)

        this.state = {  // create and initialize state
            user:[],
            show: false,
            name:"",
            email:"",
            phone:"",
            password:"",
            repassword:""
        }
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value}); // set values in changing inputs
    }

    checkPasswords() {      // cheking password validation
        this.handleClose();

        if(this.state.password === this.state.repassword){
           this.onSubmit();
        }else{
            alert("Passwords do not match");            
        }
    }

    handleClose = () => {this.setState({show:false})};
    handleShow = () => {this.setState({show:true})};

    onSubmit = () => {

        const user = {
            name: this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password
        }
        console.log(user);

        axios.post("http://localhost:8070/user/add", user)
        .then((res)=> { alert(res.data);})
        .catch((err) => {alert(err)})
        .finally(()=> window.location = "/login");
    }

    render() {
        return (
                
            <div className="">
                <div>
                <Header />
                </div>
                
                <section className="form">
                <Card className="card">                        
                        <Card.Header className="text-center addHeader">User Registration</Card.Header>

                        <Card.Body className="body">
                            <Form className="bodya">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Name :</Form.Label>
                                    <Form.Control type="text" id="name" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Email :</Form.Label>
                                    <Form.Control type="email" id="email" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Tel No :</Form.Label>
                                    <Form.Control type="text" id="phone" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Password :</Form.Label>
                                    <Form.Control type="password" id="password" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label"> Re Password :</Form.Label>
                                    <Form.Control type="password" id="repassword" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                            </Form>

                            <Button variant="danger" className="btnAddCancel" onClick={this.clickCancel} >Delete</Button>
                            <Button type="submit" variant="success" className="btnuserReg" onClick={this.handleShow}>Register</Button>

                        </Card.Body>
                    </Card> <br/>

                    <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                      <Modal.Header>
                        <Modal.Title>User Registration</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> Click confirm to Register</Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>  
                        <Button variant="success" onClick={() => this.checkPasswords()}>  Confirm  </Button>
                      </Modal.Footer>
                    </Modal>
                </section>

                    <div>
                        <Footer />
                    </div>
            </div>
        )
    }
}