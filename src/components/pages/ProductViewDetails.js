
import { React, useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";

const ProductViewDetails = () => {
    const { id } = useParams();
    const [pname, setPname] = useState("");
    const [model, setModel] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [price, setPrice] = useState("");
    const [dscn, setDscn] = useState("");

    useEffect(() => {
        prodView()
        // console.log(id);
    }, []);

    function prodView() {
        fetch(`http://localhost:5000/productList/${id}`)
            .then((response) => {
                response.json()
                .then((resp) => {
                    console.log("value:", resp);
                    setPname(resp.name)
                    setDscn(resp.discription)
                    setModel(resp.model)
                    setPrice(resp.price)
                })
            })
    }


    return (
        <>
            <center>
                <h1>ProductFull Details.</h1>
                <br />
                <Card style={{ width: '40rem', right: 20  }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><h2>{pname}</h2></Card.Title>
                        <hr />
                        <Card.Text><h3>Features:</h3><br />
                            {dscn}
                        </Card.Text>
                        <br />
                        <b>Model:</b> {model}<br />
                        <b> Price: {price}</b>
                    </Card.Body>
                </Card>
                <Link className="btn btn-dark my-2" to={"/products-list"} >GoBack</Link>
            </center>
        </>
    )
}

export default ProductViewDetails