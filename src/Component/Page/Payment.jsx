import React, { useState } from 'react';
import './Pay.css';

export default function Payment() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    adr: '',
    city: '',
    state: '',
    zip: '',
    cname: '',
    ccnum: '',
    expmonth: '',
    expyear: '',
    cvv: '',
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if (isFormValid) {
      alert('Payment done!');
      // Redirect to thank you page
      window.location.href = '/';
    } else {
      alert('Please fill in all required fields before continuing.');
    }
  };

  return (
    <>
      <h1 className='my-5 '>Responsive Checkout Form</h1>
      <div className="row" style={{ marginTop: '350px' }}>
        <div className="col-75 ">
          <div className="container">
            <form onSubmit={handleSubmit} className=' mx-auto'>
              <div className="row">
                <div className="col-50 px-5">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="fname" placeholder="John M. Doe" onChange={handleInputChange} />
                  <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" onChange={handleInputChange} />
                  <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="adr" placeholder="542 W. 15th Street" onChange={handleInputChange} />
                  <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="New York" onChange={handleInputChange} />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY" onChange={handleInputChange} />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Pin Code</label>
                      <input type="text" id="zip" name="zip" placeholder="38524" onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="col-50 px-5">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" id="cname" name="cname" placeholder="Debit cards, Credit cards, eg" onChange={handleInputChange} />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="ccnum" placeholder="1111-2222-3333-4444" onChange={handleInputChange} />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={handleInputChange} />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2020" onChange={handleInputChange} />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="35245" onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" defaultChecked name="sameadr" /> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn done" style={{
                backgroundColor: ` #4CAF50`,
                color: `white`,
                padding: `12px`,
                margin: `10px 0`,
                border: ` none`,
                width: ` 100%`,
                borderRadius: `3px`,
                cursor: ` pointer`,
                fontSize: ` 17px`,
              }} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
