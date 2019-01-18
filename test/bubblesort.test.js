const BubbleSort = require('../sorting/bubblesort.js');

if([ 1, 2, 3, 4, 5 ].join('') == BubbleSort([ 2, 1, 3, 5, 4 ]).join('')){
    console.log("works");
    console.log(BubbleSort([ 2, 1, 3, 5, 4 ]));
} else{
    console.log("fail", BubbleSort([ 2, 1, 3, 5, 4 ]));
}