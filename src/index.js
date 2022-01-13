import { findByLabelText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import LogoSlider from './Components/LogoSlider/LogoSlider'


const temp_styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"

}

ReactDOM.render(
  <React.StrictMode>
    {/* <div style={temp_styles}>
      <LogoSlider />
    </div> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
