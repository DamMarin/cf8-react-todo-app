import type {ButtonProps} from "../../types.ts";

const Button = ({onClick, disabled=false, label, addClasses=""}: ButtonProps) => {

  return (
    <>
      <button
        className={`bg-cf-dark-gray opacity-90 hover:opacity-100 
        text-white px-4 py-2 rounded cursor-pointer ` + addClasses}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default Button;