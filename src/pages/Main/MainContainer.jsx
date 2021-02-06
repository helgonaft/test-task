import React from "react";
import TransactionPreview from "./components/TransactionPreviewComponent";
import defaults from "../../utils/constants";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Modal, Form } from "react-bootstrap";

export default class MainContainer extends React.Component {
  state = {
    // we need an array, so converting object to array
    transactions: Object.entries(defaults.pastTransactions).map(e => e[1]),
    account: {
      name: "Account 1",
      id: "0x234nsdf45l..s234"
    },
    show: false
  };
  componentDidMount() {
    //     getPastTransactions(transactions => this.setState({ transactions }));
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12 d-flex">
            <div className="accountLogo d-flex align-items-center mr-2">
              <AccountCircleIcon fontSize="large" />
            </div>
            <div className="d-flex flex-column align-items-start justify-content-center">
              <span className="info-main">{this.state.account.name}</span>
              <span className="accountId info-details">
                {this.state.account.id}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex">
            <div className="newTransactionBox secondaryColor d-flex flex-column align-items-center justify-content-center my-3">
              <h1>O ETH</h1>
              <span className="secondaryColor">$0.00 USD</span>
              <button
                className="sendButton primaryColor my-2"
                onClick={this.handleShow}
              >
                <ArrowUpwardIcon></ArrowUpwardIcon>
              </button>
              <p className="text-center">Send</p>
            </div>
          </div>
        </div>
        <div>
          {this.state.transactions.map((transaction, i) => {
            return (
              <TransactionPreview
                key={i}
                transaction={transaction}
              ></TransactionPreview>
            );
          })}
        </div>
        {/* this modal should be in a separate component - SendTransactionComponent */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closebutton>
            <Modal.Title>Send Ether</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTransactionRecepient">
                <Form.Label>Add Recepient</Form.Label>
                <Form.Control type="text" placeholder="Enter Public Address" />
              </Form.Group>

              <Form.Group controlId="formTransactionAmount">
                <Form.Label>Amount to transfer</Form.Label>
                <Form.Control type="text" placeholder="Enter Amount" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-md secondaryColor"
              onClick={this.handleClose}
            >
              Cancel
            </button>
            <button
              className="btn btn-md btn-primary"
              onClick={this.handleClose}
            >
              Next
            </button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
