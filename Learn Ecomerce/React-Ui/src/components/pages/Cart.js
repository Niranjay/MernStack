import React ,{useState}from 'react'
import Card from "react-bootstrap/Card";

 const Cart = () => {
    const [selects, setSelects] = useState(0);
    
    return (
        <div>
            <Card  style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body >
                                    <Card.Title>Name</Card.Title>
                                    <Card.Text>
                                        Model
                                        </Card.Text>
                                    <p>Price: </p>
                                    <p/>
                                    <center>
                                    <i class="fas fa-minus" onClick={()=>setSelects(selects-1)}></i>
                                    <input type="text" placeholder="0" value={selects} onChange={(e) => { setSelects(e.target.value) }} style={{width: "40px", textAlign:"center"}}/>
                                    <i class="fas fa-plus" onClick={()=>setSelects(selects+1)}></i>
                                    </center>
                                    </Card.Body> 
                                 
                {/* <Link className="btn btn-dark my-2" to={"/products-list"} >GoBack</Link> */}
                </Card>
        </div>
    )
}
export default Cart