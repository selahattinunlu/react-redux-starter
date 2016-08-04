module.exports = {
    entry: [
        "babel-polyfill",
        "./src/app/index.jsx"
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.css$/, loaders: ["style", "css"] },
            { test: /\.scss/, loaders: ["style", "css", "sass"] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.json$/, loader: "json" },
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    devServer: {
        contentBase: './dist'
    }
};