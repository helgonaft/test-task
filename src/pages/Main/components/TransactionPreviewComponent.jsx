import React, { Component } from "react";

class TransactionPreview extends Component {
  render() {
    const { amount, date } = this.props.transaction;
    return (
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column align-items-start justify-content-center w-100">
            <div className="d-flex align-items-center justify-content-between w-100">
              <span className="info-main">Sent Ether</span>
              <span className="info-main">- {amount} ETH</span>
            </div>
            <div className="d-flex align-items-center justify-content-between trancation_details w-100">
              <span className="info-details">{date}</span>
              <span className="info-details">- ${amount} USD</span>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default TransactionPreview;
