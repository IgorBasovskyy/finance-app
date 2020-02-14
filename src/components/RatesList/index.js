import React from 'react';
import Table from 'react-bootstrap/Table';

const RatesList = ({exchangeDate, amount}) => {

  let date = null;
  if (exchangeDate !== null) {
    date = exchangeDate.map((i) => {
      return (
        <tr key={i.exchangedate}>
          <td>{i.exchangedate}</td>
          <td>{i.rate}</td>
          <td>{i.rate * amount}</td>
        </tr>
      )
    })
  }
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Period</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {date}
      </tbody>
    </Table>
  )
}

export default RatesList;