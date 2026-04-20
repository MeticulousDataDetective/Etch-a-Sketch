const container = document.querySelector(".container");
const starterbutton = document.createElement("button");
starterbutton.textContent = "Reset Grid";
document.body.prepend(starterbutton);
function makegrid(num){
	for(let i=0;i<num**2;++i){
		const componentdiv = document.createElement("div");
		componentdiv.style.flex = `0 0 calc(100%/${num})`;
		componentdiv.addEventListener("pointerenter", (e) => {
			if(e.buttons & 1){
				e.currentTarget.style.backgroundColor = "black";
				let opacity = Number(e.currentTarget.style.opacity) || 0;
			if(opacity < 1){
				opacity += .1;
				e.currentTarget.style.opacity = opacity;
			}}
		});
		container.appendChild(componentdiv);
	}
}
starterbutton.addEventListener("click", ()=>{
	let num = Number(prompt("How many squares per side of the grid? "));
	if(Number.isInteger(num) && num<=100 && num>0){
		container.replaceChildren();
		makegrid(num);
	}
	else{alert("Please enter an integer from 1 to 100.");}
});
makegrid(16);
