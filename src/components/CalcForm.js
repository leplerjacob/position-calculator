import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Component, useState } from "react";

class CalcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "BTC",
      capital: 1000,
      risk: 1.0,
      entry: 0.0,
      stop: 0.0,
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="form">
        <Form>
          <Form.Select
            className="form-input mb-3"
            aria-label="Default select example"
          >
            <option>Select Crypto</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </Form.Select>

          <FloatingLabel
            controlId="floatingInput"
            label="Capital"
            className="mb-3"
          >
            <Form.Control
              className="form-input"
              type="number"
              placeholder="capital"
              name="capital"
              value={this.state.capital}
              onChange={this.handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="risk"
            label="Percentage of risk"
            className="mb-3"
          >
            <Form.Control
              className="form-input"
              type="risk"
              placeholder="risk"
              name="risk"
            />
          </FloatingLabel>

          <FloatingLabel controlId="entry" label="Entry price" className="mb-3">
            <Form.Control
              className="form-input"
              type="price"
              placeholder="Entry price"
              name="entry"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="stopLoss"
            label="Stop loss price"
            className="mb-3"
          >
            <Form.Control
              className="form-input"
              type="stopLoss"
              placeholder="Stop loss price"
              name="stop"
            />
          </FloatingLabel>

          <Form.Control
            className="form-input"
            type="calculatedPosition"
            placeholder="00.00"
            disabled
          />
        </Form>
      </div>
    );
  }
}

export default CalcForm;
