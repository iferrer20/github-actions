/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 802:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 921:
/***/ ((module) => {

module.exports = eval("require")("node-telegram-bot-api");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(802);

const TelegramBot = __nccwpck_require__(921);

const token = core.getInput('token');

const bot = new TelegramBot(token, {polling: false});

(async () => { 
    try {
        await bot.sendMessage(
            core.getInput('chat-id'), 
            "Workflow ejecutado correctamente tras el último commit. Saludos " + core.getInput('name')
        );
        core.setOutput('message-status', 'Message sent!');
    } catch(error) {
        core.setOutput('message-status', 'Failed to sent!');
        core.setFailed(error.message);
    }
})();


})();

module.exports = __webpack_exports__;
/******/ })()
;