import RegisterForm from "@/app/components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;