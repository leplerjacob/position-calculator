import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import { getBTCPrice, getETHPrice } from "../actions/crypto";
import { postTrade } from "../actions/history";

class CalcForm extends Component {
  // TODO: reset form after submission

  
  constructor(props) {
    super(props);
    this.state = {
      crypto: "BTC",
      position: "short",
      capital: 1000,
      risk: 1.0,
      entry: 49847,
      stop: 52057,
      stopPercentage: 0.0,
      calculatedPosition: 0.0,
      positionInCrypto: 0.0,
    };
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculatePosition = async (e) => {
    e.preventDefault();
    const { crypto, position, capital, risk, stop, entry } = this.state;

    let currPrice;

    if (crypto == "ETH") {
      const { data } = await getETHPrice();
      currPrice = data;
    }

    if (crypto == "BTC") {
      const { data } = await getBTCPrice();
      currPrice = data;
    }

    if (position == "short") {
      const result = (capital * risk) / (stop / entry - 1) / 100;
      await this.setState({
        calculatedPosition: Math.round(result),
      });
      await this.setState({
        // TODO: include positionInCrypto for both long and short positions.

        // positionInCrypto: calculatedPosition / currPrice,
        stopPercentage: Math.round((stop / entry - 1) * 100) / 100,
      });
    }
    if (position == "long") {
      const result = (capital * risk) / (entry / stop - 1) / 100;
      await this.setState({ calculatedPosition: Math.round(result) });
      await this.setState({
        // positionInCrypto: calculatedPosition / currPrice,
        stopPercentage: Math.round((entry / stop - 1) * 100) / 100,
      });
    }
    
    let tradeDetails = {
      crypto,
      position,
      capital,
      risk,
      stop,
      entry,
      stopPercentage: this.state.stopPercentage,
      calculatedPosition: this.state.calculatedPosition,
    };

    this.props.handleCalc(tradeDetails);
    postTrade(tradeDetails);
  };

  render() {
    return (
      <div className="form">
        <Form onSubmit={this.calculatePosition}>
          <Row>
            <Col>
              <Form.Select
                className="form-input mb-3"
                aria-label="select crypto"
                onChange={this.handleChange}
                name="crypto"
                defaultValue="btc"
              >
                <option>Select Crypto</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="form-input mb-3"
                aria-label="select position"
                onChange={this.handleChange}
                name="position"
                defaultValue="short"
              >
                <option>Select Side</option>
                <option defaultValue value="short">
                  Short
                </option>
                <option value="long">Long</option>
              </Form.Select>
            </Col>
          </Row>

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
              value={this.state.risk}
              onChange={this.handleChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="entry" label="Entry price" className="mb-3">
            <Form.Control
              className="form-input"
              type="price"
              placeholder="Entry price"
              name="entry"
              value={this.state.entry}
              onChange={this.handleChange}
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
              value={this.state.stop}
              onChange={this.handleChange}
            />
          </FloatingLabel>
          <Row>
            <Col>
              <Form.Control
                className="form-input"
                type="calculatedPosition"
                value={this.state.calculatedPosition}
                disabled
              />
            </Col>
            <Col>
              <Form.Control
                className="form-input"
                type="calculatedPosition"
                value={0.0}
                disabled
              />
            </Col>
            <Col>
              <Form.Control
                className="form-input"
                type="calculatedPosition"
                value={0.0}
                disabled
              />
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CalcForm;
