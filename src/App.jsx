import Hero from "./components/Hero";
import Demo from "./components/Demo";
import bgImage from './video/background-img.mp4';

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
      <video  autoPlay loop muted>
         <source  src={bgImage} type="video/mp4" />
     </video>
       
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
