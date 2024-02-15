import * as yup from 'yup';

const stepOne = yup.object({
  name: yup.string().required('A név megadása kötelező!'),
  phone: yup
    .string()
    // .required('A telefonszám megadása kötelező!')
    .matches(
      /(\()?(\+36|0036|06|00 36)?(\))?(-| )?(1|20|2[2-9]|3[0-7]|40|42|4[4-9]|5[2-7]|59|60|62|63|66|68|69|70|7[2-9]|80|8[2-5]|8[7-9]]|90|9[2-9])([\\\/ ])?(\d{6,7}|\d{3}(-| )\d{3,4}|\d{3,4}(-| )\d{3})/g,
      'Nem megfelelő telefonszám.'
    ),
  streetAndNumber: yup
    .string()
    .required('Az utca és házszám megadása kötelező!'),
  city: yup.string().required('A város megadása kötelező!'),
  postCode: yup
    .string()
    .required('Az irányítószám megadása kötelező!')
    .matches(/^[0-9]+$/, 'Számokat adjon meg!'),
});

const stepTwo = yup.object({
  addressMatches: yup.boolean().when('addressMatch', {
    is: (val) => val == false,
    then: () =>
      yup.object({
        receiptName: yup.string().required('A név megadása kötelező!'),
        receiptStreetAndNumber: yup
          .string()
          .required('Az utca és házszám megadása kötelező!'),
        receiptCity: yup.string().required('A város megadása kötelező!'),
        receiptPostCode: yup
          .string()
          .required('Az irányítószám megadása kötelező!')
          .matches(/^[0-9]+$/, 'Számokat adjon meg!'),
      }),
    // otherwise: () => yup.object({}),
  }),
});

const stepThree = yup.object({
  deliveryMode: yup.string().required('Válasszon szállítási módot!'),
});

const stepFour = yup.object({
  paymentMode: yup.string().required('Válasszon fizetési módot!'),
});

export const schemas = [stepOne, stepTwo, stepThree, stepFour];
