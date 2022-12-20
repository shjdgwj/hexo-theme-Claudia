/*
 * @Author: GWJ
 * @Date: 2022-01-05 10:35:23
 * @LastEditTime: 2022-01-05 12:06:27
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \shjdgwj.github.io\themes\hexo-theme-Claudia\source\js\modifyLive2dCss.js
 * 
 */
$(document).ready(function() {
    modifyCss();
});
/* 原始css
  .live2d-widget-dialog-container {
    width: 300px;
    height: 120px;
    position: absolute;
    bottom: 65%;
    right: 0px;
    transform-origin: right;
    padding: 12px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  .live2d-widget-dialog {
    width: 100%;
    height: 100%;
    color: #917159;
    font-size: 16px;
    padding: 12px;
    border: 2px solid rgb(236, 203, 180);
    background: rgb(252, 248, 244);
    box-sizing: border-box;
    border-radius: 10px;
    transform: rotate(-2deg);
    opacity: 0;
    transition: 200ms opacity;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    animation: live2d-widget-dialog-tingle 4s ease-in-out 0s infinite alternate;
  }
  @keyframes live2d-widget-dialog-tingle {
    0% { transform: translate(-1px, 1.5px) rotate(-2deg); }
    100% { transform: translate(1px, -1.5px) rotate(2deg); }
  }

*/
function modifyCss() {
    /* $(".live2d-widget-dialog-container").css({
        "width": "320px",
        "height": "120px",
        "right": "-20px"
    });
    $(".live2d-widget-dialog").css({
        "font-size": "20px"
    }); */
    //var cssText = ".live2d-widget-dialog-container{width:320px!important;height:120px!important;right:-20px!important}.live2d-widget-dialog{font-size:20px!important}";
    var cssText = `
    .live2d-widget-container{
        left:2%!important;
        bottom: -15%!important;
    }
    .live2d-widget-dialog-container {
        width: 320px!important;
        height: 130px!important;
        right: -20px!important;
        top: 7%!important;
    }
    .live2d-widget-dialog {
        font-size: 20px!important;
    }		
    `;
    insertStyle(cssText);
    if (!IsPC()) {
        insertStyle(".live2d-widget-dialog-container {visibility: hidden;}");
    }

}

function insertStyle(cssText) {
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    var rules = document.createTextNode(cssText);
    style.type = "text/css";
    if (style.styleSheet) {
        style.styleSheet.cssText = rules.nodeValue;
    } else {
        style.appendChild(rules);
    }
    head.appendChild(style);
}
//判断是否是pc端 true为pc端 false为移动端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}