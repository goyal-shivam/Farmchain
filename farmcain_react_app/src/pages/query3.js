// import React,{Component} from "react";

// class Query3 extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {timeStamp: '',location:''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
  
//   render()
//   {
//     return(
//       <div>
//       <h1>
//         Query 3
//       </h1>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Time Stamp:
//           <input type="text" name="timeStamp" value={this.state.timeStamp} onChange={this.handleChange} />
//         </label><br></br>
//         <label>
//           Location:
//           <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
//         </label><br></br>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
    
//     )
//   }
// }

  
// export default Query3;