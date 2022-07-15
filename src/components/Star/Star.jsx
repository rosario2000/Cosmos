
import Emb from '../Emb/Emb';
import '../Star/star.css';

const Star = () => {
      
    

    return ( 
        <div className='s'>
            <Emb path="https://slowe.github.io/VirtualSky/embed?projection=stereo"/>
            <p className='info'>For More options, Press <button>?</button> on the top right corner</p>
            

                <div className = "use container-fluid">
                    <h2>Key Shortcuts</h2>

                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>a</button>  {"->"} Toggle Atmosphere
                        </div>
                        <div className="s-sc col-md-4">
                            <button>h</button>  {"->"} Change map projection
                        </div>
                        <div className="s-sc col-md-4">
                            <button>i</button>  {"->"} Toggle Atmosphere
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>,</button>  {"->"} Toggle Ecliptic line
                        </div>
                        <div className="s-sc col-md-4">
                            <button>;</button>  {"->"} Toggle meridian line
                        </div>
                        <div className="s-sc col-md-4">
                             <button>a</button>  {"->"} Toggle Azimuthal grid
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>m</button>  {"->"} Toggle galactic grid
                        </div>
                        <div className="s-sc col-md-4">
                            <button>M</button>  {"->"} Toggle galactic plane
                        </div>
                        <div className="s-sc col-md-4">
                             <button>q</button>  {"->"} Toggle cardinality points
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>s</button>  {"->"} Toggle stars
                        </div>
                        <div className="s-sc col-md-4">
                            <button>S</button>  {"->"} Toggle star labels
                        </div>
                        <div className="s-sc col-md-4">
                             <button>p</button>  {"->"} Toggle Planet/Sun/Moon
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>u</button>  {"->"} Toggle Planet/Sun/Moon
                        </div>
                        <div className="s-sc col-md-4">
                            <button>o</button>  {"->"} Toggle planet orbits
                        </div>
                        <div className="s-sc col-md-4">
                             <button>c</button>  {"->"} Toggle constellation lines
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>v</button>  {"->"} Toggle constellation names
                        </div>
                        <div className="s-sc col-md-4">
                            <button>b</button>  {"->"} Toggle constellation bounds
                        </div>
                        <div className="s-sc col-md-4">
                             <button>k</button>  {"->"} Set time rete to zero
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>8</button>  {"->"} Set time to now
                        </div>
                        <div className="s-sc col-md-4">
                            <button>l</button>  {"->"} Increase time speed
                        </div>
                        <div className="s-sc col-md-4">
                             <button>j</button>  {"->"} Decrease time speed
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>-</button>  {"->"} One day back
                        </div>
                        <div className="s-sc col-md-4">
                            <button>=</button>  {"->"} One day forward
                        </div>
                        <div className="s-sc col-md-4">
                             <button>{"["}</button>  {"->"} One week back
                        </div>
                    </div>
                    <div className="row">
                        <div className="s-sc col-md-4">
                            <button>{"]"}</button>  {"->"} One Week forward
                        </div>
                        <div className="s-sc col-md-4">
                            <button>%</button>  {"->"} Rotate left
                        </div>
                        <div className="s-sc col-md-4">
                             <button>'</button>  {"->"} Rotate right
                        </div>
                    </div>

                </div>
                <div className='mob'>
                    {"("} Use Desktop for better experience {")"}
                </div>

        </div>
     );
}
 
export default Star;