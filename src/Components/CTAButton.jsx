const CTAButton = ({ text, dark = true }) => {
  return (
    <div className={`btn ${dark ? "btn-dark" : ""}`}>
      <span className="btn-inner">
        <span className="btn-slide" />
        <span className="btn-content">{text}</span>
      </span>
    </div>
  );
};

export default CTAButton;
