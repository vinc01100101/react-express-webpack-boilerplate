const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        home: ["./src_client/Home.js"],
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
