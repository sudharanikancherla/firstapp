
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hi")
    emailjs.sendForm('service_bvaot8f', 'template_8j3w6su', form.current, {
        publicKey: 'xHf7XPQi7Ss7y0h6v',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <center>

      <h1 style={{fontSize:"50px",fontWeight:"bold"}}>ReactJs with EmailJs</h1>
    <form  ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",width:"35%",height:"10%",
      border:"2px solid black",marginTop:"2%",padding:"5%",backgroundColor:"white"}}>
      {/* <label>Name</label> */}
      {/* <input type="text" name="user_name" /><br/> */}
      <TextField id="outlined-basic" label="Username" variant="outlined" type="text" name="user_name"  /><br/>
      {/* <label>Email</label> */}
      {/* <input type="email" name="user_email" /><br/> */}
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="user_email"  /><br/>
      {/* <label>Phone Number</label> */}
      {/* <input type="text" name="user_number"/><br/> */}
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="text" name="user_number"  /><br/>
      {/* <label>Message</label> */}
      {/* <textarea name="message" /><br/> */}
      <TextField id="outlined-basic" label="Message" variant="outlined" type="text" name="message"  /><br/><br/>
      <Button variant="contained" type="submit">Submit</Button>
      {/* <input type="text" name="button" value="Submit"/> */}
      
    </form>
    </center>
  );
  };
export default App;