import { getPSLTabs } from "../../services/apilinks";
import { get } from "../../services/http-service";

export async function getPSLTabsService() {
    const response = await get(getPSLTabs);
    return response.data;
}