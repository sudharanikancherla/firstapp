// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bvaot8f', 'template_8j3w6su', form.current, {
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
      <h1>Reactjs with Emailjs</h1>
    <form ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",width:"40%",
      border:"2px solid black",marginTop:"2%",padding:"5%"}}>
      <label>Name</label>
      <input type="text" name="user_name" /><br/>
      <label>Email</label>
      <input type="email" name="user_email" /><br/>
      <label>Phone Number</label>
      <input type="text" name="user_number"/><br/>
      <label>Message</label>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" /><br/>
    </form>
    </center>
  );
  };
export default App;