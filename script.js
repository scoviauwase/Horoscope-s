
function submitBday() {
    var Q4A = "Your birthday is: ";
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
    Q4A += Bdate + ". You Are " + ~~ ((Date.now() - Bday) / (31557600000)) + " Years Old";
    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}