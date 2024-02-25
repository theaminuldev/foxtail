import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch and update posts data.
 *
 * @return {object} The postData state containing the fetched posts data.
 */
const useQueryPosts = () => {
	const [postData, setPostData] = useState(null);
	const lastUpdateTime = localStorage.getItem('lastUpdateTime');
	useEffect(() => {
		/**
		 * This function fetches data from the API and updates the JSON Server if necessary. 
		 * If no data exists in JSON Server or it's time to update, it fetches from the API and updates the JSON Server. 
		 * Otherwise, it uses the existing data from JSON Server.
		 * 
		 * @return {Promise<void>} This function does not return anything.
		 */
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8000/posts');
				if (response.data.length === 0 || shouldUpdateData()) {
					const apiResponse = await axios.get('https://wptavern.com/wp-json/wp/v2/posts/');
					const newData = apiResponse.data;
					for (const property in newData) {
						const newResponse = {
							id: newData[property].id,
							title: newData[property].title.rendered,
							slug: newData[property].slug,
							content: newData[property].content.rendered,
							date: newData[property].date,
							link: newData[property].link,
							excerpt: newData[property].excerpt.rendered,
							author: newData[property].author,
							categories: newData[property].categories,
							tags: newData[property].tags,
							thumbnail: newData[property].featured_media,
							image: newData[property].episode_featured_image,
						};
						setPostData(newResponse);
						await axios.post('http://localhost:8000/posts', newResponse);
					}

					localStorage.setItem('lastUpdateTime', Date.now());
				} else {
					setPostData(response.data);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		/**
		 * Checks if the data should be updated based on the last update time.
		 *
		 * @return {boolean} true if the data should be updated, false otherwise
		 */
		const shouldUpdateData = () => {
			if (!lastUpdateTime) return true; // Update if lastUpdateTime is not set
			const twentyFourHours = 24 * 60 * 60 * 1000;
			const elapsedTime = Date.now() - parseInt(lastUpdateTime);
			return elapsedTime >= twentyFourHours; // Update if 24 hours have passed since last update
		};

		// console.log('lastUpdateTime', parseInt(lastUpdateTime));
		// console.log('shouldUpdateData', shouldUpdateData());

		fetchData();
		const interval = setInterval(fetchData, 24 * 60 * 60 * 1000); // Update the data in JSON Server after 24 hours

		return () => clearInterval(interval);
	}, [lastUpdateTime]);

	return postData;
};

export default useQueryPosts;
