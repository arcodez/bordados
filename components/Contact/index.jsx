
export const Contact = () => (
    <div className="contact">
        <h1 className="contact_title">Contact</h1>

        <div className="contact-icons container">
            <div className="contact-icon">
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="" />
                </div>
                <div className="contact-info">

                </div>
            </div>

            <div className="contact-icon">
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="" />
                </div>

                <div className="contact-info">

                </div>
            </div>

            <div className="contact-icon">
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
                </div>
                <div className="contact-info">

                </div>
            </div>

            <div className="contact-icon">
                <div className="icon">
                    <img src="https://cdn-icons.flaticon.com/png/512/2072/premium/2072130.png?token=exp=1635090224~hmac=082dda2c15218ffa15d32e7dcdb25034" alt="" />
                </div>

                <div className="contact-info">

                </div>
            </div>
        </div>

        <div className="contact-section">
            <div className="contact-form">
                <h2>Contact Us</h2>

                <form action="">
                    <div className="two-form">
                        <div className="form-group">
                            <label className="label" htmlFor="name">Name</label>
                            <input className="form-control" type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="email">Email</label>
                            <input className="form-control" type="email" placeholder="Name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="name">Subjet</label>
                        <input className="form-control" type="text" placeholder="Subjet" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Message</label>
                        <input className="form-control" type="text" placeholder="Message" />
                    </div>
                    <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
            </div>

            <div className="contact-image">
                <img src="/contact.svg" alt="Contact Image" />
            </div>
        </div>


        <style jsx>{`
        .contact {
            min-height: 100vh;
        }

        .contact_title {
            text-align: center;
            border-bottom: 3px solid var(--azul);
            width: 20%;
            margin: 0 auto 20px;
        }

        .contact-icons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin: 0 auto;
            margin-bottom: 40px;
        }

        .contact-icon {
            /* min-width: 100px; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .icon {
            width: 120px;
            background-color: var(--azul);
            border-radius: 100%;
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .icon img {
            width: 100%;
        }

        .contact-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            /* background: red; */
            width: 90%;
            margin: 0 auto;
            position: relative;

        };

        .contact-form {
            /* background: green; */
            padding: 0 10px;    
            margin: 0 20px;
            margin-left: 25%;   

        }

        .two-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .contact-image {
            /* background: greenyellow; */
            width: 500px;
        }
        .contact-image img {
            width: 100%;
        }

        .form-group:nth-child(1){
            margin-right: 10px;
        }

      /*   .form-group {
            width: 100%;
        }
        .form-control {
            width: 100%;
        }
        .label {
            text-transform: uppercase;
        } */

    /*! CSS Used from: https://preview.colorlib.com/theme/bootstrap/contact-form-03/css/A.style.css.pagespeed.cf.LMzeAtlgi0.css */
*,
*::before,
*::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
input {
    overflow: visible;
}
.form-control {
    /* display: block; */
    width: 100%;
    /* height: calc(1.5em + 0.75rem + 2px); */
    /* padding: 0.375rem 0.75rem; */

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
    .form-control {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
    }
}
.form-control::-ms-expand {
    background-color: transparent;
    border: 0;
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.form-control::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1;
}
.form-control:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
}
.form-control::-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
}
.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}
.form-control:disabled {
    background-color: #e9ecef;
    opacity: 1;
}
.form-group {
    margin-bottom: 1rem;
}
@media print {
    *,
    *::before,
    *::after {
        text-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
}       
.form-control {
    height: 36px;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border-radius: 2px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-control::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}
.form-control::-moz-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}
.form-control:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}
.form-control:-moz-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}
.form-control:focus,
.form-control:active {
    border-color: #46b5d1 !important;
}
.contactForm .label {
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
}
.contactForm .form-control {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0;
}
#contactForm .form-control {
    font-size: 16px;
}

/* Button Css */
/*! CSS Used from: https://preview.colorlib.com/theme/bootstrap/contact-form-03/css/A.style.css.pagespeed.cf.LMzeAtlgi0.css */
*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box;}
input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}
input{overflow:visible;}
[type="submit"]{-webkit-appearance:button;}
[type="submit"]::-moz-focus-inner{padding:0;border-style:none;}
.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;-o-transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;}
@media (prefers-reduced-motion:reduce){
.btn{-webkit-transition:none;-o-transition:none;transition:none;}
}
.btn:hover{color:#212529;text-decoration:none;}
.btn:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25);}
.btn:disabled{opacity:.65;}
.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff;}
.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc;}
.btn-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,143,255,.5);box-shadow:0 0 0 .2rem rgba(38,143,255,.5);}
.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff;}
@media print{
*,*::before,*::after{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
}
.btn{padding:12px 16px;cursor:pointer;border-width:1px;border-radius:5px;font-size:14px;font-weight:400;-webkit-box-shadow:0 10px 20px -6px rgba(0,0,0,.12);-moz-box-shadow:0 10px 20px -6px rgba(0,0,0,.12);box-shadow:0 10px 20px -6px rgba(0,0,0,.12);position:relative;margin-bottom:20px;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;}
@media (prefers-reduced-motion:reduce){
.btn{-webkit-transition:none;-o-transition:none;transition:none;}
}
.btn:hover,.btn:active,.btn:focus{outline:none!important;}
.btn.btn-primary{background:#46b5d1!important;border-color:#46b5d1!important;color:#fff;}
.btn.btn-primary:hover,.btn.btn-primary:focus{border-color:#2d9bb7!important;background:#2d9bb7!important;}


    @media screen and (max-width: 1000px) {
        .contact-image {
            width: 300px;
            position: absolute;
            bottom: 4%;
            right: 10%;
        }
    }

    @media screen and (max-width: 735px) {
        .contact-icons {
            grid-template-columns: 1fr 1fr;
            gap: 10px; 
            margin-bottom: 40px;
        }
        .contact-section {
            grid-template-columns: 1fr;
        }
        .form-group:nth-child(1) {
            margin-right: 0;
        }

        .two-form {
            grid-template-columns: 1fr;

        }
        .contact-form {
            margin-left: 0;
        }
        .contact-image { 
            display: none;  
            position: relative;
            margin: 0 auto;
        }
     }
    
     @media screen and (max-width: 400px) {
   
     }

        `}</style>
    </div>
)