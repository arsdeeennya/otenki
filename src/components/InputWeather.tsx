import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";
import { Form, Field } from "react-final-form";

export const InputWeather = () => {
  type HandleSubmitType = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>
  };

  type InputMetaType = {
    input: string;
    meta: { touched: string; error: string };
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const dispatch = useDispatch();

  let formData = { area: "東京都" };

  const handleSubmit = (values: any = formData) => {
    dispatch(getWeather(values));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={formData}
      render={({ handleSubmit }: HandleSubmitType) => (
        <form onSubmit={handleSubmit}>
          <Field name="area">
            {({ input, meta }: InputMetaType) => (
              <div>
                <input type="text" {...input} placeholder="都道府県名" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">送信</button>
        </form>
      )}
    />
  );
};
