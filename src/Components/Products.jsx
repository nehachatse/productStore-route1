import React from "react"
import { Link, Outlet } from "react-router-dom";
import styles from "./Product.module.css";

export default function Products(){

    const [data, setData] = React.useState([]);
    React.useEffect( () => {
        fetch("http://localhost:3000/product")
        .then( (res) => res.json())
        .then( (res) => setData(res))
        .catch( err => console.log(err) )
    }, [])
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (prod, ind) => (
                            <tr key={ind}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td className={styles.link}><Link to={`/products/${prod.id}`}> VIEW </Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Outlet/>
        </>
    )
}