import React from 'react';
import Form from 'react-bootstrap/Form';

const SUPPORTED_CURRENCIES = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  PLN: 'PLN'
}

const CurrencyToggler = () => {
  return (
    <div>
      { Object.keys(SUPPORTED_CURRENCIES).map(key => {
        return (
          <Form.Check
            type="radio"
            label={key}
            id={key}
            key={key}
          />
        )
      }) }
    </div>      
  )
}

export default CurrencyToggler;