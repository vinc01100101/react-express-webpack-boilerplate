/* PARALLELSHELL and NODE SASS ARE GLOBAL, RE INSTALL THEM */
const path = require("path");
const express = require("express");
const app = express();

//get the env mode set in package.json script, trip spaces
const nodeEnv = process.env.NODE_ENV.trim();
if (nodeEnv !== "production") {
    require("dotenv").config();
    console.log("development mode");

    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const config = require("./webpack.config.js");

    //Add HMR plugin
    //  Hot Module Replacement (HMR) exchanges, adds, or removes modules
    //  while an application is running, without a full reload.
    //  This can significantly speed up development in a few ways:

    //  -Retain application state which is lost during a full reload.
    //  -Save valuable development time by only updating what's changed.
    //  -Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config);

    //Enable "webpack-dev-middleware"
    //  Some of the benefits of using this middleware include:
    //  -No files are written to disk, rather it handles files in memory
    //  -If files changed in watch mode, the middleware delays requests until compiling has completed.
    //  -Supports hot module reload (HMR).

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
    );
} else {
    console.log("mode = " + process.env.NODE_ENV);
}

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
    console.log("HOME!!");
    res.render(path.join(__dirname, "dist/index.pug"), {
        page: "Home",
    });
});

app.use((req, res) => {
    res.status(404).end();
});
app.listen(port, () => {
    console.log("Server started on port: " + port);
});
