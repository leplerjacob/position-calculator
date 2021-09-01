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
        {history.map((position,index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{position[0]}</td>
              <td>{position[1]}</td>
              <td>{position[2]}</td>
              <td>{position[3]}</td>
              <td>{position[4]}</td>
              <td>{position[5]}</td>
              <td>{position[6]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default History;
