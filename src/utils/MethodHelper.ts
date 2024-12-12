import Object from './Object';

const MethodHelper = {
  formikErrorCheck: (formik, id) => {
    if (Object.GetNestedValue(formik.errors, id) && Object.GetNestedValue(formik.touched, id)) { return Object.GetNestedValue(formik.errors, id); }
    return null;
  },
};

export default MethodHelper;