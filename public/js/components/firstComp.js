webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(119);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(121);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(123);

var _Listings2 = _interopRequireDefault(_Listings);

var _reactRouterDom = __webpack_require__(243);

var _Item = __webpack_require__(122);

var _Item2 = _interopRequireDefault(_Item);

var _Category = __webpack_require__(120);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _Item2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(116);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Craigslist"
            ),
            _react2.default.createElement(
              "div",
              { className: "city" },
              "Los Angeles",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement("div", { className: "user-img" }),
            _react2.default.createElement(
              "div",
              { className: "user-dropdown" },
              "my account",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "post-btn" },
              "post to classifieds"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "category" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          "this category is ",
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var items = [{
  subjects: ["Activities", "Artists", "Childcare", "Classes", "Events", "General", "Groups", "Local News", "Lost + Found", "Missed", "Connections", "Musicians", "Pets", "Politics", "Rants & Raves", "Rideshare", "Volunteers"]
}];

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopTrending = function () {
      var trending = ["Apple Macbook", "iPhone X", "Hoverboard", "Lebron James Lakers jersey", "Nvidia GTX 1080", "Beats by Dre", "Kobe Bryant autographed jersey", "Lakers tickets"];
      return trending.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: "tag" },
          item
        );
      });
    };

    _this.loopCategories = function () {
      var categories = [{
        id: 1,
        title: "Community",
        subjects: ["Activities", "Artists", "Childcare", "Classes", "Events", "General", "Groups", "Local News", "Lost + Found", "Missed", "Connections", "Musicians", "Pets", "Politics", "Rants & Raves", "Rideshare", "Volunteers"]
      }, {
        id: 2,
        title: "Services",
        subjects: ["Automotive", "Beauty", "Cell/Mobile", "Computer", "Creative", "Cycle", "Event", "Farm + Garden", "Financial", "Household", "Labor/Move", "Legal", "Lessions", "Marine", "Pet", "Real Estate", "Skilled Trade", "SM Biz Ads", "Travel/Vac", "Write/Ed/Tran"]
      }, {
        id: 3,
        title: "Housing",
        subjects: ["Apts/Housing", "Housing Swap", "Housing Wanted", "Office", "Parking/Storage", "Real Estate For Sale", "Rooms/Shared", "Rooms Wanted", "Sublets/Temporary", "Vacation Rentals"]
      }, {
        id: 4,
        title: "Gigs",
        subjects: ["Computer", "Creative", "Crew", "Domestic", "Event", "Labor", "Talent", "Writing"]
      }, {
        id: 5,
        title: "For Sale",
        subjects: ["Antiques", "Appliances", "Arts + Crafts", "Auto Parts", "Aviation", "Baby + Kid", "Beauty + Hlth", "Books", "Business", "Cars + Trucks", "Cds/Dvds/VHS", "Cell Phones", "Clothes + Acc", "Collectibles", "Computer Parts", "Computers", "Electronics", "Farm + Garden", "Furniture", "Garage Sale", "Household", "Jewelry", "Materials", "Motorcycles", "Photo + Video", "RVS + Camp", "Sporting", "Tickets", "Tools", "Toys + Games", "Video Gaming", "Wheels + Tires"]
      }, {
        id: 6,
        title: "Jobs",
        subjects: ["Accounting", "Admin", "Arch/Engineering", "Art/Design", "Biotech/Science", "Business", "Customer Service", "Education", "Food/Hosp", "General Labor", "Government", "Human Resources", "Legal/Paralegal", "Marketing", "Medical/Health", "Real Estate", "Retail", "Sales", "Security", "Software/QA/DBA", "Systems/Network", "Tech Support", "TV/Film/Video", "Web/Design", "Writing/Editing"]
      }];

      // Had trouble accessing the subjects array. I realized it was probably because of nesting with more array of objects.
      // Separated subjects objects into its own array and used another map function to display it properly.
      return categories.map(function (item, i) {
        var subjects = [];
        subjects.push(item.subjects);
        return _react2.default.createElement(
          "div",
          { className: "categories", key: item.id },
          _react2.default.createElement(
            "div",
            { className: "title" },
            item.title
          ),
          _react2.default.createElement(
            "div",
            { className: "group-links" },
            subjects[0].map(function (subject) {
              return _react2.default.createElement(
                "a",
                { href: "#", key: subject.id, className: "link" },
                subject
              );
            })
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Find anything you need. ",
            _react2.default.createElement("br", null),
            "We're here to connect you."
          ),
          _react2.default.createElement(
            "section",
            { className: "links" },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { type: "text", name: "search", className: "search" }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "far fa-clock" }),
              "Trending Now"
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              this.loopTrending()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "item" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          "City: ",
          match.params.city,
          "Category: ",
          match.params.category,
          "this item is ",
          match.params.item
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "select",
                { name: "min-price", className: "min-price" },
                _react2.default.createElement(
                  "option",
                  { value: "0" },
                  " 0"
                )
              ),
              _react2.default.createElement(
                "select",
                { name: "max-price", className: "max-price" },
                _react2.default.createElement(
                  "option",
                  { value: "1000" },
                  " 1000"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: " form-group make" },
                _react2.default.createElement(
                  "label",
                  null,
                  "Make"
                ),
                _react2.default.createElement(
                  "select",
                  { name: "make", className: "make" },
                  _react2.default.createElement(
                    "option",
                    { value: "bmw" },
                    "BMW"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: " form-group model" },
                _react2.default.createElement(
                  "label",
                  null,
                  "Model"
                ),
                _react2.default.createElement(
                  "select",
                  { name: "model", className: "model" },
                  _react2.default.createElement(
                    "option",
                    { value: "bmw" },
                    "BMW"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: " form-group button" },
                _react2.default.createElement(
                  "div",
                  { className: "primary-btn" },
                  "Update"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "primary-btn" },
                  "Reset"
                )
              )
            )
          ),
          _react2.default.createElement(
            "section",
            { id: "list-view" },
            _react2.default.createElement(
              "section",
              { className: "change-view" },
              _react2.default.createElement(
                "div",
                { className: " form-group view-dropdown" },
                _react2.default.createElement(
                  "select",
                  { name: "select-view", className: "select-view" },
                  _react2.default.createElement(
                    "option",
                    { value: "gallery" },
                    "Gallery View"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "list" },
                    "List View"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "thumb" },
                    "Thumb View"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: " form-group sort-dropdown" },
              _react2.default.createElement(
                "select",
                { name: "sort-view", className: "sort-view" },
                _react2.default.createElement(
                  "option",
                  { value: "gallery" },
                  "Gallery View"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "list" },
                  "List View"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "thumb" },
                  "Thumb View"
                )
              )
            )
          ),
          _react2.default.createElement(
            "section",
            { className: "all-items" },
            _react2.default.createElement(
              "div",
              { className: "item" },
              _react2.default.createElement(
                "div",
                { className: "image" },
                _react2.default.createElement(
                  "div",
                  { className: "price" },
                  "$8900"
                ),
                "image"
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "h5",
                  null,
                  "Title"
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  "City"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[118]);