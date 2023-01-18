import PropTypes from 'prop-types';

const Displayer = (props) => {
  const { total, next, operation } = props;

  return (
    <>
      <div id="screen" type="number" data-testid="result">
        {total}
        {operation}
        {next}
      </div>
    </>
  );
};

export default Displayer;

Displayer.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

Displayer.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  operation: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};
