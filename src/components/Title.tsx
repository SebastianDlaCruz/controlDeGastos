interface Props {
  level: number;
  text: string;
}

const Title = ({ level, text }: Props) => {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const Level: any = `h${level}`;

  return <Level>{text}</Level>;
};

export default Title;
