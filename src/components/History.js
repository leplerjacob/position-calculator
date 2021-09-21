import Table from "react-bootstrap/Table";
import {useEffect} from 'react'

const History = ({ history, handleDelete }) => {

// TODO: Add a delete button for each row
// TODO: Add a button to copy any particular metric

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
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
          ({ index, crypto, capital, risk, entry, stop, stopPercentage, position, calculatedPosition }) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{position}</td>
                <td>{crypto}</td>
                <td>{capital}</td>
                <td>{risk}</td>
                <td>{entry}</td>
                <td>{stop}</td>
                <td>{stopPercentage}</td>
                <td>{calculatedPosition}</td>
                <td onClick={() => handleDelete(index)}></td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
};

export default History;
