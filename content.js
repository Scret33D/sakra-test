console.log("[SAKRA TEST] Content Script aktif.");

window.addEventListener("message", (event) => {
    if (event.source !== window) return;

    if (event.data?.type === "SAKRA_RESULT") {
        console.log(
            "[SAKRA TEST] Bridge sonucu:",
            event.data
        );
    }
});

console.log("[SAKRA TEST] Test mesajı gönderiliyor.");

window.postMessage({
    type: "SAKRA_TEST"
}, "*");

const script = document.createElement("script");

script.src = chrome.runtime.getURL("bridge.js");

script.onload = () => {
    console.log("[SAKRA TEST] Bridge yüklendi.");
    script.remove();
};

script.onerror = (error) => {
    console.error("[SAKRA TEST] Bridge yüklenemedi:", error);
};

(document.head || document.documentElement).appendChild(script);