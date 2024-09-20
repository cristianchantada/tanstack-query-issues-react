import { FiRefreshCcw } from "react-icons/fi";

export const LoadingSpinner = () => {
  return (
    <div>
      <div className="animate-spin">
        <FiRefreshCcw size={45}/>
      </div>
    </div>
  );
};
