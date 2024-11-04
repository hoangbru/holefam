interface TextareaBaseProps {
  className?: string;
  id: string;
  cols?: number;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextareaBase: React.FC<TextareaBaseProps> = ({
  className,
  id,
  cols = 30,
  rows = 10,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <textarea
      className={className}
      id={id}
      name={id}
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextareaBase;
