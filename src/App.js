import React from 'react';
// import logo from './logo.svg';
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './App.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {
      <img src = {require('./Images/menu.png')} className="dropdown"></img>
    }
    {children}
  </a>
));

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// function topbar(props){
//   return
//   <div>

//   </div>
//   ;
// }

function PartOne(props){
  return <div className = "One"> 
  
  
  <div className = "smicons">
  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="facebook" 
  iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)"
   iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="25" />
   <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="twitter" 
   iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" 
   iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="25" />
  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="instagram"
   iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" iconSize="5" roundness="20%" 
   url="https://some-website.com/my-social-media-url" size="25" />
   <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="linkedin" 
   iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" 
   iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="25" />
  </div>
  <div className = "header">
    <button className = "menubuttons">INSPIRATION</button>
    <button className = "menubuttons">WHAT IS GAMBIT</button>
    <button className = "menubuttons">THE PLAYERS</button>
    <img className="gambit" src = {require('./Images/desktop.png')} />
    <button className = "menubuttons">THE GAME</button>
    <button className = "menubuttons">SKILL LEVEL</button>
    <button className = "menubuttons">PHILOSOPHY</button>
    <button className = "menubuttons">LET'S PLAY</button>
    <Dropdown>
      <Dropdown.Toggle  as={CustomToggle} variant="success" id="dropdown-basic" className="dropdown">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  
  <h1> LET'S</h1>
  <h1> PLAY</h1>
  <p className="underhead">PR, SOCIAL MEDIA & INFLUENCERS ENGAGEMENT</p>
  <button className="startButton">START</button>
  </div>;
}

function PartTwo(props){
  return <div className="Two">
    <h5 className = "inspiration">INSPIRATION</h5>
    <div className="parent">
      <img className="parentimg" src = {require('./Images/Ellipse 2 copy 2.png')} />
      <img className="childimg" src = {require('./Images/Layer 50.png')} />
    </div>
    <div className="twoLeft">
      <p className="miniheaders">Chess [noun]: </p>
      <p className="gamedisc">Is the ultimate game of planning and strategy, the sport of intellectuals, 
      and is rumored to have been invented right here in the Middle East over 15 centuries ago.</p>
      <p className="miniheaders">Gambit [noun]: </p>
      <p className="gamedisc">An opening move in chess where a risk is taken to secure an advantageous position.
       An action or set of actions you carry out in order to gain an advantage in a situation or game.
       A remark made to start a conversation with someone </p>
    </div>

  </div>;
}

function PartThree(props){
  return <div className="Three">
    <h5 className = "whoweare">WHO WE ARE</h5>
    <p className = "disc">Gambit Communications is a consultancy founded by Jamal Al Mawed bringing together experienced communications talent spanning agency 
      and client side, corporate and consumer, regional and international.</p>
     <div className="tmp">
      <div className="threeLeft">
    <div className="parentThree">
      <img className="parentThreeimg" src = {require('./Images/Ellipse 3 copy.png')} />
      <img className="childThreeimg" src = {require('./Images/L1.png')} />
    </div>
    <p className="aim">Our aim is to offer you the strategic thinking, digital acumen, communications expertise,  creative executions, 
      influencer relations and practical thinking that will allow you to achieve your business objectives, start conversations 
      and stay one move ahead of your competition.</p></div>
      <div className="threeRight">
    <div className="parentThree">
      <img className="parentThreeimg" src = {require('./Images/Ellipse 3 copy.png')} />
      <img className="childThreeimg" src = {require('./Images/Shape 1.png')} />
    </div>
    <p className="aim">We aim to be the region’s first ‘premium’ agency, in that we hire only the best of the best  at every experience level.
     Our unique business model allows us to pay for the best and retain the best without passing that cost on to the client.</p>
  </div>
  </div>
  </div>
  ;
}

function App() {

  return (
    <div>
    <PartOne />
    <PartTwo />
    <PartThree />
  </div>
  );
}

export default App;
