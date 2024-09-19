const icon ="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzIuNzc3NzgiIGhlaWdodD0iMTMyLjc3Nzc4IiB2aWV3Qm94PSIwLDAsMTMyLjc3Nzc4LDEzMi43Nzc3OCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxODQuNDE5MzIiIHkxPSIxNjUuMzUyODMiIHgyPSIyNjYuNzEzMTEiIHkyPSIxNjUuMzUyODMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDQwNTA1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODAyYTFmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIxMy4xMTkzNyIgeTE9IjE5NC4zMjg1OCIgeDI9IjI5NS41ODA2OCIgeTI9IjE5NC4zMjg1OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkNDA1MDUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MDJhMWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTczLjYxMTExLC0xMTMuNjExMTEpIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTE3My42MTExMSwyNDYuMzg4ODl2LTEzMi43Nzc3OGgxMzIuNzc3Nzh2MTMyLjc3Nzc4eiIgZmlsbD0iI2Q0ZDRkNCIgc3Ryb2tlLXdpZHRoPSIwIi8+PGcgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMjUzLjMwNjg2LDEyNC45MDAxN2M3LjI3NjI3LDEuMjEyNzIgMTMuNDA2MjUsNi42NzExNiAxMy40MDYyNSwxMy45Mzc1djI1LjUzMTI1YzAsNy40ODY4NCAtNS45NTEzLDEzLjYyNSAtMTMuNDA2MjUsMTMuNjI1aC0yNi43ODEyNWMtOS4wOTI4NiwwIC0xNi43NSw3LjgwNjM1IC0xNi43NSwxNi42NTYyNXYxMi4yNWgtOS4yMTg3NWMtNy43OTI0NiwwIC0xMi4zNDQwNywtNS42NTU5IC0xNC4yNSwtMTMuNTkzNzVjLTIuNTcxMDIsLTEwLjY2Mzk4IC0yLjQ2MTgyLC0xNy4wMzcwMyAwLC0yNy4yNWMyLjEzNDI0LC04LjkxMDAzIDguOTU3NTQsLTEzLjU5Mzc1IDE2Ljc1LC0xMy41OTM3NWgxMC4wNjI1aDI2LjgxMjV2LTMuNDA2MjVoLTI2LjgxMjV2LTEwLjIxODc1YzAsLTcuNzM3NCAyLjA2MDAzLC0xMS45MzMgMTMuNDA2MjUsLTEzLjkzNzVjMy44NTE1NiwtMC42ODE1MyA4LjIyODg1LC0xLjA3MjQ1IDEyLjgxMjUsLTEuMDkzNzVjNC41ODM2NSwtMC4wMjEzIDkuMzYyNzYsMC4zMjcwMiAxMy45Njg3NSwxLjA5Mzc1ek0yMTkuODA2ODYsMTM3LjE1MDE3YzAsMi44MTYzMyAyLjI1MTc3LDUuMDkzNzUgNS4wMzEyNSw1LjA5Mzc1YzIuNzY5NTUsMCA1LjAzMTI1LC0yLjI3NzQxIDUuMDMxMjUsLTUuMDkzNzVjMCwtMi44MjYzNSAtMi4yNjE3LC01LjEyNSAtNS4wMzEyNSwtNS4xMjVjLTIuNzc5NDgsMCAtNS4wMzEyNSwyLjI5ODY1IC01LjAzMTI1LDUuMTI1eiIgZmlsbD0idXJsKCNjb2xvci0xKSIvPjxwYXRoIGQ9Ik0yODAuMTE5MzcsMTUyLjQ2MjY3YzcuODAyMzcsMCAxMS40ODA0Niw1LjgzNjMxIDEzLjQwNjI0LDEzLjU5Mzc1YzIuNjgwMjIsMTAuNzc0MjIgMi43OTkzMywxOC44NTExMSAwLDI3LjI1Yy0yLjcwOTk5LDguMTU4MzQgLTUuNjEzNzgsMTMuNTkzNzUgLTEzLjQwNjI0LDEzLjU5Mzc1aC0xMy40MDYyNWgtMjYuNzgxMjV2My40MDYyNWgyNi43ODEyNXYxMC4yMTg3NWMwLDcuNzM3MzkgLTYuNjU2MDksMTEuNjcwNjEgLTEzLjQwNjI1LDEzLjYyNWMtMTAuMTU1MDEsMi45NDY2MyAtMTguMjkzOTIsMi40OTU2MSAtMjYuNzgxMjUsMGMtNy4wODc2NiwtMi4wODQ2OCAtMTMuNDA2MjUsLTYuMzU4NjYgLTEzLjQwNjI1LC0xMy42MjV2LTI1LjUzMTI1YzAsLTcuMzQ2NTIgNi4wNzA0MiwtMTMuNjI1IDEzLjQwNjI1LC0xMy42MjVoMjYuNzgxMjVjOC45MjQxLDAgMTYuNzUsLTcuNzY5MjUgMTYuNzUsLTE3di0xMS45MDYyNXpNMjQ5Ljk2MzExLDIyMi4yMTI2N2MwLDIuODI2MzUgMi4yNjE3LDUuMTI1IDUuMDMxMjUsNS4xMjVjMi43Nzk0NywwIDUuMDMxMjUsLTIuMjk4NjUgNS4wMzEyNSwtNS4xMjVjMCwtMi44MTYzMyAtMi4yNTE3NywtNS4wOTM3NCAtNS4wMzEyNSwtNS4wOTM3NWMtMi43Njk1NSwwIC01LjAzMTI1LDIuMjc3NDIgLTUuMDMxMjUsNS4wOTM3NXoiIGZpbGw9InVybCgjY29sb3ItMikiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NjYuMzg4ODg4ODg4ODg4ODk6NjYuMzg4ODg4ODg4ODg4OTktLT4=";
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

  runScript(args) {
    if (args.SCRIPT in this.pythonScripts) {
      this.pythonCode = this.pythonScripts[args.SCRIPT];
      this.pythonResult = this.RunCode();
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
