function showMsg(msg1, msg2){
//    alert(msg1 + msg2);
    var msgAll = msg1+msg2;
    return msgAll;
}

function random(num1, num2){
    console.log(num1, num2);
    return Math.floor(Math.random()*(num2-num1)+num1);
}