/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface FormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends FormConfig {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const LeafForm = ({ children, defaultValues, resolver, onSubmit }: IProps) => {
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
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default LeafForm;
