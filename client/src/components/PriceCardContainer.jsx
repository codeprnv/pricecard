import FeaturesList from "./FeaturesList";

const PriceCardContainer = ({ cardDetails }) => {
	return (
		<div className="flex justify-center items-start gap-8 p-4">
			<div className=" relative w-[50vw] h-[70vh] max-w-xl flex justify-center p-10 border border-pink-400 text-white">
				{/* Card Header */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-full">
					{cardDetails?.name}
				</div>
				<div className="flex flex-col w-full h-full gap-7">
					{/* Price header */}
					<div className="flex flex-col gap-3 items-center mt-15">
						{/* Price row */}
						<div className="flex gap-2 items-center">
							<h1 className="text-3xl font-bold">$ {cardDetails.price}</h1>
							<span className="text-gray-500 text-base">/mo</span>
						</div>
						<div className="text-lg text-gray-500">
							Billed Annually (Save 20%)
						</div>
					</div>
					{/* Features */}
					{cardDetails?.features?.map((feature, index) => (
						<FeaturesList key={index} featureName={feature} />
					))}
					{/* Coming Soon */}
					<div>
						<p className="uppercase tracking-wide text-gray-300 text-sm">
							Coming Soon
						</p>
					</div>
					<div className="flex flex-col items-center justify-center w-full h-fit gap-2">
						{/* Custom placeholder */}
						<p className="text-base text-gray-400">Custom Placeholder text</p>
						{/* Signup btn */}
						<button className="bg-blue-700 w-full h-full p-2">
							Signup Now
						</button>

						{/* Charges */}
						<div className="w-[50%] text-center text-wrap ">
							<p className="text-gray-500 text-sm">
								You'll be charged $48 + Tax 14-Day Moneyback Guarantee
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCardContainer;
