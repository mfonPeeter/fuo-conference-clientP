import { CircleAlert } from "lucide-react";

export const ErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => (
  <>
    {errorMessage && (
      <div className="flex items-center gap-x-2 font-medium text-[#EF476F]">
        <CircleAlert />
        {errorMessage}
      </div>
    )}
  </>
);
