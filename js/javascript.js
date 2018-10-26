
function clicked() {
    var inputCtrl = document.getElementById("txt");
    var inputValue = inputCtrl.value;
    console.log("the value is", inputValue);
    // this is a comment
    var labelCtrl = document.getElementById("lbl");
    labelCtrl.innerText = inputValue;
}