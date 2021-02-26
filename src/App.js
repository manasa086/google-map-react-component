import React,{useState} from 'react';
import { Button } from 'reactstrap';
import "./App.css"
import Map from './Map';
import Map_Loader from "./Map_Loader";
import Map1 from "./Map1";
function App() {

    const [disableButton,setDisableButton]=useState(true);
    const [showRoute,setShowRoute]=useState(false);
    let [sources,setSources]=useState({
      name:"",
      latitude:"",
      longitude:"",
    })
    let [getRoutes,setRoutes]=useState([]);

    const changeInput1=(e)=>{
      setSources({
        ...sources,
        name:e.target.value
      })
    }

    const changeInput2=(e)=>{
      setSources({
        ...sources,
        latitude:e.target.value
      })
    }
    const changeInput3=(e)=>{
      setSources({
        ...sources,
        longitude:e.target.value
      })
    }


    const addLocation=()=>{
      setRoutes([...getRoutes,sources]);
      setDisableButton(false);
      setSources({
        name:"",
        latitude:"",
        longitude:""
      })
    }

    const getRouteOnMap=(e)=>{
      // e.preventDefault();

      setShowRoute(true);

    }
    return (
        <div className="app">
          <div className="location">
           <div className="container">
            <div className="row">
              <div className="col-3">
              <label htmlFor="location name">Location Name</label><br></br>
              <input type="text" placeholder="Location" name="location" id="location" value={sources.name} onChange={changeInput1}></input>
              </div>
              <div className="col-3">
              <label htmlFor="Lat.">Enter Latitude</label><br></br>
            <input type="text" placeholder="Latitude" name="Latitude" id="Latitude" value={sources.latitude} onChange={changeInput2}></input>   
              </div>
              <div className="col-3">
              <label htmlFor="Long.">Enter Longitude</label><br></br>
            <input type="text" placeholder="Longitude" name="Longitude" id="Longitude" value={sources.longitude} onChange={changeInput3} ></input>   
              </div>
              <div className='col-3'>
                <button className="submit" onClick={addLocation}>Submit</button>
              </div>
          </div>
          </div>
            </div>
            <div className="container1">
              <div className="row">
                <div className="col left">
                  <h4>ALL COORDINATES:</h4>
                  <table>
                    <th>My-Coordinates</th>
                    <th className="padding"></th>
                    <th className="padding"></th>
                    <th className="padding">DEFAULT</th>
                    <th className="padding1">DEFAULT</th>
                  </table>
                  <tbody>
                    <tr>
                    <td>1)</td><td>{getRoutes.length>=1?getRoutes[0].name:<span>-----</span>}</td>
                    <td className="padding2"></td> 
                    <td className="padding">{getRoutes.length>=1?getRoutes[0].latitude:<span>-----</span>}</td>
                    <td className="padding3">{getRoutes.length>=1?getRoutes[0].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr>
                    <td>2)</td><td>{getRoutes.length>=2?getRoutes[1].name:<span>-----</span>}</td>
                    <td className="padding2"></td>              
                    <td className="padding">{getRoutes.length>=2?getRoutes[1].latitude:<span>-----</span>}</td>
                    <td className="padding3">{getRoutes.length>=2?getRoutes[1].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr>
                    <td>3)</td><td>{getRoutes.length>=3?getRoutes[2].name:<span>-----</span>}</td>
                    <td className="padding2"></td>
                    <td className="padding">{getRoutes.length>=3?getRoutes[2].latitude:<span>-----</span>}</td>
                    <td className="padding3">{getRoutes.length>=3?getRoutes[2].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr>
                    <td>4)</td><td>{getRoutes.length>=4?getRoutes[3].name:<span>-----</span>}</td>
                    <td className="padding2"></td>
                    <td className="padding">{getRoutes.length>=4?getRoutes[3].latitude:<span>-----</span>}</td>
                    <td className="padding3">{getRoutes.length>=4?getRoutes[3].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr>
                    <td>5)</td><td>{getRoutes.length>=5?getRoutes[4].name:<span>-----</span>}</td>
                    <td className="padding2"></td>
                    <td className="padding">{getRoutes.length>=5?getRoutes[4].latitude:<span>-----</span>}</td>
                    <td className="padding3">{getRoutes.length>=5?getRoutes[4].longitude:<span>-----</span>}</td>
                    </tr>
                  </tbody>
                </div>
                <div className="col-6 right">
        {/* <Map_Loader latitude="13.0827" longitude="80.2707" latitude1="12.9716" longitude1="77.5946" containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />} ></Map_Loader> */}
          {/* <Map lat="13.0827" long="80.2707" lat1="12.9716" long1="77.5946"></Map> */}
         {showRoute && getRoutes.length>=2?<Map lat={getRoutes[0].latitude} long={getRoutes[0].longitude} lat1={getRoutes[1].latitude} long1={getRoutes[1].longitude}></Map>:<Map1></Map1>}
        
        </div>
        <button className={disableButton?"route1":"route"} disabled={disableButton} onClick={getRouteOnMap}>Show Route</button>
        </div>
        
        </div>
        </div>
    )
}

export default App

