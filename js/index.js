var fiboNacci = function(a) {
    if (a === 1) 
    
    {
        return [1, 1];
    }
    
    else 
    {
        var n = fiboNacci(a - 1);
        n.push(n[n.length - 1] + n[n.length - 2]);
        return n;
    }
};

console.log(fiboNacci(404));

var number = parseInt(prompt('Enter your "N" value you want to find here, please:')); //don't really know what the radix parameter is missing here
alert(fiboNacci(number));
