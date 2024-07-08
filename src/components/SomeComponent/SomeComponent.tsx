import React from "react";

import Field from "@/components/Field";
import Typography from "@/components/Typography/Typography";

const SomeModal = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <Typography tag="h1" size="body-s" color="default">
        The component that causes duplicate styles
      </Typography>
      <Field type="text" placeholder="Field" />
    </div>
  );
};

export default SomeModal;
