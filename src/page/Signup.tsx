import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [confirmPassword, setConfirmPassword] = useState<string | number>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      alert("회원가입 성공");
    }
  }, [isSuccess]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (confirmPassword === password) {
            setIsSuccess(true);
          }
        }}
      >
        <label>
          이메일
          <input
            value={email}
            // type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          비밀번호
          <input
            value={password}
            // type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <label>
          비밀번호 확인
          <input
            value={confirmPassword}
            // type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </label>
        <button disabled={!email || !password || password != confirmPassword}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
