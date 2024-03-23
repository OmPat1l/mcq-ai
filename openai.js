import { ChatGPTUnofficialProxyAPI } from "chatgpt";
// const ChatGPTUnofficialProxyAPI = require("chatgpt");

async function example() {
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN,
    apiReverseProxyUrl: process.env.REVERSE_PROXY_URL,
  });

  const res = await api.sendMessage("Hello World!");
  console.log(res.text);
}
example();
// import Authenticator from "openai-token";

// // async function getProxyToken() {
// //   const auth = new Authenticator(process.env.EMAIL, process.env.PASSWORD);
// //   await auth.begin();
// //   const token = await auth.getAccessToken();
// //   return token;
// // }
// const api = new ChatGPTUnofficialProxyAPI({
//   accessToken: process.env.OPENAI_ACCESS_TOKEN,
//   apiReverseProxyUrl: process.env.REVERSE_PROXY_URL,
// });

// async function example() {
//   let token = await getProxyToken();
//   const api = new ChatGPTUnofficialProxyAPI({
//     accessToken: token,
//   });

//   const res = await api.sendMessage("Hello World!");
//   console.log(res.text);
//   return res.text;
// }

// example();
