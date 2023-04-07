
let arr = ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','There are only 10 kinds of people in this world: those who know binary and those who don’t.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', 'A foo walks into a bar takes a look around and says Hello World','0 is false 1 is true right? 1','Things arent always #000000 and #FFFFFF.','What is the most used language in programming? Profanity','!False its funny because its True','You had me at Hello World','2b||!2b','Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted','A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand','Computers make very fast very accurate mistakes','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','Knock Knock... Whos there? Art... Art Who? R2D2',]
let count = arr.lenght
console.log(count)

let tall = document.body.getElementsByTagName("h1")[1]
tall.setAttribute("class","change") 

function some() {
    let num = Math.random() *15
    num = Number.parseInt(num)
    console.log(arr[num])
    let copy = arr[num]
    tall.innerHTML = copy  
}
document.getElementById("random").addEventListener("click",some)
