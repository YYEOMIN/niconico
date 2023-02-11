import PropTypes from "prop-types";

const Card = ({ title, name, onClick, children }) => {
  return (
    <>
      <div className="card mb-3 cursor-pointer" onClick={onClick}>
        <div className="card-body py-2 d-flex align-items-center">
          <div className="flex-grow-1">{title}</div>
          <div>{name}</div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </>
  );
};

Card.protoType = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onclick: PropTypes.func,
};

Card.defaultProps = {
  children: null,
  onclick: () => {},
};

export default Card;
