// console.log('Add Money');
document.getElementById("add-money-btn").addEventListener("click",function(){
    // console.log('Add Money Click')

    //1-bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    console.log('bankAccount', bankAccount);
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }
    //2-get bank account
    const accNo = getValueFromInput("add-money-number");
    console.log('accNo', accNo);
    if(accNo.length != 20){
        alert("Invalid Account Number");
        return;
    }
    //3-get amount;
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log('newBalance', newBalance);

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Successful ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin")
    }
});