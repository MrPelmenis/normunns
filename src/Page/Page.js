import { useEffect, useState, useRef  } from 'react';
import './Page.css';


import homeImage from "../img/manaBIlde.png";

import phpLogo from "../img/phpLogo.png";
import jsLogo from "../img/jsLogo.png";
import htmlLogo from "../img/htmlLogo.png";
import cssLogo from "../img/cssLogo.png";
import mysqlLogo from "../img/mysqlLogo.png";
import reactLogo from "../img/reactLogo.png";
import nodeJsLogo from "../img/nodeJsLogo.png";
import javaLogo from "../img/javaLogo.jpg";
import csharpLogo from "../img/csharpLogo.png";
import cPlusPlusLogo from "../img/c++Logo.png";
import tailwindLogo from "../img/tailwindLogo.png";
import linuxLogo from "../img/linuxLogo.png";
import typeScriptLogo from "../img/typeScript.png";
import githubLogo from "../img/githubLogo.png";




import boidsImg from "../img/boids.png";
import naggersImg from "../img/naggers.png";
import beatMakerImg from "../img/beatMaker.png";
import asteroidGameImg from "../img/asteroidGame.png";
import epicKillingGame from "../img/crimsonland.png";
import tankGame from "../img/tankGame.png";
import threeDterrain from "../img/3dterrain.png"
import game2048 from "../img/2048.png";
import gameofLife from "../img/game of life.png";
import bird from "../img/bird.png";
import imgtoTxt from "../img/imgtotext.png";
import maze from "../img/3dmaze.png";
import arduino from "../img/arduino.png";

import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Page() {
    const containerRef = useRef(null);
    
    //https://legacy.reactjs.org/docs/context.html

    //learning refs
    useEffect(() => {
      containerRef.current.style.scrollBehavior = 'smooth';
    }, []);
  
  
  return (
    <div ref={containerRef} className='h-full flex flex-row overflow-x-hidden bg-my-light rounded-lg overflow-hidden'>
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <ProjectsPage></ProjectsPage>
    </div>
  )
}


function HomePage() {
  return (
    <section id='home' className='w-full h-full flex flex-shrink-0 flex-col overflow-y-scroll items-start sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
       <span className='h-auto lg:h-full xl:h-full flex flex-col items-center justify-center mx-3' style={{minWidth: 300}}>
        <img className='h-auto shake mx-3' src={homeImage} alt="Home Image"/>
      </span>
        <div className='mx-6 md:text-lg lg:text-xl xl:text-2xl max-w-full overflow-visible flex flex-col items-center mt-5 lg:justify-center xl:justify-center' style={{minHeight: "100%", paddingBottom: "60px"}}>
            <p className="mt-0">Welcome!<br/> I'm Normunds, an IT enthusiast. I've been studying programming for the past 6-7 years and have created many projects along the way. I am continuously sharpening my skills and knowledge to excel in the dynamic field of IT and would like to make a successful career out of it.</p>
            <p className="mt-0">In this page, you can find information about my skillset and see some of the projects that I have made in the past.</p>
            <div className='flex flex-wrap justify-center items-center flex-col'>
              <ContactMe></ContactMe>
              <GithubDisplay></GithubDisplay>  
              <Socials></Socials>
            </div>
        </div>
    </section>
  );
}


function ContactMe() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsTapped(!isTapped);
  };

  return (
    <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-my-cyan overflow-hidden projectShowcase transition-all duration-300 ${isHovered || isTapped ? 'hover:scale-110' : ''} ${isTapped ? 'tapped' : ''}`}
      style={{ width: isHovered || isTapped ? '260px' : '150px', height: isHovered || isTapped ? '90px' : '30px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h1 className='select-none'>Contact Me</h1>
      <span className="slowAppearingText text-base">
        <div className='flex justify-center items-center'><MdLocalPhone className='mx-1'/>25299736</div>
        <div className='flex justify-center items-center'><MdEmail className='mx-1'/> normundsmalnacs@gmail.com</div>
      </span> 
    </span>
  );
}

function Socials() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsTapped(!isTapped);
  };

  return (
    <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-orange-400 overflow-hidden projectShowcase transition-all duration-300 ${isHovered || isTapped ? 'hover:scale-110' : ''} ${isTapped ? 'tapped' : ''} `}
      style={{ width: isHovered || isTapped ? '260px' : '150px', height: isHovered || isTapped ? '90px' : '30px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h1 className='select-none'>Socials</h1>
      <span className="slowAppearingText text-base">
        <div className='flex justify-center items-center'><FaInstagram className='mx-1'></FaInstagram><a href='https://www.instagram.com/normuns/' className='underlineOnHover'>normuns</a></div>
        <div className='flex justify-center items-center'><MdFacebook className='mx-1'></MdFacebook> <a href='https://www.facebook.com/normis.malcs/?locale=lv_LV' className='underlineOnHover'>Normunds Malnačs</a></div>
      </span>
    </span>
  );
}



