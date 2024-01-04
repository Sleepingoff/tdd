//jest를 사용하여 테스트 케이스를 작성할 때
it("should test the first case", () => {});
test("테스트케이스 1번, 00을 테스트한다", () => {});

//it 또는 test의 묶음
describe("테스트하고자 하는 컴포넌트", () => {
  //beforeEach: 각각의 테스트 전에 실행하고 싶은 내용을 넣는다.
  beforeEach(() => {
    //콜백이 각각 한 번씩 실행한 후 테스트 케이스를 실행
    console.log("beforeEach");
  });
  it("should test the first case", () => {});
  test("테스트케이스 1번, 00을 테스트한다", () => {});
});
