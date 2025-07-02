import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const EmployeeFeedbackForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string()
    .min(3,"Name must be atleast 3 characters")
    .required("Full name is required"),
    email:Yup.string()
    .email("Invalid email Address")
    .required("Email is required"),
    department: Yup.string()
    .required("select a Department"),
    rating:Yup.number()
    .min(1,"Minimum rating is 1")
    .max(5,"Maximum rating is 5")
    .required("Rating is required"),
    feedback: Yup.string()
    .max(200, "Feedback should be under 200 characters ")
  });
  const handleSubmit = (values, { resetForm}) => {
    console.log("Form submitted: ", values);
    alert("From submitted Successfully!");
    resetForm();
  }

  return (
    <div className="form-container">
      <h2>Employee Feedback Form</h2>
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Full Name: </label>
            <Field type="text" name="fullName" />
          </div>
          <div>
            <label>Email: </label>
            <Field type="email" name="email" />
          </div>
          <div>
            <label>Department: </label>
            <Field as="select" name="department">
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
            </Field>
          </div>
          <div>
            <label>Rating(1-5): </label>
            <Field type="number" name="rating" />
          </div>
          <div>
            <label>Feedback: </label>
            <Field type="textarea" name="feedback" />
          </div>

          <button type="submit">Submit Feedback</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeFeedbackForm;
