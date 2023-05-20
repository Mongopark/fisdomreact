import bagofcoins from './image/bagofcoins.png'



const Trusted = ({title}) => {
  return (
    <section className="container-fluid bg-deeper py-3 bg-brightest row">

<div className="container col-12 py-5 row justify-content-center g-5 ms-auto">

<div className="col-sm-8 col-md-3">
    <h1 className="text-brightest fw-bold display-4">Trusted</h1>
    <h1 className="text-deep fw-bold display-4">partner-ships</h1>
    <button className="btn btn-long bg-brightest text-deepest pb-2">Begin Now</button>
    <div className=""><img src={bagofcoins} alt="Bag Of Coins" className="container-fluid bagofcoins py-3" /></div>
</div>


        <div className="bg-brightest rounded-3 container col-sm-8 col-md-4 mx-3 my-1">
        <div className="small fw-bold small py-1 text-deepest">Thank you Jesus for saving</div>
        <h1 className="display-1 fw-bold text-deeper">10+</h1>
       <div className="fw-bold text-deepest">Protect wha temporibus dolor non cumque, ut a optio labic, ipsum explicabo. </div>
       <div className="lead row text-center d-flex small">
        <i className="fab fa-connectdevelop text-danger col-6 h1"><i className="fab fa-cpanel text-danger col-4 h1"></i></i>   
        <i className="fab fa-d-and-d-beyond col-6 text-success h1"></i>
        <i className="fab fa-asymmetrik text-deeper col-6 h1 text-lowercase"><i className="fab fa-apper col-4 fw-bold text-deeper"></i></i>   
        <i className="fab fa-ethereum col-6 text-warning h3 container"><i className="fab fa-ember col-4 fw-bold text-danger"></i></i></div>
       </div>

        <div className="col-sm-8 col-md-4 container bg-brightest rounded-3 fw-bold text-deepest row my-1">
<div className="small text-deepest py-1">Lorem, ipsum dolor.</div>
<div className="text-deepest">Lorem, ipsum dolor Lorem ipsum dolor sit amet itiis neque!.</div>
<h2 className="text-deepest">Digital Partners<br /><span className="fw-light small"><span className="small"><span className="small"><span className="small">Lorem, ipsum dolor.</span></span></span></span></h2>
            <div className="row fw-bold text-deepest rounded-5 text-center d-flex">
                <i className="fab fa-gg-circle col-6 h1 text-primary"><i className="fab fa-angrycreative h1 text-primary"></i></i>
                <i className="fab fa-magento col-3 h3 text-deepest"></i>
                <i className="fab fa-markdown col-3 h3 text-danger"></i>
        </div></div>
</div>
</section>
  )
}






export default Trusted;