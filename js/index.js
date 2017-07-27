

function fiboNum(num) {
    if (num ==0) {
        return 0;
    }
    
     if (num ==1) {
        return 1;
    }
    
    //num > 1
    
    return fiboNum(num - 2) + fiboNum(num -1);
}