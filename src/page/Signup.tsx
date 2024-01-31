import { useEffect, useState } from "react";
import styled from "styled-components";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
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
    <Wrapper>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (confirmPassword === password) {
            setIsSuccess(true);
          }
        }}
      >
        <label>
          이름
          <Input
            value={name}
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="이름을 입력해주세요"
            required
          />
        </label>
        <label>
          이메일
          <Input
            value={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="이메일을 입력해주세요"
            required
          />
        </label>
        <label>
          비밀번호
          <Input
            value={password}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </label>
        <label>
          비밀번호 확인
          <Input
            value={confirmPassword}
            type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </label>
        <button disabled={!email || !password || password != confirmPassword}>
          회원가입
        </button>
      </Form>
    </Wrapper>
  );
};

export default SignUpPage;

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
