import React from 'react';
import './Navbar.css';
import Logo from './logo.png';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open : false,
        };
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen () {
        this.setState(state => ({
            open : !this.state.open
        }));
    }
    render() {
        return (
            <div>
              <nav>
                  <div className="logo"><img src={Logo} alt="logo"/></div>
                  <ul className="Nav-links" style={{transform : this.state.open  ? "translateX(0px)" : ""}}>                      
                      <a href><li>Home</li></a>
                      <a href><li>Skils</li></a>
                      <a href><li>Portfolio</li></a>
                      <a href><li>About</li></a>
                      <a href><li>Contact</li></a>
                  </ul>
                  <i onClick ={this.setOpen} className={this.state.open ? "fas fa-times" : "fas fa-bars"}></i>
              </nav>
            </div>
          
        );
    }
}



export default Navbar;