import { ErrorMessage, Field, Form, Formik } from "formik";

const StudentRegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    terms: false,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) errors.name = "Full name is required";

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "phone number is required";
    } else if (!/^d{10}$/.test(values.phone)) {
      errors.phone = "Invalid phone address";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 char";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password and confirm password doesn't match";
    }
    if (!values.course) {
      errors.course = "Select a course";
    }
    if (!values.terms) {
      errors.terms = "You must agree to term and conditions.";
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted: ", values);
    alert("From submitted Successfully!");
    resetForm();
  };
  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <Formik //validation
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Full Name: </label>
            <Field type="text" name="fullName" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label>Email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label>Phone: </label>
            <Field type="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label>Confirm Password</label>
            <Field type="confirmPassword" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label>Course: </label>
            <Field as="select" name="course">
              <option value="">Select Course</option>
              <option value="Web Dev">Web Development</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Data Science">Data Science</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>
          <div>
            <Field type="checkbox" name="terms" /> I agree to the terms and
            conditions
            <ErrorMessage name="terms" component="div" className="error" />
          </div>
          <button type="submit">Submit Feedback</button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentRegistrationForm;
