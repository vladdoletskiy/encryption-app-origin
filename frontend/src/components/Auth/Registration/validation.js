import * as yup from 'yup'; 

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  });

  export default schema;