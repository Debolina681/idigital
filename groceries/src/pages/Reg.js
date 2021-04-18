import React, { Component } from 'react';
import validator from 'validator'
import swal from 'sweetalert';
import { Button, Card,  CardBody,Label,  Col, Container, Form, Input, InputGroup,  Row } from 'reactstrap';
import UserService from '../Service/UserService';
import './registration.css';
    let fName;
     let  lName;
      let userName;  
      let password;
      let email;
      let phone;
      let address;

class Reg extends Component {


  constructor() {

    super();

    this.state = {

      fName: '',
      lName:'',
      userName:'', 
      phone: '', 
      password: '',
      email: '',
      address: ''
    }

    this.changeFNameHandler = this.changeFNameHandler.bind(this);
    this.changeLNameHandler = this.changeLNameHandler.bind(this);
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
    componentDidMount(){
      // step 4
      if(this.state.id === '_add'){
          console.log("In Component did mount add");
          return
      }else{
          // UserService.registrationForm(this.state.id).then((res) =>{
          //     let user = res.data;
          //     this.setState({fName: user.fName,
          //         lName: user.lName,
          //         userName:user.userName,
          //         email:user.email,
          //         password:user.password,
          //         phone:user.phone,
          //         address:user.address    
          //     });
             

          // });
      }        
  }
  saveUser = (u) => {
     u.preventDefault();
    
      let user = {fName: this.state.fName, lName: this.state.lName, userName:this.state.userName, password:this.state.password, email:this.state.email, phone:this.state.phone , address:this.state.address};
      fName = String(this.state.fName);
      lName = String(this.state.lName);
      password = String(this.state.password);
      phone= String(this.state.phone);
      userName= String(this.state.userName);
      email = String(this.state.email);
      
      
      
      
      address = String(this.state.address);
     
      console.log('user=> ' + JSON.stringify(user));
     
               if(fName ==="" ||  lName ==="" ||  email==="" || password ==="" || userName ==="" || phone ==="" || address ===""  ){ 
                 swal("Invalid Data","Please fill all the fields" , "warning"); 
                }
                else if(!(validator.isNumeric(phone)) ){
                      swal("Wrong Input","Enter Valid Contact Number" ,"error");
                  }
                  else if(!(validator.isEmail(email))){
                    swal("Wrong Input","Enter Valid Email" ,"error");
                  }

              else{
                console.log(user)
                UserService.registrationForm(user).then((res) =>{
                  let data = res.data;
                  this.setState({fName: data.fName,
                    lName: data.lName,
                    userName:data.userName,
                    password:data.password,
                    phone:data.phone,
                    email:data.email,
                    address:data.address    
                  }); });
                swal("Sucess","Registration Done" ,"success");
              }
  }
  
  changeFNameHandler= (event) => {
      this.setState({fName: event.target.value});
    
  }
  changeLNameHandler= (event) => {
      this.setState({lName: event.target.value});
    
  }
  changeUserNameHandler= (event) => {
      this.setState({userName: event.target.value});
  }

  changePasswordHandler= (event) => {
      this.setState({password: event.target.value});
  }

  changeEmailHandler= (event) => {
   this.setState({email: event.target.value});   
  }
  changePhoneHandler= (event) => {
    console.log(event.target.value);
      this.setState({phone: event.target.value});
  }
  changeAddressHandler= (event) => {
      this.setState({address: event.target.value});
  }


 render() {


    return (
      <div className="registration-image">

      <div className="app flex-row align-items-center mt-5">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4" style={{ width: "100%",height: "90%"}}>

                <CardBody className="p-4">
                
                  <Form >

                    <div  className=" row mb-2 pageheading">

                      <div className="col-sm-12 btn btn-light disabled  btn-lg">

                        Sign Up

                        </div>

                    </div>

                    <InputGroup className="mb-3 row">
                    <Label className="col-5">Name : </Label>
                      <Input className="col-3.5" type="text"  onChange={this.changeFNameHandler} placeholder=" First Name" />
                      
                      <Input  className="col-3.5" type="text"  onChange={this.changeLNameHandler} placeholder="Last Name" />
                    </InputGroup>

                    <InputGroup className="mb-3 row">
                    <Label className="col-5">UserName : </Label>
                      <Input className="col-7"type="text"  onChange={this.changeUserNameHandler} placeholder="UserName" />

                    </InputGroup>

                    <InputGroup className="mb-3 row ">
                    <Label className="col-5" >Password : </Label>
                     <Input className="col-7" type="password"  onChange={this.changePasswordHandler} placeholder=" Password" />

                    </InputGroup>

                    <InputGroup className="mb-3 row">
                    <Label className="col-5" >Phone Number : </Label>
                      <Input className="col-7" type="text"  onChange={this.changePhoneHandler} placeholder="Phone No." />

                    </InputGroup>
                    
                    <InputGroup className="mb-3 row ">
                    <Label  className="col-5">Email : </Label>
                     <Input className="col-7" type="text"  onChange={this.changeEmailHandler} placeholder="Email" />

                    </InputGroup>
                    <InputGroup className="mb-3 row ">
                    <Label className="col-5">Address : </Label>
                     <Input className="col-7" type="text"  onChange={this.changeAddressHandler} placeholder="Address" />

                    </InputGroup>
                    
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Button  onClick={this.saveUser}  color="success" className="px-5">Create Account</Button>
                    </div>
                  </Form>

               </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </div>
      </div>

    );

  }

}

export default Reg;