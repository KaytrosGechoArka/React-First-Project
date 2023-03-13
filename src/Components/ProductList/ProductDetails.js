
import { useState } from "react";
import Button from "./Button";



function ProductDetails(props){

    let badgeClass='badge';
    badgeClass =props.isAvailable ? 'bg-success text-white p-1 px-3 fs-6 rounded badge-margin-left-240':'bg-danger text-white p-1 rounded badge-margin-left-240';


    //let productCount=0;

    // useState() function is only used inside a componenet function

    let [productCount,updateCount]=useState(0)

    function displayFormattedProductCount(){
        return productCount>0? productCount:'Zero';
    }

    let incrementProductCount=function(){
        // ++productCount;
        updateCount(++productCount);
    }

    let decrementProductCount=function(){
        // --productCount;
        updateCount(--productCount)
    }

    return (

        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>${props.price}</h6>
            <Button eventHandler={decrementProductCount} disable={productCount==0} children="-">-</Button>
            <span style={{padding:'0px 14px','font-size':13}}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount} children="+">+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available':'Unavailable'}</span>
            
        </div>

    );
}
export default ProductDetails;