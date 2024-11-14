import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase text-sm font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:ring focus:ring-yellow-300  focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",

    secondary:
      "uppercase font-semibold  border-2 text-sm border-stone-300 text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:ring focus:bg-stone-300  focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5   hover:text-stone-500",

    small: base + " py-2 md:px-5 md:py-2.5 px-4 text-xs",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
