"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const fastify_1 = __importDefault(require("fastify"));
const server = fastify_1.default({ logger: true });
server.register(require('fastify-nextjs')).after(() => {
    server.next('/hello');
});
server.listen(config_1.default.port);
//# sourceMappingURL=index.js.map