/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

// MATERIAL-UI
import SimpleModal from '@material-ui/core/Modal';

// COMPONENTS
import InstructionsVariant from './components/InstructionsVariant';
import ShowFeedback from './components/ShowFeedback';

export default function Modal({ isOpen, setIsOpen, showFeedback }) {
  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      {isOpen && showFeedback ? (
        <InstructionsVariant />
      ) : (
        <ShowFeedback />
      )}
    </SimpleModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  showFeedback: PropTypes.isRequired,
};
