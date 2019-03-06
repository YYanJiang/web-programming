module.exports = {
    deepEquality: function (obj1, obj2){
    //This method check each field (at every level deep) in obj1 and obj2 for equality. 
    //It will return true if each field is equal, and false if not.

        if(arguments.length != 2){
            throw `The amount of arguments is a mismatch`;
        }
        if(obj1 === undefined || typeof obj1 !== "object" ){
            throw `The obj1 ${obj1} is not a object!`;
        }
        if(obj2 === undefined || typeof obj2 !== "object" ){
            throw `The obj2 ${obj2} is not a object!`;
        }
        return isEqual(obj1 , obj2);
    },


    uniqueElements: function (arr){
    //This method will iterate throughout the array provided in arr and return how many unique elements are in the array.
    //You must check that arr is provided and that it is an array
        if(arguments.length != 1){
            throw `The amount of arguments is a mismatch`;
        }
        if(arr !== undefined && arr instanceof Array){
            var ar = new Array();
            var ENum = 0;
            for(i=0;i<arr.length;i++){
                if(ar.includes(arr[i])!== true){
                    ar.push(arr[i]);
                    ENum ++ ;        
                }
            }
            return ENum;
        }
        else
            throw `The input is not a array!`;
    },

    countOfEachCharacterInString: function (str){
    //This method will traverse the string provided, str, and return an object. 
    //Each unique character in the array will be a key in the object, and the value will be how many times it appears in the string provided.
        if(arguments.length != 1){
            throw `The amount of arguments is a mismatch`;
        }
        if(str === undefined || typeof str !== "string" ){
            throw `The input is not a string!`;
        }

        var arr = new Array();
        var dic = {};
        arr = str.split('');
        for(i=0;i<arr.length;i++){
            var flag = true;
            for(var key in dic){
                if (arr[i] == key){
                    dic[key] ++ ;
                    flag = false;
                    break;}              
            }
            if (flag == true)
                dic[arr[i]]= 1;
        }
        return dic;
    }
};

//referrence: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEqual(obj1, obj2) {
    // Create arrays of property names
    var object1 = Object.getOwnPropertyNames(obj1);
    var object2 = Object.getOwnPropertyNames(obj2);
    // If number of properties is different,objects are not equivalent
    if (object1.length != object2.length) {
        return false;
    }
    for (var i = 0; i < object1.length; i++) {
        var name = object1[i];
        // If values of same property are not equal,objects are not equivalent
        if (obj1[name] !== obj2[name]) {
            return false;
        }
    }
    // If we made it this far, objects are considered equivalent
    return true;
}