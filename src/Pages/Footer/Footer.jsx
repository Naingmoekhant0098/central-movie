import React from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <div className='footerContainer'>
       
<div className="container">
  <footer
          className="text-center text-lg-start text-white">    
    
    <section className="py-3">
      <div className="container text-center text-md-start mt-5">
         
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px',backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
           
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                />
              <p>
              <a href="#!" className="">FAQS</a>
            </p>
            <p>
              <a href="#!" className="">About</a>
            </p>
            <p>
              <a href="#!" className="">Contact</a>
            </p>
            <p>
              <a href="#!" className="">Sign</a>
            </p>
          </div>
           
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
                 <p>
              <a href="#!" className=''>Moives</a>
            </p>
            <p>
              <a href="#!" className=" ">TvSeries</a>
            </p>
            {/* <p>
              <a href="#!" className=" ">Help</a>
            </p>
            
            <p>
              <a href="#!" className=" ">Help</a>
            </p> */}
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p><i className="fas fa-home mr-3"></i> Mandalay , Myanmar</p>
            <p><i className="fas fa-envelope mr-3"></i> movie@example.com</p>
            
          </div>
          
        </div>
       
      </div>
    </section>
     
    
     
  </footer>
   

</div>
 
    </div>
  )
}

export default Footer