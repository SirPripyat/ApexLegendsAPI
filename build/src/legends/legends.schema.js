"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var LegendSchema = new mongoose_1.Schema({
    code: {
        type: Number,
    },
    name: {
        type: String,
    },
    informations: {
        realName: {
            type: String,
        },
        age: {
            type: String,
        },
        planet: {
            type: String,
        },
        historyText: {
            type: String,
        },
    },
    phrase: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        smallest: {
            type: String,
        },
        small: {
            type: String,
        },
        medium: {
            type: String,
        },
        large: {
            type: String,
        },
        largest: {
            type: String,
        },
    },
    video: {
        type: String,
    },
    backgroundImage: {
        smallest: {
            type: String,
        },
        small: {
            type: String,
        },
        medium: {
            type: String,
        },
        large: {
            type: String,
        },
        largest: {
            type: String,
        },
    },
    class: {
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    passive: {
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    tactical: {
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    ultimate: {
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
});
exports.default = (0, mongoose_1.model)("Legend", LegendSchema);
//# sourceMappingURL=legends.schema.js.map