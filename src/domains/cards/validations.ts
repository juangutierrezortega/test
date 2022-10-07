import * as Yup from 'yup';
import { URL_REGEX } from './constants';

export const validationSchema = Yup.object().shape({
  title: Yup
    .string()
    .required('El título de la tarjeta de dispositivo es requerido'),
  description: Yup
    .string()
    .required('La descripción de la tarjeta de dispositivo es requerida'),
  imageUrl: Yup
    .string()
    .nullable()
    .optional()
    .matches(URL_REGEX, 'Por favor, introduce una url válida'),
});
