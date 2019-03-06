function createMetrics(text){
    if(!text) throw "You must provide text";
    if(typeof text !== 'string') throw "Path given was not of type string";

    text = text.toLowerCase();
  
    let totalLetters = 0 // total number of letter characters in the text
    let totalNonLetters = 0  //  total number of non-letters in the text  
    let totalWords = 0 //total number of words in the text 
    let totalVowels = 0 //total number of vowels in the text (not counting y)
    let totalConsonants = 0 //total number of consonants in the text (counting y)
    let uniqueWords = 0 // total number of unique words that appear in the lowercased text
    let longWords = 0 // number of words in the text that are 6 or more letters long
  
    let wordOccurences = {}  //a dictionary of each word and how many times each word occurs in the text
  
    let wordflag;
    let textMet = {};
    let currentWord = [];
  
    for(let i = 0; i < text.length; i++){
        if(/^[a-z]/.test(text[i])){
            totalLetters++;
            if(text[i] == "a" || text[i] == "e" || text[i] == "i"|| text[i] == "o"|| text[i] == "u"){
                totalVowels ++;
            }
            else{
                totalConsonants++;
            }

            if(i != 0 && /^[a-z']/.test(text[i-1])){
                currentWord.push(text[i]);
            }
            else{
                wordflag = true;
                currentWord = [text[i]];
            }
        }
        else{
            totalNonLetters++;
            if(i != 0 && /^[a-z]/.test(text[i-1]) && (!/^'/.test(text[i])))
                wordflag = false;
        }
        
        if(wordflag == false){
            totalWords++;                
            if(currentWord.length>=6)
                longWords++;
            if( isNaN(wordOccurences[currentWord.join("")])){
                uniqueWords++;     
                wordOccurences[currentWord.join("")] = 1; 
            }
            else
                wordOccurences[currentWord.join("")] += 1;
            currentWord = [];
            wordflag = true;
        }
    }
  
    textMet['totalLetters'] = totalLetters;
    textMet['totalNonLetters'] = totalNonLetters;
    textMet['totalWords'] = totalWords;
    textMet['totalVowels'] = totalVowels;
    textMet['totalConsonants'] = totalConsonants;
    textMet['uniqueWords'] = uniqueWords;
    textMet['longWords'] = longWords;
    textMet['averageWordLength'] = totalLetters / totalWords;
    textMet['wordOccurences'] = wordOccurences;
  
    return textMet;
}
  
// var t = "Helllo, my -! don't This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23 don't" ; 
// console.log(t);
// console.log(createMetrics(t));

module.exports = {
createMetrics
}
  