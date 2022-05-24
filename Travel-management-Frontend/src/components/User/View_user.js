import React from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import './view/view-user.css';



export default class viewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:[],
            show: false,
            Id:""
        }        
    };

    componentDidMount() {

        axios.get("http://localhost:8070/user/view")
        .then((res) => {
            this.setState({
                user : res.data
            })
            console.log(this.state.user);
        }).catch((err) => console.log(err));       
    };

    navEdit = (id) => {
        window.location = `/Edituser/${id}`;
    };

    render() {
        return (
            <>
                <div className="view"> <br/>
                    {/* <h1>View user</h1> */}

                    

                    <Table bordered hover size="lg" className="table-user-view table">
                        <thead  className="table-secondary second">
                            <tr className="heading">
                            <th>Email</th>
                            <th>Name</th>
                            
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.user.map((item,key) =>(
                            <tr>
                                <td> {item.Email} </td>
                                <td> {item.Name} </td>
                                
                                
                                <td className="tdInqView"> <Button variant="warning" onClick={()=>{this.navEdit(item._id)}} class="btnInqUp" > Update </Button></td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                </div>
                
            </>
            
        )
    }
}