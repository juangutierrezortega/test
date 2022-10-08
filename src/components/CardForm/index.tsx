import { Formik, Form } from "formik";
import { ICard } from "../../domains/cards/types";
import { validationSchema } from "../../domains/cards/validations";
import View from "./view";

interface CardFormProps {
  handleSubmit: (values: ICard) => void;
}

const CardForm: React.FC<CardFormProps> = ({ handleSubmit }) => {
  const initialValues: ICard = {
    title: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <View />
      </Form>
    </Formik>
  );
};
export default CardForm;
