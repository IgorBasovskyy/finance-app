import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CurrencyToggler from './components/CurrencyToggler';
import AmountInput from './components/AmountInput';
import RateFilters from './components/RateFilters';
import RatesList from './components/RatesList';

import CurrencyService from './CurrencyService';

const App = () => {

  const [selectedCurrency, setCurrency] = useState(null);
  const [selectedDate, setDate] = useState(null);
  const [enteredAmount, setAmount] = useState(null);
  const [provideData, setData] = useState(null);
  const [value, setValue] = useState(null);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (selectedDate !== null && selectedCurrency !== null) {
      getDataByDate();
    }
  }, [selectedDate]);


  const onCurrencyChange = (event) => {
    const currencyId = event.target.id;
    setCurrency(currencyId);
    setData(null);
    setDate(null);
    setValue(null);
  };

  const onDateChange = (value) => {
    const exchangeDateValue = value;
    setDate(exchangeDateValue);
    setValue(value);
  };

  const getAmount = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);
  };

  CurrencyService().then((responses) => {
      setRate([responses])

      console.log(rate)
    
  })


  if (rate !== null) {
    rate.map((dataArr) => {
      return dataArr.find(elem => {
        return elem.cc === selectedCurrency;
      })
    });
  }
    
  const getDataByDate = () => {
    const result = [];
    rate.find(currencyElement => {
      return selectedDate.find(dateElement => {
        if (currencyElement.exchangedate === dateElement) {
          result.push(currencyElement)
        }
      })
    })

    setData(result);
  }

  return (
    <Container>
      <Row className="mb-3 mt-3 align-items-center">
        <Col>
          <CurrencyToggler onChange={onCurrencyChange} />
        </Col>
        <Col>
          <AmountInput
            onChange={getAmount}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <RateFilters
            onChange={onDateChange}
            value={value}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <RatesList
            exchangeDate={provideData}
            amount={enteredAmount}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
