import React from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetails(){
    const [item, setItem] = React.useState({});
    const currentId = React.useRef();

    const navigate = useNavigate();
    const {id} = useParams();
    currentId.current = id;

    console.log("check", id, currentId.current)

    React.useEffect( () => {
        fetch(`http://localhost:3000/product/${id}`)
        .then( (res) => res.json())
        .then( (res) => {
            if(Object.keys(res).length === 0){
                navigate("/products/default");
            }
            else{
                setItem(res)
            }       
        })
        .catch(err => console.log(err))
    }, [currentId.current])
    return (
        <div style={{border: "1px solid black", width: "60%", margin: "auto", padding: "1rem"}}>
            <h3>PRODUCT NAME:{item.name} </h3>
            <h5>PRICE:{item.price}</h5>
            <button onClick={() => navigate("/products")}>CANCEL</button>
        </div>
    )
}