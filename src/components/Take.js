import handphone from './image/handphone.png'



const Take = ({title}) => {
  return (
    <section className="container-fluid py-5 bg-brightest my-5">
    <div className="container row">
        <div className="container col-11">
        <h1 className=" display-4 fw-bold text-deeper">Take Control</h1>
        <span className=" display-4 d-inline fw-bold text-deepest">
                    of
            </span>
        <h1 className=" display-4 fw-normal fw-bold text-deepest">
            your money
        </h1>
    </div>

<div className="container bg-brightest d-flex align-content-center pb-5 my-0 col-12 row">

    <div className="container col-md-6 col-sm-12 align-self-center">
<h1 className="container text-deepest fw-bold h1 py-3">
    Finances at your <br />fingertips
</h1>
<ul className="text-deepest small fw-bold">
    <li className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis dicta veniam.</li>
    <li className="py-2">Download the fisdom app</li>
    <li className="py-2">Download the fisdom app fhjfdfd fvkjbv</li>
</ul>
</div>


    <div className="container-fluid col-md-6 col-sm-12 align-self-center">
        <img src={handphone} alt="Hand Held phone image" className="container-fluid" />
    </div>
    </div>
    </div>
</section>
  )
}





export default Take;