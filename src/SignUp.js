import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { Link } from "@reach/router";
// import db from "./firebase";
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "./SignUp.css";
// import db from './firebase.js'
// import { auth } from "../firebase.js";
// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };



// componentDidMount = () => {
//   const res = db.collection('profiles').doc('city').get()
//   const data = res.data()
//   this.setState({
//     city: cityAuth,
//   })
// };

export function NameForm(props) {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setName("");
  };
  
  
  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Submitting Name ${city}`)

      // alert(`Submitting Name ${name}`)
  }

return (
  <div style={{
    display: "inline-block",
    width:"100%",
    marginLeft: "230px",
    padding: "auto",
  }}>
  
  <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={handleSubmit}>
      <button onChange={console.log}>
          Sign In with Google
        </button>
        <br></br>
        <br></br>
        <p className="h4 text-center mb-4">Facebook Project</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Profile
        </label>
        <input type="text"
                  id="defaultFormLoginEmailEx"
                  className="form-control" 
                  value={city} 
                  onChange={e => setCity(e.target.value)} />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text">
          City
        </label>
        <input type="text" 
                  id="defaultFormLoginPasswordEx" 
                  className="form-control" 
                  value={name} 
                  onChange={e => setName(e.target.value)} />
                  <label htmlFor="userEmail" className="block">
          </label>
          
        <div className="text-center mt-4">
          <MDBBtn color="indigo" 
                         type="submit">Submit
          </MDBBtn>
        </div>
      </form>
    </MDBCol>

  </MDBRow>

</MDBContainer>
</div>

);
}

export default NameForm;


          // <input
          //   type="email"
          //   className="my-1 p-1 w-full"
          //   name="userEmail"
          //   value={email}
          //   onChange={e => setEmail(e.target.value)}
          // />
          // <br></br>
          // Password:
          // <label htmlFor="userPassword" className="block">
          // <input
          //   type="Password"
          //   className="my-1 p-1 w-full"
          //   name="Password"
          //   value={password}
          //   onChange={e => setPassword(e.target.value)}
          // />
          // <button
          //   className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
          //   onClick={event => {
          //     createUserWithEmailAndPasswordHandler(event, email, password);
          //   }}
          // >
          //   Sign up
          // </button>
          // </label>

// export default signInWithGoogle

//   return (
//     <Form onSubmit={handleSubmit}>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Profile Name</Form.Label>
//     <Form.Control type="text" placeholder="Enter Profile Name" value={city} onChange={e => setCity(e.target.value)} />
//     <Form.Text className="text-muted">
//       We'll never tell your Mom about your crime.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>City Name </Form.Label>
//     <Form.Control type="text" placeholder="Password" value={profile} onChange={e => setProfile(e.target.value)} />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

// <form onSubmit={handleSubmit}>
// <br></br>
// <label>
// Profile Name 
// <input
//   type="text"
//   value={city}
//   onChange={e => setCity(e.target.value)}
// />
// </label>
// <br></br>
// <label>
//     City Name 
// <input
//   type="text"
//   value={profile}
//   onChange={e => setProfile(e.target.value)}
// />
// </label>

// <br></br>
// <input type="submit" value="Submit" />
// </form>



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       header: "",
//       email: "",

//     }
//   }
// }
