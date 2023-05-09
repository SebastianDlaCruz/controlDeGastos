import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
interface Props {
  text: string;
  to: string;
}

const MyLink = ({ text, to }: Props) => {
  return (
    <Button component={Link} to={to}>
      {text}
    </Button>
  )
}

export default MyLink
