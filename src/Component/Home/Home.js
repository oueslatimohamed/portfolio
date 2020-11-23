import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import Cartoon from './bg.png';


class Home extends React.Component {
  
    render(){
        return(
            <div className="home">
                <div className="text-typing">
                <Typical
            steps={['Hi', 1000, "hello I'am Mohamed Oueslati", 1000]}
            loop={Infinity}
            wrapper="h3"
                 />
                 <p>I'am developper web and mobile</p>
            </div>
            <div className="cartoon">
                <img className="img" alt="developper" src={Cartoon} />
            </div>
            </div>
            
        );
    }
}
export default Home;