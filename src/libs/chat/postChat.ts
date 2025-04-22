import { instance } from "../instance";

export async function postFirstChat(body: any) {
  const response = await instance.post(`/start`, body);
  console.log("첫번째 채팅임");
  console.log(response.data);
  return response.data;
}

export async function postChat(body: any) {
  const response = await instance.post(`/message`, body);
  console.log("이후 채팅임");
  return response.data;
}