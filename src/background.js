const allowed_urls = [
  /* generally useful */
  "stackoverflow.com",
  "wikipedia.org",
  "github.com",


  /* chat ai*/
  "chat-ai.academiccloud.de",
  "gwdg.de",
  "sso.academiccloud.de",

  /* competitive programming stuff */ 
  "adventofcode.com",
  "codeforces.com",
  "leetcode.com",

  /* other programming */
  "cppreference.com"
];


const rules = {
  removeRuleIds: [1],
  addRules: [
    {
    id: 1,
    priority: 1,
    condition: {
      "resourceTypes": ["main_frame"],
      "excludedRequestDomains": allowed_urls.concat(["example.org"]),
      "excludedInitiatorDomains": allowed_urls.concat(["example.org"])
    },
    action: {
      "type": "redirect",
      "redirect": {
        "url": "http://www.example.org"
      }
    }
  }
  ],
};

chrome.declarativeNetRequest.updateDynamicRules(rules, () => {
  if (chrome.runtime.lastError) {
    console.error(JSON.stringify(chrome.runtime.lastError));
  } else {
    chrome.declarativeNetRequest.getDynamicRules(rules => console.log(rules));
  }
});
