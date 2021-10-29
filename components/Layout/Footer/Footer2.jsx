export const Footer2 = () => {
    return (
        <footer>
            <div className="waves">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>

            <ul className="social-icon">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>

            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <p>2021 Arcodez Bordados | All Rights Reserved</p>

            <style jsx>{`

            ul {
                padding-left: 0;
            }

            footer { 
                margin-top: 200px;
                position: relative;
                width: 100%;
                background: #3586ff;
                min-height: 100px;
                padding: 20px 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            footer .social-icon, footer .menu {
             
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px 0;
                flex-wrap: wrap;
            }

            footer .social-icon li, footer .menu li {
            list-style: none;
            }

            footer .social-icon li a  { 
                font-size: 2em;
                color: #fff;
                margin: 0 10px;
                display: inline-block;
                transition: 0.5s;
            }

            footer .social-icon li a:hover { 
                transform: translateY(-10px);
            }

            footer .menu li a  { 
                font-size: 1.2em;
                color: #fff;
                margin: 0 10px;
                display: inline-block;
                opacity: 0.75;

            }
            
            footer .menu li a:hover  { 
                opacity: 1;
            }

            footer p {
                color: #fff;
                /* margin: 15px 20px 15px; */
                text-align: center;
                /* margin-left: 40px; */
                /* margin-top: 15px; */
                /* margin-bottom: 10px; */
                font-size: 1.1em;
            }

            footer .waves {
            position: absolute;
            top: -100px;
            left: 0;
            width: 100%;
            height: 100px;
            background: url("/wave.png");
            background-size: 1000px 100px;
            }

            footer .wave.wave1 { 
                z-index: 1000;
                opacity: 1;
                bottom: 0;
                animation: animateWave 4s linear infinite;
            }

            footer .wave.wave2 {
                z-index: 999;
                opacity: 0.5;
                bottom: 10px;
                animation: animateWave_02 4s linear infinite;
             }

        
            footer .wave.wave3 { 
                z-index: 1000;
                opacity: 0.2;
                bottom: 15px;
                animation: animateWave 3s linear infinite;
            }

            footer .wave.wave4 { 
                z-index: 999;
                opacity: 0.7;
                bottom: 20px;
                animation: animateWave_02 3s linear infinite;
            }

            
            @keyframes animateWave { 
                0% { 
                    background-position-x: 1000px;
                }
                100% { 
                    background-position-x: 0px;
                }
            }

            @keyframes animateWave_02 { 
                0% { 
                    background-position-x: 0px;
                }
                100% { 
                    background-position-x: 1000px;
                }
            }

         `}</style>
        </footer>
    )
}
