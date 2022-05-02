import React,{Component} from "react";
import axios from "axios";
class Query2 extends Component{
  constructor(props) {
    super(props);
    this.state = {timeStamp: '',crop:'',temp:'',humidity:'',soil:'',growth:'', location:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios.get("https://1317-ignitehq-cli-5f26k0ud6rw.ws-us39.gitpod.io/cosmonaut/farmchain/farmchain/location_data/"+ this.state.timeStamp + '/'+ this.state.location ,{
      headers:{
        accept: 'application/json',
      }
    })
      .then(res => {
        this.setState({
          crop:res.data.locationData.crop,
          temp:res.data.locationData.temperature,
          humidity:res.data.locationData.humidity,
          soil:res.data.locationData.soilMoisture,
          growth:res.data.locationData.growthPercentage,
        })
        // console.log(res);
      })
      .catch(()=>{
        alert("No attributes listed for given location and time stamp")
      })
    event.preventDefault();
    
  }
  
  render()
  {
    return(
      <div>
      <h1>
        Get Attributes of given Location and Time Stamp
      </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Time Stamp:
          <input type="text" name="timeStamp" value={this.state.timeStamp} onChange={this.handleChange} />
        </label><br></br>
        <label>
          Location:
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
        </label><br></br>
        <input type="submit" value="Submit" />
      </form>
      <form>
      <label>
          Crop:
          <input type="text" name="crop" value={this.state.crop} readOnly/>
        </label><br></br>
        <label>
          Temperature:
          <input type="text" name="temp" value={this.state.temp} readOnly/>
        </label><br></br>
        <label>
          Humidity:
          <input type="text" name="humidity" value={this.state.humidity} readOnly/>
        </label><br></br>
        <label>
        Soil Moisture :
          <input type="text" name="soil" value={this.state.soil} readOnly/>
        </label><br></br>
        <label>
        Growth Percentage :
          <input type="text" name="growth" value={this.state.growth} readOnly/>
        </label><br></br>
      </form>


    </div>
    
    )
  }
}

  
export default Query2;