"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getUsers = function () {
        return [
            {
                firstName: "Vasiliy",
                lastName: "Pupkin",
                address: {
                    country: "Ukraine",
                    city: "Kharkiv",
                    street: "Sumskaya",
                    appartments: "1b"
                },
                phoneNumber: "88005553535"
            },
            {
                firstName: "Ivan",
                lastName: "Ivanov",
                address: {
                    country: "Ukraine",
                    city: "Kharkiv",
                    street: "Sumskaya",
                    appartments: "1b"
                },
                phoneNumber: "88005553535"
            },
        ];
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map