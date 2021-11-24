// Code your solution in this file!
const hq = 42
let end
let distance
function distanceFromHqInBlocks (end){
    if (end > hq){
        distance = (end - hq);
        return distance;}
    else if (end < hq){
        distance = (hq - end);
        return distance;}
    else if (end === hq){
        return "You are here.";}
}
let distanceFt
function distanceFromHqInFeet (destination){
    distanceFt = (distanceFromHqInBlocks(destination) * 264);
    return distanceFt;
}

let start
let destination
let distanceTravB
let distanceF
let fare

function distanceTravelledInFeet(start,destination){
    if (start>destination) 
        distanceTravB = start - destination;
    else if (start<destination)
        distanceTravB = destination - start;
    distanceF = distanceTravB * 264;
    return distanceF;
}

function calculatesFarePrice (start, destination){
    distanceTravelledInFeet(start,destination)
    if (distanceF <= 400){
        let fare = 0;
        return fare;}
    else if (distanceF < 2000){
        fare = (distanceF-400)* .02;
        return "Thanks. this ride with cost you ", fare;}
    else if (distanceF > 2500) {
        return "cannot travel that far";}
    else if (distanceF > 2000){
        fare = 25;
        return fare;}

    }