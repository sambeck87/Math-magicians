import PropTypes from 'prop-types';

const Displayer = (props) => {
  const { total, next, operation } = props;

  return (
    <>
      <div id="screen" data type="number">
        {total}
        {operation}
        {next}
      </div>
    </>
  );
};

export default Displayer;

Displayer.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
