var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setgradient()
{
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setgradient);

color2.addEventListener("input" ,setgradient);


// function isUserValid(bool)
// {
// 	return bool;
// }

// var answer = isUserValid(false) ? "Yes" : "No";


// function moveCommand(direction)
// {
// 	var whatHappens;
// 	switch(direction)
// 	{
// 		case "forward":
// 		whatHappens ="forward1";
// 		break;
// 		case "backward":
// 		whatHappens ="backward2";
// 		break;
// 		case "right":
// 		whatHappens ="right1";
// 		break;
// 		case "left":
// 		whatHappens ="left1";
// 		break;
// 		default :
// 		whatHappens = "Please enter a valid value"
// 	}
// 	return whatHappens;
// }



// const player ="bobby";

// let experience = 100;
// var property = true;

// if(experience > 90)
// {
// 	var property = false;
// }


// const obj = {
// 	player : 'bobby',
// 	experience : 100,
// 	wizardLevel : "stark"
// }

// const {player, experience } = obj;
// let {wizardLevel} = obj;


// const name ='Bobby';
// const age = 34;
// const pet = "cate";

// const greeting = `Hello ${name} . you look ${age -10}. nice ${pet}`;


// function greet(name='',age=33,pet='snake')
// {
// 	return `Hello ${name} . you look ${age -10}. nice ${pet}`;
// }


// const functionName = (a,b,c) =>  a+b+c;


// class Player {
// 	constructor(name, type)
// 	{
//         this.name = name;
// 		this.type = type;
// 	}

// 	introduce()
// 	{
// 		console.log(` Hi I am ${this.name} and i am ${this.type}`)
// 	}
// }

// class wizard extends Player 
// {
// 	constructor()
// 	{
// 		super(name,type);
// 	}
// 	play()
// 	{
// 		console.log(`Hi ${this.name}`)
// 	}
// }

// wizard1 = new wizard('shelly', 'healer');
// wizard2 = new wizard('pc' , 'avengers');


// console.log('1');
// setTimeout(() => {console.log('2')}, 2000);
// console.log('3')