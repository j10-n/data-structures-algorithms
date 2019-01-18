const QuickSort = require('../sorting/quicksort.js');

if([ 1, 2, 3, 4, 5 ].join('') == QuickSort([ 2, 1, 3, 5, 4 ]).join('')){
    console.log("works");
    console.log(QuickSort([ 2, 1, 3, 5, 4 ]));
} else{
    console.log("fail", QuickSort([ 2, 1, 3, 5, 4 ]));
}