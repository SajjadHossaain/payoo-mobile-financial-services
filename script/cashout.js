document.getElementById("cashout-btn").addEventListener("click",function(){
  //1-get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if(cashoutNumber.length != 11){
    alert("Invalid Number");
    return;
  }
  //2-get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  //3-get the current balance
  const currentBalance = getBalance();
  //4-calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  // console.log("newBalance", newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
  }
  //5-get the pin and verify
  const pin = getValueFromInput("cashout-pin");
  if(pin === "1234"){
    alert("Cashout Successful");
    // document.getElementById("balance").innerText = newBalance;
    setBalance(newBalance);
    //1- take history container
    const history = document.getElementById("history-container");
    //2- create new div
    const div = document.createElement("div");
    //3- in new div write innerHTMl
    div.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 shadow">
        Cashout Successful ${cashoutAmount},Cashout Number ${cashoutNumber} at ${new Date()}
    </div>
    `;
    //4- append
    history.append(div);
  }
  else{
    alert("Invalid Pin!");
    return;
  }
})




// document.getElementById("cashout-btn").addEventListener("click",function(){
//     //1-get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length!==11){
//         alert("Invalid Agent Number");
//         console.log("Invalid")
//         return;
//     }
//     //2-get the amount ,validate & convert string to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log('cashoutAmount:', cashoutAmount);
//     //3-get the current balance ,validate & convert string to number

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log('balance:', balance)
//     //4-calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log('newBalance: ', newBalance);
//     if(balance<0){
//         alert("Invalid Amount");
//         return;
//     }
//     //5-get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === "1234"){
//         //5-1 true :: show an alert > balance
//         alert("cashout successful!");
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         //5-2 true :: show another alert > return
//         alert("Invalid pin");
//         return;

//     }

// });