import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 3px 10px gray;
    height: 70px;
`;

const Button = styled.button`
        background: white;
        border: 2px solid blueviolet;
        border-radius: 10px;
        width: 120px;
        height: 50px;
        margin: 0.5rem;
        color: blueviolet;

        &:hover{
            box-shadow: 1px 2px 10px blueviolet;
            cursor:pointer;
        }
`;

export default function Navbar(){
    
    return (
        <NavbarWrapper>
            <div style={{float: "right"}}>
                <Link to="/"> <Button>HOME</Button></Link>
                <Link to="/products"><Button>PRODUCTS</Button> </Link>
            </div>
        </NavbarWrapper>
    )
}