import googleplay from './image/googleplay.png'
import appstore from './image/appstore.png'



const Footer = ({title}) => {
  return (
    <section className="container text-deepest">
<div className="container-fluid d-flex">
    <div className="container-fluid d-inline">
        <i className="fab fa-facebook text-deepest lead"></i>
        <i className="fab fa-twitter text-deepest lead"></i>
        <i className="fab fa-whatsapp text-deepest lead"></i>
        <i className="fab fa-instagram text-deepest lead"></i>
        <i className="fab fa-linkedin text-deepest lead"></i>
    </div>

    <div className="container-fluid d-inline">
        <img src={googleplay} alt="Google Play Store" className="footer rounded-1 m-2" />
        <img src={appstore} alt="Apple Store" className="footer rounded-1 m-2" />
    </div>
</div>


<div className="container-fluid row py-5">
    <div className="container-fluid col-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita.
    </div>

    <div className="container-fluid col-7 text-end">
        www.fisdom.com.ng
    </div>
</div>
</section>
  )
}






export default Footer;