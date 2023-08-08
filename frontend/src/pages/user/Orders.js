import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import UserMenu from '../../components/UserMenu';

const Orders = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All orders</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
