/*
    on airplane to FLL 12/20/16
*/

//reverses a string
function reverseLoop(s) {
    var len = s.length,
        rev = '';
    while (len-- > 0) {
        rev += s[len];
    }
    return rev;
}

//reverses a string recursively
function reverseRecursion(s) {
    return s.length == 0 ? s : s[s.length-1] + reverseRecursion(s.slice(0,s.length-1));
}

//find first non repeating char
function firstNonRepeat(n) {
    var map = {};
    for (var i = 0; i < n.length; i++) {
        //loop through and append
        append(n[i], i);
    }

    //check results, return first non repeat
    for(key in map) {
        if (map[key].count == 1) {
            return key;
        }
    }

    //utility function
    function append(c, i) {
        if (map[c] != null) {
            map[c].count++;
        } else {
            map[c] = {'index': i, 'count': 1};
        }
    }
}

//merge two sorted array

//reverse order of words
function reverseWords(s) {
    //to array
    s = s.split(' ');

    //return flipped array as a string
    return flip(s);

    //recursive flip-flop
    function flip(arr) {
        return arr.length == 1 ? arr[0] : arr[arr.length -1] + ' ' + flip(arr.slice(0,arr.length-1));
    }
}

//create all permutation of a string
function permString(s) {
    //abc => abc acb bac bca cab cba
    //0123
    //0132
    //0213
    //0231
    //0312
    //0321...
    function recursion(some) {
        return some[0] + recursion(some.slice(1));
        //keep breaking it smaller and returning
    }
}

//calling all the stuff
var revR = reverseRecursion('testing multiple words');
var revL = reverseLoop('testing');
var fnr = firstNonRepeat('aalksjdlksff');
var revW = reverseWords('the quick brown fox jumped over the lazy cactus');

console.log(revW);
