import Object from './Object';

const MethodHelper = {
  formikErrorCheck: (formik: any, id: any) => {
    if (Object.GetNestedValue(formik.errors, id) && Object.GetNestedValue(formik.touched, id)) { return Object.GetNestedValue(formik.errors, id); }
    return null;
  },
};

export default MethodHelper;
