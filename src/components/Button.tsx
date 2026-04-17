type ButtonPropsType = {
  className: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: "button" | "submit";
};

function Button({
  className,
  disabled,
  onClick,
  children,
  type = "button",
}: ButtonPropsType) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
