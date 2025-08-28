import { Check } from "lucide-react";
const FeaturesList = ({ featureName }) => {
	return (
		<div className="flex gap-3">
			{/* Icon */}
			<div className="bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
				<Check size={18} />
			</div>
			<div className="text-base text-gray-500">{featureName}</div>
		</div>
	);
};

export default FeaturesList;
