
function clicked() {
    var inputCrtl = document.getElementById("txt");
    var inputValue = inputCrtl.value;
    console.log("the value is", inputValue);
    // this is a comment
    var labelCtrl = document.getElementById("lbl");
    labelCtrl.innerText = inputValue;
}