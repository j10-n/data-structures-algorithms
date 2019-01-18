function QuickSort(arr){
    if (arr.length <= 1) return arr;
    
    var pivot = arr[arr.length -1];
    var left = [];
    var right = [];

    for(var i = 0; i < arr.length-1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else right.push(arr[i])
        
    }
    console.log(arr);
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

module.exports = QuickSort;