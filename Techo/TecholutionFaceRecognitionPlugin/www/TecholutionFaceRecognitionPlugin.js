var exec = require('cordova/exec');

exports.openCamera = function (arg0, success, error) {
    exec(success, error, 'TecholutionFaceRecognitionPlugin', 'openCam', [arg0]);
};
exports.takePictureCamera = function (arg0, success, error) {
    exec(success, error, 'TecholutionFaceRecognitionPlugin', 'captureCam', [arg0]);
};
exports.getFaceHeight = function (arg0, success, error) {
    exec(success, error, 'TecholutionFaceRecognitionPlugin', 'faceHeight', [arg0]);
};
