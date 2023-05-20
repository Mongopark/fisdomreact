import { Link } from 'react-router-dom';


const Nav = ({title}) => {
  
var click=2;
var clickk=0;
const hideSwitcher=(e)=>{
e.preventDefault();
    clickk++;
    var switcher=document.getElementById('checkbox');
    var icon=document.getElementById('navicon');
    if(clickk%2===0){
        switcher.style.display="block";
icon.classList.replace("fa-x","fa-bars");
}
    else{
        switcher.style.display="none";
        icon.classList.replace("fa-bars","fa-x");  
      }
}


const changeTheme=(e)=>{
    click++;
    var theMe=document.getElementById('theme');
    var instruct=document.getElementById('switch');
    var slider=document.getElementById("slide");
    var slide=document.getElementById("slider");
    if(click%2===0){
    theMe.href="./css/applight.css";
    instruct.textContent="Switch to Dark mode";
slide.classList.replace("roller","slider");
slider.classList.replace("roller","slider");}
    
   
    else{
        instruct.textContent="Switch to Light mode";
        theMe.href="./css/appdark.css";
        slide.classList.replace("slider","roller");
        slider.classList.replace("slider","roller");}
}


  return (
    <nav className="navbaby navbar navbar-expand-md bg-brightest fixed-top" id="navigations">
    <div className="container">
    <a href="#" className="navbar-brand text-deeper text-lowercase initialism h1"><i className="fas fa-bolt"></i>fisdom</a>

<div className="instruct text-deepest ms-auto px-2 d-md-none" id="checkbox">
        <label className="switch">
            <input type="checkbox" onClick={changeTheme} />
            <span className="slider round" id="slide"></span>
        </label>    
    </div>
<button 
className="navbar-toggler text-deepest btn-outline-danger" 
type="button" onClick={hideSwitcher} id="hamburger" 
data-bs-toggle="collapse" 
data-bs-target="#navmenu"
>
 {/* <span className="navbar-toggler-icon text-deepest" id="navicon"></span> */}
 <i className="fas fa-bars text-deepest" id="navicon"></i> 
</button>

    <div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto">
    <li className="nav-item small">
        <Link to="/" className="nav-link text-nowrap text-deepest">Home</Link>
</li>
    <li className="nav-item small">
        <Link to="/about" className="nav-link text-nowrap text-deepest">About</Link>
    </li>
    <li className="nav-item small">
        <Link to="/partners" className="nav-link text-deepest">Partners</Link>
    </li>
    <li className="nav-item small">
        <Link to="/instructors" className="nav-link text-deepest">Instructors</Link>
    </li>
    <li className="nav-item">
        <div className="text-deepest ps-md-1 ms-auto"><span className="small d-inline-block pt-2" id="switch">Switch to dark mode</span>
        <label className="switch">
            <input type="checkbox" onClick={changeTheme} />
            <span className="slider round" id="slider"></span>
        </label>    
    </div>
    </li>
</ul>
    </div>

</div>
<br /><br /><br />
        
   </nav>
  )
}





export default Nav;
