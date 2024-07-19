import { FC, forwardRef, HTMLAttributes, Ref } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {};
const Button: FC<ButtonProps> = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, ...rest } = props;
    return (
      <button
        ref={ref}
        className="py-2 px-4 bg-black text-white font-bold grid place-items-center rounded-lg w-full"
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
