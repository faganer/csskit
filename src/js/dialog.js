window.dialog = function (options) {

  // 传入字符串
  if (typeof (arguments[0]) == 'string' && arguments.length > 1) {
    options = {
      title: arguments[0], // 标题
      content: arguments[1], // 内容
      // onOk: arguments[1], // 确定按钮
      onCancel: arguments[2], // 取消按钮
      onOkText: arguments[3], // 确定按钮文本
      onCancelText: arguments[4], // 取消按钮文本
      onCancelText: arguments[5], // 取消按钮文本
      dialogClass: arguments[6], // 弹窗类名
      onOkClass: arguments[7], // 确定按钮类名
      onCancelClass: arguments[8], // 取消按钮类名
    }
  }

  // 只传入内容
  else if (typeof (arguments[0]) == 'string' && arguments.length == 1) {
    options = {
      content: arguments[0],
    }
  }

  // 创建一些默认值，拓展任何被提供的选项
  var title = options.title || '提示', // 标题
    content = options.content, // 内容
    // onOk = options.onOk, // 确定按钮
    onCancel = options.onCancel, // 取消按钮
    onOkText = options.onOkText || '确定', // 确定按钮文本
    onCancelText = options.onCancelText || '取消', // 取消按钮文本
    dialogBg = options.dialogBg || '取消', // 弹窗背景
    dialogClass = options.dialogClass, // 弹窗类名
    onOkClass = options.onOkClass || 'btn btn-primary', // 确定按钮类名
    onCancelClass = options.onOkClass || 'btn btn-light'; // 取消按钮类名

  // 传入内容
  if (content) {
    // 构建html
    var html = "";
    if (dialogBg) {
      html += '<div class="mask"></div>';
    }
    if (dialogClass) {
      html += '<div class="dialog' + ' ' + dialogClass + '">';
    } else {
      html += '<div class="dialog">';
    }
    html += '<div class="dialog-head"><h3 class="dialog-title">' + title +
      '</h3><div class="dialog-close"><svg t="1590060679442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10400" width="32" height="32"><path d="M809.984 274.005333l-237.994667 237.994667 237.994667 237.994667-59.989333 59.989333-237.994667-237.994667-237.994667 237.994667-59.989333-59.989333 237.994667-237.994667-237.994667-237.994667 59.989333-59.989333 237.994667 237.994667 237.994667-237.994667z" p-id="10401"></path></svg></div></div><div class="dialog-content"><div class="dialog-html-container">' +
      content + '</div>';
    html += '</div><div class="dialog-footer">';
    if (onCancel) {
      html += '<button type="button" class="' + onCancelClass + '">' + onCancelText + '</button>';
    }
    html += '<button type="button" class="' + onOkClass + '">' + onOkText + '</button>';
    html += '</div></div>';
    // 页面追加html
    $("body").append(html);
  };
}