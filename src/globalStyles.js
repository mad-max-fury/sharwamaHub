const { createGlobalStyle } = require("styled-components");

//create global styles from styled-components
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
    box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      background-color: #fff;
      overflow-x: hidden;
      color: #333;
      }
      a {
        text-decoration: none;

        }`;

export default GlobalStyles;
