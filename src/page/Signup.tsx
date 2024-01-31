import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword === password) {
      setIsSuccess(true);
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert("회원가입 성공");
    }
    //create Account

    //set the name of the user

    //redirect to homepage
    const createUser = async () => {
      try {
        if (!name || !email || !password || !isSuccess) throw error;
        const credentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(credentials.user, { displayName: name });
        navigate("/");
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    createUser();
  }, [isSuccess]);

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <label>
          이름
          <Input
            name="name"
            value={name}
            type="text"
            onChange={onChange}
            placeholder="이름을 입력해주세요"
            required
          />
        </label>
        <label>
          이메일
          <Input
            name="email"
            value={email}
            type="email"
            onChange={onChange}
            placeholder="이메일을 입력해주세요"
            required
          />
        </label>
        <label>
          비밀번호
          <Input
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </label>
        <label>
          비밀번호 확인
          <Input
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            onChange={onChange}
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </label>
        <Button disabled={!email || !password || password != confirmPassword}>
          회원가입
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default SignUpPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
`;

const Button = styled.button`
  cursor: pointer;
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;
