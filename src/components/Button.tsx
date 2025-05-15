const Button = ({
  classname,
  text,
  onclickHandler,
}: {
  classname: string;
  text: string;
  onclickHandler: () => void;
}) => {
  return (
    <button
      onClick={onclickHandler}
      className={`w-full flex justify-center items-center p-3 rounded-xl cursor-pointer ${classname}`}
    >
      {text}
    </button>
  );
};

export default Button;
