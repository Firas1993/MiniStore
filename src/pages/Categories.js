import React, { Component } from "react";
import SideBare from "../components/SideBare";
import Produit from "../components/Produit";
import Pagination from "../components/Paginatio";
import axios from "axios";
export default class Categories extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/products?page=1&per_page=5")
      // .then(res => console.log(res.data.data))
      .then(
        res => {
          this.setState({
            isLoaded: true,
            items: res.data.data
          });
          console.log(this.state.items);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {/**     <SideBare />*/}
            </div>
            <div className="col-sm-9">
              <h3>Product List</h3>
              <div class="row">
                {items.map(item => {
                  return (
                    <Produit
                      key={item.id}
                      name={item.name}
                      color={item.color}
                      year={item.year}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pagination">
            <Pagination />
          </div>
        </div>
      );
    }
  }
}
