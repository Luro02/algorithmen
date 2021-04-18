import hljs from "highlight.js/lib/core";

hljs.registerLanguage("pseudocode", (hljs) => {
    const KEYWORDS = [
        "while",
        "for",
        "do",
        "to",
        "then",
        "repeat",
        "until",
        "foreach",
        "break",
        "Function",
        "if",
        "else",
        "return"
    ];
    const LITERALS = [
        "true",
        "false",
        "⊥"
    ];
    const BUILTINS = [
        "assert",
        "invariant",
    ];
    const TYPES = [
        "Digit",
        "ℕ",
        "ℝ",
        "Pointer",
        "T",
        "Array",
        "Class"
    ];

    const CHARACTER = {
        className: "string",
        begin: /'([^'\\]|\\.)*'/,
    };
    const STRING = {
        className: "string",
        begin: /"([^"\\]|\\.)*"/,
    };
    const NUMBER = {
        className: "number",
        begin: /\b[-+]?[0-9][a-zA-Z0-9_\.]*\b/,
        relevance: 0,
    };

    const COMMENT = {
        variants: [hljs.COMMENT("//", "$")],
    };

    return {
        name: "Pseudocode",
        keywords: {
            type: TYPES,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: BUILTINS
        },
        contains: [
            STRING,
            CHARACTER,
            NUMBER,

            COMMENT,

            { begin: "->|<-" }, // No markup, relevance booster
        ],
    };
});

window.addEventListener("load", (event) => {
    document
        .querySelectorAll("code.language-pseudocode")
        .forEach((block) => hljs.highlightBlock(block));
});