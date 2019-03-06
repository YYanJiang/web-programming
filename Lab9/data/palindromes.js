let exportedMethods = {
    isPalindrome(text) {
        if (! text) throw "Text must be entered."
        if (typeof(text)!= "string") throw "Must provide a string.";
        let lowerText = text.toLowerCase();
        for(let i = 0; i < lowerText.length; i++){
            if(!(/^[a-z0-9]/.test(lowerText[i]))){
                lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
                console.log(lowerText);
                i--;
            }
        }
        for (let x = 0, y = lowerText.length - 1; x < y; x++, y--) {
            if (lowerText[x] != lowerText[y])
                return "not-palindrome";
        }
        return "is-palindrome";
    }
  };
  
  module.exports = exportedMethods;