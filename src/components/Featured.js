import googleplay from './image/googleplay.png'
import halfphone from './image/halfphone.png'
import appstore from './image/appstore.png'




const Featured = ({title}) => {
  return (
    <section className="bg-deeper">
    <div className="container row ms-auto">
        <div className="container row col-12 text-center">
    <div className="text-center text-brightest col-12 py-5 lead">F e a t u r e d  i n</div>

    <div className="container row text-center text-brightest fw-bold lead px-5 col-12">
        <div className="google container d-inline col-sm-3"><i className="fab fa-slack"></i><span>slack</span></div>
        <div className="google container d-inline col-sm-3">Supreme</div>
        <div className="google container d-inline col-sm-3">Google</div>
        <div className="google container d-inline col-sm-3">SONY</div>
    </div></div>



    <div className="container text-brightest fw-bold lead pt-5 row col-12">
<div className="halfphone mt-5 col-4 container d-none d-md-block">
            <img className="" src={halfphone} alt="Half Phone" />
        </div>
        <div className="container mt-5 col-8 d-block d-md-none col-12">
            <h1 className="text-deep fw-bold display-4">
                Managing your
            </h1>
            <h1 className="text-deep fw-bold display-4">
                finances<span className="text-brightest"> with us<br />is a tap away</span>
            </h1>
            <div className="text-brightest small">
                Download the fisdom app Lorem ipsum dolor sit.
            </div>
            <div className="text-deepest small d-flex align-content-start">
                <img src={appstore} alt="Apple Store" className="download rounded-2" />
                <img src={googleplay} alt="Google Play Store" className="download rounded-2" />
            </div>
              </div>





        <div className="halfphone mt-5 col-4 container d-block d-md-none col-12">
            <img className="" src={halfphone} alt="Half Phone" />
        </div>
        <div className="container mt-5 col-8 d-none d-md-block">
            <h1 className="text-deep fw-bold display-4">
                Managing your
            </h1>
            <h1 className="text-deep fw-bold display-4">
                finances<span className="text-brightest"> with us<br />is a tap away</span>
            </h1>
            <div className="text-brightest small">
                Download the fisdom app Lorem ipsum dolor sit.
            </div>
            <div className="text-deepest small d-flex align-content-start">
                <img src={appstore} alt="Apple Store" className="download rounded-2" /> 
                <img src={googleplay} alt="Google Play Store" className="download rounded-2" />
            </div>
              </div>
</div>
    </div>
</section>  
  )
}






export default Featured;