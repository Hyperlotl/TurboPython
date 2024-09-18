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
  }

  getInfo() {
    return {
      id: 'turbopython',
      name: 'TurboPython',
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
        },
        {
          opcode: 'checkPython',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Python Initialised?',
        },
        {
          opcode: 'checkPythonLoading',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Python Loading?',
        },
        {
          opcode: 'pythonLoadingStep',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Python Loading Status',
        },
        {
          opcode: 'addCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Add codeline to python script [CODE]',
          arguments: {
            CODE: {
              type: Scratch.ArgumentType.STRING,
            },
          },
        },
        {
          opcode: 'resetCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Reset Python script to default',
        },
        {
          opcode: 'deleteCode',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete Python Script',
        },
        {
          opcode: 'getCode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Python script',
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
    return await this.RunCodePython(); // Ensure it returns the result
  }

  addCode(args) {
    this.pythonCode += `\n${args.CODE}`; // Concatenate new code line
  }

  resetCode() {
    this.pythonCode = `
message = ("Hello World!")
message
    `;
  }
  deleteCode() {
    this.pythonCode = ``;
  }

  getCode() {
    return this.pythonCode;
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
}

Scratch.extensions.register(new TurboPython());
