import React, { useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
 
const Nav = () => {
  const navigate = useNavigate()
  const [show,setShow] = useState(false);
  const [query,setQuery] = useState();
  const [showNav , setShowNav] = useState(false)
  const[showNavbar , setShowNavBar] = useState('topNav');
  const[scrollY , setScrollY]  = useState(0);
  const clickHandler=()=>{
      setShow(!show)
  }
  const navHandler =()=>{
    setShowNav(!showNav)
    setShow(show)
    
  }

  const searchSubmit=()=>{
    navigate(`/search/${query}`)
  
   }
  const constrolScroll=()=>{
   
    if(window.scrollY >200){
      if(window.scrollY > scrollY){
        setShowNavBar('hideNav')
        
      }else{
        setShowNavBar('showNav')
       
      }
      setScrollY(window.scrollY)
    }else{
      setShowNavBar('topNav')
      
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',constrolScroll)

  },[scrollY])
  return (
    <div>
      <nav className={`navbar position-fixed w-100 py-3 ${showNavbar}`}>
        <div class="container-fluid header">
        
          <Link to='/'> <img src='../logo2.png' className='headerImg' alt=''/> </Link>

          <div className="d-flex">
          <FaBars className="navBar mx-1" onClick={()=>navHandler()}/>
          <CiSearch className="navBar mx-1" onClick={()=>clickHandler()}/>
          </div>

          <div className={`Links mx-auto ${showNav && 'showNav'}`}>
            <Link to={"/explore/movie"} className="link"> Movie</Link>
            <Link to={"/explore/tv"} className="link"> Tv Series</Link>
          </div>
          {
           <form className={`input-group w-auto searchForm ${show && 'active'}`}>
            <input
              type="search"
              class=""
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onKeyUp={(e)=>setQuery(e.target.value)}
            />
             <button className="btn" onClick={()=>searchSubmit()}><CiSearch/></button>
          </form> 
          }
          
        </div>
      </nav>
    </div>
  );
};

export default Nav;
