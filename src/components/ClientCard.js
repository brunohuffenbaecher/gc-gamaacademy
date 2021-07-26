import React from "react";
import css from "./client.module.css";
import avatar from "../assets/img/avatar_generic.png";

export default function ClientCard({ user }) {
  const { name, email, phone, address } = user;
  return (
    <div className={css.clientBanner}>
      <img src={avatar} className={css.imgAvatar} alt="client-avatar" />
      <div className={css.clientInfo}>
        <span>
          <strong>Name:</strong> {name}
        </span>
        <span>
          <strong>Email:</strong> {email}
        </span>
        <span>
          <strong>Phone:</strong> {phone}
        </span>
        <span>
          <strong>Address:</strong> {address}
        </span>
      </div>
    </div>
  );
}
