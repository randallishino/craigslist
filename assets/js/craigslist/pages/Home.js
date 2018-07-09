import React, { Component } from "react";
import ReactDOM from "react-dom";

let items = [
  {
    subjects: [
      "Activities",
      "Artists",
      "Childcare",
      "Classes",
      "Events",
      "General",
      "Groups",
      "Local News",
      "Lost + Found",
      "Missed",
      "Connections",
      "Musicians",
      "Pets",
      "Politics",
      "Rants & Raves",
      "Rideshare",
      "Volunteers"
    ]
  }
];

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopTags = () => {
    let trending = [
      "Apple Macbook",
      "iPhone X",
      "Hoverboard",
      "Lebron James Lakers jersey",
      "Nvidia GTX 1080",
      "Beats by Dre",
      "Kobe Bryant autographed jersey",
      "Lakers tickets"
    ];
    return trending.map((item, i) => (
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
        subjects: [
          "Activities",
          "Artists",
          "Childcare",
          "Classes",
          "Events",
          "General",
          "Groups",
          "Local News",
          "Lost + Found",
          "Missed",
          "Connections",
          "Musicians",
          "Pets",
          "Politics",
          "Rants & Raves",
          "Rideshare",
          "Volunteers"
        ]
      },
      {
        id: 2,
        title: "Services",
        subjects: [
          "Automotive",
          "Beauty",
          "Cell/Mobile",
          "Computer",
          "Creative",
          "Cycle",
          "Event",
          "Farm + Garden",
          "Financial",
          "Household",
          "Labor/Move",
          "Legal",
          "Lessions",
          "Marine",
          "Pet",
          "Real Estate",
          "Skilled Trade",
          "SM Biz Ads",
          "Travel/Vac",
          "Write/Ed/Tran"
        ]
      },
      {
        id: 3,
        title: "Housing",
        subjects: [
          "Apts/Housing",
          "Housing Swap",
          "Housing Wanted",
          "Office",
          "Parking/Storage",
          "Real Estate For Sale",
          "Rooms/Shared",
          "Rooms Wanted",
          "Sublets/Temporary",
          "Vacation Rentals"
        ]
      },
      {
        id: 4,
        title: "Gigs",
        subjects: [
          "Computer",
          "Creative",
          "Crew",
          "Domestic",
          "Event",
          "Labor",
          "Talent",
          "Writing"
        ]
      },
      {
        id: 5,
        title: "For Sale",
        subjects: [
          "Antiques",
          "Appliances",
          "Arts + Crafts",
          "ATV/UTV/SNO",
          "Auto Parts",
          "Aviation",
          "Baby + Kid",
          "Barter",
          "Beauty + Hlth",
          "Bike Parts",
          "Bikes",
          "Boat Parts",
          "Boats",
          "Books",
          "Business",
          "Cars + Trucks",
          "Cds/Dvds/VHS",
          "Cell Phones",
          "Clothes + Acc",
          "Collectibles",
          "Computer Parts",
          "Computers",
          "Electronics",
          "Farm + Garden",
          "Free",
          "Furniture",
          "Garage Sale",
          "General",
          "Heavy Equip",
          "Household",
          "Jewelry",
          "Materials",
          "Motorcycle Parts",
          "Motorcycles",
          "Music Instru",
          "Photo + Video",
          "RVS + Camp",
          "Sporting",
          "Tickets",
          "Tools",
          "Toys + Games",
          "Trailers",
          "Video Gaming",
          "Wanted",
          "Wheels + Tires"
        ]
      }
    ];

    // Had trouble accessing the subjects array. I realized it was probably because of nesting.
    // Separated subjects objects into its own array and used another map function to display it properly.
    return categories.map((item, i) => {
      let subjects = [];
      subjects.push(item.subjects);
      return (
        <div className="categories" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="group-links">
            {subjects[0].map(subject => (
              <a href="#" key={subject.id} className="link">
                {subject}
              </a>
            ))}
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
          <section className={`links`}>{this.loopCategories()}</section>

          <section className={`trending`}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" />Trending Now
            </div>

            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
