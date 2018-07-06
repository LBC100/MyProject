var MyTools = {
    tabFun: function (element, activeNum, className="active") {
        //选项卡封装。参数一：类数组或数组。参数二：默认选中。参数三：类名。默认active
        var arr = [].slice.call(element);
        for (var j = 0; j < arr.length; j++) {
            arr[j].classList.remove(className);
        }
        arr[activeNum].classList.add(className);
        arr.forEach(function(e, i){
            e.onclick = function() {
                for (var j = 0; j < arr.length; j++) {
                    arr[j].classList.remove(className);
                }
                e.classList.add(className);
            }
        })
    }
};
