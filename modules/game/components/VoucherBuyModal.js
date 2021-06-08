import React from "react";
import { Modal , Button } from "react-bootstrap";

const VoucherBuyModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer className="m-auto">
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VoucherBuyModal;
