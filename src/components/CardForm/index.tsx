import { Formik, Form } from "formik";
import { ICard } from "../../domains/cards/types";
import { validationSchema } from "../../domains/cards/validations";
import View from "./view";

interface CardFormProps {
  handleSubmit: (values: ICard) => void;
  cardSelected: ICard | undefined
}

const CardForm: React.FC<CardFormProps> = ({ handleSubmit, cardSelected }) => {
  const initialValues: ICard = cardSelected || {
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
