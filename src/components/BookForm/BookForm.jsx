import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

import css from "./BookForm.module.css";
import { nanoid } from "@reduxjs/toolkit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ValidateSchema from "./Schema";
import Button from "../Button/Button";

const initialValues = {
  name: "",
  email: "",
  date: "",
  text: "",
};

const BookForm = () => {
  const nameId = nanoid();
  const emailId = nanoid();
  const dataId = nanoid();
  const textId = nanoid();

  const notify = ({ formattedDate }) => {
    toast.success(
      `Booking Successful! Your campervan has been successfully booked for ${formattedDate}. We look forward to seeing you soon!`,
      {
        duration: 5000,
        position: "top-right",
      }
    );
  };

  const handleSubmit = (values, actions) => {
    const formattedDate = values.date
      ? values.date.toLocaleDateString("en-GB")
      : "";
    notify({ formattedDate });
    actions.resetForm();
  };

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidateSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field
              className={css.input}
              type="text"
              id={nameId}
              name="name"
              placeholder="Name*"
              required
            />

            <ErrorMessage className={css.error} name="email" component="span" />
            <Field
              className={css.input}
              type="email"
              id={emailId}
              name="email"
              placeholder="Email*"
              required
            />
            <ErrorMessage className={css.error} name="date" component="span" />
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              minDate={new Date()}
              id={dataId}
              placeholderText="Booking date*"
              calendarStartDay={1}
              required
            />

            <ErrorMessage className={css.error} name="text" component="span" />
            <Field
              className={`${css.input} ${css.textarea}`}
              as="textarea"
              id={textId}
              name="text"
              placeholder="Comment"
            />
            <Button text="Add contact" />
          </Form>
        )}
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default BookForm;
