import React from 'react';
import HeaderAccount from '../components/HeaderAccount/HeaderAccount';
import Account from '../components/Account/Account';

const User = () => {
  return (
    <div className='page_account'>
      <main className="main bg-dark">
        <HeaderAccount />
        <Account
          accountType="Checking"
          accountNumber="x8349"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          accountType="Savings"
          accountNumber="x6712"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          accountType="Credit Card"
          accountNumber="x8349"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default User;
