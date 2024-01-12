import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = ({ signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password, skillLevel: data.skillLevel },
    };
    signup(userInfo);
    navigate("/");
    e.target.reset();
  };
  return (
    <div className="auth-body">
      <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Sign Up
      </h1>
      <form
        className="w-50 m-auto p-3 shadow-lg rounded my-5 pt-5 pb-3"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <b>Email:</b>{" "}
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <b>Password:</b>{" "}
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <select className="form-control text-center">
          <option value="">-Choose Skill Level-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>        
        </select>
        <br />
        <input className='btn w-100' style={{ color:"white", backgroundColor:"#EBA059" }} type="submit" value="Sign Up" />
        <div className="text-center">
          Forgot Password? <a href="*">Reset</a> here.
        </div>
      </form>
    </div>
  );
};
export default SignUp;
