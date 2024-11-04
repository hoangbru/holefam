interface InputBaseProps {
  className?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputBase: React.FC<InputBaseProps> = ({
  className,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className={className}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputBase;
