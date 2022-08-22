import { useFormik, Form, Formik } from 'formik';
import validationSchema from './validations';

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      // firstName: 'Esra',
      // lastName: 'Sümer',
      // gender: 'female',
      // hobies: [],
      // country: 'Turkey', 
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      {/* <Formik
        initialValues={{
          firstName: 'Esra',
          lastName: 'Sümer',
          email: 'esrasumer28@gmail.com',
          gender: 'female',
          hobies: [],
          country: 'Turkey'
        }}
        onSubmit={(values) => {
         
        }}
      > */}
      {/* {({ handleSubmit, handleChange, values }) => ( */}
      <Formik>
        <Form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} />
          {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
          <br />
          <br />
          <label>Password</label>
          <input
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} />
          {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
          <br />
          <br />
          <label>Confirm Password</label>
          <input
            name='passwordConfirm'
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur} />
          {errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}
          {/* <Field id="email" name="email" placeholder="jane@acme.com" type="email" /> 
          <br />
          <br /> 
           <label htmlFor="firstName">First Name</label>
          <input name='firstName' value={values.firstName} onChange={handleChange} />
          {/* <Field id="firstName" name="firstName" placeholder="Jane" /> 
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input name='lastName' value={values.lastName} onChange={handleChange} />
          {/* <Field id="lastName" name="lastName" placeholder="Doe" /> 
          <br />
          <br />
         
          <span>Male</span>
          <input type="radio"
            name='gender'
            value="male"
            onChange={handleChange}
            checked={values.gender === "male"}
          />

          <span>Female</span>
          <input type="radio"
            name='gender'
            value="female"
            onChange={handleChange}
            checked={values.gender === "female"}
          />
          <br />
          <br />
          <div>
            <input type="checkbox" name='hobies' value='Football' onChange={handleChange} />
            Football
          </div>
          <div>
            <input type="checkbox" name='hobies' value='Cinema' onChange={handleChange} />
            Cinema
          </div>
          <div>
            <input type="checkbox" name='hobies' value='Photography' onChange={handleChange} />
            Photoraphy
          </div>
          <br />
          <br />
          <select
            name='country'
            value={values.country}
            onChange={handleChange}
          >
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>
          </select> */}
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
          <code>{JSON.stringify(values)}</code>
        </Form>
        {/* )} </Formik> */}
      </Formik>
    </div>
  );
}

export default Signup;
