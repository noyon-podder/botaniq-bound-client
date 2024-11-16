/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React, { useEffect } from "react";

interface FormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends FormConfig {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const LeafForm = ({ children, defaultValues, resolver, onSubmit }: IProps) => {
  // Initialize the form with the provided default values
  const formConfig: FormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset(); // Reset after submit
  };

  // When defaultValues change, reset the form values
  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default LeafForm;
