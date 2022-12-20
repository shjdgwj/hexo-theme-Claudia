/*
    A img fancybox wrapper for img zoom in&out
    author: jackfromeast
 */


document.addEventListener("DOMContentLoaded", function (event) {
    var images = document.getElementsByTagName('img');
    Array.prototype.filter.call(images, function (img) {
        wrap_image_with_fancybox(img);
    });

    // prevent returning to the top of the page after loading the fancybox
    $.fancybox.defaults.hideScrollbar = false;
    $.fancybox.defaults.margin = [44, 0];// 图片周围的margin，如果视口（viewport）宽度小于800px则忽略
    $.fancybox.defaults.buttons = [
        "zoom",
        //"share",
        //"slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close"
    ];
    $.fancybox.defaults.keyboard = false;
    $.fancybox.defaults.loop = false;// 相册循环浏览
    $.fancybox.defaults.protect = true;//是否禁用右键
    $.fancybox.defaults.wheel = false; //鼠标滚轮
    $.fancybox.defaults.arrows = true;//是否在屏幕边缘显示箭头
    $.fancybox.defaults.infobar = false;//顶部信息栏
    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    $.fancybox.defaults.animationEffect = "zoom";
    $.fancybox.defaults.animationDuration = 500; // Duration in ms for open/close animation
    $.fancybox.defaults.preventCaptionOverlap = false;// Should allow caption to overlap the content
    $.fancybox.defaults.caption = function (instance, item) {
        var caption = ''
    };//底部不显示图片名
    /* 在标题右边增加当前图片的序号和图片总数：
    caption: function(instance, item) {
    var caption = $(this).data('caption') || '';

    return (caption.length ? caption + '<br />' : '') + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
}*/
});


function wrap_image_with_fancybox(img) {
    var parent_node = img.parentNode;
    var wrap_link = document.createElement('a');
    parent_node.replaceChild(wrap_link, img);

    // add property to wrap_link
    wrap_link.appendChild(img);
    wrap_link.href = img.src;
    wrap_link.setAttribute("data-fancybox", "lightbox");

    if (img.title) {
        wrap_link.setAttribute("data-caption", img.title);
    }
}