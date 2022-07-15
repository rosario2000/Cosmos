import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import '../Disp/Disp.css';
import ear from "../img/Planets/Earth.png";
import mer from "../img/Planets/Mercury.png";
import ven from "../img/Planets/Venus.png";
import jup from "../img/Planets/Jupiter.png";
import mar from "../img/Planets/Mars.png";
import sat from "../img/Planets/Saturn.png";
import ura from "../img/Planets/Uranus.png";
import nep from "../img/Planets/Neptune.png";
import sun from "../img/Planets/Sun.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Disp = ({planets,title}) => {
    return ( 
        <div className="c">
        <h1>{title}</h1>
        <Carousel 
            responsive={responsive}
            centerMode={true}
            infinite={true}
        >
            {
                planets.map( (planet) =>{
                    return(
                        <div className="c-card" key={planet.id}>
                        <Link to={"/"+planet.id} style={{margin:"0px", padding: "0px"}} key={planet.id}>
                                {planet.englishName === "Sun" && 
                                   <img src={sun} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Earth" && 
                                   <img src={ear} className="img-fluid" alt={planet.name}/>
                                } 
                                {planet.englishName === "Mercury" && 
                                   <img src={mer} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Venus" && 
                                   <img src={ven} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Mars" && 
                                   <img src={mar} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Jupiter" && 
                                   <img src={jup} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Saturn" && 
                                   <img src={sat} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Uranus" && 
                                   <img src={ura} className="img-fluid" alt={planet.name}/>
                                }
                                {planet.englishName === "Neptune" && 
                                   <img src={nep} className="img-fluid" alt={planet.name}/>
                                }

                                <h4>{planet.englishName}</h4>
                                <i>{"("+planet.name+")"}</i>
                                

                        </Link>
                        </div>
                    );
                })
            }
        </Carousel>
        </div>
     );
}
 
export default Disp;