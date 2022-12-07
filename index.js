import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://thumbs.dreamstime.com/b/gateway-india-mumbai-gateway-india-arch-monument-built-th-century-mumbai-india-monument-was-138091856.jpg"
    alt=""
  />
);
const Title = () => <h1>The Last Thing He Told Me</h1>;
const Author = () => <h5>Barnes And Noble</h5>;
ReactDOM.render(<Booklist />, document.getElementById("root"));
