import axios from 'axios';
import { useEffect, useState } from 'react';

const useQueryPosts = () => {
	const [postData, setPostData] = useState(null);
	const [lastUpdateTime, setLastUpdateTime] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8000/posts');
				//TODO -- shouldUpdateData is not working correctly . this updated time set localStorage. get it form localstorage chekk it lastUpdateTime and update lastUpdateTime set localStorage 
				if (response.data.length === 0 || shouldUpdateData()) {
					// If no data exists in JSON Server or it's time to update, fetch from API and update JSON Server
					const apiResponse = await axios.get('https://wptavern.com/wp-json/wp/v2/posts/');
					const newData = apiResponse.data;
					await axios.post('http://localhost:8000/posts', newData);
					// TODO -- more working here setPostData 
					setPostData(newData);
					setLastUpdateTime(Date.now());
				} else {
					// Use the existing data from JSON Server
					setPostData(response.data);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		const shouldUpdateData = () => {
			if (!lastUpdateTime) return true; // Update if lastUpdateTime is not set
			const twentyFourHours = 24 * 60 * 60 * 1000;
			const elapsedTime = Date.now() - lastUpdateTime;
			return elapsedTime >= twentyFourHours; // Update if 24 hours have passed since last update
		};

		console.log('lastUpdateTime', lastUpdateTime);
		console.log('shouldUpdateData', shouldUpdateData());

		fetchData();

		const interval = setInterval(fetchData, 24 * 60 * 60 * 1000); // Update the data in JSON Server after 24 hours

		return () => clearInterval(interval);
	}, [lastUpdateTime]);

	return postData;
};

export default useQueryPosts;
