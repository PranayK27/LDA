"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("@storybook/addon-docs/angular");
var documentation_json_1 = require("../documentation.json");
(0, angular_1.setCompodocJson)(documentation_json_1.default);
var preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
exports.default = preview;
