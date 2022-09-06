import React from "react";
import Account from "./Account";
import AccountHalf from "./AccountHalf";

const Accounts = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-lg mt-10">Accounts</div>
      <div className="grid grid-cols-3 gap-3">
        <Account title="Start Account" />
        <Account title="Trade Account" />
        <Account title="Staking Account" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <AccountHalf title="NFT account" />
        <AccountHalf title="Game account" />
      </div>
    </div>
  );
};

export default Accounts;
