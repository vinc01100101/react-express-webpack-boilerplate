const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        app: ["./src_client/index.js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/js/",
        filename: `[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {},
    },
    plugins: [],
};
