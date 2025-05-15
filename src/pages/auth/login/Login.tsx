import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const Login = () => {
  return (
    <form
      action=""
      className="w-full lg:w-1/3 rounded-xl border border-gray-300 flex flex-col p-6 justify-center items-center gap-8"
    >
      <h1 className="w-full flex text-bold text-3xl">ورود</h1>
      <p className="text-gray-600 flex w-full text-sm">
        سلام!
        <br />
        لطفا نام کاربری و رمز عبور خود را وارد کنید
      </p>
      <div className="w-full flex flex-col gap-2">
        <Input
          onchangeHandler={() => {}}
          placeHolder="نام کاربری"
          type="text"
          classname=""
        />
        <Input
          onchangeHandler={() => {}}
          placeHolder="رمز عبور"
          type="password"
          classname=""
        />
      </div>
      <Button
        classname="bg-[#EF4056] text-white"
        onclickHandler={() => {}}
        text="ورود"
      />
      <p className="w-full flex justify-center items-center text-xs text-gray-400 gap-1">
        حساب کاربری ندارید؟ آن را
        <Link to="/auth/signup" className="text-gray-500">
          ایجاد{" "}
        </Link>
        کنید .
      </p>
    </form>
  );
};

export default Login;
