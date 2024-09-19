const icon ="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNjQuODc1IiBoZWlnaHQ9IjE3MS45ODgwOCIgdmlld0JveD0iMCwwLDE2NC44NzUsMTcxLjk4ODA4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE4NC40MTkzMiIgeTE9IjE2NS4zNTI4MyIgeDI9IjI2Ni43MTMxMSIgeTI9IjE2NS4zNTI4MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkNDA1MDUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MDJhMWYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEzLjExOTM3IiB5MT0iMTk0LjMyODU4IiB4Mj0iMjk1LjU4MDY4IiB5Mj0iMTk0LjMyODU4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q0MDUwNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgwMmExZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTEuOTMwNTYsLTg0LjgxNzQ4KSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTY0LjQ0NDQ0LDE4MGMwLC00MS43MjgxOCAzMy44MjczNywtNzUuNTU1NTYgNzUuNTU1NTYsLTc1LjU1NTU2YzQxLjcyODE4LDAgNzUuNTU1NTYsMzMuODI3MzcgNzUuNTU1NTYsNzUuNTU1NTZjMCw0MS43MjgxOCAtMzMuODI3MzcsNzUuNTU1NTYgLTc1LjU1NTU2LDc1LjU1NTU2Yy00MS43MjgxOCwwIC03NS41NTU1NiwtMzMuODI3MzcgLTc1LjU1NTU2LC03NS41NTU1NnoiIGZpbGw9IiNkNGQ0ZDQiIHN0cm9rZT0iI2E2YTZhNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTI1My4zMDY4NiwxMjQuOTAwMTdjNy4yNzYyNywxLjIxMjcyIDEzLjQwNjI1LDYuNjcxMTYgMTMuNDA2MjUsMTMuOTM3NXYyNS41MzEyNWMwLDcuNDg2ODQgLTUuOTUxMywxMy42MjUgLTEzLjQwNjI1LDEzLjYyNWgtMjYuNzgxMjVjLTkuMDkyODYsMCAtMTYuNzUsNy44MDYzNSAtMTYuNzUsMTYuNjU2MjV2MTIuMjVoLTkuMjE4NzVjLTcuNzkyNDYsMCAtMTIuMzQ0MDcsLTUuNjU1OSAtMTQuMjUsLTEzLjU5Mzc1Yy0yLjU3MTAyLC0xMC42NjM5OCAtMi40NjE4MiwtMTcuMDM3MDMgMCwtMjcuMjVjMi4xMzQyNCwtOC45MTAwMyA4Ljk1NzU0LC0xMy41OTM3NSAxNi43NSwtMTMuNTkzNzVoMTAuMDYyNWgyNi44MTI1di0zLjQwNjI1aC0yNi44MTI1di0xMC4yMTg3NWMwLC03LjczNzQgMi4wNjAwMywtMTEuOTMzIDEzLjQwNjI1LC0xMy45Mzc1YzMuODUxNTYsLTAuNjgxNTMgOC4yMjg4NSwtMS4wNzI0NSAxMi44MTI1LC0xLjA5Mzc1YzQuNTgzNjUsLTAuMDIxMyA5LjM2Mjc2LDAuMzI3MDIgMTMuOTY4NzUsMS4wOTM3NXpNMjE5LjgwNjg2LDEzNy4xNTAxN2MwLDIuODE2MzMgMi4yNTE3Nyw1LjA5Mzc1IDUuMDMxMjUsNS4wOTM3NWMyLjc2OTU1LDAgNS4wMzEyNSwtMi4yNzc0MSA1LjAzMTI1LC01LjA5Mzc1YzAsLTIuODI2MzUgLTIuMjYxNywtNS4xMjUgLTUuMDMxMjUsLTUuMTI1Yy0yLjc3OTQ4LDAgLTUuMDMxMjUsMi4yOTg2NSAtNS4wMzEyNSw1LjEyNXoiIGZpbGw9InVybCgjY29sb3ItMSkiLz48cGF0aCBkPSJNMjgwLjExOTM3LDE1Mi40NjI2N2M3LjgwMjM3LDAgMTEuNDgwNDYsNS44MzYzMSAxMy40MDYyNCwxMy41OTM3NWMyLjY4MDIyLDEwLjc3NDIyIDIuNzk5MzMsMTguODUxMTEgMCwyNy4yNWMtMi43MDk5OSw4LjE1ODM0IC01LjYxMzc4LDEzLjU5Mzc1IC0xMy40MDYyNCwxMy41OTM3NWgtMTMuNDA2MjVoLTI2Ljc4MTI1djMuNDA2MjVoMjYuNzgxMjV2MTAuMjE4NzVjMCw3LjczNzM5IC02LjY1NjA5LDExLjY3MDYxIC0xMy40MDYyNSwxMy42MjVjLTEwLjE1NTAxLDIuOTQ2NjMgLTE4LjI5MzkyLDIuNDk1NjEgLTI2Ljc4MTI1LDBjLTcuMDg3NjYsLTIuMDg0NjggLTEzLjQwNjI1LC02LjM1ODY2IC0xMy40MDYyNSwtMTMuNjI1di0yNS41MzEyNWMwLC03LjM0NjUyIDYuMDcwNDIsLTEzLjYyNSAxMy40MDYyNSwtMTMuNjI1aDI2Ljc4MTI1YzguOTI0MSwwIDE2Ljc1LC03Ljc2OTI1IDE2Ljc1LC0xN3YtMTEuOTA2MjV6TTI0OS45NjMxMSwyMjIuMjEyNjdjMCwyLjgyNjM1IDIuMjYxNyw1LjEyNSA1LjAzMTI1LDUuMTI1YzIuNzc5NDcsMCA1LjAzMTI1LC0yLjI5ODY1IDUuMDMxMjUsLTUuMTI1YzAsLTIuODE2MzMgLTIuMjUxNzcsLTUuMDkzNzQgLTUuMDMxMjUsLTUuMDkzNzVjLTIuNzY5NTUsMCAtNS4wMzEyNSwyLjI3NzQyIC01LjAzMTI1LDUuMDkzNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIi8+PC9nPjxlbGxpcHNlIGN4PSIzMDUuMTExMTIiIGN5PSIxNzAuODg0OTYiIHRyYW5zZm9ybT0ic2NhbGUoMC41LDAuNSkiIHJ4PSIwIiByeT0iMCIgZmlsbD0iI2Q0ZDRkNCIgc3Ryb2tlPSIjYTZhNmE2IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjg4LjA2OTQ0MTA1MzYwMjYyOjk1LjE4MjUyMjQ0MzM4NDkzLS0+";
class TurboPython {
  constructor() {
    this.pyodideReady = false; // Flag to check if Pyodide is initialized
    this.pyodideLoading = false;
    this.pyodideLoadingStatus = "0/5";
    this.pythonCode = `
message = ("Hello World!")
message
    `; // Predefine the Python code
    this.preloadPyodide(); // Preload Pyodide when the extension is initialized
    this.tempCode = ``;
    this.pythonScripts = {example:`
message = ("Hello World!")
message
    `};
    this.pythonResult = "";
  }

