function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert('Por Favor,preencha os valores!!!')
    return;
}

if (numPeople == "" | numPeople <= 1) {
    numPeople = 1;
    document.getElementById('each').style.display = "none";
} else {
    document.getElementById('each').style.display = "block";
 }

 let total = (bill * serviceQual) / numPeople;
 total = total.toFixed(2);
 document.getElementById('tips').innerHTML = total;
 document.getElementById('totalTips').style.display = "block";

}

document.getElementById('totalTips').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit', calculateTip);