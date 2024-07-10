export const LANGUAGE_VERSIONS ={
    javascript: "18.15.0",
    python: "3.10.0",
    java: "15.0.2",
    c: "10.2.0",
    "c++" : "10.2.0",

};

export const CODE_SNIPPETS={
    javascript:  `\nfunction Hii(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\nHii("Joe");\n`,
    python: `\ndef Hii(name):\n\tprint("Hello, " + name + "!")\n\nHii("Joe")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    c : `\n#include <stdio.h>\nint main() { \n\tprintf("Hello, World!");\nreturn 0;\n}`,
    "c++" : `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello World";\nreturn 0;\n}`
};