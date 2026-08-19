const script = document.createElement("script");

script.src = chrome.runtime.getURL("bridge.js");

script.onload = () => {
    console.log("[SAKRA TEST] Bridge yüklendi.");
    script.remove();
};

(document.head || document.documentElement).appendChild(script);