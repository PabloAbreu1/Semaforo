import React, {useState} from "react";

const Home = () => {

   const [color1,setColor1]= useState("");
   const [color2,setColor2]= useState("");
   const [color3,setColor3]= useState("");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}}
	function encenderAmarillo() {

		if(color2 === "btn-warning"){
			setColor2("")
		}else{
		setColor2("btn-warning")
		setColor1("")
		setColor3("")
	}}
	function encenderVerde() {

		if(color3 === "btn-success"){
			setColor3("")
		}else{
		setColor3("btn-success")
		setColor2("")
		setColor1("")
		
	}}




	return (
	<>

	<div className="">
		<div className="text-center d-grid gap-2 col-1 mx-auto bg-black btn-group-vertical">
			<button className={"shadow-lg p-3 mb-5 btn-lg rounded-circle btn "+color1} onClick={encenderRojo}>Rojo</button>
			<button className={"shadow-lg p-3 mb-5 btn-lg rounded-circle btn "+color2} onClick={encenderAmarillo}>Amarillo</button>
			<button className={"shadow-lg p-3 mb-5 btn-lg rounded-circle btn "+color3} onClick={encenderVerde}>Verde</button>
		</div>
	</div>

	</>
	);

};

export default Home;