import PriceCardContainer from "./components/PriceCardContainer";
import { useState, useEffect, useCallback } from "react";

import axios from "axios";

const App = () => {
	const [details, setDetails] = useState([]);
	const fetchPriceCardDetails = useCallback(async () => {
		const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}`);
		setDetails(response.data);
	}, []);

	useEffect(() => {
		fetchPriceCardDetails();
	}, [fetchPriceCardDetails]);
	return (
		<div className="flex items-center justify-center h-full">
			<div className="relative top-20">
				{details.map((card) => (
					<PriceCardContainer key={card._id} cardDetails={card} />
				))}
			</div>
		</div>
	);
};

export default App;
