window.dialog = function (options) {

  // 传入字符串
  if (typeof (arguments[0]) == 'string' && arguments.length > 1) {
    options = {
      type: arguments[0], // 类型
      title: arguments[1], // 内容
      content: arguments[2], // 内容
      // cancel: arguments[3], // 取消按钮
      okText: arguments[3], // 确定按钮文本
      cancelText: arguments[4], // 取消按钮文本
      dialogClass: arguments[5], // 弹窗类名
      okClass: arguments[6], // 确定按钮类名
      cancelClass: arguments[7], // 取消按钮类名
    }
  }

  // 只传入内容
  else if (typeof (arguments[0]) == 'string' && arguments.length == 1) {
    options = {
      content: arguments[0],
    }
  }

  // 创建一些默认值，拓展任何被提供的选项
  var type = options.type || 'common', // 类型
    title = options.title, // 标题
    content = options.content, // 内容
    // cancel = Boolean(options.cancel), // 取消按钮
    okText = options.okText || '确定', // 确定按钮文本
    cancelText = options.cancelText || '取消', // 取消按钮文本
    dialogClass = options.dialogClass, // 弹窗类名
    okClass = options.okClass || 'btn btn-primary', // 确定按钮类名
    cancelClass = options.okClass || 'btn btn-default'; // 取消按钮类名

  // 传入内容
  if (content) {
    // 构建html
    var html = '';
    var icon = "";
    if (type) {
      if (type == 'confirm') {
        icon = '<span class="dialog-icon"><svg t="1590076294170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10400" width="32" height="32"><path d="M512 854.016q139.989333 0 240.981333-100.992t100.992-240.981333-100.992-240.981333-240.981333-100.992-240.981333 100.992-100.992 240.981333 100.992 240.981333 240.981333 100.992zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333zM470.016 297.984l84.010667 0 0 256-84.010667 0 0-256zM470.016 640l84.010667 0 0 86.016-84.010667 0 0-86.016z" p-id="10401"></path></svg></span>';
      } else if (type == 'info') {
        icon = '<span class="dialog-icon"><svg t="1590077706769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10586" width="32" height="32"><path d="M470.016 384l0-86.016 84.010667 0 0 86.016-84.010667 0zM512 854.016q139.989333 0 240.981333-100.992t100.992-240.981333-100.992-240.981333-240.981333-100.992-240.981333 100.992-100.992 240.981333 100.992 240.981333 240.981333 100.992zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333zM470.016 726.016l0-256 84.010667 0 0 256-84.010667 0z" p-id="10587"></path></svg></span>';
      } else if (type == 'success') {
        icon = '<span class="dialog-icon"><svg t="1590077769518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10724" width="32" height="32"><path d="M384 692.010667l452.010667-454.016 59.989333 59.989333-512 512-237.994667-237.994667 57.984-59.989333z" p-id="10725"></path></svg></span>';
      } else if (type == 'error') {
        icon = '<span class="dialog-icon"><svg t="1590077858496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10862" width="32" height="32"><path d="M809.984 274.005333l-237.994667 237.994667 237.994667 237.994667-59.989333 59.989333-237.994667-237.994667-237.994667 237.994667-59.989333-59.989333 237.994667-237.994667-237.994667-237.994667 59.989333-59.989333 237.994667 237.994667 237.994667-237.994667z" p-id="10863"></path></svg></span>';
      } else if (type == 'warning') {
        icon = '<span class="dialog-icon"><svg t="1590077896711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11000" width="32" height="32"><path d="M553.984 598.016l0-171.989333-84.010667 0 0 171.989333 84.010667 0zM553.984 768l0-86.016-84.010667 0 0 86.016 84.010667 0zM41.984 896l470.016-809.984 470.016 809.984-939.989333 0z" p-id="11001"></path></svg></span>';
      } else {
        icon == '';
      }
    }

    if (dialogClass) {
      html += '<div class="dialog' + ' dialog-' + type + ' ' + dialogClass + '" role="dialog">';
    } else {
      html += '<div class="dialog' + ' dialog-' + type + '" role="dialog">';
    }
    html += '<div class="dialog-wrap" role="document"><div class="dialog-body">' + icon;
    if (title) {
      html += '<span class="dialog-title">' + title + '</span>';
    }
    html += '<div class="dialog-content">' + content + '</div></div><div class="dialog-footer">';
    if (type == 'confirm') {
      // console.log(cancel);
      html += '<button type="button" class="' + cancelClass + '" data-type="cancel">' + cancelText + '</button>';
    }
    html += '<button type="button" class="' + okClass + '" data-type="ok">' + okText + '</button>';
    html += '</div></div></div><!-- .dialog -->';

    // 页面追加html
    $("body").append(html);
    $("body").find(".dialog-wrap").addClass("dialog-show");

    // 底部按钮
    $(".dialog-footer button").click(function () {

      // 移除弹窗
      $(this).parent().parent().parent(".dialog").find(".dialog-wrap").removeClass("dialog-show").addClass("dialog-hide");
      setTimeout(function () {
        $(".dialog").remove();
      }, 300);

      // 回调
      var onType = $(this).attr("data-type");
      if (onType == 'ok' && options.onOk) {
        options.onOk();
      }
      if (onType == 'cancel' && options.onCancel) {
        options.onCancel();
      }
    });

  };
}