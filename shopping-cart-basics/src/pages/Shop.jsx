import { Link } from "react-router-dom";

export default function Shop(props) {
  return (
    <div>
      <h1>This is the shopping list!</h1>
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
      <section id="items">
        {Array.from({ length: 10 }).map((_, i) => {
          const name = `Item ${i + 1}`;
          const price = (Math.random() * 100).toFixed(2);

          return (
            <article key={i} className="item">
              <h2>{name}</h2>
              <p>Price: ${price}</p>
              <button onClick={props.click}>Add to cart</button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
