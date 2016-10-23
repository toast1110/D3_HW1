//var body= d3.select("body");
//        
//body.append("div")
//    .text("Hello D3");
        
//function launch(){
//    d3.select("body>p")
//      .text(random(1911,2016));
//};
//        
function random(num1, num2){
    console.log(num1, num2);
    return Math.floor(Math.random()*(num2-num1)+num1);
};

//d3.select("svg")
//  .append("circle")
//  .attr("cx",150)
//  .attr("cy",120)
//  .attr("r",15);


//五線譜
d3.select("#line5")
  .append("circle")
  .attr({
    cx: 150,
    cy: 120,
    r: 15,
  });


d3.select("#line5")
  .append("rect")
  .attr("x",160)
  .attr("y",45)
  .attr("width",5)
  .attr("height",78);


for(var i=0; i<5; i=i+1){
    d3.select("#line5")
      .append("line")
      .attr("x1",0)
      .attr("y1",45+30*i)
      .attr("x2",300)
      .attr("y2",45+30*i)
      .attr("stroke","black")
      .attr("stroke-width",1);
}


d3.select("#line5")
  .append("text")
  .attr("x",140)
  .attr("y",200)
  .attr("font-size",30)
  .attr("font-family","arial")
  .text("A");


//histogram
for(var i=0; i<20; i++){
    var num = random(20,300);
    d3.select("#hist")
      .append("rect")
      .attr({
        x:10,
        y:10+12*i,
        width:num,
        height:10,
        fill:"red"
      }); 
//    d3.select("#hist")
//      .append("text")
//      .attr("x",10+num+15)
//      .attr("y",20+12*i)
//      .attr("font-size",12)
//      .attr("font-family","arial")
//      .text(num);
    d3.select("#hist")
      .append("text")
      .attr({
        x: 10+num+15,
        y: 20+12*i,
//        stroke: "black",
        "font-size": 12,
        "font-family": "arial"
      })
      .text(num);
}


//var arr=[99, 88, 50, 20, 70, 77];
//var body=d3.select("body"); 
//for(var i=0; i<arr.length; i++){
//    if(arr[i]<60){
//        body.append("div")
//            .text(arr[i])
//            .style({color:"red"});
//    }
//    else if(arr[i]<80){
//        body.append("div")
//            .text(arr[i])
//            .style({color:"blue"});
//    }
//    else{
//        body.append("div")
//            .text(arr[i]);
//    }
//    
//}
