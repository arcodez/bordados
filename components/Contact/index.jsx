
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
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25471.png" alt="" />
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

        <center>
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

                    </form>
                </div>

                <div className="contact-image">
                    <img src="/contact.svg" alt="Contact Image" />
                </div>
            </div>
        </center>


        <style jsx>{`
        .contact {
            height: 100vh;
        }

        .contact_title {
            text-align: center;
        }

        .contact-icons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 0 auto;
        }

        .contact-icon {
            min-width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .icon {
            width: 130px;
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
            background: red;
            margin: 0 auto;
            width: 90%;
            justify-content: center;
        }

        .contact-form {
            background: green;
            /* display: flex; */
            /* flex-direction: column;  */
            /* align-items: center; */
            margin: 0 20px;
        }

        .two-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .contact-image {
            background: greenyellow;
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
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
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

        `}</style>
    </div>
)