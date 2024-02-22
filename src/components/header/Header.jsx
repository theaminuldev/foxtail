import { useState } from "react";
import Light from "../../assets/icons/light.svg";
import MobileMenu from "./MobileMenu";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Function to toggle the mobile menu state
	const handleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<>
			<header className="bg-white">
				<nav
					className="mx-auto flex container items-center justify-between py-4"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="bg-slate-900 text-2xl font-bold px-1 text-white">
								Foxtail
							</span>
							{/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							onClick={handleMobileMenu}
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						<div className="relative">
							<button
								onClick={handleDropdown}
								type="button"
								className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
								aria-expanded="false"
							>
								Product
								<svg
									className="h-5 w-5 flex-none text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clipRule="evenodd"
									/>
								</svg>
							</button>

							{/* <!--
								'Product' flyout menu, show/hide based on flyout menu state.
					
								Entering: "transition ease-out duration-200"
								From: "opacity-0 translate-y-1"
								To: "opacity-100 translate-y-0"
								Leaving: "transition ease-in duration-150"
								From: "opacity-100 translate-y-0"
								To: "opacity-0 translate-y-1"
							--> */}
							{isDropdownOpen && (
								<div className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
									<div className="p-4">
										<div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<svg
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
													/>
												</svg>
											</div>
											<div className="flex-auto">
												<a
													href="#"
													className="block font-semibold text-gray-900"
												>
													Analytics
													<span className="absolute inset-0"></span>
												</a>
												<p className="mt-1 text-gray-600">
													Get a better understanding
													of your traffic
												</p>
											</div>
										</div>
										<div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<svg
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
													/>
												</svg>
											</div>
											<div className="flex-auto">
												<a
													href="#"
													className="block font-semibold text-gray-900"
												>
													Engagement
													<span className="absolute inset-0"></span>
												</a>
												<p className="mt-1 text-gray-600">
													Speak directly to your
													customers
												</p>
											</div>
										</div>
										<div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<svg
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
													/>
												</svg>
											</div>
											<div className="flex-auto">
												<a
													href="#"
													className="block font-semibold text-gray-900"
												>
													Security
													<span className="absolute inset-0"></span>
												</a>
												<p className="mt-1 text-gray-600">
													Your customers’ data will be
													safe and secure
												</p>
											</div>
										</div>
										<div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<svg
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
													/>
												</svg>
											</div>
											<div className="flex-auto">
												<a
													href="#"
													className="block font-semibold text-gray-900"
												>
													Integrations
													<span className="absolute inset-0"></span>
												</a>
												<p className="mt-1 text-gray-600">
													Connect with third-party
													tools
												</p>
											</div>
										</div>
										<div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<svg
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
													/>
												</svg>
											</div>
											<div className="flex-auto">
												<a
													href="#"
													className="block font-semibold text-gray-900"
												>
													Automations
													<span className="absolute inset-0"></span>
												</a>
												<p className="mt-1 text-gray-600">
													Build strategic funnels that
													will convert
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Features
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Marketplace
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Company
						</a>
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<button>
							<img className="p-2" src={Light} alt="Light" />{" "}
						</button>
						<a
							href="#"
							className="border dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
						>
							Log in
						</a>
						<a
							href="#"
							className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
						>
							Open Source
						</a>
					</div>
				</nav>
				{isMobileMenuOpen && (
					<MobileMenu
						onOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					/>
				)}
			</header>
		</>
	);
}
