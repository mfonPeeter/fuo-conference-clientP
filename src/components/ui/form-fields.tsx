import React from "react";
import { twMerge } from "tailwind-merge";

import { ErrorMessage } from "./error-message";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  errorMessage?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...props }, ref) => {
    return (
      <div className={`space-y-2 ${className}`}>
        <input
          ref={ref}
          className={twMerge(
            "h-[45px] py-[15px] pl-[22px] placeholder:text-white placeholder:opacity-[56%] rounded-md w-full bg-white/10 border border-white/20 text-white placeholder:text-white/80 focus:ring-white/10 focus:outline-none",
            className
          )}
          {...props}
        />
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  errorMessage?: string | undefined;
}
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMessage, ...props }, ref) => {
    return (
      <div className="sm:col-span-2">
        <textarea
          ref={ref}
          className={twMerge(
            "h-[115px] resize-none pl-[22px] pt-[15px] placeholder:text-white placeholder:opacity-[56%] rounded-md w-full bg-white/10 border border-white/20 text-white placeholder:text-white/80 focus:ring-white/10 focus:outline-none",
            className
          )}
          {...props}
        />
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

interface FileUploadFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  allowedFileType: string;
  acceptedFileType: string;
  errorMessage?: string;
  fileName: string;
}
const FileUploadField = React.forwardRef<
  HTMLInputElement,
  FileUploadFieldProps
>(
  (
    {
      label,
      allowedFileType,
      acceptedFileType,
      errorMessage,
      fileName,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <div className="space-y-[23px]">
          <div className="space-y-[6px]">
            <span className={`block`}>{label}</span>
            <div className="border px-[22px] py-4 rounded-md w-full bg-white/10 border-white/20 text-white placeholder:text-white/80 focus:ring-white/10">
              <label className="flex cursor-pointer items-center">
                {!fileName ? (
                  <span className={`font-semibold`}>Click Here</span>
                ) : (
                  <span className="inline-block max-w-full overflow-hidden text-ellipsis leading-none">
                    {fileName}
                  </span>
                )}
                {!fileName && (
                  <span className="ml-1 opacity-[56%]">to choose file</span>
                )}
                <input
                  ref={ref}
                  type="file"
                  accept={acceptedFileType}
                  className="sr-only"
                  {...props}
                />
              </label>
            </div>
            <div className="flex gap-1">
              <span className={`block text-[13px]`}>{allowedFileType} </span>
              <span className={`block text-[13px]`}>| Max File Size: 10MB</span>
            </div>
          </div>
        </div>

        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);
FileUploadField.displayName = "FileUploadField";

export { Input, TextArea, FileUploadField };
