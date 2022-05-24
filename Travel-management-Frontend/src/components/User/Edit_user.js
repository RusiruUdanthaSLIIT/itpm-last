import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'

import '../../../src/components/User/edit/edit-user.css';



export default class EditUser extends React.Component {

    constructor(props) {
        super(props);




        this.state = {
            user: [],
            id: "",
            Name: "",
            Email: "",
            Password: "",
            Num: "",
            showup: false,
            showDel:false
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);

        axios.get(`http://localhost:8070/user/view/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    user: res.data,
                    id: res.data._id,
                    Name: res.data.Name,
                    Email: res.data.Email,
                    Password: res.data.Password,
                    Num: res.data.Num
                })
            })
            .catch((err) => console.log(err.message))

        //  console.log(this.state.user);
    }

    clickCancel = () => {
        window.location = "/viewuser"
    };

    handleClose = () => { this.setState({ showup: false,  showDel : false }) };
    handleShowUpdate = () => { this.setState({ showup: true }) };
    handleShowDelete = () => { this.setState({ showDel: true }) };

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.handleClose();

        const user = {

            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Num: this.state.Num
        }
        console.log(user);

        axios.put(`http://localhost:8070/user/edit/${this.props.match.params.id}`, user)
            .then((res) => { alert(res.data) })
            .catch((err) => console.log(err))
            .finally(() => window.location = "/viewuser");
    }

    onRemove = () => {
        axios.delete(`http://localhost:8070/user/delete/${this.props.match.params.id}`)
            .then((res) => { alert(res.data) })
            .catch((err) => console.log(err))
            .finally(() => window.location = "/viewuser");
    }

    render() {
        return (
            <body className="bg1">
            <div className="edit">
                <Card className="card2">
                    <Card.Header className="text-center addHeader">Edit user</Card.Header>
                    <Card.Body>
                        <Form>
                        {/*} <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-badge"></i></InputGroup.Text>
                                <Form.Control type="text" id="id" placeholder={this.state.id} readOnly />
        </InputGroup>*/}

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-user"></i></InputGroup.Text>
                                <Form.Control type="text" id="Name" onChange={(e) => this.onChange(e)} defaultValue={this.state.Name} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-envelope "></i></InputGroup.Text>
                                <Form.Control type="text" id="Email" onChange={(e) => this.onChange(e)} placeholder={this.state.Email} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-card"></i></InputGroup.Text>
                                <Form.Control type="text" id="Password" onChange={(e) => this.onChange(e)} placeholder={this.state.Password} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-phone"></i></InputGroup.Text>
                                <Form.Control type="text" id="Num" onChange={(e) => this.onChange(e)} placeholder={this.state.Num} />
                            </InputGroup>


                        </Form>


                        <Button variant="danger" className="btnAddDelete" onClick={this.handleShowDelete} >Delete</Button>
                        <Button type="submit" variant="success" className="btnAddSubmit" onClick={this.handleShowUpdate}>Update</Button>

                    </Card.Body>
                </Card> <br />

                <Modal show={this.state.showup} onHide={this.handleClose} animation={true}>
                    <Modal.Header>
                        <Modal.Title>User Sending</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Click confirm to update your user</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>
                        <Button variant="success" onClick={this.onSubmit}>  Confirm  </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showDel} onHide={this.handleClose} animation={true}>
                    <Modal.Header>
                        <Modal.Title>User Deleting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Click confirm to Delete your user</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>
                        <Button variant="success" onClick={this.onRemove}>  Confirm  </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            </body>
        );
    };
}