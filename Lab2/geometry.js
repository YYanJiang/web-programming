
module.exports = {
    volumeOfRectangularPrism: function (length, width, height) {
    //This method will calculate the volume of a r   ectangular prism. 
        if(arguments.length != 3){
            throw `The amount of arguments is a mismatch`;
        }
    
        if( length === undefined || typeof length !== "number" ){
            throw `The length ${length} is not a number!`;
        }

        if(width === undefined || typeof width !== "number" ){
            throw `The width ${width} is not a number!`;
        }
        if(height === undefined || typeof height !== "number" ){
            throw `The height ${height} is not a number!`;
        }

        if(length <0 ){
            throw `The length ${length} is a negative number!`;
        }

        if(width <0 ){
            throw `The width ${width} is a negative number!`;
        }
        if(height <0 ){
            throw `The height ${height} is a negative number!`;
        }

        return length * width * height;
    },

    surfaceAreaOfRectangularPrism: function (length, width, height) {
    //This method will calculate the surface area of a rectangular prism. 
        if(arguments.length != 3){
            throw `The amount of arguments is a mismatch`;
        }

        if( length === undefined || typeof length !== "number" ){
            throw `The length ${length} is not a number!`;
        }

        if(width === undefined || typeof width !== "number" ){
            throw `The width ${width} is not a number!`;
        }
        if(height === undefined || typeof height !== "number" ){
            throw `The height ${height} is not a number!`;
        }

        if(length <0 ){
            throw `The length ${length} is a negative number!`;
        }
        if(width <0 ){
            throw `The width ${width} is a negative number!`;
        }
        if(height <0 ){
            throw `The height ${height} is a negative number!`;
        }

        return 2 * length * width + 2 * width * height + 2 * length * height;
    },


    volumeOfSphere: function(radius){
    //This method will calculate the volume of a sphere. 
        if(arguments.length != 1){
            throw `The amount of arguments is a mismatch`;
        }
        if( radius === undefined || typeof radius !== "number" ){
            throw `The radius is not a number!`;
        }

        if(radius<0){
            throw `The radius ${radius} is a negative number!`;
        }

        if(radius==0){
            throw `The radius is 0!`;
        }

        return 4/3 * Math.PI * radius * radius * radius;
    },

    surfaceAreaOfSphere:function (radius){
    //This method will calculate the surface area of a sphere. 
        if(arguments.length != 1){
            throw `The amount of arguments is a mismatch`;
        }
        if( radius === undefined || typeof radius !== "number" ){
            throw `The radius is not a number!`;
        }

        if(radius<=0){
            throw `The radius ${radius} is a negative number!`;
        }

        if(radius==0){
            throw `The radius is 0!`;
        }

        return 4 * Math.PI * radius * radius;
    }
};
