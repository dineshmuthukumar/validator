import { useState } from "react";
import "./style.scss";
import { postData } from "../../api/base-apis";

const Landing = () => {
  const [password, setPassword] = useState("");
  const [resultCode, setResultCode] = useState("");

  const handleChangeEvent = (e) => {
    let newPass = e?.target?.value;
    setPassword(newPass);

    if (newPass.length > 6 || newPass.length < 20) {
      if (
        /[a-z]/.test(newPass) &&
        /[A-Z]/.test(newPass) &&
        /\d/.test(newPass) &&
        newPass.length < 6
      ) {
        setResultCode(3);
        return;
      }
      if (
        /[a-z]/.test(newPass) &&
        /[A-Z]/.test(newPass) &&
        /\d/.test(newPass) &&
        newPass.length > 6
      ) {
        setResultCode(0);
        return;
      }

      setResultCode(5);
      return;
    } else {
      setResultCode(5);
      return;
    }
  };

  const handleSave = async () => {
    try {
      let requestData = { input: password, result: resultCode };
      let response = await postData(requestData);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const reset = () => {
    setPassword("");
    setResultCode("");
  };
  return (
    <section className="account__container">
      <div className="password-container">
        <div className="password">
          <div className="input__container">
            <label className="input__label">Password</label>
            <input
              className={`input${resultCode === 0 ? "" : "--error"}`}
              type="password"
              value={password}
              onChange={handleChangeEvent}
            />
          </div>
        </div>
        <div className="validation">
          <p className="heading">
            A password is considered strong if the below conditions are all met:
          </p>

          <div className="validator">
            <p className="validation-item">6-20 characters</p>
          </div>
          <div className="validator">
            {/* <i
              className={
                this.state.specialCharValid
                  ? "fas fa-check success"
                  : "fas fa-times error"
              }></i> */}
            <p className="validation-item">1 special character</p>
          </div>
          <div className="validator">
            {/* <i
              className={
                this.state.uppercaseValid
                  ? "fas fa-check success"
                  : "fas fa-times error"
              }></i> */}
            <p className="validation-item">
              1 uppercase letter and 1 Lower case letter{" "}
            </p>
          </div>
          <div className="validator">
            {/* <i
              className={
                this.state.uppercaseValid
                  ? "fas fa-check success"
                  : "fas fa-times error"
              }></i> */}
            <p className="validation-item">
              It does not contain three repeating characters{" "}
            </p>
          </div>
          <div className="validator">
            {/* <i
              className={
                this.state.numberValid
                  ? "fas fa-check success"
                  : "fas fa-times error"
              }></i> */}
            <p className="validation-item">1 number</p>
          </div>
        </div>
        <div className="validator">
          {/* <i
              className={
                this.state.uppercaseValid
                  ? "fas fa-check success"
                  : "fas fa-times error"
              }></i> */}
          <p className="validation-item">OutPut : {resultCode}</p>
        </div>
      </div>
      <div className="button__container">
        <button className="button--primary" onClick={() => handleSave()}>
          Save
        </button>
        <button className="button--secondary" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Landing;
