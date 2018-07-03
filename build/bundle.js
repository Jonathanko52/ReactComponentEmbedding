/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jonathanko/CS Stuff/Job Stuff/Nugg/index.js: Unexpected token (17:12)\\n\\n  15 |     render () {\\n  16 |         return(\\n> 17 |             <div>\\n     |             ^\\n  18 |                 <Child1/>\\n  19 |                 <Child2/>\\n  20 |             </div>\\n    at Parser.raise (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:3893:15)\\n    at Parser.unexpected (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5222:16)\\n    at Parser.parseExprAtom (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6298:20)\\n    at Parser.parseExprSubscripts (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5898:21)\\n    at Parser.parseMaybeUnary (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5877:21)\\n    at Parser.parseExprOps (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5786:21)\\n    at Parser.parseMaybeConditional (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5758:21)\\n    at Parser.parseMaybeAssign (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5705:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6444:28)\\n    at Parser.parseExprAtom (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6254:21)\\n    at Parser.parseExprSubscripts (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5898:21)\\n    at Parser.parseMaybeUnary (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5877:21)\\n    at Parser.parseExprOps (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5786:21)\\n    at Parser.parseMaybeConditional (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5758:21)\\n    at Parser.parseMaybeAssign (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5705:21)\\n    at Parser.parseExpression (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:5658:21)\\n    at Parser.parseReturnStatement (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7467:28)\\n    at Parser.parseStatementContent (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7149:21)\\n    at Parser.parseStatement (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7115:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7666:23)\\n    at Parser.parseBlockBody (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7653:10)\\n    at Parser.parseBlock (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7642:10)\\n    at Parser.parseFunctionBody (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6895:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6875:10)\\n    at Parser.parseMethod (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:6827:10)\\n    at Parser.pushClassMethod (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:8046:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7965:12)\\n    at Parser.parseClassMember (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7907:10)\\n    at Parser.parseClassBody (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7862:12)\\n    at Parser.parseClass (/Users/jonathanko/CS Stuff/Job Stuff/Nugg/node_modules/@babel/parser/lib/index.js:7812:10)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });