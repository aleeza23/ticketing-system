import { Button, Modal } from "antd";
import React, { useState } from "react";

const AppModal = ({setmodal, modal, children ,title,footer}) => {
    
  return <>
      
      <Modal
        title={title}
        centered
        open={modal}
        onCancel={() => setmodal(false)}
        width={600}
        footer={footer}
      >
        {children}
      </Modal>
  </>;
};

export default AppModal;