  getInfo() {
    return {
      id: 'turbopython',
      name: 'TurboPython',
      menuIconURI: icon,
      color1: '#a1a1a1',
      color2: '#858585',
      color3: '#424242',
      blocks: [
        {
          opcode: 'PythonInit',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Initialise Python',
          hideFromPalette: true
        },
        {
          opcode: 'runCode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Run Python Code',
          hideFromPalette: true
        },
        {
          opcode: 'result',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Python code result',
        },
        {
          opcode: 'runScript',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Run Python Script [SCRIPT]',
          arguments: {
            SCRIPT: {
              type: Scratch.ArgumentType.STRING,
            },
          },
        },
        {
          opcode: 'getScript',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get Python script [SCRIPT]',
          arguments:{
            SCRIPT: {
              type:Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'addCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Add codeline [CODE] to python script [SCRIPT]',
          arguments: {
            CODE: {
              type: Scratch.ArgumentType.STRING,
            },
            SCRIPT:{
              type: Scratch.ArgumentType.STRING,
            }
          },
        },
        {
          opcode: 'resetCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Reset Python script to default',
          hideFromPalette: true
        },
        {
          opcode: 'deleteCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete Python Script [SCRIPT]',
          arguments: {
            SCRIPT:{
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'addScript',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Create new Python Script named [SCRIPT]',
          arguments: {
            SCRIPT:{
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'runCustomCode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get variable [VAR]',
          arguments: {
            VAR: {
              type: Scratch.ArgumentType.STRING,
            },
          },
          hideFromPalette: true
        },
        {
          opcode: 'checkScript',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Python script [SCRIPT] exsists?',
          arguments:{
            SCRIPT: {
              type:Scratch.ArgumentType.STRING
            },
          },
        },
        {
          opcode: 'listScripts',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Python scripts',
        },
        "---",
        {
          opcode: 'checkPython',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Python Initialised?',
          color1: '#ff4000',
          color2: '#b52d00',
          color3: '#7d1f00',
        },
        {
          opcode: 'checkPythonLoading',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Python Loading?',
          color1: '#ff4000',
          color2: '#b52d00',
          color3: '#7d1f00',
        },
        {
          opcode: 'pythonLoadingStep',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Python Loading Status',
          color1: '#ff4000',
          color2: '#b52d00',
          color3: '#7d1f00',
        },
      ],
    };
  }

  async preloadPyodide() {
    if (typeof window.pyodide === 'undefined') {
      this.pyodideLoading = true;
      this.pyodideLoadingStatus = "0/5";
      const pyodideScript = document.createElement('script');
      pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.21.2/full/pyodide.js'; // Updated version
      document.head.appendChild(pyodideScript);

      await new Promise((resolve, reject) => {
        pyodideScript.onload = () => {
          this.pyodideLoadingStatus = "1/5";
          resolve();
        };
        pyodideScript.onerror = () => {
          this.pyodideLoadingStatus = "Error loading script";
          reject();
        };
      });

      try {
        window.pyodide = await loadPyodide(); // Ensure Pyodide is loaded
        this.pyodideLoadingStatus = "2/5";
        this.pyodideReady = true;
        this.pyodideLoading = false;
        this.pyodideLoadingStatus = "3/5";
      } catch (error) {
        this.pyodideLoadingStatus = "Error loading Pyodide";
        console.error("Error loading Pyodide:", error);
      }
    }
  }

  async PythonInit() {
    // This function is now almost redundant since Pyodide is preloaded at the start
    if (!this.pyodideReady) {
      await this.preloadPyodide(); // Ensure Pyodide is ready
    }
  }

  async runCode() {
    // Ensure Pyodide is loaded
    if (!this.pyodideReady) {
      if (!this.pyodideLoading) {
        await this.PythonInit();
      }
    }

    // Run the Python code and get the result
    if (window.pyodide) {
      let result = await window.pyodide.runPythonAsync(this.pythonCode);
      return result;
    } else {
      throw new Error("Pyodide is not available");
    }
  }
  async runCustomCode(args) {
    // Ensure Pyodide is loaded
    if (!this.pyodideReady) {
      if (!this.pyodideLoading) {
        await this.PythonInit();
      }
    }
    this.tempcode = this.pythonCode;
    this.pythonCode = args;

    // Run the Python code and get the result
    if (window.pyodide) {
      let result = await window.pyodide.runPythonAsync(this.pythonCode);
      return result;
    } else {
      throw new Error("Pyodide is not available");
    }
  }

  checkPython() {
    return this.pyodideReady;
  }

  checkPythonLoading() {
    return this.pyodideLoading;
  }

  pythonLoadingStep() {
    return this.pyodideLoadingStatus;
  }

  async runPython() {
    return await this.RunCode(); // Ensure it returns the result
  }

  async runScript(args) {
    if (args.SCRIPT in this.pythonScripts) {
      this.pythonResult = "Uploading script...";
      this.pythonCode = this.pythonScripts[args.SCRIPT];
      this.pythonResult = "Python is running...";
      if (window.pyodide) {
      this.pythonResult = await window.pyodide.runPythonAsync(this.pythonCode);
    } else {
      throw new Error("Pyodide is not available");
    }
    }
    else {
      this.pythonResult = "error: Script not found";
    }
  }

  addCode(args) {
    if (args.SCRIPT in this.pythonScripts) {
      this.pythonCode = this.pythonScripts[args.SCRIPT];
      this.pythonCode += `\n${args.CODE}`; // Concatenate new code line
      this.pythonScripts[args.SCRIPT] = this.pythonCode;
      }
    else {
      return;
    }
    }
  

  resetCode() {
    this.pythonCode = `
message = ("Hello World!")
message
    `;
  }
  deleteCode(args) {
     if (args.SCRIPT in this.pythonScripts) {
       delete this.pythonScripts[args.SCRIPT];
     }
  }

  getCode() {
    return this.pythonCode;
  }
  listScripts() {
    return this.pythonScripts
  }
  checkScript(args) {
    if (args.SCRIPT in this.pythonScripts) {
      return true;
    }
    else {
      return false;
    }
  }

  async RunCodePython() {
    // Ensure Pyodide is loaded
    if (!this.pyodideReady) {
      if (!this.pyodideLoading) {
        await this.PythonInit();
      }
    }

    // Run the Python code and get the result
    if (window.pyodide) {
      let result = await window.pyodide.runPythonAsync(this.pythonCode);
      return result;
    } else {
      throw new Error("Pyodide is not available");
    }
  }
  result() {
    return this.pythonResult;
  }
  getScript(args) {
    if (args.SCRIPT in this.pythonScripts) {
      return this.pythonScripts[args.SCRIPT]
    }
    else {
      return "error. No script found."
    }
  }
}

Scratch.extensions.register(new TurboPython());
