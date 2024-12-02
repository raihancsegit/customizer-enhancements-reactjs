const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your React code
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    filename: "index.js", // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process .js files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  mode: "development", // Use "production" for optimized builds
};
