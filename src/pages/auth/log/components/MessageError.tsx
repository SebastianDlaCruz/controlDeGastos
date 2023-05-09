
interface Props {
  message: string;
  status: boolean;
}

const MessageError = ({ message, status }: Props) => {
  if (status) {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
};

export default MessageError;
