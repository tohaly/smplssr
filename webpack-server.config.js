const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = ()  => {
    return ({
        target: 'node',
        entry: ['./src/server/index.js'],
        externals: [webpackNodeExternals()],
        output: {
            filename: 'server-ssr.js',
            path: path.resolve(__dirname, './build'),
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                        },
                    },
                },
            ],
        },
    });
};
