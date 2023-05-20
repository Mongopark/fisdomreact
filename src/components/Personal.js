import googleplay from './image/googleplay.png'
import phone from './image/phone.png'
import appstore from './image/appstore.png'


const Personal = () => {
  return (
    <section className="container-fluid bg-brightest">
<div className="container-fluid justify-content-between row ms-auto">
    <div className="container-fluid col-md-6 text-center text-md-start">
<h1 className="text-deepest fw-bold display-2">
    personal <br/>finance,
</h1>
<h1 className="text-deeper fw-bold display-1">
    reimagined
</h1>
<div className="text-deepest small">
    Download the fisdom app
</div>
<div className="text-deepest small d-flex justify-content-center justify-content-md-start">
    <img src={appstore} alt="Apple Store" className="store rounded-2" />
    <img src={googleplay} alt="Google Play Store" className="store rounded-2" />
</div>
    </div>


    
    <div className="container-fluid col-md-6 p-5 justify-content-center d-flex">
        <img src={phone} alt="phone image" className="img-fluid container-fluid" />
    </div>
</div>
    </section>
  )
}



export default Personal;