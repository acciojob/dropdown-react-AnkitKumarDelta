import React, { useState } from "react";
import "./../styles/App.css";

const states = [{
	name: "Madhya Pradesh",
	description: "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
	city: [{
		name: "Indore",
		description: "Indore is a city in west-central India. It's known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore's 19th-century Holkar dynasty.",
		landmarks: [{
			name: "Mhow",
			description: "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road."
		}, {
			name: "Dewas",
			description: "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha."
		}]
	}, {
		name: "Bhopal",
		description: "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India's greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
		landmarks: [{
			name: "MANIT",
			description: "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology."
		}, {
			name: "Berasia",
			description: "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India."
		}]
	}, {
		name: "Gwalior",
		description: "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple.",
		landmarks: [{
			name: "Ajaypur",
			description: "Little less known city Ajaypur."
		}]
	}]
}, {
	name: "Jharkhand",
	description: "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
	city: [{
		name: "Dhanbad",
		description: "Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India.",
		landmarks: [{
			name: "IIT(ISM) Dhanbad",
			description: "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India."
		}, {
			name: "Hirapur",
			description: "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh."
		}]
	}, {
		name: "Wasseypur",
		description: "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India.",
		landmarks: [{
			name: "Pandey muhalla",
			description: "Located behind the Dhanbad junction is must visit place."
		}, {
			name: "MPI Hall",
			description: "Space for everyone."
		}]
	}, {
		name: "Hazaribagh",
		description: "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand.",
		landmarks: [{
			name: "Shaheed Nirmal Mahto Park",
			description: "Famous for its giant dinosaur structure."
		}, {
			name: "Gandhi Maidan",
			description: "Ideal for conduction major events."
		}]
	}]
}, {
	name: "Assam",
	description: "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations.",
	city: [{
		name: "Guwhati",
		description: "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It's known for holy sites like the hilltop Kamakhya Temple.",
		landmarks: [{
			name: "Ganesh Guri",
			description: "Famous because of PVR city center."
		}, {
			name: "Kalyani Nagar",
			description: "Located near famous Lakshmi Nagar."
		}]
	}, {
		name: "dimapur",
		description: "Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland.",
		landmarks: [{
			name: "City Tower",
			description: "Giant Tower standing by the road."
		}, {
			name: "Sunday Market",
			description: "Famous for its weekend Sale on all items."
		}]
	}, {
		name: "Tezpur",
		description: "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India.",
		landmarks: [{
			name: "Bamuni Hills",
			description: "Best location for photoshoots."
		}, {
			name: "Bhujkhowa Bazar",
			description: "Central Market for Tezpur."
		}]
	}]
}, {
	name: "Bihar",
	description: "Bihar is a state in East India, bordering Nepal.",
	city: [{
		name: "Patna",
		description: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar.",
		landmarks: [{
			name: "Sonpur",
			description: "Sonpur is a city and sub-division in the Indian state of Bihar."
		}, {
			name: "Maner",
			description: "Maner is a satellite landmark in Patna Metropolitan Region."
		}]
	}, {
		name: "Gaya",
		description: "Gaya is a holy city beside the Falgu River in the northeast Indian state of Bihar.",
		landmarks: [{
			name: "Bakraur",
			description: "Bakraur is a village located east of Bodh Gaya."
		}, {
			name: "Barachatti",
			description: "Barachatti is a block in the Gaya district of Bihar."
		}]
	}, {
		name: "Darbhanga",
		description: "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar.",
		landmarks: [{
			name: "Singhwara",
			description: "Famous for its Groundnut Market."
		}, {
			name: "Jale",
			description: "Famous for its roasted seeds market."
		}]
	}]
}];

function App() {
	const [selectedState, setSelectedState] = useState(0);
	const [selectedCity, setSelectedCity] = useState(0);
	const [selectedLandmark, setSelectedLandmark] = useState(0);

	function handleStateChange(e) {
		const i = parseInt(e.target.value, 10);
		setSelectedState(i);
		setSelectedCity(0);
		setSelectedLandmark(0);
	}

	function handleCityChange(e) {
		const i = parseInt(e.target.value, 10);
		setSelectedCity(i);
		setSelectedLandmark(0);
	}

	function handleLandmarkChange(e) {
		const i = parseInt(e.target.value, 10);
		setSelectedLandmark(i);
	}

	return (
		<div id="main">
			<select id="state" onChange={handleStateChange} value={selectedState}>
				{states.map((s, i) => (
					<option key={i} value={i}>{s.name}</option>
				))}
			</select>

			<select id="city" onChange={handleCityChange} value={selectedCity}>
				{states[selectedState].city.map((c, i) => (
					<option key={i} value={i}>{c.name}</option>
				))}
			</select>

			<select id="landmark" onChange={handleLandmarkChange} value={selectedLandmark}>
				{states[selectedState].city[selectedCity].landmarks.map((l, i) => (
					<option key={i} value={i}>{l.name}</option>
				))}
			</select>

			<div id="state-title">{states[selectedState].name}</div>
			<div id="state-description">{states[selectedState].description}</div>

			<div id="city-title">{states[selectedState].city[selectedCity].name}</div>
			<div id="city-description">{states[selectedState].city[selectedCity].description}</div>

			<div id="landmark-title">{states[selectedState].city[selectedCity].landmarks[selectedLandmark].name}</div>
			<div id="landmark-description">{states[selectedState].city[selectedCity].landmarks[selectedLandmark].description}</div>
		</div>
	);
}

export default App;
