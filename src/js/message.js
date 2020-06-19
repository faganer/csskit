window.message = function (options) {

  // 传入字符串
  if (typeof (arguments[0]) == 'string' && arguments.length > 1) {
    options = {
      type: arguments[0], // 类型
      content: arguments[1], // 内容
      duration: arguments[2], // 延时移除
      className: arguments[3], // 自定义class
    }
  }

  // 创建一些默认值，拓展任何被提供的选项
  var type = options.type || 'common', // 类型
    content = options.content, // 内容
    duration = options.duration, // 延时移除
    className = options.className; // 自定义class


  // 默认3秒延迟
  // if (duration === undefined || duration === NaN) {
  //   duration = 3
  // };

  // 传入内容
  if (content) {

    // 新增独立class
    var messageShowID = new Date().getTime();

    // 构建html
    if (className) {
      var html = '<div class="message message-' + type + ' message-' + messageShowID + ' ' + className + '"><div class="message-body">';
    } else {
      var html = '<div class="message message-' + type + ' message-' + messageShowID + '"><div class="message-body">';
    }
    var icon = "";
    if (type == 'common') {
      icon = '<span class="message-icon"><svg t="1590077706769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10586" width="32" height="32"><path d="M470.016 384l0-86.016 84.010667 0 0 86.016-84.010667 0zM512 854.016q139.989333 0 240.981333-100.992t100.992-240.981333-100.992-240.981333-240.981333-100.992-240.981333 100.992-100.992 240.981333 100.992 240.981333 240.981333 100.992zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333zM470.016 726.016l0-256 84.010667 0 0 256-84.010667 0z" p-id="10587"></path></svg></span>';
    } else if (type == 'success') {
      icon = '<span class="message-icon"><svg t="1590077769518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10724" width="32" height="32"><path d="M384 692.010667l452.010667-454.016 59.989333 59.989333-512 512-237.994667-237.994667 57.984-59.989333z" p-id="10725"></path></svg></span>';
    } else if (type == 'error') {
      icon = '<span class="message-icon"><svg t="1590077858496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10862" width="32" height="32"><path d="M809.984 274.005333l-237.994667 237.994667 237.994667 237.994667-59.989333 59.989333-237.994667-237.994667-237.994667 237.994667-59.989333-59.989333 237.994667-237.994667-237.994667-237.994667 59.989333-59.989333 237.994667 237.994667 237.994667-237.994667z" p-id="10863"></path></svg></span>';
    } else if (type == 'warning') {
      icon = '<span class="message-icon"><svg t="1590077896711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11000" width="32" height="32"><path d="M553.984 598.016l0-171.989333-84.010667 0 0 171.989333 84.010667 0zM553.984 768l0-86.016-84.010667 0 0 86.016 84.010667 0zM41.984 896l470.016-809.984 470.016 809.984-939.989333 0z" p-id="11001"></path></svg></span>';
    } else if (type == 'loading') {
      icon = '<span class="message-icon"><svg t="1592564793373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10400" width="32" height="32"><path d="M800 329.984q54.016 82.005333 54.016 182.016 0 139.989333-100.992 240.981333t-240.981333 100.992l0 128-169.984-171.989333 169.984-169.984 0 128q105.984 0 180.992-75.008t75.008-180.992q0-59.989333-29.994667-120.021333zM512 256q-105.984 0-180.992 75.008t-75.008 180.992q0 66.005333 29.994667 120.021333l-61.994667 61.994667q-54.016-82.005333-54.016-182.016 0-139.989333 100.992-240.981333t240.981333-100.992l0-128 169.984 171.989333-169.984 169.984 0-128z" p-id="10401" fill="#1296db"></path></svg></span>';
    } else {
      icon = "";
    }

    html += icon + '<div class="message-content">' + content + '</div></div></div><!-- .message -->';

    // 页面追加html
    $("body").append(html);

    // 显示 message
    var msg = $(".message-" + messageShowID);
    msg.fadeIn();


    // 延时移除
    // 未定义或为字符串3秒移除
    if (duration == undefined || typeof (duration) == "string") {
      setTimeout(function () {
        msg.fadeOut(function () {
          if (options.onClose) {
            $(this).remove();
            options.onClose();
          } else {
            $(this).remove();
          }
        })
      }, 3 * 1000);
    }
    // 位数并且不等于0
    else if (typeof (duration) == "number" && duration != 0) {
      setTimeout(function () {
        msg.fadeOut(function () {
          if (options.onClose) {
            $(this).remove();
            options.onClose();
          } else {
            $(this).remove();
          }
        })
      }, duration * 1000);
    }

  };
}