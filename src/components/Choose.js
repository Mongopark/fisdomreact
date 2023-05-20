import coin from './image/coin.png'
import rupee from './image/rupee.png'
import percent from './image/percent.png'



const Choose = ({title}) => {
  return (
    <section className="container-fluid">
    <div className="container-fluid row px-3 ms-auto py-3">
<div className="container col-12">
    <h1 className=" display-4 fw-bold text-deeper">
        Choose better
    </h1>
    <h1 className=" display-4 fw-normal fw-bold text-deepest">
        with Fisdom
    </h1>
</div>


<div className="container row col-12 justify-content-center justify-content-md-between px-2 g-1 ms-auto">
    <div className="row container-fluid p-4 bg-deep rounded-3 col-sm-8 col-md-4 my-2">
        Thank you Jesus
    <img src={coin} alt="coin" className="container-fluid text-end col-6" />
   <div className="container-fluid fw-bold h3 align-self-end col-12">Protect what matters</div>
    </div>

    <div className="row container-fluid p-4 bg-brighter text-deepest rounded-3 col-sm-8 col-md-4 my-2">
    Thank you Jesus
    <img src={rupee} alt="indian rupee" className="container-fluid text-end col-6" />
        <div className="container-fluid text-deepest fw-bold h3 align-self-end col-12">Nurture it to <br />grow it</div>
    </div>

    <div className="row container-fluid p-4 bg-bright rounded-3 col-sm-8 col-md-4 my-2">
        Thank you Jesus
        <img src={percent} alt="percentage" className="container-fluid text-end col-6" />
        <div className="container-fluid fw-bold h3 align-self-end col-12">Many means <br />to one goal</div>
    </div>
</div>
</div>
</section>
  )
}


export default Choose;
