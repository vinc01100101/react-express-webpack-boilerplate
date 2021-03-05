const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		Home: ["./src_client/Home.js"],
	},
	output: {
		path: path.join(__dirname, "dist/js"),
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
	optimization: {
		runtimeChunk: "single",
		minimize: false,
	},
};
