const ButtonInline = ({ onClick, type = "button", children }) => (
  <button type={type} classname="button-inline" onClick={onClick}>
    {children}
  </button>
);

const Button = ({ onClick, className, type = "button", children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export { ButtonInline, Button };
