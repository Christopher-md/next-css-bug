import React from "react";

import Field from "@/components/Field";
import Typography from "@/components/Typography/Typography";

const SomeModal = () => {
  return (
    <div>
      <Typography tag="h1" size="body-s" color="default">
        SomeModal
      </Typography>
      <Field type="text" placeholder="Some modal field" />
    </div>
  );
};

export default SomeModal;
