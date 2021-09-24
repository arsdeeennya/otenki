import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";
import { Form, Field } from "react-final-form";

export const InputWeather = () => {
  useEffect(() => {
    handleSubmit();
  }, []);

  const dispatch = useDispatch();

  let formData = { area: "東京都" };

  const handleSubmit = (values = formData) => {
    dispatch(getWeather(values));
  };

  let formData = { area: props.area };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={formData}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="area">
            {({ input, meta }) => (
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
