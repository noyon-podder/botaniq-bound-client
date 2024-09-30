import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <div className="text-center">
        <h2 className="lg:text-9xl text-4xl font-extrabold">404</h2>
        <p className="text-xl">Page Not Found</p>

        <div className="mt-10">
          <Link href={`/`}>
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
