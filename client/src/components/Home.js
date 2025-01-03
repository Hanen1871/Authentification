import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

function Home() {
    const [click, setClick] = useState(false);



  return (

<div>
    {/* <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
    <script src="https://kit.fontawesome.com/851015a019.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head> */}
    <div className="container">
        <div className="navbar">
            <ul>
          <Link  to="/login">


      

                <li onClick={()=>setClick("LOGIN")}> <a   href="#login" className="navbarr">LOGIN</a></li>
                </Link>



       






                <li><a href="#footer" className="navbarr">CONTACT</a></li>
                <li><a href="#" className="navbarr">DESIGNS</a></li>
                <li><a href="#" className="navbarr">WORKS</a></li>
                <li><a href="#" className="navbarr">PRODUCTS</a></li>
              

            </ul>
        </div>
        <div className="title">
            <h1>Interior Design</h1>
            <h2>Architect Mariem Abed</h2>
            <p>Simple And Modern Way To Your Good Place</p>
        </div>
        <div className="sec1" id="size">
            <div className="info-bar">
                <h1>Products</h1>
                <p>Their contributions span a variety of styles, from minimalistic modern to richly
                     textured traditional designs, each reflecting a deep understanding of cultural influences and personal expression. </p>
                <button>More Info</button>
            </div>
        </div>
        <div className="sec2" id="size">
            <div className="info-bar">
                <h1>Works</h1>
                <p>From bold, contemporary styles 
                 to timeless, classNameic designs, women designers often bring a unique touch that harmonizes aesthetics with practicality.
                  Their work not only enhances physical spaces but also fosters
                 inclusivity and sustainability, reflecting a profound commitment to improving the lives of those who inhabit them</p>
                <button>More Info</button>
            </div>
        </div>
        <div className="sec3" id="size">
            <div className="info-bar">
                <h1>Designs</h1> <p> The field of interior design, combining creativity, functionality, and emotional resonance 
                to create spaces that inspire and comfort. Their ability to blend artistic vision with a deep understanding of how spaces
                 influence behavior and well-being has transformed homes,
                 workplaces, and public areas around the world. </p>
                <button>More Info</button>
            </div>
        </div>
        <div className="footer" id="footer">
            <div className="arc">
                <div className="info">
                    <h3>Mariem Abed</h3><br/>
                    <b>Status</b>Immortal(formerly)<br/>
                    <b>Species</b>Demon(formerly)<br/><br/>
                    <b>Birthday</b>0000<br/><br/>
                    <b>Age</b>4.543 billion (2019)<br/><br/>
                    <b>mariemabed@gmail.com</b><br/>
                    <b>Call</b>22055055<br/><br/>
                </div>
                <img src="https://i.ebayimg.com/images/g/LfYAAOSwgMljvh3B/s-l1600.jpg" style={{marginLeft:"30px",width:"250px", height:"250px", borderRadius:"250px"}}/>
            </div>
            <div className="social">
                <ul className="sociallist">
                    <li><a href="#" className="socialicon"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" className="socialicon"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="socialicon"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="socialicon"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            </div>

        </div>



        
    </div>
)
}

export default Home