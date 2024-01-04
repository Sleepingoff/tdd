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
    testEnvironment: 'jest-environment-dom'
}
```

## jest 테스트 코드 작성 위치

1. 테스트 하는 컴포넌트와 가까이
   - 컴포넌트 응집도 향상
   - 컴포넌트 소스코드 파악에 유리함
2. `__test__` 디렉토리 생성
   - 테스트 코드끼리 뭉쳐서 관리함
