(function() {
    var ctx = document.getElementById('context-switcher'),
        iframe = document.getElementById('iframe'),
        demoUrl = 'demo/www/index.html',
        docsUrl = 'docs/docs.html';

    function directToDemo() {
        iframe.src = demoUrl;
    }

    ctx.addEventListener('click', function() {
        var isDocs = iframe.src.indexOf('docs/docs.html') > -1;

        if (isDocs) {
            ctx.innerHTML = 'Switch to Documentation';
            iframe.src = demoUrl;
            return;
        }

        ctx.innerHTML = 'Switch to Demo App "Thronester"';
        iframe.src = docsUrl;
        return;
    });

    if (navigator.userAgent.toLowerCase().indexOf('webkit') === -1) {
        document.getElementById('warning').className = 'on';
    }

    // Go directly to demo app, do not collect $200, do not pass "GO"
    if (location.href.indexOf('?app') > -1) {
        directToDemo();
    }
})();
