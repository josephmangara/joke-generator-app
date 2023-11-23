import { NavLink } from "react-router-dom";

export default function Header(){

return (
  <div className="header">
     <h1 id="title">Chuckle Charm</h1>
     <NavLink to="/home">Home</NavLink> | <NavLink to="/About-us">About us</NavLink> | <NavLink to="/contacts">Contact us</NavLink>
     
  </div>
)
}