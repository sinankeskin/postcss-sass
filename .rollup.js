import babel from "@rollup/plugin-babel";

export default {
    input: "index.js",
    output: [
        {  file: "index.cjs.js", format: "cjs" },
        { file: "index.es.mjs", format: "es" },
    ],
    plugins: [
        babel({
            babelHelpers: "bundled",
            presets: [
                ["@babel/preset-env", { modules: false, targets: { node: 6 } }],
            ],
        }),
    ],
};
