// Code your solution in this file!
function distanceFromHqInBlocks(someValue){    
    if (someValue < 42){
        return(42-someValue);
    }
    else{
        return (someValue-42);
    }
}
function distanceFromHqInFeet(distance){
    return Math.abs(distanceFromHqInBlocks(distance)*264);
}
function distanceTravelledInFeet(start, end){
    return Math.abs((start - end)*264);
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    if (distance <= 400){
       return 0; 
    }else if (distance >=401 && distance <= 2000){
        return Math.abs((distance - 400) * 0.02);
    }else if (distance >= 2001 && distance <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
    return fare;
    
}
