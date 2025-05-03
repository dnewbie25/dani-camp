import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div>
      <h1>This is the Cart to pay!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <li>
              <Link to="/cart">{`Cart${
                props.elementsInCart ? " " + props.elementsInCart : ""
              }`}</Link>
            </li>
          </li>
        </ul>
      </nav>
      <section id="checkout">checkout</section>
    </div>
  );
}
