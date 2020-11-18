import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI
import SimpleModal from '@material-ui/core/Modal';

// COMPONENTS
import InstructionsVariant from './components/InstructionsVariant';
import ShowFeedback from './components/ShowFeedback';

// https://material-ui.com/guides/composition/#caveat-with-refs
// https://reactjs.org/docs/forwarding-refs.html
// https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage
const Modal = React.forwardRef(function Modal(
  { isOpen, setIsOpen, showFeedback },
  ref,
) {
  let body;

  isOpen && showFeedback
    ? (body = <InstructionsVariant />)
    : (body = <ShowFeedback />);

  return (
    <SimpleModal
      ref={ref}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {body}
    </SimpleModal>
  );
});

Modal.displayName = 'Modal';

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  showFeedback: PropTypes.bool.isRequired,
};

export default Modal;
