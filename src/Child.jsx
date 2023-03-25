import React, { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);
    // let { name, price, count, id, isSale } = this.props.productsData;
    return (
      <div className="col-md-3">
        <div className=" p-2 rounded bg-info position-relative">
          <h3>{this.props.productsData.name}</h3>
          <h3>{this.props.productsData.price}</h3>
          <h3>{this.props.productsData.count}</h3>
          <h3>{this.props.productsData.id}</h3>
          {this.props.productsData.isSale == true ? (
            <div className="p-2 rounded bg-danger top-0 end-0 position-absolute">
              Sale
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
