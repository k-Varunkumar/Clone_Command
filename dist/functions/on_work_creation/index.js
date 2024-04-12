"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.handleEvent = void 0;
const axios_1 = __importDefault(require("axios"));
//npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
function handleEvent(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFDM1Z4bFNGNjY6ZGV2dS8xIiwiZXhwIjoxODA3Mjg0NjQ5LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufHRFYTRIVzZZSlIiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnx0RWE0SFc2WUpSIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xQzNWeGxTRjY2IiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMUMzVnhsU0Y2NiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6Imt1bWFydmFydW4xOTQ3IiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6Imt1bWFydmFydW4xOTQ3QGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJWYXJ1biBLdW1hciIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTI2NzY2NDksImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFDM1Z4bFNGNjY6dG9rZW4vZUZLZmJUOVYiLCJvcmdfaWQiOiJvcmdfYjZ1RnBFMW1mSVRLRFNmQyIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xQzNWeGxTRjY2OmRldnUvMSJ9.skLPr7HtTrqvdkHNxiAGc1KN66gnOkkcgj7oUAMPZ6G2CwfhNIhLVkNJ8z5t4BuCVc4V3_PtXPRp4yZhAJqDzt-ok0ARRGcWIhrLTnjHOrE-dWn6TBHFP3jvBiFVah16MThVX6VgLMwp-JwVALVVZGs6Ek1HgsJjQXIGBJ4zpb3UUOJwn0rGGk6m-Gq_ukLOVC3Zc-4zquGMcwdk5Iz8D7tYT_pmYydVIa1D1-fvk_nfbeBz8QuAwSjhmCSwM86-Twc54uG-IIjF6tao4Sw80kslMZfnMX-pM1Kan68XlAfWDeXE3rPQgAjHxHTFp31oLlQg6dKg1-NsOb3625dA-g";
        const res1 = yield axios_1.default.get('https://api.devrev.ai/works.get', {
            headers: {
                'Authorization': apiKey
            },
            params: {
                id: event.payload.source_id
            }
        });
        const postData = {
            "type": res1.data.work.title,
            "applies_to_part": "don:core:dvrv-us-1:devo/1C3VxlSF66:capability/5",
            "owned_by": [
                res1.data.work.owned_by[0].id
            ],
            "title": "[clone] " + res1.data.work.title
        };
        const response = yield axios_1.default.post('https://api.devrev.ai/works.create', postData, {
            headers: {
                'Authorization': "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFDM1Z4bFNGNjY6ZGV2dS8xIiwiZXhwIjoxODA3Mjg0NjQ5LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufHRFYTRIVzZZSlIiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnx0RWE0SFc2WUpSIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xQzNWeGxTRjY2IiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMUMzVnhsU0Y2NiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6Imt1bWFydmFydW4xOTQ3IiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6Imt1bWFydmFydW4xOTQ3QGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJWYXJ1biBLdW1hciIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTI2NzY2NDksImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFDM1Z4bFNGNjY6dG9rZW4vZUZLZmJUOVYiLCJvcmdfaWQiOiJvcmdfYjZ1RnBFMW1mSVRLRFNmQyIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xQzNWeGxTRjY2OmRldnUvMSJ9.skLPr7HtTrqvdkHNxiAGc1KN66gnOkkcgj7oUAMPZ6G2CwfhNIhLVkNJ8z5t4BuCVc4V3_PtXPRp4yZhAJqDzt-ok0ARRGcWIhrLTnjHOrE-dWn6TBHFP3jvBiFVah16MThVX6VgLMwp-JwVALVVZGs6Ek1HgsJjQXIGBJ4zpb3UUOJwn0rGGk6m-Gq_ukLOVC3Zc-4zquGMcwdk5Iz8D7tYT_pmYydVIa1D1-fvk_nfbeBz8QuAwSjhmCSwM86-Twc54uG-IIjF6tao4Sw80kslMZfnMX-pM1Kan68XlAfWDeXE3rPQgAjHxHTFp31oLlQg6dKg1-NsOb3625dA-g",
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        return response;
    });
}
exports.handleEvent = handleEvent;
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    for (let event of events) {
        yield handleEvent(event);
    }
});
exports.run = run;
exports.default = exports.run;
