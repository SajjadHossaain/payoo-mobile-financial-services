document.getElementById("transfer-btn").addEventListener("click",function(){
    // console.log('transfer btn click')
    const transferNumber = getValueFromInput("user-number");
    // console.log(transferNumber)
    if(transferNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    const transferAmount = getValueFromInput("transfer-amount");
    ;
    // console.log(transferAmount)
    if(transferAmount < 0){
        alert("Invalid Amount");
        return;
    }
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    
    const transferPin = getValueFromInput("transfer-pin");
    if(transferPin == "1234"){
        alert("Transfer Amount Successful");
        setBalance(newBalance);
        
        const history = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML = `
         <div class="transaction-card p-5 bg-base-100 shadow">
             Transfer Successful ${transferAmount},Transfer Number ${transferNumber} at ${new Date()}
        </div>
        `;
        history.append(div);
    }
    else{
        alert("Invalid Pin");
        return;
    }
});