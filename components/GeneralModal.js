import React from "react";
import { Modal } from "react-bootstrap";
import Head from "next/head";

const GeneralModal = ({ component: Component, ...rest }) => {
  const { open, toggle, title } = rest;
  return (
    <>
      <Head>
        <style>
          {`
          .modal .modal-dialog {
            max-width: 700px
          }
          .modal .modal-body {
            padding: 2.1rem 1rem 1rem
          } 
          .modal-component {
            font-size: 14px
          }
          .modal-close-btn {
            position: absolute;
            right: -3px;
            top: -7px;
          }
          .modal-close-btn .fa-2x {
            font-size: 2em !important;
          }
        `}
        </style>
      </Head>
      <Modal show={open} onHide={toggle}>
        <Modal.Body>
          <div className="cursor-pointer modal-close-btn" onClick={toggle}>
            <i class="fa fa-times-circle fa-2x color-red"></i>
          </div>
          <div className="modal-component">
            <Component {...rest} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GeneralModal;
