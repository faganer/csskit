$(function () {

  // hightlinght.js
  hljs.initHighlightingOnLoad();

  // layout
  tabs(".sidebar li", ".component-item", '1');

  $(".header-dehaze").click(function () {
    if ($(".sidebar").width() > 0) {
      $(".sidebar").addClass("close").removeClass("open");
    } else {
      $(".sidebar").addClass("open").removeClass("close");
    }
  });

  // 导航个数
  var navLength = $(".sidebar li").length;

  // 导航个数 > 1
  if (navLength > 1) {

    // 追加页面上一页、下一页
    $(".content-main").after('<div class="content-footer flex flex-between"><span class="prev">←<a href="javascript:;""></a></span><span class="next"><a href="javascript:;"></a>→</span></div><!-- .components-footer -->');

    // 初始化上一页、下一页
    if ($(".sidebar li").first().hasClass("current")) {
      $(".content-footer .prev").addClass("opacity");
      $(".content-footer .next").attr("data-index", "1");
      $(".content-footer .next a").text($(".sidebar li:eq(1)").text());
    }

    // 点击导航
    $(".sidebar li").click(function () {
      // index
      var elIndex = $(this).index();
      // 上一个同级
      var elPrev = $(this).prev();
      // 下一个同级
      var elNext = $(this).next();
      // index为0
      if (elIndex == 0) {
        // 隐藏上一页
        $(".content-footer .prev").addClass("opacity");
      } else {
        // 显示上一页
        $(".content-footer .prev").removeClass("opacity");
      }
      // index为最后一个
      if (elIndex == navLength - 1) {
        // 隐藏下一页
        $(".content-footer .next").addClass("opacity");
      } else {
        // 显示下一页
        $(".content-footer .next").removeClass("opacity");
      }
      // 如果存在上一个同级
      if (elPrev) {
        // 上一页赋值
        $(".content-footer .prev a").text(elPrev.text());
        $(".content-footer .prev").attr("data-index", elIndex - 1);
      }
      // 如果存在下一个同级
      if (elNext) {
        // 下一页赋值
        $(".content-footer .next a").text(elNext.text());
        $(".content-footer .next").attr("data-index", elIndex + 1);
      }
    });

    // 点击上一页、下一页
    $(".content-footer a").click(function () {
      // 获取跳转序号
      var navIndex = Number($(this).parent().attr("data-index"));
      // 绑定导航跳转
      $(".sidebar li").eq(navIndex).trigger("click");
    });

  }


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

  // message
  $(".doc-msg-btns .btn").click(function () {
    var type = $(this).text();
    message({
      type: type, // 类型
      content: '这是一个关于 <b>' + type + '</b> 类型的消息。', // 内容
    });
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
  var demoContainer = ['.component-background', '.component-buttons', '.component-cover', '.component-dialog', '.component-flex .component-demo:first', '.component-flex .component-demo:eq(1)', '.component-flex .component-demo:eq(2)', '.component-flex .component-demo:eq(3)', '.component-modal', '.component-grids', '.component-table .component-demo:first', '.component-table .component-demo:eq(1)', '.component-table .component-demo:eq(2)', '.component-tabs', '.component-message'];
  demoContainer.map(item => {
    tabs(item + " .demo-nav-item", item + " .demo-content-item", '1');
  });

})