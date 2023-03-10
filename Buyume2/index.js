//Iterative approach
function PrintAfterK(arr, k) {
    const n = arr.length;
    k = k % n; // 
    for (let i = 0; i < k; i++) {
        const temp = arr[n - 1];
        for (let j = n - 1; j > 0; j++) {
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
    return arr;
}



//Recursive Approach
function PrintAfterKrecur(arr, k) {
    const n = arr.length;
    k = k % n;
    revrse(arr, 0, n - 1);
    revrse(arr, 0, k - 1);
    revrse(arr, k, n - 1);
    return arr;
}

function revrse(arr, s, e) {
    while (s < e) {
        const temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
}

// Inputs
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;



let usingIteration = PrintAfterK(arr, k);

let usingRecur = PrintAfterKrecur(arr, k);


console.log(usingIteration);
console.log(usingRecur);