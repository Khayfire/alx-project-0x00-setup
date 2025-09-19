import React from "react";



type ButtonProps = {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

    function clsx(arg0: string, arg1: string, shape: string, className: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

  return (
    <button
      className={clsx(
        "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition",
        sizeClasses[size],
        shape,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
