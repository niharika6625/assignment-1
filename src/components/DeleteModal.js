import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div>Modal</div>;
}
