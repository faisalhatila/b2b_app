import { useFormik } from 'formik';
import React from 'react';
import Input from '../../components/ui-elements/Input';
import { authSchema } from '../../utils/schemas/auth';
import { CiUser } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '../../components/ui-elements/Button';

const Auth = () => {
  const {
    values,
    errors,
    // handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {},
    validationSchema: authSchema,
    // enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (formValues) => {
      console.log({ formValues });
    },
  });
  const loginFormFields = [
    {
      id: 1,
      name: 'credential',
      label: 'Username or Phonenumber',
      placeholder: 'Enter username or phonenumber',
      icon: CiUser,
    },
    {
      id: 2,
      name: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      icon: RiLockPasswordLine,
    },
  ];
  const handleChangeField = (name, value) => {
    console.log({ name, value });
    setFieldValue(name, value);
  };
  // console.log({ errors, values });
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400">
      <div className="w-full md:w-6/12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Your auth content goes here */}
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {loginFormFields.map(({ placeholder, name, label, id, icon }) => (
              <Input
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
                value={values[name]}
                onChange={handleChangeField}
                error={errors[name]}
                Icon={icon}
              />
            ))}
            <Button otherClasses={'mt-10'} title={'Submit'} type={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
