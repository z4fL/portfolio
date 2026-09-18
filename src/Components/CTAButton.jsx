const CTAButton = ({
  text,
  dark = true,
  size = "md",
  style,
  className = "",
  contentClassName = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`btn ${dark ? "btn-dark" : ""} btn-${size} ${className}`}
    >
      <span className="btn-inner">
        <span className="btn-slide" />
        <span className={`btn-content ${contentClassName}`}>{text}</span>
      </span>
    </button>
  );
};

export default CTAButton;
