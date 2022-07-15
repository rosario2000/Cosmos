import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import "../Info/Info.css";
import ear from "../img/Planets/Earth.png";
import mer from "../img/Planets/Mercury.png";
import ven from "../img/Planets/Venus.png";
import jup from "../img/Planets/Jupiter.png";
import mar from "../img/Planets/Mars.png";
import sat from "../img/Planets/Saturn.png";
import ura from "../img/Planets/Uranus.png";
import nep from "../img/Planets/Neptune.png";
import sun from "../img/Planets/Sun.png";

const Info = () => {

    const {id} = useParams();
    
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;
     
    const [obj,setObj] = useState(null);
    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then( (res) =>{
            if(!res.ok){
                throw Error('Server Error');
            }
            return res.json();
        })
        .then( (data) =>{
            setObj(data);
            setIsPending(false);
            setError(null);
        })
        .catch( (err) => {
            if(err.name !== 'AbortError'){
                setIsPending(false);
                setError(err.message);
            }
            else console.log("Fetch Aborted :)");
        })
        return () => abortCont.abort();
    },[url]);
     
    
    return ( 
         <div className="i">
            {error && <h3 className="load">{error}</h3>}
            {isPending && <h3 className="load">Loading content.. :{")"}</h3>}
            {obj && 
            <div className="i-cont container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{obj.englishName}</h1>
                        <p>{"("+obj.name+")"}</p><br/><br/>
                         

                        <h4>Basic Information</h4>
                        <p>
                            Body Type : {obj.bodyType}<br/>
                            Total Moons : {obj.moons? obj.moons.length:0}<br/>
                            Gravity : {obj.gravity?obj.gravity+" m s^-2" : ("Unknown")}<br/>
                            Mass : {obj.mass?(obj.mass.massValue+" * 10^"+obj.mass.massExponent+" Kg") : ("Unknown")}<br/>
                            Volume : {obj.vol?(obj.vol.volValue+" * 10^"+obj.vol.volExponent+" Kg m^-3") : ("Unknown")}<br/>
                            Radius : {obj.meanRadius?obj.meanRadius+" Km":"Unknown"}<br/>
                            Orbit Time : {obj.sideralOrbit?obj.sideralOrbit+" Days":"Unknown"}<br/>
                            Rotation : {obj.sideralRotation?obj.sideralRotation+" Hours":"Unknown"}<br/>
                            Temperature : {obj.avgTemp?obj.avgTemp+" Kelvin":"Unknown"}<br/>
                        </p>
                    </div>

                    <div className="col-md-6">
                        {obj.englishName === "Sun" && 
                           <img src={sun} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Earth" && 
                           <img src={ear} className="img-fluid" alt={obj.name}/>
                        } 
                        {obj.englishName === "Mercury" && 
                           <img src={mer} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Venus" && 
                           <img src={ven} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Mars" && 
                           <img src={mar} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Jupiter" && 
                           <img src={jup} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Saturn" && 
                           <img src={sat} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Uranus" && 
                           <img src={ura} className="img-fluid" alt={obj.name}/>
                        }
                        {obj.englishName === "Neptune" && 
                           <img src={nep} className="img-fluid" alt={obj.name}/>
                        }
                    </div>

                </div>
                <div className="i-add">
                <h4>Additional Information</h4>
                    <p>
                        Orbit Diameter : {obj.semimajorAxis?obj.semimajorAxis+" Km" : ("Unknown")}<br/>
                        Eccentricity : {obj.eccentricity? obj.eccentricity:"Unknown"}<br/>
                        Escape Velocity : {obj.escape?obj.escape+" m s^-1" : ("Unknown")}<br/>
                        Flattening : {obj.flattening?obj.flattening : ("Unknown")}<br/>
                        {obj.bodyType === "Moon" && <div>Around Planet : {obj.aroundPlanet?obj.aroundPlanet.planet : ("Unknown")}<br/></div>}
                        Axial Tilt : {obj.axialTilt?obj.axialTilt + " Deg":"Unknown"}<br/>
                        Min distance from sun : {obj.perihelion?obj.perihelion+" Km":"Unknown"}<br/>
                        MAx distance from sun : {obj.aphelion?obj.aphelion+" Km":"Unknown"}<br/>
                        Discovered By : {obj.discoveredBy.length?obj.discoveredBy:"Unknown"}<br/>
                    </p>
                </div>
            </div>
            }
         </div>
     );
}
 
export default Info;