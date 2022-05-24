import React from "react";
import './addInquiry.css'
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default class AddInquiry extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        show: false,
        name:"",
        nic:"",
        phone:"",
        email:"",
        inq:"" 
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.handleClose();

      const inquiry = {  
        name : this.state.name, 
        nic : this.state.nic,
        phone : this.state.phone,
        email : this.state.email,
        inquiry : this.state.inq      
      }
      console.log(inquiry);

       axios.post("http://localhost:8070/inquiry/add", inquiry)
       .then(()=> { alert("Iquiry sent successfully..");})
       .catch((err) => {alert(err)})
       .finally(()=> window.location = "/viewInquiry");
    }

    clickCancel = () => {
      window.location = "/viewInquiry"
  };

    handleClose = () => {this.setState({show:false})};
    handleShow = () => {this.setState({show:true})};

    render() {
        return (
            <>
                <div className="AddInq">
                    <br/>

                    <Card className="card">                        
                        <Card.Header className="text-center addHeader">Add Inquiry</Card.Header>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name :</Form.Label>
                                    <Form.Control type="text" id="name" onChange={this.onChange} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control type="email" id="email" onChange={this.onChange} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>NIC :</Form.Label>
                                    <Form.Control type="text" id="nic" onChange={this.onChange} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tel No :</Form.Label>
                                    <Form.Control type="text" id="phone" onChange={this.onChange} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Inquiry :</Form.Label>
                                    <Form.Control as="textarea" rows={5} id="inq" onChange={this.onChange} placeholder="" />
                                </Form.Group>
                            </Form>

                            <Button variant="danger" className="btnAddCancel" onClick={this.clickCancel} >Cancel</Button>
                            <Button type="submit" variant="success" className="btnAddSubmit" onClick={this.handleShow}>Send</Button>

                        </Card.Body>
                    </Card> <br/>

                    <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                      <Modal.Header>
                        <Modal.Title>Inquiry Sending</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> Click confirm to send Inquiry</Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>  
                        <Button variant="success" onClick={this.onSubmit}>  Confirm  </Button>
                      </Modal.Footer>
                    </Modal>
                    
                </div>
            </>
            
        )            
            
    }
};