import React, { useContext, useEffect } from 'react';
import { NavContext } from '../../../App';
import NavBar from '../../Navbar/NavBar';

const Header = () => {
    const [navItem] = useContext(NavContext)
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <header>
                <NavBar />
                <div className="header-info">

                   {
                       navItem === 'home' && <>  <h1>WHAT WOULD YOU LEARN?</h1>
                       <h6>Increase your expertise in business, technology and personal development</h6>
                       <div class="search-container mt-4">
                           <input type="text" placeholder="Search.." autoComplete="off" className="w-100" name="search" />
                           <button type="submit" className="">Search</button>
                       </div> </>
                   }

                   {
                       navItem === "courses" && <h1 className="border-style ">Courses</h1>
                   }
                     {
                       navItem === "about" && <h1 className="border-style">About Arp</h1>
                   }    
                   {
                       navItem === "blog" && <h1 className="border-style">Arp Blog</h1>
                   }
                     {
                       navItem === "courseDetails" && <h1 className="border-style">Details</h1>
                   }
                </div>
            </header>

        </>
    );
};

export default Header;