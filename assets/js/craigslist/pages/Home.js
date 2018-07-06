import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  loopTags = () => {
    let items =  ["Apple Macbook","iPhone X", "Hoverboard","Lebron James Lakers jersey","Nvidia GTX 1080","Beats by Dre","Kobe Bryant autographed jersey","Lakers tickets"]
    return items.map((item, i) => (
      <div key={i} className="tag">
        {item}
      </div>
    ));
  };

  loopCategories = () => {
    let arr = [1, 2, 3, 4, 5, 6];
    return arr.map((item, i) => {
      return (
        <div className="categories" key={item}>
          <div className="title">Community</div>
          <div className="group-links">
            <a href="#" className="link">
              Community
            </a>
            <a href="#" className="link">
              General
            </a>
            <a href="#" className="link">
              Activities
            </a>
            <a href="#" className="link">
              Groups
            </a>
            <a href="#" className="link">
              Artists
            </a>
            <a href="#" className="link">
              Local News
            </a>
            <a href="#" className="link">
              Child Care
            </a>
            <a href="#" className="link">
              Lost & Found
            </a>
            <a href="#" className="link">
              Classes
            </a>
            <a href="#" className="link">
              Musician
            </a>
            <a href="#" className="link">
              Events
            </a>
            <a href="#" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Find anything you need. <br />We're here to connect you.
          </h1>
          <section className={`links`}>
            {this.loopCategories()}
            <div className="categories">
              <div className="title">Community</div>
              <div className="group-links">
                <a href="#" className="link">
                  Community
                </a>
                <a href="#" className="link">
                  General
                </a>
                <a href="#" className="link">
                  Activities
                </a>
                <a href="#" className="link">
                  Groups
                </a>
                <a href="#" className="link">
                  Artists
                </a>
                <a href="#" className="link">
                  Local News
                </a>
                <a href="#" className="link">
                  Child Care
                </a>
                <a href="#" className="link">
                  Lost & Found
                </a>
                <a href="#" className="link">
                  Classes
                </a>
                <a href="#" className="link">
                  Musician
                </a>
                <a href="#" className="link">
                  Events
                </a>
                <a href="#" className="link">
                  Pets
                </a>
              </div>
            </div>
          </section>

          <section className={`trending`}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" />Trending Now
            </div>

            <div className="trending-tags">
              {this.loopTags()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
