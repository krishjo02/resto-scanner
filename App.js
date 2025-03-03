import "./App.css";
import ".";
function App() {
  // Function to handle orders
  const orderItem = (item, price) => {
    alert(`You ordered ${item} for ₹${price}`);
  };

  return (
    <>
      <header>
        <h1>CHAI~SUTTA~BAR</h1>
        <h2>Menu</h2>
      </header>

      <main id="mainsec">
        {/* Tea Section */}
        <section className="menu-category">
          <h2>Tea</h2>
          <ul>
            <li>
              <span className="item">Chocolate Tea</span>
              <span className="price">₹10</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Chocolate Tea", 10)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Ginger Tea</span>
              <span className="price">₹10</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Ginger Tea", 10)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Rose Tea</span>
              <span className="price">₹10</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Rose Tea", 10)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Elaichi Tea</span>
              <span className="price">₹15</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Elaichi Tea", 15)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Masala Tea</span>
              <span className="price">₹20</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Masala Tea", 20)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Pan Tea</span>
              <span className="price">₹20</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Pan Tea", 20)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>

        {/* Hot Coffee Section */}
        <section className="menu-category">
          <h2>Hot Coffee</h2>
          <ul>
            <li>
              <span className="item">Hot Coffee</span>
              <span className="price">₹15</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Hot Coffee", 15)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Strong Coffee</span>
              <span className="price">₹20</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Strong Coffee", 20)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Chocolate Coffee</span>
              <span className="price">₹20</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Chocolate Coffee", 20)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Strong Chocolate Coffee</span>
              <span className="price">₹25</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Strong Chocolate Coffee", 25)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Black Coffee</span>
              <span className="price">₹25</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Black Coffee", 25)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Moustache Coffee</span>
              <span className="price">₹30</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Moustache Coffee", 30)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>

        {/* Mocktails Section */}
        <section className="menu-category">
          <h2>Mocktails</h2>
          <ul>
            <li>
              <span className="item">Cucumber Mocktail</span>
              <span className="price">₹60</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Cucumber Mocktail", 60)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Grany Appi Mocktail</span>
              <span className="price">₹60</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Grany Appi Mocktail", 60)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Blue Lagoon Mocktail</span>
              <span className="price">₹60</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Blue Lagoon Mocktail", 60)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Rosy Lips</span>
              <span className="price">₹50</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Rosy Lips", 50)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>

        {/* Breakfast Section */}
        <section className="menu-category">
          <h2>Breakfast</h2>
          <ul>
            <li>
              <span className="item">Pancakes</span>
              <span className="price">₹50</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Pancakes", 50)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Omelette</span>
              <span className="price">₹40</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Omelette", 40)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Fruit Bowl</span>
              <span className="price">₹60</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Fruit Bowl", 60)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>

        {/* Lunch Section */}
        <section className="menu-category">
          <h2>Lunch</h2>
          <ul>
            <li>
              <span className="item">Grilled Chicken</span>
              <span className="price">₹120</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Grilled Chicken", 120)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Veggie Wrap</span>
              <span className="price">₹90</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Veggie Wrap", 90)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Pasta Alfredo</span>
              <span className="price">₹140</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Pasta Alfredo", 140)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>

        {/* Dinner Section */}
        <section className="menu-category">
          <h2>Dinner</h2>
          <ul>
            <li>
              <span className="item">Steak</span>
              <span className="price">₹200</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Steak", 200)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Grilled Fish</span>
              <span className="price">₹180</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Grilled Fish", 180)}
              >
                Order
              </button>
            </li>
            <li>
              <span className="item">Vegetable Curry</span>
              <span className="price">₹110</span>
              <button
                className="order-btn"
                onClick={() => orderItem("Vegetable Curry", 110)}
              >
                Order
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
