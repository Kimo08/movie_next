import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="flex justify-center">
      <Loader2 size={20} className="animate-spin" />
    </div>
  );
};

export default loading;
