const rules = {
  addRules: [
    {
    id: 1,
    priority: 1,
    condition: {
      "regexFilter": "^http://www.example.org(.*)",
      "resourceTypes": ["main_frame"]
    },
    action: {
      "type": "allow",
    }
    },
    {
    id: 2,
    priority: 2,
    condition: {
      "regexFilter": "^https://www.google.com(.*)",
      "resourceTypes": ["main_frame"]
    },
    action: {
      "type": "redirect",
      "redirect": {
        "regexSubstitution": "http://www.example.org?url=\\0"
      }
    }
  }
  ],
};

chrome.declarativeNetRequest.updateDynamicRules(rules, () => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    chrome.declarativeNetRequest.getDynamicRules(rules => console.log(rules));
  }
});
