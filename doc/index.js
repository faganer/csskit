$(function () {

  // hightlinght.js
  hljs.initHighlightingOnLoad();

  // layout
  tabs(".sidebar li", ".component-item", '10');

  // type
  var type = [{ "class": "component-dialog", "num": "3" }, { "class": "component-modal", "num": "3" }, { "class": "component-tabs", "num": "3" }];
  type.map(item => {
    item.num = item.num - 1;
    $("." + item.class + " tbody tr").each(function () {
      $(this).find("td:eq(" + item.num + ")").addClass("doc-cl-red");
    });
  });

  // dialog
  $(".component-dialog .demo-content-item:first p a").click(function () {
    var type = $(this).text();
    dialog({
      type: type,
      content: '这是一个 <b>' + type + '</b> 弹窗。',
    })
  });

  // modal
  $(".modal-event").click(function () {
    modal(".modal", "show");
    console.log("modal")
  });
  $(".modal .btn-primary").click(function () {
    modal(".modal", "hide");
  });

  // tabs
  tabs(".tab-nav", ".tab-content-item", '1');
  var demoContainer = ['.component-background', '.component-buttons', '.component-cover', '.component-dialog', '.component-flex .component-demo:first', '.component-flex .component-demo:eq(1)', '.component-flex .component-demo:eq(2)', '.component-modal', '.component-grids', '.component-table .component-demo:first', '.component-table .component-demo:eq(1)', '.component-table .component-demo:eq(2)', '.component-tabs'];
  demoContainer.map(item => {
    tabs(item + " .demo-nav-item", item + " .demo-content-item", '1');
  });

})