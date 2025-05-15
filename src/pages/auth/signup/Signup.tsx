import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form
      action=""
      className="w-full lg:w-1/3 rounded-xl border border-gray-300 flex flex-col p-6 justify-center items-center gap-8"
    >
      <h1 className="w-full flex text-bold text-3xl">ثبت نام</h1>
      <p className="text-gray-600 flex w-full text-sm">
        سلام!
        <br />
        لطفا اطلاعات خود را وارد کنید
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
          placeHolder="ایمیل"
          type="email"
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
        text="ثبت نام"
      />
      <p className="w-full flex justify-center items-center text-xs text-gray-400 gap-1">
        ثبت نام کرده اید؟
        <Link to="/auth/login" className="text-gray-500">
          وارد حساب خود
        </Link>
        شوید .
      </p>
    </form>
  );
};

export default Signup;
