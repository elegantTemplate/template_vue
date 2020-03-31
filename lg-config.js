module.exports = {
    projectElement: 'single',
    useEslint: true,
    dev: {
        devServer_config: {
            contentBase: './dist',
            port: 9000,
            compress: true,
            hot: true,
            open: 'Google Chrome',
            publicPath: '/a/b/',
            openPage: 'a/b/'
        },
        env: {
            apiPrefix: '',
            routerPath: '/a/b'
        },
        useMock: true,
        path: '/a/b/',
        // assets path
        publicPath: '/a/b/'
    },
    test: {
        env: {
            apiPrefix: '//minner.jr.jd.com',
            routerPath: '/a/b'
        },
        path: '/a/b/',
        publicPath: '/a/b/'
    },
    prod: {
        env: {
            apiPrefix: '//u.jr.jd.com',
            routerPath: '/a/b'
        },
        path: '/a/b/',
        publicPath: '/a/b/'
    }
}