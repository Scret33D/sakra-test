console.log("[SAKRA TEST] Main World aktif.");

window.addEventListener("message", async (event) => {
    if (event.source !== window) return;

    if (event.data?.type !== "SAKRA_TEST") return;

    console.log("[SAKRA TEST] RPC çağrısı hazırlanıyor.");

    try {
        google.script.run
            .withSuccessHandler((result) => {
                console.log("[SAKRA TEST] BAŞARILI:", result);

                window.postMessage({
                    type: "SAKRA_RESULT",
                    success: true,
                    result
                }, "*");
            })
            .withFailureHandler((error) => {
                console.error("[SAKRA TEST] HATA:", error);

                window.postMessage({
                    type: "SAKRA_RESULT",
                    success: false,
                    error: String(error)
                }, "*");
            })
            .getRobotKayitlari();

    } catch (error) {
        console.error("[SAKRA TEST] RPC çalıştırılamadı:", error);
    }
});