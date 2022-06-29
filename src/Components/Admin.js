import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
const url="/bookyourfreesessionbackend";

 const fetchHandler= async()=>{

     return await axios.get(url).then((res)=>res.data)

 }
const Admin = () => {
    const [students,setStudents]=useState();
    const [searchtext,setSearchtext]=useState('')
  
      
      useEffect(() => {
        fetchHandler().then(data=>setStudents(data.students))
       
       
      },[]);
     
      

  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/adminpasswordusername6237ef9dc7e813318033b1249883">Student Data</a>
      <a class="navbar-brand" href="/buisnessdatapasswordusername6237ef9dc7e813318033b1249883">Buisness Data</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           
          </li>
       
        </ul>
      </div>
    </div>
  </nav>
    <h1  class="text-center">Student Data</h1>
    <table class="table table-bordered">
        <thead class="thead-dark" style={{backgroundColor:"rgb(84, 0, 180)"}}>
            <tr class="success">
                <th scope="col" style={{color:"white"}}>Sl no.</th>
                <th scope="col" style={{color:"white"}}>Name</th>
                <th scope="col" style={{color:"white"}}>Parent Name</th>
                <th scope="col" style={{color:"white"}}>Contact Number</th>
                <th scope="col" style={{color:"white"}}>Email</th>
          
                <th scope="col" style={{color:"white"}}>Course</th>
                <th scope="col" style={{color:"white"}}>Course Mode</th>
                <th scope="col" style={{color:"white"}}>Age</th>
                <th scope="col" style={{color:"white"}}>Your Class</th>
                <th scope="col" style={{color:"white"}}>School or College Name</th>
                <th scope="col" style={{color:"white"}}>city</th>
                <th scope="col" style={{color:"white"}}>Pincode</th>
                <th scope="col" style={{color:"white"}}>Address</th>
                <th scope="col" style={{color:"white"}}>Phone Number</th>
            </tr>
        </thead>


        
            {
                students && students.map((student,i)=>(
                    
        <tbody key={i}>
       
                    <tr>

        <td scope='col'>{i+1}</td>
        <td scope='col'>{student.firstname}</td>
        <td scope='col'> {student.pname}</td>
         <td scope='col'>{student.contactnumber}</td>
         <td scope='col'>{student.email}</td>
        
         <td scope='col'>{student.course}</td>
         <td scope='col'>{student.coursemode}</td>
         <td scope='col'>{student.age}</td>
         <td scope='col'>{student.yclass}</td>
         <td scope='col'>{student.schoolcollegename}</td>
         <td scope='col'>{student.city}</td>
         <td scope='col'>{student.pincode}</td>
         <td scope='col'>{student.address}</td>
         <td scope='col'>{student.contactnumber}</td>
       
         </tr>
         
        </tbody>
       
                ))
            }
       
    </table>
    </div>
  )
}

export default Admin