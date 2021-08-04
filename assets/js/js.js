function start() {
    var outPutHeight = document.getElementById('my-height');
    var outPutWeight = document.getElementById('my-weight');
    var outPutWish = document.getElementById('my-wish')
    var heightLength = heightArr.length;
    var weightLenght = weightArr.length;
    var wishLength = wishArr.length;
    heightItem = '';
    weightItem = '';
    wishItem = '';
    
    for (var i = 0; i < heightLength; i++) {
        heightItem = heightItem + `<option class="height-value" value="${heightArr[i].value}">${heightArr[i].label}</option>`
    }
    outPutHeight.innerHTML = heightItem;

    for (var i = 0; i < weightLenght; i++ ) {
        weightItem = weightItem + `<option class="weight-value" value="${weightArr[i].value}">${weightArr[i].label}</option>`
    }
    outPutWeight.innerHTML = weightItem;

    for (var i = 0; i < wishLength; i++ ) {
        wishItem = wishItem + `<option class="wish-value" value="${wishArr[i].value}">${wishArr[i].label}</option>`
    }
    outPutWish.innerHTML = wishItem;

    //btn 
    var btnChoiceSize = document.getElementById('btn');
    btnChoiceSize.onclick = clickBtnChoiceSize;
    function clickBtnChoiceSize() {
        render();
        
    }

}
start();
function render() {
    var a = 1;
    var  b = 2;
    var heightValue = document.getElementById('my-height');
    var weightValue = document.getElementById('my-weight');
    var wishValue = document.getElementById('my-wish');
    var outPutTextSize = document.getElementById('advice')
   
    resultLength = result.length;
    for(var i = 0; i < resultLength; i++) {
        if ((heightValue.value == result[i].height) &
        (weightValue.value == result[i].weight) & 
        (wishValue.value == result[i].wish)) {
            return outPutTextSize.innerHTML=  `<p>SIZE PHÙ HỢP VỚI LỰA CHỌN CỦA BẠN LÀ:${ result[i].size}</p>`
            
        }
    }
   
}

function update() {

}

function deleteItem() {

}