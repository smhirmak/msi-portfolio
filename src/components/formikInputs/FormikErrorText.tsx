import MethodHelper from "@/utils/MethodHelper";

const FormikErrorText:React.FC<{id: string; formik: any}> = ({ id, formik }) => {
  return (
    MethodHelper.formikErrorCheck(formik, id)
      ? <span className="text-error dark:text-red-600 text-sm">{MethodHelper.formikErrorCheck(formik, id)}</span>
      : <span className="text-error text-sm">&nbsp;</span>
  );
};

export default FormikErrorText;
