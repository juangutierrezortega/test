import { useFormikContext, FormikContextType } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { ICard } from "../../domains/cards/types";

const CardForm = () => {
  const {values, errors, touched, setFieldValue }: FormikContextType<ICard> = useFormikContext();

  const handleChangeInput = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(fieldName, event.target.value);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "400px" },
      }}
    >
      <div>
        <TextField
          error={touched.title && !!errors.title}
          label="Título"
          value={values.title}
          helperText={errors.title}
          onChange={handleChangeInput('title')}
        />
      </div>
      <div>
        <TextField
          error={touched.description && !!errors.description}
          label="Descripción"
          value={values.description}
          helperText={errors.description}
          onChange={handleChangeInput('description')}
        />
      </div>
      <div>
        <TextField
          error={!!errors.imageUrl}
          label="Image (URL)"
          value={values.imageUrl}
          helperText={errors.imageUrl}
          onChange={handleChangeInput('imageUrl')}
        />
      </div>
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
  );
};

export default CardForm;
