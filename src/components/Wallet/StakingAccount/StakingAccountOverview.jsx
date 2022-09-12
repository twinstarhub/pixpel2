import React from "react";

const StakingAccountOverview = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline">
      <div className="flex flex-col">
        <div className="text-lg mb-8">STAKING ACCOUNT</div>
        <div className="text-sm text-gray-400 mb-4">Estimated balance</div>
        <div className="flex gap-3 items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
          <div className="text-base">300.000 PIXP</div>
          <div className="text-gray-400 text-sm">= 3,832,194,124.10 TUSD</div>
        </div>
      </div>
      <div className="flex bg-app-black-button rounded-md px-3 h-max py-3 hover:bg-app-blue cursor-pointer active:bg-purple-800">
        TRANSACTION HISTORY
      </div>
    </div>
  );
};

export default StakingAccountOverview;