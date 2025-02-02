const CTAButton = ({ text }) => {
  return (
    <div className="btn btn-dark">
      <span className="btn-inner">
        <span className="btn-slide" />
        <span className="btn-content">{text}</span>
      </span>
    </div>
  );
};

export default CTAButton;
