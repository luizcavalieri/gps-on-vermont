/*eslint-disable*/
import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
// reactstrap components

import { Link } from "react-router-dom";
import { findByLabelText } from "@testing-library/dom";
import { isBlock } from "typescript";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black"style={styles.footer}>
      <Container style={styles.container}>
       <div style={styles.container}> 

        <div style={styles.col1}>
          <ul style={styles.ul}>
              <li><h5><a href=''>About</a></h5></li>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/contact-page`}>Contact</Link></li>
              <li><a href="https://goo.gl/maps/1Uy3tyShraVWj6MP7">Google Map</a></li>
              {/* <li><a href="https://www.facebook.com/gpsonvermont/">Facebook</a></li> */}
          </ul>  
        </div>

        <div style={styles.col1}>
          <ul style={styles.ul}>
              <li><h5><a href=''>Resources</a></h5></li>
              <li ><Link to={`/policy-page`}> Privacy Policy</Link></li>
              {/* <li ><Link to={`/sitemap-page`}>SiteMap</Link></li> */}
              {/* <li ><Link to={`/faq-page`}>FAQ</Link></li> */}
          </ul>  
        </div>

        <div style={styles.col1}>
          <ul style={styles.ul}>
              <li><h5><a href=''>Call Us</a></h5></li>
              <li><a>02 6025 2189</a></li>
              <li><a>0407 157 194</a></li>
              <li><a>0407 224 579</a></li>
              
          </ul>  
        </div>

        <div style={styles.col1}>
          <ul style={styles.ul}>
          
              <li><a  href="https://www.facebook.com/gpsonvermont/"> <img  style={styles.img} src={require('../../assets/img/follow-us-on-facebook.png')} ></img></a></li>
          </ul>  
        </div>
        
        </div>
     
        <div style={styles.copywriter}>
          © {new Date().getFullYear() }
          </div>
    
      </Container>
      
      
    </footer>
  );
}

export default DarkFooter;


let styles= {


  container:{
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    height:'auto',
   // paddingBottom:'100%',

 //   padding: '50px 100px',

  },
  col1:{
    //marginRight:'30px',
    position:'relative',
    //width: '25%',
    marginTop:20,

  },

  ul:{
    listStyle:'none',
    display:'flex',
    flexDirection:'column',
    lineHeight:2,
  },

  copywriter:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:50,

  },

  img:{
    width:150,
    height:'auto',
  },

}

// function DarkFooter() {
//   return (
//     <footer className="footer" data-background-color="black">
//       <Container >
//         <nav >
//           <ul >
//             <li>
//               <a
//                 href=""
//               >
//                 Gps on Vermont
//               </a>
//             </li>
//             <li>
//               {/* <a
//                 href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
//                 target="_blank"
//               >
//                 About Us
//               </a> */}
//             </li>
//             <li>
//               <Link to={`/policy-page`}>  
//                 Privacy Policy
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="copyright" id="copyright">
//           © {new Date().getFullYear()}
//           {/* , Designed by{" "}
//           <a
//             href="https://www.invisionapp.com?ref=nukr-dark-footer"
//             target="_blank"
//           >
//             Invision
//           </a>
//           . Coded by{" "}
//           <a
//             href="https://www.creative-tim.com?ref=nukr-dark-footer"
//             target="_blank"
//           >
//             Creative Tim
//           </a> */}
          
//         </div>
      

//       </Container>
      
      
//     </footer>
//   );
// }

// export default DarkFooter;


