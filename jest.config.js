"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};
