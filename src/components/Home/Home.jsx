import "./home.css";
import mp from "../img/moon.mp4";
import skm from "../img/skym.svg";
import inf from "../img/inf.svg";
import etu from "../img/etu.svg";
import rt from "../img/rt.svg";
import ReactPlayer from 'react-player';

const Home = () => {
    return ( 
        <div className="h container-fluid">

            <div className="row">
                <div className="h-cont col-md-6">
                    <div className="h-cont-wrapper">
                        <h3>Explore the night sky with...</h3>
                       <h1>Beyond</h1>
                       <p>A web application for Astro-Geeks. Let your Journey to the space begin ;{" )"}</p>
                    </div>
                </div>

                <div className="h-image col-md-6">
                    
                <ReactPlayer url={mp} playing={true} loop={true} className="img-fluid"/>
                       
                </div>
            </div>

            <hr/>

            <div className="abt row">
                <div className="col-md-12">
                <div className="abt-wrap">
                    <h3>Real time SKY MAP</h3><br/>
                     <p>
                        <b>Counting Stars</b> is a section that shows the real time Night sky as seen from earth.
                        With this web application, You can see constellations, Names of stars, Planets, Orbits, Equatorial grids and much more!
                        This makes so easy for users, to explore the world <b>BEYOND</b>.
                        
                    </p>
                    <img src={skm} className="img-fluid" alt="img"/>
                </div>
                </div>
            </div>


            <div className="card-list row">


                <div className="h-card col-sm-4">
                    <h2>Easy To use</h2>
                    <img src={etu} className="img-fluid" alt="img"/>
                    <p><b>Beyond</b> is an easy-to-use web application.
                    It's Simple and easy to understand User interface
                    helps users observer the night sky better.</p>
                </div>
                <div className="h-card col-sm-4">
                    <h2>Informative</h2>
                    <img src={inf} className="img-fluid" alt="img"/>
                    <p><b>Beyond</b> is a highly informative web application.
                    It lets us know about various stars, constellations and 
                    their names and positions in the night sky.</p>
                </div>
                <div className="h-card col-sm-4">
                   <h2>Real time</h2>
                   <img src={rt} className="img-fluid" alt="img"/>
                   <p><b>Beyond</b> shows us the real time location and
                   orientation of celestial bodies. You can even fast forward, 
                   or slow down the time, or set it to Real time again</p>
                </div>
              
            </div>
            
        </div>
     );
}
 
export default Home;