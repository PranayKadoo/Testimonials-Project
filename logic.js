let picarr =["pic1.png","pic2.png","pic3.jpg","pic4.jpg","pic5.jpg","pic6.webp"];
let linearr =["Dexter","Clay","Jeff", "RK", "Ms. Eleven", "Martha"];
let paraarr =["Excellent service, thank you. Professional, friendly and efficient. Have total trust in the service you provide Always a pleasure doing business with you",
"Had service and MOT on my car. Car was collected and returned on time. Kept informed during the day on how the work was progressing. All very efficient.",
"Hi – as usual very easy to book – courteous – prompt collection / delivery & kept informed of outcomes & costs. Thanks. You make life a lot easier!",
"Did a great job at servicing my BMW 3 series. Perfect service. Collected car from the workplace, kept me posted on the progress and delivered the car back in time.",
"he service and customer care we received was second to none. The reception team where friendly and polite, also very honest and only recommended work required",
"On my last visit the brake fluid was changed and a thorough check done on the tyres. As usual, your engineers suggested that it was good for the time being. "]
let count =0;
 function right(){
 if(count< picarr.length-1){
    count++;
    child1.style.background= `url(${picarr[count]}) no-repeat center center`;
    child1.style.backgroundSize= "100px, 100px";
    document.getElementById("child2").textContent =  linearr[count];
    console.log(linearr[count]);
    document.getElementById("child5").textContent =  paraarr[count];
    console.log(paraarr[count])
 }
 else{
     count = -1;
 }
}
function left(){
    if(count>0){
        count--;
        child1.style.background= `url(${picarr[count]}) no-repeat center center`;
        child1.style.backgroundSize= "100px, 100px";
        document.getElementById("child2").textContent =  linearr[count];
        console.log(linearr[count]);
        document.getElementById("child5").textContent =  paraarr[count];
    console.log(paraarr[count])
    }
    else{
        count = picarr.length;
    }
   }