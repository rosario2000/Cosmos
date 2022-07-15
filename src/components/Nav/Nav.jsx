import './nav.css';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {

    const {loginWithRedirect,logout,user,isLoading} = useAuth0();

    return (
        <div className="n container-fluid">
            

            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></button>
            
            <div className='n-log'>
            {!isLoading && !user && (
                <button className='btn btn-block'onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            )}
            {!isLoading && user && (
                <div>
                <Link to = "/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg></Link> {"  "}
                <button className='btn btn-block'onClick={() => logout()}>
                    Log Out
                </button>
                </div>
            )}
            </div>

            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            
              <div className="offcanvas-header">
                <Link to="/"><h2 id="offcanvasTopLabel">Beyond</h2></Link>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body container-fluid">
                  <Link to="/"><h6>Home</h6></Link>
                  <Link to="/Star"><h6>Counting Stars</h6></Link>
                  <Link to="/Planet"><h6>Planetorium</h6></Link>
              </div>
            </div>

        </div>
    );
}

export default Nav;