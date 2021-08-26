import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const calcForm = () => {
  return (
    <div className="form">
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Capital"
          className="mb-3"
        >
          <Form.Control type="capital" placeholder="capital" className />
        </FloatingLabel>

        <FloatingLabel
          controlId="risk"
          label="Percentage of risk"
          className="mb-3"
        >
          <Form.Control type="risk" placeholder="risk" />
        </FloatingLabel>

        <FloatingLabel
          controlId="entry"
          label="Entry price"
          className="mb-3"
        >
          <Form.Control type="price" placeholder="Entry price" />
        </FloatingLabel>

        <FloatingLabel
          controlId="stopLoss"
          label="Stop/Loss"
          className="mb-3"
        >
          <Form.Control type="stopLoss" placeholder="Stop/Loss" />
        </FloatingLabel>

        <Form.Control type="calculatedPosition" placeholder="00.00"/>
      </Form>
    </div>
  );
};

export default calcForm;
