/**
 * @prettier
 */

// http 메서드
// request함수의 첫 번째 인자로 넘겨줍니다
export const HttpMethod = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

// 서버요청을 위해 사용하는 함수
// httpMethod : HttpMethod 오브젝트의 속성중 하나를 사용합니다 (get, post, put, delete)
// path : 현재 페이지 이름을 사용합니다 (login, signup, etc)
// params : 서버에 넘겨줄 데이터들에 대한 인자입니다. requestTypes에 정의된 타입들의 인스턴스를 넘겨줍니다
export async function request(httpMethod, path, params) {
  try {
    const baseUrl = "http://localhost:3000";

    const res = await fetch(`${baseUrl}${path}`, {
      method: httpMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
}
