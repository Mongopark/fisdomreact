import { Link } from 'react-router-dom';
import errorsvg from './image/404.svg'

const Nopage = ({title}) => {
// const doSomething=(e)={
//      x = -e.clientX / 5,
//         y = -e.clientY / 5;
//         errorContain=document.getElementById("errorcontain");
//     errorContain.style.backgroundPositionX = x + "px";
//     errorContain.style.backgroundPositionY = y + "px";

// }



  return (
    <section id="errorcontain" className="errorpage bg-deepest">
    <div className="errordisplay">
      {/*<h2>4<span>0</span>4</h2>*/}
    <h2><img src={errorsvg} /></h2>
      <h4 className="bg-brightest text-deepest">Opps! Page Not Found</h4>
      <p className="text-brightest fw-bold">
        The page you are looking for doesn't exist or may be, not uploaded till now. Otherwise You may have
        mistyped the address or the page may have moved
      </p>
      <Link to="/" className="errorlink">Go Back To Home</Link>
    </div>
  </section>
  )
}






export default Nopage;