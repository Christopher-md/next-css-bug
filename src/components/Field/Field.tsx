"use client";

import React, { forwardRef, useId } from "react";
import classNames from "classnames";

import type { Ref } from "react";

import Typography from "../Typography/Typography";

import styles from "./Field.module.scss";

import type { InputAttributes, InputType, Props } from "./types";

// eslint-disable-next-line react/display-name
const Field = forwardRef(
  <Type = InputAttributes,>(
    {
      as,
      type,
      error,
      value,
      defaultValue,
      className,
      onChange,
      autoComplete,
      ...rest
    }: Props<Type>,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    const Component = as ?? "input";

    return (
      <div
        className={classNames(
          styles.field,
          {
            [styles.error]: error,
          },
          className,
        )}
      >
        <Component
          id={id}
          ref={ref}
          type={type}
          value={value}
          className={styles.input}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          onChange={onChange}
          {...(rest as Type)}
        />
        {typeof error === "string" && (
          <Typography
            tag="p"
            size="body-xs"
            color="error"
            className={styles.text}
          >
            {error}
          </Typography>
        )}
      </div>
    );
  },
) as InputType;

export default Field;
