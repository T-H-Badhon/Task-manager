"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateErrorMessageGenerator = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DuplicateErrorMessageGenerator = (err) => {
    const firstProperty = Object.keys(err.keyValue)[0];
    return `${firstProperty} already exsist!`;
};
exports.DuplicateErrorMessageGenerator = DuplicateErrorMessageGenerator;
// here only phoneNumber is unique.
//So we can directly use "phoneNumber already exsist!"
// But here i used dynamic system for further development
