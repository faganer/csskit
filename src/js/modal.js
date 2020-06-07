$('[data-toggle="modal"]').click(function(e) {
    e.stopPropagation();
    var ModalShowID = new Date().getTime()
    $($(this).attr("data-target")).addClass('show modal-' + ModalShowID);
    $('[data-dismiss="modal"]').click(function(e) {
        e.stopPropagation();
        $(this).parent().parent().parent().parent(".modal").addClass("hide");
        setTimeout(function() {
            $('.modal-' + ModalShowID).removeClass('show hide modal-' + ModalShowID);
        }, 300);
    });
});

window.modal = function(options) {

    // 传入字符串
    if (typeof(arguments[0]) == 'string' && arguments.length > 1) {
        options = {
            element: arguments[0], // class、id
            type: arguments[1], // 状态
        }
    }

    // 创建一些默认值，拓展任何被提供的选项
    var element = options.element, // class、id
        type = options.type; // 状态 show || hide
    if (element) {
        if (type == "show" || type == "hide") {
            var ModalShowID = new Date().getTime();
            if (type === "show") {
                $(element).addClass('show modal-' + ModalShowID);
                console.log(element)
                $('[data-dismiss="modal"]').click(function(e) {
                    e.stopPropagation();
                    $(this).parent().parent().parent().parent(".modal").addClass("hide");
                    setTimeout(function() {
                        $('.modal-' + ModalShowID).removeClass('show hide modal-' + ModalShowID);
                    }, 300);
                });
            } else if (type === "hide") {
                console.log($('.modal-' + ModalShowID));
                $(element).addClass('hide');
                setTimeout(function() {
                    $(element).removeClass('show hide modal-' + ModalShowID);
                }, 300);
            }
        }
    }
}