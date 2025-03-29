# Excel Free AI

<img src="./assets/logo.jpeg" width=500 />

Excel Free AI is an open-source Excel add-in that enables users to query and interact with AI models locally, without relying on cloud-based APIs. Designed to work with models like **Llama 3.1 7B** running on **LM Studio** and other local AI runtimes, this add-in provides seamless integration of AI capabilities directly within Excel. It is also remarkeably simple to use and could easily be expanded in the future to do more. 

## Features

- **Local AI Processing** – Run against AI models running on your own machine, ensuring data privacy.
- **Easy Integration** – Simple installation as an Excel add-in.
- **Query AI Models** – Send prompts and receive AI-generated responses directly within Excel.
- **Customizable Settings** – Configure model parameters, temperature, and response length.
- **Supports Multiple Models** – Works with AI models that run locally, such as those in LM Studio, but can also work with ChatGPT or other services.
- **Open Source** – Modify and improve the add-in as needed. It is intentionally simple and could be easily extended. 

## Installation

### Prerequisites
- Windows or macOS with Excel installed
- [LM Studio](https://lmstudio.ai/) or another local AI runtime running model (or a chatgpt account). 
- If using LM Studio, be sure to start the Local Server and check the Cross-Origin Request Sharing (CORS) ON. 
- A locally installed AI model (e.g., Llama 3.1 7B - you can find it by searching for lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF)

### Steps
1. Download the latest release from the [GitHub Releases](https://github.com/yourrepo/excel-free-ai/releases).
2. Open Excel and go to **File** → **Options** → **Add-ins**.
3. Click **Manage: Excel Add-ins** and then **Go...**.
4. Click **Browse...** and select the `ExcelFreeAI.xlam` file.
5. Enable the add-in and restart Excel.

## Usage

1. Open Excel and navigate to the **Excel Free AI** tab.
2. Enter your prompt into the designated cell or input box.
3. Click **Run AI Query** to send your prompt to the locally running model.
4. View the AI-generated response in the designated output cell.
5. Adjust model parameters (temperature, max tokens, etc.) as needed.

For more information, see [Microsoft's Documentation](https://learn.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-overview)

## Local Development

Install a long-term-support version of NodeJS then...

    npm install
    npm run start

This will compile the code, launch excel, as well as install the add-in in your Excel session. 

## Distribution

    npm run build

## Configuration

You can configure Excel Free AI by editing the settings file (`config.json`) or through the add-in settings panel:
- **Model Path**: Path to the AI model file
- **API Endpoint**: URL for local model API (e.g., `http://localhost:5000`)
- **Temperature**: Controls randomness of responses
- **Max Tokens**: Limits response length

## Contributing

We welcome contributions! To contribute:
1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

## License

This project is licensed under the [MIT License](LICENSE). 

## Acknowledgments

- [LM Studio](https://lmstudio.ai/) for making local AI model deployment accessible.
- Open-source AI models like Llama 3.1 7B.
- The project's creator, [Jacob Beasley](https://github.com/jacobbeasley/)

---

For more details, visit the [GitHub repository](https://github.com/yourrepo/excel-free-ai).
