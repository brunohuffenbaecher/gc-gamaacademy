import React, { useEffect, useState } from "react";
import ClientCard from "../../components/ClientCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./clients.module.css";

export default function Clients() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [users, setUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    let tempusers = users;
    tempusers.push({ name, email, phone, address });
    setUsers(tempusers);
    localStorage.setItem("clients", JSON.stringify(users));

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    window.alert("User registered successfully!");
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    const clientList = JSON.parse(localStorage.getItem("clients"));
    setUsers(clientList);
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.flexBox} ${styles.mainDiv}`}>
        <section className={styles.container}>
          <form action="" className={styles.form} onSubmit={formSubmit}>
            <span>Register New User</span>
            <br />
            <label htmlFor="inputName">Name:</label>
            <input
              className={styles.input}
              id="inputName"
              type="text"
              required
              placeholder="Name"
              onChange={nameChange}
              value={name}
            />
            <label htmlFor="inputEmail">E-mail:</label>
            <input
              className={styles.input}
              id="inputEmail"
              type="email"
              required
              placeholder="user@domain.com"
              onChange={emailChange}
              value={email}
            />
            <label htmlFor="inputPhone">Phone:</label>
            <input
              className={styles.input}
              id="inputPhone"
              type="phone"
              required
              placeholder="xx999999999"
              onChange={phoneChange}
              value={phone}
            />
            <label htmlFor="inputAddress">Address:</label>
            <input
              className={styles.input}
              id="inputAddress"
              type="text"
              required
              placeholder="Address"
              onChange={addressChange}
              value={address}
            />
            <button>Register</button>
          </form>
        </section>
        <section className={`${styles.container} ${styles.cardsDisplay}`}>
          <span>Client List:</span>
          {users.map((user, index) => {
            return <ClientCard key={index} user={user} />;
          })}

          <div>This is the clients page</div>
          <a href="/">Link to home</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
