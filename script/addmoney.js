// console.log('Add Money');
document.getElementById("add-money-btn").addEventListener("click", function () {
  // console.log('Add Money Click')

  //1-bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  // console.log("bankAccount", bankAccount);
  if (bankAccount == "Select a Bank") {
    alert("Please select a bank");
    return;
  }
  //2-get bank account
  const accNo = getValueFromInput("add-money-number");
  console.log("accNo", accNo);
  if (accNo.length != 20) {
    alert("Invalid Account Number");
    return;
  }
  //3-get amount;
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log("newBalance", newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Successful ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
    //1- take history container
    const history = document.getElementById("history-container");
    //2- create new div
    const div = document.createElement("div");
    //3- in new div write innerHTMl
    div.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 shadow">
        Add Money Successful ${bankAccount},Account-Number ${accNo} at ${new Date()}
    </div>
    `;
    //4- append
    history.append(div);
  } else {
    alert("Invalid Pin");
  }
});
