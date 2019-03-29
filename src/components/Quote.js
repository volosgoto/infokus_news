import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="w3-container">
        <div className="w3-panel w3-sand w3-leftbar">
          <p>
            <i className="fa fa-quote-right w3-xxlarge w3-opacity" />
            <br />
            <i className="w3-serif w3-xlarge">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              massa vitae risus fermentum ullamcorper. Phasellus risus urna,
              ornare in aliquam id, porttitor sit amet sapien. Nulla facilisi.
            </i>
          </p>
        </div>
        <input
          className="w3-button w3-blue w3-right"
          type="button"
          value="New qoute"
        />
      </div>
    );
  }
}

export default Quote;
