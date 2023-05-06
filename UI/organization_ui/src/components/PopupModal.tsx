import * as React from 'react';
import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
    showModal: boolean;
    handleClose: () => void;
    handleSave: () => void;
    modalBody: any
    modalHeader: string;
}

export const PopupModal: FC<Props> = ({
    showModal,
    handleClose,
    modalBody,
    modalHeader,
    handleSave
}) => {

    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalHeader}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modalBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}