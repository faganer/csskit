$(function() {
    hljs.initHighlightingOnLoad();
    tabs(".sidebar li", ".component-item", '8');
    // dialog
    $(".component-dialog .demo-content-item:first p a").click(function() {
        var type = $(this).text();
        dialog({
            type: type,
            content: '这是一个 <b>' + type + '</b> 弹窗。',
        })
    });

    // modal
    $(".modal-event").click(function() {
        modal(".modal", "show");
        console.log("modal")
    });
    $(".modal .btn-primary").click(function() {
        modal(".modal", "hide");
    });

    // tab
    tabs(".tab-nav", ".tab-content-item", '1');
    var demoContainer = ['component-background', 'component-buttons', 'component-cover', 'component-dialog', 'component-flex .component-demo:first', 'component-flex .component-demo:eq(1)', 'component-flex .component-demo:eq(2)'];
    demoContainer.map(item => {
        tabs("." + item + " .demo-nav-item", "." + item + " .demo-content-item", '1');
    });

})