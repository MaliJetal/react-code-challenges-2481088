import axios from "axios";
import { useState, useEffect } from "react";

export default function DogPics() {
	const [isloading, setIsloading] = useState("false");
	const [imgSrc, setImgSrc] = useState("");

	const getDogsData = async () => {
		const dogs = await axios.get("https://dog.ceo/api/breeds/image/random");
		return dogs.data.message;
	};

	useEffect(() => {
		setIsloading("true");
		getDogsData()
			.then((src) => {
				setImgSrc(src);
			})
			.catch((err) => console.log(err));

		setIsloading("false");
	}, []);

	return (
		<div className='dog-pics'>
			<img src={imgSrc} alt={imgSrc} />
			<button onClick={async (e) => setImgSrc(await getDogsData())}>🐶</button>
		</div>
	);
}
