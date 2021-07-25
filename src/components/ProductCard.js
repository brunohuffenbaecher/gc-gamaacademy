import React from "react";
import css from "./client.module.css";
import avatar from "../assets/img/rocket_avatar.png";

export default function ProductCard({ product }) {
  const { name, description, price, stock } = product;
  return (
    <div className={css.clientBanner}>
      <img src={avatar} className={css.imgAvatar} alt="client-avatar" />
      <div className={css.clientInfo}>
        <span>Name: {name}</span>
        <span>Description: {description}</span>
        <span>Price: {price} BTC</span>
        <span>Stock: {stock}</span>
      </div>
    </div>
  );
}
