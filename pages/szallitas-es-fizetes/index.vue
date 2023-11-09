<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    fullName: yup.string().required().label('Full Name'),
    email: yup.string().required().email().label('Email Address'),
  }),
  yup.object({
    password: yup.string().min(8).required(),
    confirmPass: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
  yup.object({
    favoriteDrink: yup
      .string()
      .required()
      .oneOf(['coffee', 'tea', 'soda'], 'Choose a drink'),
  }),
];

/**
 * Only Called when the last step is submitted
 */
function onSubmit(formData) {
  console.log(JSON.stringify(formData, null, 2));
}
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <CheckoutForm :validation-schema="validationSchema" @submit="onSubmit">
        <CheckoutStep>
          <Field
            name="fullName"
            type="text"
            placeholder="Type your Full name"
          />
          <ErrorMessage name="fullName" />

          <Field name="email" type="email" placeholder="Type your email" />
          <ErrorMessage name="email" />
        </CheckoutStep>

        <CheckoutStep>
          <Field
            name="password"
            type="password"
            placeholder="Type a strong one"
          />
          <ErrorMessage name="password" />

          <Field
            name="confirmPass"
            type="password"
            placeholder="Confirm your password"
          />
          <ErrorMessage name="confirmPass" />
        </CheckoutStep>

        <CheckoutStep>
          <Field name="favoriteDrink" as="select">
            <option>Select a drink</option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="soda">Soda</option>
          </Field>
          <ErrorMessage name="favoriteDrink" />
        </CheckoutStep>
      </CheckoutForm>
    </div>
  </div>
</template>

<style>
input,
select {
  margin: 10px 0;
  display: block;
}
</style>
