import { getPSLTabs, getPSLTabsForWeb } from "../../services/apilinks";
import { get } from "../../services/http-service";

export async function getPSLTabsService() {
  const response = await get(getPSLTabsForWeb);
  return response.data;
}
