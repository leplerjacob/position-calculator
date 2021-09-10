import Table from "react-bootstrap/Table";

const History = ({ history }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Crypto</th>
          <th>Capital</th>
          <th>Risk</th>
          <th>Entry</th>
          <th>Stop Loss</th>
          <th>S/L %</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {history.map(
          ({ crypto, capital, risk, entry, stop, stopPercentage, position, calculatedPosition }) => {
            return (
              <tr key={position}>
                <td>{1}</td>
                <td>{crypto}</td>
                <td>{capital}</td>
                <td>{risk}</td>
                <td>{entry}</td>
                <td>{stop}</td>
                <td>{stopPercentage && stopPercentage.toFixed(2)}</td>
                <td>{calculatedPosition}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
};

export default History;
