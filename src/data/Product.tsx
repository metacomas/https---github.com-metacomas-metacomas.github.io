import React from "react";
interface IProduct
{
    Id:number,
    Name:string,
    Description:string
}
function Product()
{
    const products:IProduct[] = [{Id:1,Name:'Product1', Description :'test'},{Id:2,Name:'Product2', Description :'test2'}]
    return (<h1 className="App">Id ={products[0].Id} Name ={products[0].Name}</h1>);
}
export default Product;