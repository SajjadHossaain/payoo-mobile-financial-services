// machine take id & give input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value =input.value;
    console.log('value', value);
    return value;
}