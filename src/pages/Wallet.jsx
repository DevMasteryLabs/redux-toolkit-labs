
import { useState } from "react";
import { useSelector } from "react-redux";

const Wallet = () => {
  const money = useSelector(state => state.money.amount)
  const [amount, setAmount] = useState(0);

  function handleDeposit() {
    setAmount(amount + 10)
  }

  function handleWithdraw() {
    setAmount(amount - 10)
  }

  return (
    <div className="container mt-2">
      <h3 className="text-center py-4">My Wallet</h3>
      <div className="d-flex justify-content-center">
        <div className="alert alert-secondary w-100" role="alert" style={{ maxWidth: "400px" }}>
          <div className="d-flex justify-content-around align-items-center align-self-center">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-success mb-1" onClick={handleDeposit}>Deposit $10</button>
              <button type="button" className="btn btn-danger mt-1" onClick={handleWithdraw}>Withdraw $10</button>
            </div>
            <h3>${money}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;