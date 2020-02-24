import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="Converter">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Base Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >USD</Dropdown.Item>
          <Dropdown.Item >JPY</Dropdown.Item>
          <Dropdown.Item >BGN</Dropdown.Item>
          <Dropdown.Item >CZK</Dropdown.Item>
          <Dropdown.Item >DKK</Dropdown.Item>
          <Dropdown.Item >GBP</Dropdown.Item>
          <Dropdown.Item >HUF</Dropdown.Item>
          <Dropdown.Item >PLN</Dropdown.Item>
          <Dropdown.Item >RON</Dropdown.Item>
          <Dropdown.Item >SEK</Dropdown.Item>
          <Dropdown.Item >CHF</Dropdown.Item>
          <Dropdown.Item >ISK</Dropdown.Item>
          <Dropdown.Item >NOK</Dropdown.Item>
          <Dropdown.Item >HRK</Dropdown.Item>
          <Dropdown.Item >RUB</Dropdown.Item>
          <Dropdown.Item >TRY</Dropdown.Item>
          <Dropdown.Item >AUD</Dropdown.Item>
          <Dropdown.Item >BRL</Dropdown.Item>
          <Dropdown.Item >CAD</Dropdown.Item>
          <Dropdown.Item >CNY</Dropdown.Item>
          <Dropdown.Item >HKD</Dropdown.Item>
          <Dropdown.Item >IDR</Dropdown.Item>
          <Dropdown.Item >ILS</Dropdown.Item>
          <Dropdown.Item >INR</Dropdown.Item>
          <Dropdown.Item >KRW</Dropdown.Item>
          <Dropdown.Item >MXN</Dropdown.Item>
          <Dropdown.Item >MYR</Dropdown.Item>
          <Dropdown.Item >NZD</Dropdown.Item>
          <Dropdown.Item >PHP</Dropdown.Item>
          <Dropdown.Item >SGD</Dropdown.Item>
          <Dropdown.Item >THB</Dropdown.Item>
          <Dropdown.Item >ZAR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <form>
        <input type='text'
          placeholder='The amount you want to convert'
          name='Base amount' />

      </form>


      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Target Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >USD</Dropdown.Item>
          <Dropdown.Item >JPY</Dropdown.Item>
          <Dropdown.Item >BGN</Dropdown.Item>
          <Dropdown.Item >CZK</Dropdown.Item>
          <Dropdown.Item >DKK</Dropdown.Item>
          <Dropdown.Item >GBP</Dropdown.Item>
          <Dropdown.Item >HUF</Dropdown.Item>
          <Dropdown.Item >PLN</Dropdown.Item>
          <Dropdown.Item >RON</Dropdown.Item>
          <Dropdown.Item >SEK</Dropdown.Item>
          <Dropdown.Item >CHF</Dropdown.Item>
          <Dropdown.Item >ISK</Dropdown.Item>
          <Dropdown.Item >NOK</Dropdown.Item>
          <Dropdown.Item >HRK</Dropdown.Item>
          <Dropdown.Item >RUB</Dropdown.Item>
          <Dropdown.Item >TRY</Dropdown.Item>
          <Dropdown.Item >AUD</Dropdown.Item>
          <Dropdown.Item >BRL</Dropdown.Item>
          <Dropdown.Item >CAD</Dropdown.Item>
          <Dropdown.Item >CNY</Dropdown.Item>
          <Dropdown.Item >HKD</Dropdown.Item>
          <Dropdown.Item >IDR</Dropdown.Item>
          <Dropdown.Item >ILS</Dropdown.Item>
          <Dropdown.Item >INR</Dropdown.Item>
          <Dropdown.Item >KRW</Dropdown.Item>
          <Dropdown.Item >MXN</Dropdown.Item>
          <Dropdown.Item >MYR</Dropdown.Item>
          <Dropdown.Item >NZD</Dropdown.Item>
          <Dropdown.Item >PHP</Dropdown.Item>
          <Dropdown.Item >SGD</Dropdown.Item>
          <Dropdown.Item >THB</Dropdown.Item>
          <Dropdown.Item >ZAR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button type='submit'>Submit</button>

    </div>
  );
}

export default App;


