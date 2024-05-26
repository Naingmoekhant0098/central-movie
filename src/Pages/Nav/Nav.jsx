import React, { useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo2 from './logo2.png'
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
    setShow(false)
    
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
      <nav className={`navbar position-fixed w-100 py-2 px-3 ${showNavbar}`}>
        <div class="container-fluid header">
        
          <Link to='/'> <img src={logo2} className='headerImg' alt=''/> </Link>

          <div className="d-flex">
          <CiSearch className="navBar mx-1" onClick={()=>clickHandler()}/>
          <FaBars className="navBar mx-1" onClick={()=>navHandler()}/>
         
          </div>

          <div className={`Links mx-auto ${showNav && 'showNav'}`}>
            <Link to={"/explore/movie"} className="link" onClick={()=> setShowNav(false)}> Movie</Link>
            <Link to={"/explore/tv"} className="link" onClick={()=> setShowNav(false)}> Tv Series</Link>
             
            <Link to={''} className="link" onClick={()=> setShowNav(false)}> About</Link>
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
