/**
 * @prettier
 * 모든 request 타입은 requestType 속성을 가집니다
 */

// 로그인할 때 사용합니다
export function LoginType(id, password) {
  return { requestType: "login", id, password };
}

// 새로운 사용자 정보를 생성할 때 사용합니다
export function CreateUserType(
  id,
  pw,
  name,
  phoneNumber,
  email,
  address,
  role,
  department,
  enterDate = "",
  gradDate = ""
) {
  let newUserInfo = {
    requestType: "createUser",
    id,
    pw,
    name,
    phoneNumber,
    email,
    address,
    role,
    department,
  };

  if (role === "student") {
    newUserInfo.enterDate = enterDate;
    newUserInfo.gradDate = gradDate;
  }

  return newUserInfo;
}

// 쿠키로 저장되어있는 데이터들을 검증하기 위해 사용합니다
export function SessionType(id, role, session) {
  return {
    requestType: "validateSessionData",
    id,
    role,
    session,
  };
}
