import manypeople from './image/manypeople.png'



const World = ({title}) => {
  return (
    <section className="container py-5 text-center bg-brightest row">
        
    <div className="container">
            <h1 className=" display-4 fw-normal fw-bold text-deepest text-center ps-5">
                World of <span className=" display-4 fw-bold text-deeper text-center">
                    Fisdom
                </span>
            </h1>
        <div className="text-deepest small text-center ps-5 fw-bold ms-auto">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, corporis dolore soluta totam voluptatum suscipit. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus qui laborum sed.</div>
       <div className="container p-2 text-center"><img src={manypeople} alt="Many people" className="container-fluid col-md-8 col-sm-12" /></div>     


    </div> <div className="container row text-center justify-content-center ms-auto">
   
        <div className="text-deepest col-3 bg-brightest d-inline"><h1 className="fw-bold">60<span className="text-deeper">+</span></h1>streams</div>
    
    
        <div className="text-deepest col-3 bg-brightest px-0 d-inline"><h1 className="fw-bold">20L<span className="text-deeper">+</span></h1>streams</div>
   
        <div className="text-deepest col-md-4 col-sm-9 bg-brightest d-inline"><h1 className="fw-bold">Over 900<span className="text-deeper">cr</span></h1>streams all over the world</div>
    </div>
</section>
  )
}





export default World;