## jest 설치

`npm install --save-dev jest @types/jest ts-jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom`

## jest 환경설정

1. package.json에 명시

```
// package.json
"test": "jest --watchAll",
...
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "jest-environment-jsdom",
    "testEnvironmentOptions": {
      "url": "https://wanted.byeongjinkang.com"
    }
  },
```

2. jest.config.cjs 파일에 명시

```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom'
}
```

## jest 테스트 코드 작성 위치

1. 테스트 하는 컴포넌트와 가까이
   - 컴포넌트 응집도 향상
   - 컴포넌트 소스코드 파악에 유리함
2. `__test__` 디렉토리 생성
   - 테스트 코드끼리 뭉쳐서 관리함

## Error

```
● Validation Error:

  Test environment jest-environment-dom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration
```

-> jsdom을 설치해놓고 설정파일에 그냥 dom이라고 적어놔서 생김. 설치한 jsdom으로 다시 명시해주고 실행
