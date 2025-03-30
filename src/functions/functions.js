/* global clearInterval, console, setInterval */

import OpenAI from "openai";

/**
 * Utility function for string templating
 * @customfunction
 * @param {string[]} strings A list of values. The first one is the template and subsequent ones are the parameters to plug into the template. Performs like sprintf in C.
 * @returns {string} The templated string.
 */
export function format(strings) {
  console.log(strings);
  console.log(arguments);
  //return "TEST";
  try {
    var s = strings[0];
    for (var i = 0; i < strings.length - 1; i++) {
    var reg = new RegExp("\\{" + i + "\\}", "gm");
      s = s.replace(reg, strings[i + 1]);
    }
    return s;
  } catch (e) {
    console.log(e);
    return "ERROR: " + e;
  }
}

/**
 * Utility function for finding things in strings with regex
 * @customfunction
 * @param {string} input to search
 * @param {string} regex pattern to match.
 * @param {string} [options] such as i for case insensitive.
 * @returns {string} The matched pattern or error if not found.
 */
export function regexsearch(input, regex, options) {
  console.log(arguments);
  try {
    const matches = input.match(new RegExp(regex, options));
    console.log(matches); // Output: ["123", "456", "7890"]
    return matches[0]
  } catch (e) {
    console.log(e);
    throw e;
  }
}

/**
 * Utility function for finding emails in strings
 * @customfunction
 * @param {string} input to search
 * @returns {string} The matched pattern or error if not found.
 */
export function email(input) {
  return regexsearch(input, '[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,6}', "gmi");
}

/**
 * Utility function for finding phones in strings
 * @customfunction
 * @param {string} input to search
 * @returns {string} The matched pattern or error if not found.
 */
export function phone(input) {
  return regexsearch(input, '(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}', "gmi");
}

/**
 * Utility function for finding phones in strings
 * @customfunction
 * @param {string} input to search
 * @returns {string} The matched pattern or error if not found.
 */
export function usphone(input) {
  return regexsearch(input, '(\\+0?1\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}', "gmi");
}

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
 * Simple Gen AI Function for content extraction
 * @customfunction
 * @param {string} content Content to extract from
 * @param {string} extract What you want to extract
 */
export function genaiextract(content, extract) {
  try {
    return genai(
      "Extract " + extract + " from the following content: " + content, 
      "You are a helpful, smart, kind, and efficient AI assistant. You always fulfill the user's requests to the best of your ability. You do not yap. ",
      "Here is " + extract
    );
  } catch (e) {
    return "ERROR: " + JSON.stringify(e.message);
  }
  //invocation.setResult("Loading")
}

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