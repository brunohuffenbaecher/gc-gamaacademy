import React from "react";
import css from "./home.module.css";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";

export default function Home() {
  const history = useHistory();

  const btnClick = (e) => {
    if (e.target.textContent === "Client Management") {
      history.push("/clients");
    } else if (e.target.textContent === "Product Management") {
      history.push("/products");
    }
  };
  return (
    <>
      <Header />
      <main className={css.mainHome}>
        <div className={css.container}>
          <div>Select the operation</div>
          <div className={css.btnDiv}>
            <button className={css.buttonHome} onClick={btnClick}>
              Client Management
            </button>
            <button className={css.buttonHome} onClick={btnClick}>
              Product Management
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
