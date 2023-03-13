import ProductDetails from "./ProductDetails";


//let imaegUrl=require("../images/milk-buy-trail.png");
// let isAvailable='Available';
// let unAvailable='Unavailable';

//     padding:'0px 20px',
//     'font-size':12
// };



function Products(props){

    let badgeClass='badge';
    badgeClass =props.isAvailable ? 'bg-success text-white p-1 px-3 fs-6 rounded badge-margin-left-240':'bg-danger text-white p-1 rounded badge-margin-left-240';

    return(
        
        <li className="list-group-item" style={{backgroundColor:props.isAvailable ? 'white' :'#dedede'}}>
            <div className="media align-items-lg-center flex-columen flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">
                        {props.description}
                    </p>
                    <ProductDetails price={props.price} isAvailable={props.isAvailable}>
                        <h2>This is a DEMO</h2>
                    </ProductDetails>
                </div>
                <img src={props.imageUrl} alt="Generic Placeholder Image" width="200" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
        
    );
}
export default Products;