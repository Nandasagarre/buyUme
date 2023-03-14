/*Question for Nanda Sagar- Given an array of arrays with words, and a string find the total number of combinations that is equal to string.
Input : 
Let arr = [
 [a, c, d, e,  f,  s]
 [g, k,  r, n,  t,  t],
 [n, u,  i, a, o,  a],
 [p,  l,  r, k,  t,  r],
 [n, s,  t, a,  r,  s],
 [e, q,  t, o,  r,  p]
],
Let string = “star”*/

//using DFS to find the combiations of given string

//dfs method takes character, and compares till the word is 0,
function dfs(arr, i, j, word, directions) {

    if (word.length === 0) return 1;

    if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length) {
        // if hits boundary
        return 0;
    }
    if (arr[i][j] !== word[0]) {
        // not a match
        return 0;
    }

    //mark as visited
    const temp = arr[i][j];
    arr[i][j] = '-';

    let count = 0;
    for (const [x, y] of directions) {
        count += dfs(i + x, j + y, word.slice(1), directions);
    }

    //changing back to unvisted for next iteration
    arr[i][j] = temp;

    return count;


}


//takes arr and string and calls for every character in 2d array
function strCombinations(arr, str) {
    // directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];  // considering all 8 directions
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            count += dfs(i, j, str, directions);
        }
    }

    return count;
}


//inputs  // updated the array properly
let arr = [
    ['a', 'c', 'd', 'e', 'f', 's'],
    ['g', 'k', 'r', 'n', 't', 't'],
    ['n', 'u', 'i', 'a', 'o', 'a'],
    ['p', 'l', 'r', 'k', 't', 'r'],
    ['n', 's', 't', 'a', 'r', 's'],
    ['e', 'q', 't', 'o', 'r', 'p']];

let str = "star";

console.log(strCombinations(arr, str));
