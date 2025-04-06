import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Drawer } from "antd";
import "antd/dist/reset.css";
import "./ShoppingCartDrawer.scss";

const ShoppingCartDrawer = () => {
  const [open, setOpen] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Augue Mauris",
      quantity: 3,
      price: 85,
      image:
        "https://cdn.santral.az/images/231da9e2-33a3-11e6-bcae-000c29bb375f.jpeg",
    },
    {
      id: 2,
      name: "Sociis Natoque",
      quantity: 1,
      price: 120,
      image:
        "https://cdn.santral.az/images/231da9e2-33a3-11e6-bcae-000c29bb375f.jpeg",
    },
    {
      id: 3,
      name: "Luctus Ultricies",
      quantity: 2,
      price: 150,
      image:
        "https://cdn.santral.az/images/231da9e2-33a3-11e6-bcae-000c29bb375f.jpeg",
    },
    {
      id: 4,
      name: "Nunc Sed",
      quantity: 1,
      price: 90,
      image:
        "https://cdn.santral.az/images/231da9e2-33a3-11e6-bcae-000c29bb375f.jpeg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const freeShippingLimit = 2000;
  const remaining = freeShippingLimit - subtotal;

  return (
    <>
      <div
        className="cart-icon"
        onClick={() => setOpen(true)}
        aria-label="Open shopping cart"
      >
        <FaShoppingBag />
      </div>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={350}
      >
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <hr />
        <div className="cart-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
        <p className="free-shipping-msg">
          {remaining > 0
            ? `Add $${remaining.toFixed(2)} more to get free shipping!`
            : "You’ve qualified for free shipping! 🎉"}
        </p>

        <div className="cart-buttons">
          <button type="button" className="view-cart" aria-label="View cart">
            View Cart
          </button>
          <button
            type="button"
            className="checkout"
            aria-label="Proceed to checkout"
          >
            Checkout
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default ShoppingCartDrawer;
