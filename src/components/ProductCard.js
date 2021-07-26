import React from "react";
import css from "./product.module.css";
import avatar from "../assets/img/rocket_avatar.png";

export default function ProductCard({ product }) {
  const { name, description, price, stock } = product;
  return (
    <div className={css.clientBanner}>
      <img src={avatar} className={css.imgAvatar} alt="client-avatar" />
      <div className={css.clientInfo}>
        <span>
          <strong>Name:</strong> {name}
        </span>
        <span>
          <strong>Description:</strong> {description}
        </span>
        <span>
          <strong>Price:</strong> {price} BTC
        </span>
        <span>
          <strong>Stock:</strong> {stock}
        </span>
      </div>
    </div>
  );
}
