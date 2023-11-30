import { Button } from "@/components/ui/button";

const VerifyEmail = () => {
  console.log("does this even workkm?");
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[300px] md:w-[400px]- rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Email Verify</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Please verify your email to continue for security reasons
          </p>
        </div>
        <div className="space-y-4">
          <Button className="w-full" variant="default">
            <div className="flex items-center justify-center">Send Email</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
