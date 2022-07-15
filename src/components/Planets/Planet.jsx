import Disp from '../Disp/Disp';
import "../Planets/planet.css"
import useFetch from '../useFetch';

const Planet = () => {

     const {obj,isPending,error} = useFetch("https://api.le-systeme-solaire.net/rest/bodies/","Bodies");
    
    return ( 
         <div className='myp'>
            {error && <div className='load'> {error} </div>}
            {isPending && <div className='load'> <h2>Loading data ...</h2></div>}
            {obj &&
                <div className='pl'> 
                    <Disp planets = {obj.filter( (cur) =>{
                        return cur.bodyType === "Planet";
                    })} title={"Planets"} /> 
                </div>
            }
            {obj && 
                <div className='moon'> 
                    <Disp planets = {obj.filter( (cur) =>{
                       return cur.bodyType === "Moon";
                    })} title={"Moons"} /> 
                </div>
            }
            {obj && 
                <div className='stars'> 
                    <Disp planets = {obj.filter( (cur) =>{
                       return cur.bodyType === "Star";
                    })} title={"Stars"} /> 
                </div>
            }
            {obj && 
                <div className='ast'> 
                   <Disp planets = {obj.filter( (cur) =>{
                       return cur.bodyType === "Asteroid";
                    })} title={"Asteroids"}/> 
                </div>
            }
            
            {obj && 
                <div className='com'> 
                   <Disp planets = {obj.filter( (cur) =>{
                       return cur.bodyType === "Comet";
                    })} title={"Comets"} /> 
                </div>
            }
         </div>
    );
}
 
export default Planet;