const Input = ({
  type,
  placeHolder,
  classname,
  onchangeHandler,
}: {
  type: string;
  placeHolder: string;
  classname?: string;
  onchangeHandler: () => void;
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`w-full border rounded-xl border-gray-300 p-3 placeholder:text-xs outline-0 ${classname}`}
      onChange={onchangeHandler}
      value=""
    />
  );
};

export default Input;
