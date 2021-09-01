import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const calcForm = () => {
  return (
    <div className="form">
      <Form>
        <Form.Select className="form-input mb-3" aria-label="Default select example">
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
            type="capital"
            placeholder="capital"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="risk"
          label="Percentage of risk"
          className="mb-3"
        >
          <Form.Control className="form-input" type="risk" placeholder="risk" />
        </FloatingLabel>

        <FloatingLabel controlId="entry" label="Entry price" className="mb-3">
          <Form.Control
            className="form-input"
            type="price"
            placeholder="Entry price"
          />
        </FloatingLabel>

        <FloatingLabel controlId="stopLoss" label="Stop loss price" className="mb-3">
          <Form.Control
            className="form-input"
            type="stopLoss"
            placeholder="Stop loss price"
          />
        </FloatingLabel>

        <Form.Control
          className="form-input"
          type="calculatedPosition"
          placeholder="00.00"
        />
      </Form>
    </div>
  );
};

export default calcForm;
