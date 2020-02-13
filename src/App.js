import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CurrencyToggler from './components/CurrencyToggler';
import AmountInput from './components/AmountInput';
import RateFilters from './components/RateFilters';
import RatesList from './components/RatesList';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <CurrencyToggler />
        </Col>
        <Col>
          <AmountInput />
        </Col>
      </Row>
      <Row>
        <Col>
          <RateFilters />
        </Col>
      </Row>
      <Row>
        <Col>
          <RatesList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
