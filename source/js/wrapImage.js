/*
 * @Author: GWJ
 * @Date: 2022-01-03 13:45:09
 * @LastEditTime: 2022-01-06 21:59:18
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \shjdgwj.github.io\themes\hexo-theme-Claudia\source\js\wrapImage.js
 * 
 */
$(document).ready(function() {
    wrapImageWithFancyBox();
});

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
    $('img').not('.js-img-fadeIn').each(function() {
        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');
        if ($imageWrapLink.length < 1) {
            //没找到a标签就新增一个a标签包裹
            var src = this.getAttribute('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }

        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }

    });

    $().fancybox({ //参数见https://github.com/fancyapps/fancybox/blob/master/docs/index.html
        selector: '[data-fancybox="images"]',
        closeExisting: false,
        buttons: [
            "zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
        ],
        keyboard: false,
        helpers: {
            overlay: {
                locked: false
            }
        },
        hash: true,
        // 相册循环浏览
        loop: false,
        // 图片周围的margin，如果视口（viewport）宽度小于800px则忽略
        margin: [44, 0],
        //是否禁用右键
        protect: true,
        //鼠标滚轮
        wheel: true,
        //是否在屏幕边缘显示箭头
        arrows: false,
        //顶部信息栏
        infobar: false,
        // Open/close animation type
        // Possible values:
        //   false            - disable
        //   "zoom"           - zoom images from/to thumbnail
        //   "fade"
        //   "zoom-in-out"
        //
        animationEffect: "zoom",
        // Duration in ms for open/close animation
        animationDuration: 500,
        // Should allow caption to overlap the content
        preventCaptionOverlap: false,
        //底部不显示图片名
        caption: function(instance, item) {
            var caption = ''
        },
        /* 在标题右边增加当前图片的序号和图片总数：
            caption: function(instance, item) {
            var caption = $(this).data('caption') || '';

            return (caption.length ? caption + '<br />' : '') + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
        }*/
    });
}