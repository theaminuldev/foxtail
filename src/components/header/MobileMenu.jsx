import { useState } from "react";

/* eslint-disable react/prop-types */
export default function MobileMenu({ onOpen, onClose }) {
	const [isMoblieDropdownOpen, setIsMobileDropdownOpen] = useState(false);
	const handleMobileMenu = () => {
		setIsMobileDropdownOpen(!isMoblieDropdownOpen);
	};
	return (
		onOpen && (
			<div className="lg:hidden" role="dialog" aria-modal="true">
				{/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
				<div className="fixed inset-0 z-20"></div>
				<div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
						<button
							onClick={onClose}
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<div className="-mx-3">
									<button
										onClick={handleMobileMenu}
										type="button"
										className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										aria-controls="disclosure-1"
										aria-expanded="false"
									>
										Product
										{/* Product
												<!--
													Expand/collapse icon, toggle classes based on menu open state.
								
													Open: "rotate-180", Closed: ""
												--> */}
										<svg
											className="h-5 w-5 flex-none"
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
									{/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
									{isMoblieDropdownOpen && (
										<div
											className="mt-2 space-y-2"
											id="disclosure-1"
										>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Analytics
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Engagement
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Security
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Integrations
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Automations
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Watch demo
											</a>
											<a
												href="#"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Contact sales
											</a>
										</div>
									)}
								</div>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Company
								</a>
							</div>
							<div className="py-6">
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
						</div>
					</div>
				</div>
			</div>
		)
	);
}
