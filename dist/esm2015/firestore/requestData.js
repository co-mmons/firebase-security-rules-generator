import { request } from "./request";
export function requestData(resourceData) {
    if (resourceData) {
        return request(resourceData).resource.data();
    }
    else {
        return request().resource.data();
    }
}
//# sourceMappingURL=requestData.js.map