import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";
import "./Registration.css"
function Registration() {
  const [inputs, setInputs] = useState({
    fname:"",
    lname:"",
    phoneno:"",
    emailidid:"",
    city:"",
    pincode:"",
    purpose:"",
    address:"",
    message:"",

  });

  const sendRequest = async () => {

    await axios.post("https://qnovatelabsbackend.herokuapp.com/strongbuisness", {
      fname: String(inputs.fname),
      lname: String(inputs.lname),
      phoneno: Number(inputs.phoneno),
      emailid: String(inputs.emailid),
      city: String(inputs.city),
      pincode: Number(inputs.pincode),
      purpose:String(inputs.purpose),
      address:String(inputs.address),
      message:String(inputs.message),


    }).then(res => res.data);
  }
  const history = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => {
      history("/")
    })


  }



  return (
    <div className="registration-form">
      <h2 className="text-center free-session p-4">
        Let’s Build a Strong Business Together<span className="contactus-form">(Contact Us <strong>Now!</strong></span>)
      </h2>
      <div className="container teacher-form d-flex justify-content-center">
        <div className="row ">
          <div className="col-md-6 side-img">
            <img className="img-fluid" src={require("./corporate collaboration.png")} alt="reg pic" />
          </div>
          <div className="col-md-4 side-form">
            <form onSubmit={handleSubmit}
            style={{ margin: "2% auto 2% auto", paddingTop: "6%" }}>
              <div className="row">
                <div className=" col-md-6">
                  <label for="fname" className="p-2">First Name:</label>
                  <input
                    type="text"
                    name="fname"
                    value={inputs.fname} onChange={handleChange}
                    className="form-control "
                    placeholder="Enter First Name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="lname" className="p-2">Last Name:</label>
                  <input
                    type="text"
                    name="lname"
                    value={inputs.lname} onChange={handleChange}
                    className="form-control "
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="phoneno" className="p-2">Phone No:</label>
                <input
                  type="number"
                  value={inputs.phoneno} onChange={handleChange}
                  name="phoneno"
                  className="form-control "
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="form-group">
                <label for="emailid" className="p-2">Email Id:</label>
                <input
                  type="text"
                  name="emailid"
                  value={inputs.emailid} onChange={handleChange}
                  className="form-control "
                  placeholder="Enter Email Id"
                />
              </div>
              <div className="row">
                <div className=" col-md-6">
                  <label for="emailid" className="p-2">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={inputs.city} onChange={handleChange}
                    className="form-control "
                    placeholder="Enter the  City Name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="pincode" className="p-2">Pin Code:</label>
                  <input
                    type="number"
                    name="pincode"
                    value={inputs.pincode} onChange={handleChange}
                    className="form-control "
                    placeholder="Enter Pin Code"
                  />
                </div>
              </div>
              <div className="form-group ">
                <label htmlFor="Purpose" className="p-2">Purpose</label>
                <select className="form-control" name="purpose" value={inputs.purpose} onChange={handleChange}>
                  <option>For School </option>
                  <option>For College </option>
                  <option>For Franchise </option>
                </select>
              </div>

              <div className="form-group ">
                <label for="formGroupExampleInput" className="p-2">Address</label>
                <input
                name="address"
                  type="text"
                  value={inputs.address} onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Address"
                />
              </div>
              <div className="form-group ">
                <label for="exampleFormControlTextarea1" className="p-2">Message</label>
                <textarea
                name="message"
                value={inputs.message} onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="If you want to give any message to us "
                ></textarea>
              </div>
             
              <button type="submit" className="btn btn-primary submit m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
