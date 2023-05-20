import coins from './image/coins.png'


const Let = ({title}) => {
  return (
    <section className="container-fluid py-5 bg-brightest">
    <div className="container-fluid row">
    <div className="container-fluid col-12">
        <h1 className="fw-bold text-deepest">
            Lets make your
        </h1>
        <h1 className="fw-bold text-deeper">
            wealth work for you
        </h1>
        <div className="small fw-bold text-deepest">Lorem ipsum, dolor sit amet consectetur adipis lorem ipsium <br />icing elit. Est porro molestias maxime a datque?</div>
    </div>

    <div className="container-fluid col-12 row justify-content-center ms-auto">
        <div className="bg-brightest py-5 col-sm-12 col-md-4">
        <div className="text-deepest fw-bold small py-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
       <div className="small text-deepest py-0">Protect what matters Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, temporibus dolor non cumque, ut a optio labic, ipsum explicabo. </div>
       <div className=""><button className="bg-deeper btn btn-small text-brightest small lead fw-bold "><i className="fas fa-arrow-right"></i></button>
         </div>

            <div className="text-deepest fw-bold small pb-2 pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
           <div className="small text-deepest py-0">Protect what matters Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, temporibus dolor non cumque, ut a optio labic, ipsum explicabo. </div>
           <div className=""><button className="bg-deeper btn btn-small text-brightest small lead fw-bold "><i className="fas fa-arrow-right"></i></button>
             </div>
       </div>



        <div className="row container-fluid bg-brightest fw-bold small text-brightest col-md-4 align-self-center justify-self-center">
        <img src={coins} alt="coins" className="h-50 dropcoin" />
        </div>


        <div className="container-fluid bg-brightest py-5 col-sm-12 col-md-4">
            <div className="text-deepest fw-bold small py-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
           <div className="small text-deepest py-0">Protect what matters Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, temporibus dolor non cumque, ut a optio labic, ipsum explicabo. </div>
           <div className=""><button className="bg-deeper btn btn-small text-brightest small lead fw-bold "><i className="fas fa-arrow-right"></i></button>
             </div>
    
                <div className="text-deepest fw-bold small pb-2 pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
               <div className="small text-deepest py-0">Protect what matters Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, temporibus dolor non cumque, ut a optio labic, ipsum explicabo. </div>
               <div className=""><button className="bg-deeper btn btn-small text-brightest small lead fw-bold "><i className="fas fa-arrow-right"></i></button>
                 </div>
    
           </div>
</div>
</div>
    </section>
  )
}




export default Let;