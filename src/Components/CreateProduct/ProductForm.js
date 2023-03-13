
import React , { useState } from "react";

function ProductForm(props){

   let[pName,updateName]= useState('');
   let[pPrice,updatePrice]= useState('');
   let[pDescription,updateDescription]= useState('');
   let[pAvailable,updateAvailabile]= useState('');
   let[pImageUrl,updateImageUrl]= useState('');

   /*let[userInput,updateUserInput]=useState({
        pName:'',
        pPrice:'',
        pDescription:'',
        pAvailable:'',
        pImageUrl:''

   });*/

    function nameInputHandler(event){

        updateName(event.target.value);

        /*updateUserInput({
            ...userInput,
            pName:event.target.value
        });*/

        /*updateUserInput((prevState)=>{
            return {...prevState,pName:event.target.value}
        });*/
    }

    function priceInputHandler(event){

        updatePrice(event.target.value);

        /*updateUserInput({
            ...userInput,
            pPrice:event.target.value
        });*/

        /*updateUserInput((prevState)=>{
            return {...prevState,pPrice:event.target.value}
        });*/
    }
    
    function descriptionInputHandler(event){

        updateDescription(event.target.value);

        /*updateUserInput({
            ...userInput,
            pDescription:event.target.value
        });*/

        /*updateUserInput((prevState)=>{
            return {...prevState,pDescription:event.target.value}
        });*/
    }
    function availabilityInputHandler(event){

        updateAvailabile(event.target.value);

        /*updateUserInput({
            ...userInput,
            pAvailable:event.target.value
        });*/

        /*updateUserInput((prevState)=>{
            return {...prevState,pAvailable:event.target.value}
        });*/

    }
    function imageInputHandler(event){

        updateImageUrl(event.target.value);

        /*updateUserInput({
            ...userInput,
            pImageUrl:event.target.value
        });*/

        /*updateUserInput((prevState)=>{
            return {...prevState,pImageUrl:event.target.value}
        });*/
    }

    function createProductEventHandler(event){

        event.preventDefault();

        let product={
            pID:1,
            pName:pName,
            desc:pDescription,
            isAvailable:Boolean(pAvailable),
            image:pImageUrl,
            price:Number(pPrice)
        };

        updateName('');
        updatePrice('');
        updateDescription('');
        updateAvailabile(false);
        updateImageUrl('');

        //console.log(product);
        props.createProduct(product);
        props.onCancel();
    }

    return(
        <form onSubmit={createProductEventHandler} className="row g-9 py-4">
            <div className="col-md-6 mb-4">
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" placeholder="Product Name" className="form-control" 
                value={pName}
                onChange={nameInputHandler}  />
            </div>
            <div className="col-md-6 mb-4">
                <label htmlFor="price">Product Price</label>
                <input type="number" min="0.01" step="0.01" className="form-control" id="price" placeholder="Product Price"
                    onChange={priceInputHandler}
                    value={pPrice}
                />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="description">Product Description</label>
                <input type="text" className="form-control" id="description" placeholder="Product Description" 
                    onChange={descriptionInputHandler}
                    value={pDescription}
                />
            </div>
            <div className="form-check form-switch mb-4">
                <input type="checkbox" role="switch" id="isAvailable" className="form-check-input" 
                    onChange={availabilityInputHandler}
                    checked={pAvailable}
                />
                <label htmlFor="isAvailable" className="form-check-label">Is product available is stock?</label>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" 
                    onChange={imageInputHandler}
                    value={pImageUrl}
                />
            </div>

            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
        </form>
    );
}
export default ProductForm;