!function(){
    //选项卡封装。参数一：类数组或数组。参数二：默认选中
    function tabFun(element, activeNum) {
        var arr = [].slice.call(element);
        for (var j = 0; j < arr.length; j++) {
            arr[j].classList.remove('active');
        }
        arr[activeNum].classList.add('active');
        arr.forEach(function(e, i){
            e.onclick = function() {
                for (var j = 0; j < arr.length; j++) {
                    arr[j].classList.remove('active');
                }
                e.classList.add('active');
            }
        })
    }
}();