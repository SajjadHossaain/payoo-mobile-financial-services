document.getElementById("paybill-btn").addEventListener("click",function () {
  const paybillBank = getValueFromInput("paybill-bank");
  const paybillAccountNumber = getValueFromInput("paybill-acc-number");
  const paybillAmount = getValueFromInput("paybill-amount");
  const paybillPin = getValueFromInput("paybill-pin");
//   console.log("paybill clcik");

  if (paybillBank == "Select a Bank") {
    alert("Please Select a Bank");
    return;
  }
  if (paybillAccountNumber.length != 20) {
    alert("Invalid Account Number");
    return;
  }

  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(paybillAmount);
  if (paybillPin == "1234") {
    alert("Pay Bill Successful");
    setBalance(newBalance);
  } else {
    alert("PayBill failed");
  }
});