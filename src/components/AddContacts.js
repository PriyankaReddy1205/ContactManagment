// import React, { Component } from "react";

// class AddContacts extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email:"",
//       phone: "",
//     };
//   }

//   handleChange = (inputType,e) => {
//     if (inputType === "name") {
//       this.setState({
//         name: e.target.value,
//       });
//       return;
//     }
//     this.setState({
//       email: e.target.value,
//     });
//     this.setState({
//       phone: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name,email,phone } = this.state;
//     const { addContact } = this.props;
//     if (name && phone && email) {
//       addContact(name,email, phone);
//       this.setState({
//         name: "",
//         email:"",
//         phone: "",
//       });
//     }
//   };

//   render() {
//     const { name,email, phone } = this.state;
//     return (
//       <div id="add-contacts-container">
//         <h1>Add Contact</h1>
//         <form>
//           <input
//             placeholder="Enter Name"
//             value={name}
//             required
//             onChange={(e) => this.handleChange("name", e)}
//           />
//            <input
//             placeholder="EnterEmail"
//             value={email}
//             required
//             onChange={(e) => this.handleChange("email", e)}
//           />
//           <input
//             placeholder="Enter Phone"
//             value={phone}
//             required
//             onChange={(e) => this.handleChange("phone", e)}
//           />
//           <br />
//           <button onClick={this.handleSubmit}>Add Contact</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContacts;

import React, { Component } from "react";

class AddContacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (inputType, e) => {
    const value = e.target.value;
    if (inputType === "name") {
      this.setState({
        name: value,
      });
    } else if (inputType === "email") {
      this.setState((prevState) => ({
        email: value !== prevState.phone ? value : prevState.email,
      }));
    } else if (inputType === "phone") {
      this.setState((prevState) => ({
        phone: value !== prevState.email ? value : prevState.phone,
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { addContact } = this.props;
    if (name && phone && email) {
      addContact(name, email, phone);
      this.setState({
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div id="add-contacts-container">
        <h1>Add Contact</h1>
        <form>
          <input
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => this.handleChange("name", e)}
          />
         <br />
          <input
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => this.handleChange("email", e)}
          />
          <br />
          <input
            placeholder="Enter Phone"
            value={phone}
            required
            onChange={(e) => this.handleChange("phone", e)}
          />
          <br />
          <button onClick={this.handleSubmit} className="sbt">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContacts;
