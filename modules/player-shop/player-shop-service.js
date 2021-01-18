export const transformResponse = (data) => {
  if (!data || !data.HomeTabs) {
    return false;
  }
  let homeTabs = data.HomeTabs;
  let merchantTabs = data.MerchantTabs;

  let convertedTabs = merchantTabs.map((e) => {
    if (e.MerchantTabId == 8) {
      return { ...e, MerchantTabs: homeTabs[0].MerchantTabs };
    } else {
      return e;
    }
  });
  return convertedTabs;
};
