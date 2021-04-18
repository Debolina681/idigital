import React, { Component } from 'react';
import '../App.css';
import UserService from '../Service/UserService';
import { Button, Card, CardBody,Label, CardGroup, Col, Container, Form, Input, InputGroup,  Row } from 'reactstrap';
import './Login.css';
class Login extends Component {

    constructor() {

       super();


        this.state = {

            Email: '',

            Password: ''

        }

    }

    Email=(event)=> {

        this.setState({ Email: event.target.value })

    }

    Password=(event)=> {

        this.setState({ Password: event.target.value })

    }
    login = (u) => {
        u.preventDefault();
        console.log(this.state.Password);
        console.log(this.state.Email);
        let user = {email:this.state.Email,password:this.state.Password};
        UserService.login(user).then(( res )=>{
                 console.log(res);
                if(res.data==="Admin"){
                    
                    //  swal("Sucess","Admin Login " ,"success");
                    alert("Admin has logged in")
                     window.location.href = "http://localhost:3000/adminDashboard";
                }
                else{
                    //swal("Sucess","User Login " ,"success");
                    alert("Customer has logged in")
                    window.location.href = "http://localhost:3000/customerDashboard";
                } 
        }) 
        .catch((err)=>{
            //swal("ERROR","Please Enter Valid Data " ,"error");
            alert("Please Enter Valid Data")
           window.location.href = "http://localhost:3000/login";
        });
    }

    

    render() {


        return (
            <div className="login-image">
            <div className="app flex-row align-items-center mt-5">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">

                            <CardGroup>

                                <Card className="p-2 ">

                                    <CardBody >

                                        <Form >

                                            <div  className=" row mb-4 pageheading " >

                                                <div className="col-sm-12 btn btn-light disabled btn-lg">

                                                    Login 

                                            </div>

                                            </div>

                                            <InputGroup className="mb-2 row">

                                            <Label for="exampleEmail" className="col-4">Email :  </Label> 
                                            <Input type="email" onChange={this.Email} placeholder="Enter Email" className="col-8"/>
                                            </InputGroup>

                                            <InputGroup className="mb-4 row ">

                                            <Label for="exampleEmail" className="col-4">Password :   </Label>
                                            <Input type="password" onChange={this.Password} placeholder="Enter Password" className="col-8" />

                                            </InputGroup>
                                               {/* <a href="#" > Forgot password</a> <br/>
                                             
                                             <button className="btn btn-success" onClick={this.login} color="success" block>Login</button> */}
                                            <div className="login-form">
                                            <Button className="px-5" color="success" onClick={this.login}  type="submit" >Login</Button>
                                                    </div>
                                        </Form>

                                   </CardBody>

                                </Card>

                            </CardGroup>

                        </Col>

                    </Row>

                </Container>

            </div>
            </div>
            
            
            
                       
                 

        );

    }
}
export default Login;