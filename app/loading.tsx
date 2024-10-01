import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
      <Loader size={42} className="text-primary animate-spin ease-in" />
    </div>
  );
};

export default LoadingPage;
