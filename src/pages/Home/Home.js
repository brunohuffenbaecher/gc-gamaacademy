import React from "react";
import "./Home.css";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";

export default function Home() {
  const history = useHistory();

  const btnClick = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Client Management") {
      history.push("/clients");
    } else if (e.target.textContent === "Product Management") {
      history.push("/products");
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>Select the operation</div>
          <div className="btnDiv">
            <button onClick={btnClick}>Client Management</button>
            <button onClick={btnClick}>Product Management</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
