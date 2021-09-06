import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import { getBTCPrice } from "../actions/crypto";

class CalcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: "BTC",
      position: "position",
      capital: 1000,
      risk: 1.0,
      entry: 0.0,
      stop: 0.0,
      calculatedPosition: 0.0,
      positionInCrypto: 0.0,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  calculatePosition = async (e) => {
    e.preventDefault();

    const { data } = await getBTCPrice();

    const { crypto, position, capital, risk, stop, entry, calculatedPosition } =
      this.state;
    if (position == "short") {
      const result = (capital * risk) / (stop / entry - 1) / 100;
      await this.setState({ calculatedPosition: Math.round(result) });
      await this.setState({
        positionInCrypto: calculatedPosition / data.price,
      });
    }
    if (position == "long") {
      const result = (capital * risk) / (entry / stop - 1) / 100;
      await this.setState({ calculatedPosition: Math.round(result) });
    }

    this.props.handleCalc({
      crypto,
      position,
      capital,
      risk,
      stop,
      entry,
      calculatedPosition,
    });
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
              >
                <option>Select Side</option>
                <option value="short">Short</option>
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
                value={this.state.calculatedPosition}
                disabled
              />
            </Col>
            <Col>
              <Form.Control
                className="form-input"
                type="calculatedPosition"
                value={this.state.calculatedPosition}
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
