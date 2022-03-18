const webpackConfig = require('./webpack.test.config');
const path = require('path');

const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

delete webpackConfig.entry;

module.exports = (config) => {
    config.set({
        browsers: ['ChromeHeadless'],
        basePath: '.',
        frameworks: ['webpack', 'mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage-istanbul', 'progress', 'junit'],
        files: ['test_karma/index.ts', {
            pattern: "test_karma/karma_test_files/*.png",
            watched: false,
            included: false,
            served: true,
            nocache: false
        }],
        preprocessors: {
            'test_karma/index.ts': ['webpack'],
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        coverageIstanbulReporter: {
            reports: ['html', 'text-summary', 'lcovonly'],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            'report-config': {
                html: { outdir: 'html' },
            },
        },
        junitReporter: {
            outputDir: './', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'test-Karma.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {}, // key value pair of properties to add to the <properties> section of the report
            xmlVersion: null, // use '1' if reporting to be per SonarQube 6.2 XML format
        },
    });
};
