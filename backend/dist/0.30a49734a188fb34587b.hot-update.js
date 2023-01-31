exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 15:
/***/ (() => {

throw new Error("Module parse failed: Cannot use keyword 'await' outside an async function (51:31)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     checkStudentLogin(loginDto) {\n|         try {\n>             const department = await this.student.findOne({ email: loginDto.email });\n|             if (department) {\n|                 const isMatch = await bcrypt.compare(loginDto.password, department.password);");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("904a2ef1df3d62a88b97")
/******/ })();
/******/ 
/******/ }
;