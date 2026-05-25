// machine take id & give input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value =input.value;
    console.log('value', value);
    return value;
}
//machine -> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance", Number(balance));
    return Number(balance);
}
// machine > set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}
//machine take id > hide all > show id
function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cash-out");
    const transaction = document.getElementById("history");
    const transfer = document.getElementById("transfer");
// console.log(`add money- ${addmoney}, Cashout - ${cashout}`);
 //hide all
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transaction.classList.add("hidden");
    transfer.classList.add("hidden");

    // id wala element ta ke tumi show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}