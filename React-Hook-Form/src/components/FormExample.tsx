import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { IFormInputs } from '../types/FormTypes';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

const FormExample: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: null,
      terms: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log('Dữ liệu form:', data);
    // submit, reset lại form
    reset();
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">React Hook Form với Tailwind CSS</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
        </div>

        {/* Gender -react-select qua Controller */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: 'Please select a gender' }}
            render={({ field }) => (
              <Select
                {...field}
                options={genderOptions}
                placeholder="Select gender"
                classNamePrefix="react-select"
                onChange={selectedOption => field.onChange(selectedOption)}
              />
            )}
          />
          {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>}
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            {...register('terms', { required: 'You must accept the terms and conditions' })}
            className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.terms ? 'border-red-500' : ''}`}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            Accept terms and conditions
          </label>
        </div>
        {errors.terms && <p className="mb-4 text-sm text-red-500">{errors.terms.message}</p>}

        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;
