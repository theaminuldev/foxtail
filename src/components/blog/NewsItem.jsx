const NewsItem = ({
	title = "Add news Title",
	url = "#",
	imageUrl = "https://via.placeholder.com/126x126",
}) => {
	return (
		<article>
			<a
				href={url}
				className="flex gap-4 p-2 rounded transition-colors duration-200 hover:bg-gray100 hover:shadow-2xl"
			>
				<div>
					<img
						src={imageUrl}
						alt="Placeholder"
						className="max-w-[150px] max-h-[150px] object-cover rounded"
					/>
				</div>
				<div className="flex flex-col grow">
					<h3 className="text-xl font-bold text-gray-800 hover:underline">
						{title}
					</h3>
					<span className=" text-gray-600 underline mt-6">
						Read More
					</span>
				</div>
			</a>
		</article>
	);
};

export default NewsItem;
