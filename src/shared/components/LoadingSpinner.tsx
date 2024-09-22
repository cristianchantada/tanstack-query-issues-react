import { FiRefreshCcw } from "react-icons/fi";

export const LoadingSpinner = () => {
  return (
    <div>
      <div className="fkex w-full h-52 justify-center items-center">
        <FiRefreshCcw size={45} className="animate-spin"/>
      </div>
    </div>
  );
};
