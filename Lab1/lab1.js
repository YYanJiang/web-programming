const questionOne = function questionOne(arr) {
    // Implement question 1 here
    var sum = 0;
    for(var i=0;i<arr.length;i++)
        sum = sum + arr[i] * arr[i];
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    var Fibonacci = 0;
    if (num <1) 
        {fibonacci = 0;}
    else{
        if (num == 1)
            {fibonacci = 1;}
        else
            {fibonacci = questionTwo(num-1)+questionTwo(num-2);}
    }
    return fibonacci;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    var arr3=new Array();
    arr3 = text.split('');
    var vowelsnum = 0;
    for(var i=0;i<arr3.length;i++){
        if(arr3[i]=='a'||arr3[i]=='e'||arr3[i]=='i'||arr3[i]=='o'||arr3[i]=='u'||arr3[i]=='A'||arr3[i]=='E'||arr3[i]=='I'||arr3[i]=='O'||arr3[i]=='U')
            vowelsnum ++ ;
    }
    return vowelsnum;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    var factorial;
    if(num < 0)
        factorial = 'NaN';
    else{
        if(num == 0)
            factorial = 1;
        else
            factorial = num * questionFour(num-1);
    }
    return factorial;
}

module.exports = {
    firstName: "YANYAN", 
    lastName: "JIANG", 
    studentId: "10430965",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};