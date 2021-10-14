import React from "react";
import { Modal } from "react-bootstrap";

const GeneralModal = ({ component: Component, ...rest }) => {
  const { open, toggle, title } = rest;
  return (
    <>
      <Modal show={open} onHide={toggle}>
        <Modal.Body>
          <div className="modal-component">
            <Component {...rest} />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div className="cursor-pointer" onClick={toggle}>
            <i class="fa fa-times-circle fa-3x color-red"></i>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GeneralModal;
