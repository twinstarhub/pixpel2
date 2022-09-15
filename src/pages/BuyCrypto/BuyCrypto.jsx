import React, { useState } from "react";
import Buy from "../../components/Crypto/P2P/Buy";
import Setting from "../../components/Crypto/P2P/Setting";
import TokenButton from "../../components/Button/TokenButton";
import Sell from "../../components/Crypto/P2P/Sell";
import { coinList } from "../../components/Crypto/dataList";
import CoinType from "../../components/Crypto/P2P/CoinType";

const BuyCrypto = () => {
  const [selectedBuySell, setSelectedBuySell] = useState(0);
  const [tempComponent, setTempComponent] = useState(<Buy />);
  const handleBuySellClick = (idx) => () => {
    setSelectedBuySell(idx);
    switch (idx) {
      case 0:
        setTempComponent(<Buy />);
        break;
      case 1:
        setTempComponent(<Sell />);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="flex">
        <div className="w-1/6"></div>
        <div className="flex flex-col w-2/3 gap-12">
          <div className="flex justify-center gap-6">
            {coinList.map((coin, idx) => {
              return <CoinType key={idx} title={coin.title} />;
            })}
          </div>
          <div className="flex justify-end">
            <div className="flex w-5/6 justify-between">
              <Setting />
              <div className="flex items-end gap-4">
                <TokenButton
                  title="BUY"
                  selected={selectedBuySell === 0}
                  handleClick={handleBuySellClick(0)}
                />
                <TokenButton
                  title="SELL"
                  selected={selectedBuySell === 1}
                  handleClick={handleBuySellClick(1)}
                />
              </div>
            </div>
          </div>
          {tempComponent}
        </div>
      </div>
    </>
  );
};

export default BuyCrypto;
