import { contactValidationSchema } from '@/constants/Validations';
import emailjs from '@emailjs/browser';
import { Portal, Snackbar } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import FormikInput from '../formikInputs/FormikInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 60px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  cursor: default;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  cursor: default;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin: 12px 15px 0;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.primary + 40} 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  cursor: default;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  resize: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(220, 100%, 50%, 1);
  background: linear-gradient(280deg, hsla(0, 100%, 50%, 1) 0%, hsla(220, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(
    280deg,
    hsla(0, 100%, 50%, 1) 0%,
    hsla(220, 100%, 41%, 45%, 1) 100%
  );
  background: -webkit-linear-gradient(
    280deg,
    hsla(0, 100%, 50%, 1) 0%,
    hsla(220, 100%, 41%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('service_5dvhbjd', 'template_nm4l82i', form.current, 'lkrFFPph0bI0oKQRR').then(
      (result) => {
        setOpen(true);
        form.current.reset();
        setResponseMessage('Email sent successfully!');
      },
      (error) => {
        setOpen(true);
        form.current.setResponseMessage('Something went wrong' + ` (${error.status})`);
      }
    );
  };

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
      // setLoading(true);
      // try {
      //   await login(values);
      // } finally {
      //   setLoading(false);
      // }
    },
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <Formik initialValues={formik.initialValues} onSubmit={formik.submitForm} onReset={formik.handleReset}>
        <Form className="flex w-5/6 flex-col md:w-2/3">
          <ContactTitle>Contact Me</ContactTitle>
          <FormikInput id='email' formik={formik} label='Your Email'  />
          <FormikInput id='name'  formik={formik} label='Your Name'  />
          <FormikInput id='subject' formik={formik} label='Subject'  />
          <FormikInput id='message' rows={4} multiline formik={formik} label='Message'  />
          <ContactButton type="submit" value="Send" />
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
      </Wrapper>
    </Container>
  );
};

export default Contact;
