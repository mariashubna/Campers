import * as Yup from "yup";

const ValidateSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").trim(),
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email error",
      excludeEmptyString: true,
    }),
  text: Yup.string()
    .min(1, "Minimum 1 characters")
    .max(230, "Maximum 230 characters"),
  date: Yup.date().nullable(),
});

export default ValidateSchema;
