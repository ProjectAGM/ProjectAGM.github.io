/*const input = require('./input.json');
const output = require('./output.txt');
const fs = require('fs');*/

//var index = 0;
//const writeStream = fs.createWriteStream('output.txt');

class windowF {
  constructor(heightWindow, widthWindow, heightFrame, widthFrame) {
    this.heightWindow = heightWindow;
    this.widthWindow = widthWindow;
    this.heightFrame = heightFrame;
    this.widthFrame = widthFrame;
  }
  get areaWindow() {
    return this.calcArea(this.heightWindow, this.widthWindow);
  }
  get areaFrame() {
    return this.calcArea(this.heightFrame, this.widthFrame);
  }
  get areaDifference() {
    return this.calcDiff(this.heightWindow, this.widthWindow,this.heightFrame, this.widthFrame);
  }
  calcArea(height,width) {
    return height * width;
  }
  calcDiff (heightWindow,widthWindow,heightFrame,widthFrame) {
    return ((heightWindow * widthWindow)/(heightFrame * widthFrame));
  }
}

class floor {
  constructor(area) {
    this.area = area;
  }
  get areaFloor() {
    return this.area;
  }
};

function floorPercentage (windowI,floor) {
  return (windowI.areaWindow/floor.areaFloor);
}

function main(heightWindow, widthWindow, heightFrame, widthFrame, areaFloor) {
  var floorF = new floor(areaFloor);
  var windowFF = new windowF(heightWindow, widthWindow, heightFrame, widthFrame);
  return {
    areaWindow : windowFF.areaWindow+"<br>",
    areaFrame : windowFF.areaFrame+"<br>",
    areaFloor : parseFloat(floorF.areaFloor)+"<br>",
    areaDiffWin : windowFF.areaDifference+"<br>",
    areaDiffFlr : floorPercentage(windowFF,floorF)+"<br>"
  }
}

/*
var testWindow = new window(1,1,1.5,1.5);
var testfloor = new floor(10);

console.log(testWindow.areaWindow);
console.log(testWindow.areaFrame);
console.log(testWindow.areaDifference);
console.log(floorPercentage(testWindow,testfloor));

//writeStream.write(testWindow.areaWindow.toString()+"\n");
//writeStream.write(testWindow.areaDifference.toString()+"\n");
*/
