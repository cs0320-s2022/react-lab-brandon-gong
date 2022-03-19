import React, {useState} from 'react';
import TextBox from './TextBox'
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const axios = require('axios').default;

function Horoscope() {
	const [sun, setSun] = useState("");
	const [moon, setMoon] = useState("");
	const [rising, setRising] = useState("");
	const [horoscope, setHoroscope] = useState([] as string[]);
	
	const requestHoroscope = () => {
		const toSend = {
			sun : sun,
			moon : moon,
			rising : rising
		};
		
		let config = {
			headers: {
				"Content-Type": "application/json",
				'Access-Control-Allow-Origin': '*',
			}
		}
		
		axios.post("http://localhost:4567/horoscope", toSend, config)
		.then((response: {data: {horoscope: string[]}}) => {
			console.log(response.data);
			setHoroscope(response.data["horoscope"]);
		})
		.catch((error: string) => {
			console.log(error);
		});
	}

  return (
    <div>
      <h1>
				Horoscope
			</h1>
			<TextBox id="sun" change={setSun}/>
			<TextBox id="moon" change={setMoon}/>
			<TextBox id="rising" change={setRising}/>
			<AwesomeButton onPress={requestHoroscope} type="primary">Submit</AwesomeButton>
			{horoscope.map((h) => <p>{h}</p>)}
    </div>
  );
}

export default Horoscope;
