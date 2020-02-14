import React from 'react';
import Form from 'react-bootstrap/Form';

const AmountInput = ({onChange}) => {
  return (
    <div>
      <Form.Control 
        type="number" 
        placeholder="Amount" 
        onChange={onChange}
      />
    </div>      
  )
}

export default AmountInput;