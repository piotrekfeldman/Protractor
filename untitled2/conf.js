exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Spec1.js'],


    capabilities: {
        'browserName': 'safari',
        'platform': 'ANY',
        'version': '11'
    }
};