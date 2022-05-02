import React,{Component} from "react";
import axios from 'axios';

class Query1 extends Component{
  constructor(props) {
    super(props);
    this.state = {timeStamp: '',crop:'',temp:'',humidity:'',soil:'',growth:'', location:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // console.log(event);
    // alert(event.target.name);
    const name=event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    //curl -X GET "https://1317-ignitehq-cli-5f26k0ud6rw.ws-us39.gitpod.io/cosmonaut/farmchain/farmchain/get_location_by_data/0/0/0/0/0/0" -H  "accept: application/json"
    axios.get('https://1317-ignitehq-cli-5f26k0ud6rw.ws-us39.gitpod.io/cosmonaut/farmchain/farmchain/get_location_by_data/'+ this.state.timeStamp + '/'+ this.state.crop +'/'+this.state.temp +'/'+this.state.humidity +'/'+this.state.soil +'/'+this.state.growth ,{
      headers:{
        accept: 'application/json',
      }
    })
      .then(res => {
        this.setState({
          location:res.data.location
        })
        // alert(res.data.location)
        console.log(res);
      })
      .catch(()=>{
        alert("No matching Location");
      })
      // console.log(this.state)
    event.preventDefault();
    
  }
  
  render()
  {
    return(
      <div>
      <h1>
        Get Location matching to Given Attributes
      </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Time Stamp:
          <input type="text" name="timeStamp" value={this.state.timeStamp} onChange={event => this.handleChange(event)} />
        </label><br></br>
        <label>
          Crop:
          <input type="text" name="crop" value={this.state.crop} onChange={this.handleChange} />
        </label><br></br>
        <label>
          Temperature:
          <input type="text" name="temp" value={this.state.temp} onChange={this.handleChange} />
        </label><br></br>
        <label>
          Humidity:
          <input type="text" name="humidity" value={this.state.humidity} onChange={this.handleChange} />
        </label><br></br>
        <label>
        Soil Moisture :
          <input type="text" name="soil" value={this.state.soil} onChange={this.handleChange} />
        </label><br></br>
        <label>
        Growth Percentage :
          <input type="text" name="growth" value={this.state.growth} onChange={this.handleChange} />
        </label><br></br>
        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" name="location" value={this.state.location } readOnly/>
        </label><br></br>
        </form>

    </div>
    
    )
  }
}

  
export default Query1;