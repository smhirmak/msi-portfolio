import { contactValidationSchema } from '@/constants/Validations';
import emailjs from '@emailjs/browser';
import { Portal, Snackbar } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import FormikInput from '../formikInputs/FormikInput';

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  const form: any = useRef();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: contactValidationSchema,
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      // setLoading(true);
      // try {
      emailjs.send('service_5dvhbjd', 'template_nm4l82i', values, 'lkrFFPph0bI0oKQRR').then(
        (result) => {
          setOpen(true);
          setResponseMessage('Email sent successfully!');
          resetForm();
        },
        (error) => {
          setOpen(true);
        }
      );
        
      // } finally {
      //   setLoading(false);
      // }
    },
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  return (
    <div className='flex flex-col justify-center relative z-1 items-center pt-14' id="contact">
      <div className='relative flex justify-between items-center flex-col w-full max-w-[1350px] pb-20'>
        <div className='text-4xl md:text-5xl text-center font-semibold mt-3 md:mt-5 cursor-default text-text-primary'>Contact</div>
        <div className='text-base mt-3 mx-4 md:m-0 md:text-lg text-center max-w-[600px] cursor-default text-text-secondary'>Feel free to reach out to me for any questions or opportunities!</div>
        <Formik initialValues={formik.initialValues} onSubmit={formik.submitForm} onReset={formik.handleReset}>
        <Form className="flex w-5/6 flex-col md:w-2/3">
          <div className='text-2xl mb-1.5 font-semibold cursor-default text-text-primary'>Contact Me</div>
          <FormikInput id='email' formik={formik} label='Your Email'  />
          <FormikInput id='name'  formik={formik} label='Your Name'  />
          <FormikInput id='subject' formik={formik} label='Subject'  />
          <FormikInput id='message' rows={4} multiline formik={formik} label='Message'  />
          <input className='w-full no-underline text-center py-3 px-4 mt-0.5 rounded-xl border-none text-text-primary text-lg font-semibold cursor-pointer hover:opacity-80 transition-all'
          style={{
            background: 'hsla(220, 100%, 50%, 1)',
            background: 'linear-gradient(280deg, hsla(0, 100%, 50%, 1) 0%, hsla(220, 100%, 50%, 1) 100%)'
          }} type="submit" value="Send" />
        </Form>
        </Formik>
        <Portal>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setOpen(false)}
            message={responseMessage}
            sx={{ zIndex: 100 }}
          />
        </Portal>
      </div>
    </div>
  );
};

export default Contact;
