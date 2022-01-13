import {Main} from './../main/Main.js'
import SideBar from '../SideBar/SideBar'
// import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';
import useWindowDimensions from '../Context/dimensions'

import './App.css';

function App() {

  const { width } = useWindowDimensions();

  return (
    <>

      <SideBar />
      {/* <SocialMediaBar /> */}

      <div className='general--container'>
        <Main />
      </div>

    </>
  );
}

export default App;