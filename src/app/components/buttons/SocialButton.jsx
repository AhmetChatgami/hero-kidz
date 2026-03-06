import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialButtons = () => {
 const params = useSearchParams();
//   console.log(params.get("callbackUrl") || "/");

  const handleSignIn = async () => {
    const result = await signIn("google", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    console.log(result);
    if (result.ok) {
      Swal.fire("Success", "Google Sign In Success", "Success");
    } else {
      Swal.fire("Error", "Unable to Sign In", "Error");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={handleSignIn}
        type="button"
        className="btn btn-outline border-base-300 gap-2 hover:bg-red-500 hover:text-white"
      >
        <FaGoogle /> Google
      </button>
      <button
        type="button"
        className="btn btn-outline border-base-300 gap-2 hover:text-black"
      >
        <FaGithub className="" /> Github
      </button>
    </div>
  );
};

export default SocialButtons;
