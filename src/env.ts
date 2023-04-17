import type { Model } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: false,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI
- 要使用本站，请在左下角设置菜单中输入正确的网站密码。要使用本站，请在左下角设置菜单中输入自己OpenAI账户的API Key。
- 本站基于[开源代码](https://github.com/ourongxing/chatgpt-vercel)搭建，不存在后台收集用户API Key和任何对话记录的功能，请放心使用。
- [[Shift]] + [[Enter]] 换行。对话框开头输入 [[/]] 或者 [[空格]] 使用Prompt 预设角色。
- [[↑]] 可编辑最近一次提问。点击网站名称滚动到顶部，点击对话框滚动到底部。
- 点击每条消息前的头像，可以锁定对话，作为角色设定。
- 现在支持多个对话，打开对话设置，点击新建对话。在输入框输入 [[/]][[/]] 或[[空格]][[空格]] 可以切换对话，搜索历史消息。
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
