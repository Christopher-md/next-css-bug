import React from "react";

import Field from "@/src/components/Field";
import Typography from "@/src/components/Typography/Typography";

import Wrapper from "./_components/Wrapper/Wrapper";

const Page = () => {
  return (
    <Wrapper>
      <Typography size="display-l" color="gray" tag="h1">
        Profile page
      </Typography>
      <div>
        <Field type="text" placeholder="Field" />
        <Field type="text" placeholder="Field" />
      </div>
    </Wrapper>
  );
};

export default Page;