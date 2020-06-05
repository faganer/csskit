window.tabs = function (options) {

  // 传入字符串
  if (typeof (arguments[0]) == 'string' && arguments.length > 1) {
    options = {
      nav: arguments[0], // 导航
      content: arguments[1], // 内容
      current: arguments[2], // 激活
      type: arguments[3], // 切换方式
    }
  }

  // 创建一些默认值，拓展任何被提供的选项
  var nav = options.nav,
    content = options.content,
    current = Number(options.current) || '1',
    type = options.type == "mouseover" ? "mouseover" : "click";
  if (nav && content) {
    $(nav).eq(current - 1).addClass("current");
    $(content).eq(current - 1).addClass("current").css("display", "block").siblings().css("display", "none")
    $(nav).on(type, function () {
      $(this).addClass("current").siblings().removeClass("current");
      $(content).eq($(this).index()).addClass("current").css("display", "block").siblings().removeClass("current").css("display", "none");
    });
  }
}