export default function Hero() {
	return (
		<div className="relative flex container flex-col items-center mx-auto lg:flex-row-reverse lg:mt-12 px-4">
			<div className="w-full h-64 lg:w-1/2 lg:h-auto">
				<img
					className="h-full w-full object-cover"
					src="https://picsum.photos/id/1018/2000"
					alt="Winding mountain road"
				/>
			</div>

			<div className=" bg-white  rounded md:z-10 md:shadow-lg md:absolute top-[50%] translate-y-[-50%] lg:w-3/5 lg:left-0 ">
				<div className="flex flex-col p-12 md:px-16">
					<a className="group inline-block mb-2" href="#">
						<span className="border-b-2 border-black text-xl font-medium">
							Featured
						</span>
					</a>

					<h2 className="text-2xl font-medium capitalize lg:text-4xl">
						<a href="#">WP Tavern Launches Writer Hunger Games</a>
					</h2>
					<p className="mt-4 text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<div className="mt-4 flex gap-8">
						<p className="mt-4 text-lg">
							By <a href="#">Admin</a>
						</p>
						<p className="mt-4 text-lg">Dec 12, 2021</p>
						<p className="mt-4 text-lg">5 min read</p>
					</div>

					<div className="mt-8">
						<a
							href="#"
							className="text-white  focus:ring-4 font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
