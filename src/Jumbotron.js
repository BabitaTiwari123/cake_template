import React from 'react';
import './style.css';

function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h2 className="jumbotron-heading">Welcome to our Cake Shop!</h2>
        <p className="lead text-muted">We offer a variety of delicious cakes for all occasions.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Order Now</a>
        </p>
      </div>
    </section>
  );
}

export default Jumbotron;
