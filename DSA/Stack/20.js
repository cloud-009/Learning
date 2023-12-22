/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    Input: s = "()",  Input: s = "[)"
    Output: true,     Output: false
*/
var isValid = function (s) {
    let stack = [];
    let openingBrackets = ['(', '[', '{'];
    let closingBrackets = [')', ']', '}'];
    for (let i = 0; i < s.length; i++) {
        if (openingBrackets.includes(s[i])) {
            stack.push(s[i]);
        } else if (closingBrackets.includes(s[i])) {
            let lastOpeningBracket = stack.pop();
            if (
                (s[i] === ')' && lastOpeningBracket !== '(') ||
                (s[i] === ']' && lastOpeningBracket !== '[') ||
                (s[i] === '}' && lastOpeningBracket !== '{')
            ) return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

console.log(isValid("{"));