function GithubDisplay() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsClicked(!isClicked);
  };

  return (
    <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-purple-600 overflow-hidden projectShowcase transition-all duration-300 ${isHovered || isClicked ? 'hover:scale-110' : ''} ${isClicked ? 'tapped' : ''}`}
      style={{ width: isHovered || isClicked ? '200px' : '150px', height: isHovered || isClicked ? '60px' : '30px' }}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className='select-none' style={{ color: "white" }}>Github</h1>
      <span className="slowAppearingText text-base">
        <div className='flex justify-center items-center underlineOnHover' style={{ color: "white" }}>
          <a href='https://github.com/MrPelmenis' className='font-bold flex justify-center items-center'>
            <FaGithub className='mx-1' /> Check out my work
          </a>
        </div>
      </span>
    </span>
  );
}


function AboutPage() {
  return (
    <section id='about' className='w-full h-full flex flex-col flex-shrink-0 items-start justify-start overflow-auto' style={{minHeight: "100%"}}>
      <h1 className='font-bold mx-3 mt-5 md:text-xl lg:text-2xl xl:text-3xl'>Education:</h1>
      <div className='mx-3 md:text-lg lg:text-xl xl:text-2xl '>I am currently studying in Riga State Gymnasium No. 1 with a focus on Programming. I have made many
        <a href='#projects' className='mx-2' style={{borderBottom:"1px solid black"}}>PROJECTS</a>
        to enhance my IT knowledge, some of them being collaborative.
       </div>
      <h1 className='font-bold mx-3 md:text-xl lg:text-2xl xl:text-3xl mt-5'>IT Knowledge:</h1>
      <div className='mx-3 md:text-lg lg:text-xl xl:text-2xl mb-1'>These are most of the programming languages and technologies I'm skilled in:</div>
      <div className='turuWidgetus mb-20'>
        <LanguageShowcase img={jsLogo} text="Js"></LanguageShowcase>
        <LanguageShowcase img={htmlLogo} text="Html"></LanguageShowcase>
        <LanguageShowcase img={cssLogo} text="Css"></LanguageShowcase>
        <LanguageShowcase img={reactLogo} text="React"></LanguageShowcase>
        <LanguageShowcase img={typeScriptLogo} text="Ts"></LanguageShowcase>
        <LanguageShowcase img={tailwindLogo} text="Tailwind"></LanguageShowcase>
        <br/>
        <LanguageShowcase img={nodeJsLogo} text="Node Js"></LanguageShowcase>
        <LanguageShowcase img={phpLogo} text="php"></LanguageShowcase>
        <LanguageShowcase img={mysqlLogo} text="mysql"></LanguageShowcase>
        <br/>
        <LanguageShowcase img={csharpLogo} text="C#"></LanguageShowcase>
        <LanguageShowcase img={cPlusPlusLogo} text="C++"></LanguageShowcase>
        <LanguageShowcase img={javaLogo} text="Java"></LanguageShowcase>
        <LanguageShowcase img={linuxLogo} text="Linux"></LanguageShowcase>
        <br/>
        <LanguageShowcase img={githubLogo} text="Github"></LanguageShowcase>
      </div>
   </section>
  );
}

function ProjectsPage(){
  return (
    <section id='projects' className='w-full h-full flex-shrink-0 flex flex-col' >
      <section className='flex flex-wrap overflow-y-auto h-full justify-center ' style={{paddingBottom:"30px", minHeight: "100%"}}>
      <div className='w-full'> <h1 className='font-bold mt-5 ml-5 md:text-xl lg:text-2xl xl:text-3xl'>My Personal Live Projects:</h1></div>
        <ProjectShowcase href={"https://naggers.sytes.net/"} img={naggersImg} title={"Full Stack Twitter Clone"} text={"Dive into my project, a full-stack website crafted with mostly React, PHP, and MySQL. It's Live, Check it out!"}></ProjectShowcase>
        <ProjectShowcase href={"https://thetankgame.azurewebsites.net/"} img={tankGame} title={"Online Multiplayer Tank Game"} text={"Collaborative project with my brother, real-time tank battles. Experience shooting in a live multiplayer action."}></ProjectShowcase>
        <ProjectShowcase href={"https://purse.blob.core.windows.net/epic-killing-game/index.html"} img={epicKillingGame} title={"Crimsonland Alternative"} text={"With mobile controls and infinite world generation. Go shoot some monsters!"}></ProjectShowcase>
        <ProjectShowcase  href={"https://nomunakaste.blob.core.windows.net/bitmachine/index.html"} img={beatMakerImg} title={"Web Beat Maker"} text={"A browser-based beat-making tool to make simple beats online"}></ProjectShowcase>
        <ProjectShowcase href={"https://nomunakaste.blob.core.windows.net/asteroidgame/start.html"} img={asteroidGameImg} title={"Retro Asteroid Game"} text={"Navigate through space with randomly generated asteroid fields."}></ProjectShowcase>
      
      <div className='w-full'> <h1 className='font-bold mt-5 ml-5 md:text-xl lg:text-2xl xl:text-3xl'>Others:</h1></div>
      <ProjectShowcase img={threeDterrain} title={"3D Terrain Generation"} text={"My biggest three.js project. I made a somewhat realistic terrain for fun."}></ProjectShowcase>
        <ProjectShowcase img={maze} title={"3D Maze Generation"} text={"Learned three.js and maze-generation algorithms"}></ProjectShowcase>
        <ProjectShowcase img={arduino} title={"Robotics"} text={"Using Arduino and ESP boards I have made a radar scanner, an automatic doorlock and other small builds"}></ProjectShowcase>
        <ProjectShowcase img={gameofLife} title={"Conway's Game Of Life Remake"} text={"A recreation of the popular game. It's nothing special just a weekend project"}></ProjectShowcase>
        <ProjectShowcase img={imgtoTxt} title={"Image To Text Converter"} text={"Converts Image files to images to basic english characters"}></ProjectShowcase>
        <ProjectShowcase img={game2048} title={"2048 Alternative"} text={"I just made the same game but better and using the power of 3"}></ProjectShowcase>
        <ProjectShowcase img={boidsImg} title={"3D Boids Simulation"} text={"I tried simulatig Boid movement in 3D, altough it isn't perfect it works."}></ProjectShowcase>
        <ProjectShowcase img={bird} title={"Flappy Bird Remake"} text={"This is just... flappy bird"}></ProjectShowcase>
      
      </section>
      
    </section>
  )
}

function ProjectShowcase(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsTapped(!isTapped);
  };

  return (
    <span
      className={`flex flex-col items-center text-center mx-2 mt-5 border-black overflow-hidden projectShowcase ${isHovered ? 'hover:scale-110' : ''} ${isTapped ? 'tapped' : ''}`}
      style={{ width: isHovered || isTapped ? '300px' : '250px', height: isHovered || isTapped ? '300px' : '250px', marginBottom: isHovered || isTapped ? "10px" : "0" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
        <img src={props.img} className="mx-auto mt-0" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Project Image" />
      </div>
      <a href={props.href}><h1 className='font-bold' style={{ textDecoration: props.href ? "underline" : "" }}>{props.title}</h1></a>
      <span className={`slowAppearingText`}>{props.text}</span>
    </span>
  );
}
function LanguageShowcase(props){
  return (
    <span className='ml-2 inline-flex rounded-full bord border select-none border-black items-center justify-between languageWidget'>
      <img src={props.img} className='ml-2 rounded-full' style={{width:30, height:30}} alt="Language Icon" />
      <span className='mr-2 ml-1 font-arial font-bold'>{props.text}</span>
    </span>
  )
}


export default Page;
