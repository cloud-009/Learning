/* 
Given two strings s and t, return true if they are equal when both are typed into empty text editors.
'#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/
var backspaceCompare = function (s, t) {
    let string1 = s.split('');
    let string2 = t.split('');
};