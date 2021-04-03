import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import moment from 'moment';
import { DatePicker } from 'antd';

export const Checkout = () => {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
    console.log(email);
    console.log(time);
    // setAmount('');
    // setEmail('');
    // setTime('');
  };

  function onChange(value, dateString) {
    setTime(dateString);
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  return (
    <div>
      <p>Checkout</p>
      <div>
        <form>
          <div>
            <DatePicker
              showTime={{ format: 'HH:mm' }}
              format="DD.MM.YY - HH:mm"
              onChange={onChange}
              defaultValue={moment()}
              disabledDate={(date) => date.day() === 6 || date.day() === 0}
            />
          </div>
          <div className="TrackInputForm_input-container">
            <input
              type="number"
              name="amount"
              autoComplete="off"
              min="1"
              value={amount}
              onChange={handleAmountChange}
              required
            />
            <label htmlFor="time" className="TrackInputForm_label-name">
              <span className="TrackInputForm_content-name">
                Select amount of people
              </span>
            </label>
          </div>
          <div className="TrackInputForm_input-container">
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="note" className="TrackInputForm_label-name">
              <span className="TrackInputForm_content-name">Enter email</span>
            </label>
          </div>
          <div className="TrackInputForm_button-container">
            <button
              className="TrackInputForm_button"
              type="submit"
              onClick={handleSubmit}
            >
              <Link to="receipt">order</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
