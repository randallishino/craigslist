import React, { Component } from "react";
import ReactDOM from "react-dom";

let items = [{

  subjects: ["Activities", "Artists","Childcare","Classes","Events","General","Groups","Local News","Lost + Found",
  "Missed","Connections","Musicians","Pets","Politics","Rants & Raves","Rideshare","Volunteers"]
}]

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
    let categories = [
      {
      id: 1,
      title: "Community",
      subjects: ["Activities", "Artists","Childcare","Classes","Events","General","Groups","Local News","Lost + Found",
      "Missed","Connections","Musicians","Pets","Politics","Rants & Raves","Rideshare","Volunteers"]
      },
      {
      id: 2,
      title: "Services",
      subjects: ["Automotive", "Beauty","Cell/Mobile"]
      }]


    // Had trouble accessing the subjects array. I realized it was probably because of nesting. 
    // Separated subjects objects into its own array and used another map function to display it properly.
    return categories.map((item, i) => { 
      let arr = [];
      arr.push(item.subjects);
      console.log(arr[0]);
        return (
        <div className="categories" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="group-links">
              {arr[0].map(subject => <a href="#" key={subject.id} className="link">{subject}</a>)}
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
