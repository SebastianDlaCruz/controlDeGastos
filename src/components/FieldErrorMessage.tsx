
interface Props {
  textError: string | undefined;
}

const FieldErrorMessage = ({ textError }: Props) => {
  return textError !== undefined ? (
    <p>{textError}</p>
  ) : null;
};

export default FieldErrorMessage;
