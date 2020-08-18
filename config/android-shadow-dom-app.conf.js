const {config} = require('./wdio.conf')

config.specs = [
  './test/specs/android-shadow-dom-app-test.js'
]

config.capabilities = [{
  sessionName:        'Android Shadow DOM app test',
  sessionDescription: 'This is an example for Android app',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  app:                'https://kobiton-devvn.s3-ap-southeast-1.amazonaws.com/demo/shadown-dom-app-debug.apk',
  deviceGroup:        'KOBITON',
  deviceName:         '*',
  platformName:       'Android',
  platformVersion:    '7.*'
}]

exports.config = config
