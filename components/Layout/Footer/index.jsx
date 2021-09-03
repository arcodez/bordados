import * as styles from "./style.js";

export const Footer = () => (
  <footer className="container">
    <div className="info">
      <div className="logo">Bordados Arcodez</div>
      <div className="column">
        <h3>Why this company?</h3>
        <a href="#" className="link">
          Lorem, ipsum dolor.
        </a>
        <a href="#" className="link">
          Omnis, molestias numquam.
        </a>
        <a href="#" className="link">
          Quod, quis rem!
        </a>
        <a href="#" className="link">
          Nesciunt, libero doloribus.
        </a>
      </div>
      <div className="column">
        <h3>Benefits</h3>
        <a href="#" className="link">
          Lorem, ipsum dolor.
        </a>
        <a href="#" className="link">
          Omnis, molestias numquam.
        </a>
        <a href="#" className="link">
          Quod, quis rem!
        </a>
        <a href="#" className="link">
          Nesciunt, libero doloribus.
        </a>
      </div>
      <div className="column">
        <h3>Company</h3>
        <a href="#" className="link">
          Lorem, ipsum dolor.
        </a>
        <a href="#" className="link">
          Omnis, molestias numquam.
        </a>
        <a href="#" className="link">
          Quod, quis rem!
        </a>
        <a href="#" className="link">
          Nesciunt, libero doloribus.
        </a>
      </div>
    </div>
    <div className="sub_info"></div>
    <style jsx>{`
        footer {
         margin: 20px;
        }

        .logo {
            margin-top: -70px; 
            /* min-height: 100%; */
        }

      .info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .column {
        display: flex;
        width: 25%;
        flex-direction: column;
        margin 0 20px;
      }
      .link {
          color: #c8c7c7;
      }
      .link:hover {
        color: #ffff;
      }
    `}</style>
  </footer>
);
