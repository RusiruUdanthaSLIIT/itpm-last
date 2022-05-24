import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'

import '../Inquiry/EditInquiry.css'; 



export default class EditInquiry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inquiry: [],
            id: "",
            name: "",
            nic: "",
            phone: "",
            email: "",
            inq: ""
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);

        axios.get(`http://localhost:8070/inquiry/view/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    inquiry: res.data,
                    id: res.data._id,
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                    nic: res.data.nic,
                    inq: res.data.inquiry
                })
            })
            .catch((err) => console.log(err.message))

        //  console.log(this.state.inquiry);
    }

    clickCancel = () => {
        window.location = "/viewInquiry"
    };

    handleClose = () => { this.setState({ show: false }) }; // close alert box
    handleShow = () => { this.setState({ show: true }) }; // show alert box

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value }); // assigning values from keyboard inputs
    }

    onSubmit = (e) => {  
        e.preventDefault();
        this.handleClose();

        const inquiry = {
            name: this.state.name,
            nic: this.state.nic,
            phone: this.state.phone,
            email: this.state.email,
            inquiry: this.state.inq
        }
        console.log(inquiry);

        axios.put(`http://localhost:8070/inquiry/edit/${this.props.match.params.id}`, inquiry) // use axios library to http request to backend
            .then((res) => { alert(res.data) })
            .catch((err) => console.log(err))
            .finally(() => window.location = "/viewInquiry");
    }

    render() {
        return (

            <div className="editInq">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            


                <Card className="card4">
                    <Card.Header className="text-center addHeader">Edit Inquiry</Card.Header>
                    <Card.Body>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-badge"></i></InputGroup.Text>
                                <Form.Control type="text" id="id" placeholder={this.state.id} readOnly />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-user"></i></InputGroup.Text>
                                <Form.Control type="text" id="name" onChange={(e) => this.onChange(e)} placeholder={this.state.name} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-envelope "></i></InputGroup.Text>
                                <Form.Control type="email" id="email" onChange={(e) => this.onChange(e)}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-card"></i></InputGroup.Text>
                                <Form.Control type="text" id="nic" onChange={(e) => this.onChange(e)} placeholder={this.state.nic} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-phone"></i></InputGroup.Text>
                                <Form.Control type="text" id="phone" onChange={(e) => this.onChange(e)} placeholder={this.state.phone} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-commenting "></i></InputGroup.Text>
                                <Form.Control as="textarea" rows={5} id="inq" onChange={(e) => this.onChange(e)} placeholder={this.state.inq} />
                            </InputGroup>
                        </Form>


                        <Button variant="danger" className="btnAddCancel" onClick={this.clickCancel} >Cancel</Button>
                        <Button type="submit" variant="success" className="btnAddSubmit" onClick={this.handleShow}>Update</Button>

                    </Card.Body>
                </Card> <br />

                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Inquiry Sending</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Click confirm to update your Inquiry</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>
                        <Button variant="success" onClick={this.onSubmit}>  Confirm  </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        );
    };
}