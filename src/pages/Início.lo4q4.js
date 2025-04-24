// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Mostra o slideshow com efeito ao carregar a página
    $w("#slideshow1").show("fade", { duration: 1000 });

    // Muda automaticamente de slide a cada 5 segundos
    setInterval(() => {
        $w("#slideshow1").next();
    }, 5000);
});


