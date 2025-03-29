/* global clearInterval, console, setInterval */

import OpenAI from "openai";

/**
 * Add two numbers
 * @customfunction
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.

export function add(first, second) {
  console.log("TEST");
  return first + second;
}
 */
/**
 * Simple Gen AI Function
 * @customfunction
 * @param {string} request Your AI Prompt
 * @param {string} [system_prompt] system prompt it must follow. Defaults to You are a helpful, smart, kind, and efficient AI assistant. You always fulfill the user's requests to the best of your ability. You do not yap. 
 * @param {string} [hint_text] hint text to clue it in on what it is going to say in response. Defaults to Here is a response to your question and nothing more
 * @param {number} [max_tokens] max tokens (defaults 500)
 * @param {number} [temperature] temperature (defaults 0.3)
 */
export function genai(request, system_prompt, hint_text, max_tokens, temperature) {
  try {
    console.log(request);

    aimodel = localStorage.getItem('freeai-aimodel') || 'lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF';
    aibaseurl = localStorage.getItem('freeai-aibaseurl') || "http://localhost:1234/v1"
    aiapikey = localStorage.getItem('freeai-aiapikey') || "lm-studio";

    const client = new OpenAI({
      baseURL: aibaseurl,
      apiKey: aiapikey,
      dangerouslyAllowBrowser: true,
      // apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    });

    if (!system_prompt) system_prompt = "You are a helpful, smart, kind, and efficient AI assistant. You always fulfill the user's requests to the best of your ability. You do not yap. ";
    if (!hint_text) hint_text = "Here is a response to your question and nothing more";
    if (!max_tokens) max_tokens = 500;
    if (temperature === null || temperature === undefined) temperature = 0.7;

    return client.chat.completions.create({
      model: aimodel,
      messages: [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": request},
        {"role": "assistant", "content": hint_text + ": \n\n```\n"}
      ],
      stop: ["`", "``", "```"],
      max_completion_tokens: max_tokens,
      temperature: temperature,
    }).then(response => {
        return response.choices[0].message.content.trim().replace("\n", "\r\n");
      })
      .catch(e => "ERROR QUERYING: " + e.message);
  } catch (e) {
    return "ERROR: " + JSON.stringify(e.message);
  }
  //invocation.setResult("Loading")
}

/**
 * Displays the current time once a second
 * @customfunction
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation

export function clock(invocation) {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
} */

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.

export function currentTime() {
  return new Date().toLocaleTimeString();
}
 */
/**
 * Increments a value once a second.
 * @customfunction
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation

export function increment(incrementBy, invocation) {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}
 */
/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.

export function logMessage(message) {
  console.log(message);

  return message;
}
 */