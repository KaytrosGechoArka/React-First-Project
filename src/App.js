

import React,{useState} from 'react';
import './App.css';
import './index.css';
import ProductList from './Components/ProductList/ProductList';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import FilterProduct from './Components/FilterProduct/FilterProduct';

const products=[
    {
        pID:1,
        pName:'Fresh Milk',
        desc:'Fresh Milk means Milk provided by the Supplier which meets the Fresh Specification requirements set out in column C of the Quality Table for each parameter set out in column A.',
        isAvailable:true,
        image:'images/milk-buy-trail.png',
        price:12
    },
    {
        pID:2,
        pName:'Cottage Cheese',
        desc:'Cottage cheese is a curdled milk product with a mild flavor and a creamy, non-homogeneous, soupy texture.  It is made from skimmed milk by draining curds, but retaining some of the whey and keeping the curds loose.',
        isAvailable:false,
        image:'images/cottagecheese.jpg',
        price:10
    },
    {
        pID:3,
        pName:'Brocoli',
        desc:'Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable',
        isAvailable:true,
        image:'images/brocoli.jpg',
        price:15
    },
    {
        pID:4,
        pName:'Oranges',
        desc:' Orange, Citrus sinensis, is an evergreen tree in the family Rutaceae grown for its edible fruit. The orange tree is branched with a rounded crown and possesses elliptical or oval leaves which are alternately arranged on the branches.',
        isAvailable:true,
        image:'images/orange.jpg',
        price:20
    },
    {
        pID:5,
        pName:'Olive Oil',
        desc:'olive, (Olea europaea), subtropical broad-leaved evergreen tree (family Oleaceae) and its edible fruit. The olive fruit and its oil are key elements in the cuisine of the Mediterranean and are popular outside the region.',
        isAvailable:false,
        image:'images/oliveoil.jpg',
        price:14
    },
];

function App(){

    let[newProductList,updateProductList]=useState(products);

    let[filterTextValue,updateFilterText]=useState('all');

    let filteredProductList=newProductList.filter((product)=>{

        if(filterTextValue==='available'){
            return product.isAvailable===true;
        }else if(filterTextValue==='unavailable'){
            return product.isAvailable===false;
        }else{
            return product;
        }

    })

    function createProduct(product){
        
        product.pID=newProductList.length+1;
        updateProductList([product,...newProductList])
    }

    function onFilterValueSelected(filterValue){

        updateFilterText(filterValue);

    }

    return (

        <div className='row'>
            <div className='col-lg-8 mx-auto'>
                <CreateProduct createProduct={createProduct}></CreateProduct>
                <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
                <ProductList newProductList={filteredProductList}></ProductList>
            </div>
        </div>
        
    );
}
export default App;