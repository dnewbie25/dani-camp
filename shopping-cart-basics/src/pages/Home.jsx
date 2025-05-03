import { Link } from "react-router-dom"

export default function Home(props){
  return(
  <div>
    <h1>Welcome to the Home Page</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">{`Cart${props.elementsInCart? " " + props.elementsInCart: ""}`}</Link></li>
      </ul>
    </nav>
  </div>

  )
}