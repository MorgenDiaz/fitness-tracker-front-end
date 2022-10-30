import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import { UserContext } from "../../context/UserContext";
import { register } from "../../api/users-controller";
import { TextBox, PrimaryButton, ErrorMessage } from "../../components";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { setIsLoading } = useContext(StateContext);
  const { setUser } = useContext(UserContext);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const data = await register(name, password);
      const { user, token } = data;
      setUser({ ...user, token: token });
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  const handleNameChanged = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
  };

  const handlePasswordChanged = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"create an account"}
      </h2>

      <div className="self-center">
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <TextBox
            onChange={handleNameChanged}
            placeholder="User Name"
            required={true}
          />

          <TextBox
            onChange={handlePasswordChanged}
            type="password"
            placeholder={"Password"}
            required={true}
          />

          <PrimaryButton value={"signup"} />
        </form>
      </div>

      <Link to="/auth" className="pt-2 uppercase self-center text-gray-800">
        {"login"}
      </Link>
    </div>
  );
}
