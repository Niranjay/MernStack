import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
import React, { useState,useEffect } from 'react'
import { Link , useParams} from "react-router-dom";

function Assignment() {
    const [selects, setSelects] = useState();
    const [product, setProduct] = useState();
    const [item, setItem] = useState(product);
    const [pname, setPname] =useState("");
    const [model, setModel] =useState("");
    const [categoryId, setCategoryId] =useState("");
    const [price, setPrice] =useState("");

    useEffect(()=>{
            apiGet()
    },[])

    const apiGet = () => {
        fetch("http://localhost:5000/productList").then((response) => {response.json().then((rest) => 
        {
              setProduct(rest)
              setItem(rest)
              console.log("product data", product)
          });
      });
    }

// dropDown value change
const dropVal=(event)=>{
const dval= event.target.value;
if(dval<1){
    const filerProd= product.filter(data=>data.categoryId<1);
    console.log("i am filterProd:",filerProd);
    setItem(filerProd)
}else{
    if(dval == 1){
    let filerProd= product.filter(data=>data.categoryId>0);
    console.log("i am filterMobProd:",filerProd);
    setItem(filerProd)
}else{
    setItem(product)
}}
}

    return (
        <>
            {/* Select DropDown List */}
            <center>
                <p > Product Category  
                <select  onChange={dropVal}>
                    <option>All</option>
                    <option value="0">Laptop</option>
                    <option value="1">Mobile</option>
                </select>
                </p>
                </center>

            {/* Card Show */}         
              <div className="container py-4 ">
                <div className="row">
                {item && item.map((post) => {
                        return (
                            <div className="col-md-4 py-4">
                                 <Card  style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body >
                                    <Card.Title>{post.name}</Card.Title>
                                    <Card.Text>
                                        {post.model}
                                        </Card.Text>
                                    <p>Price: {post.price}</p>
                                    </Card.Body>
                                    <Link className="btn btn-dark" to={`/getProId/${post._id}`} >View Details</Link>
                                 </Card>
                            </div>
                        )})}
            </div>
            </div>   
        </>
    )
}

export default Assignment
