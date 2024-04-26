import React from "react";

import Paper from "@/src/components/Paper";
import Typography from "@/src/components/Typography/Typography";

type Props = {
    children: React.ReactNode;
}

const Wrapper = ({children}: Props) => {
  return (
    <Paper>
      <Typography color="gray" size="body-m" tag="p">
        Settings Wrapper
      </Typography>
      {children}
    </Paper>
  );
};

export default Wrapper;