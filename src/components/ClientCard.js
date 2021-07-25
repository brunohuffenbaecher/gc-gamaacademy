import React from "react";
import css from "./client.module.css";
import avatar from "../assets/img/avatar_generic.png";

export default function ClientCard({ user }) {
  const { name, email, phone, address } = user;
  return (
    <div className={css.clientBanner}>
      <img src={avatar} className={css.imgAvatar} alt="client-avatar" />
      <div className={css.clientInfo}>
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
        <span>Address: {address}</span>
      </div>
    </div>
  );
}
