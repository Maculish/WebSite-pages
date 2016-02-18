$(document).ready(function () {
    $("#logionButton").mousedown(function () {
        $("#bgLoginButton").attr("src", "img/Login_press.png");
    });
    $("#logionButton").mouseup(function () {
        $("#bgLoginButton").attr("src", "img/Login_unpress.png");
    });

    var tarWidth = window.screen.width;
    $("#bgImg").width(tarWidth);
    /* 3840/1959 背景图片原图尺寸比率 */
    var bgRaito = 3840 / 1959;
    var tarHeight = Math.round(tarWidth / bgRaito);
    $("#bgImg").height(tarHeight);
    /* 1003/592 logo原图尺寸比率 */
    var logoRaito = 1003 / 592;
    $("#logoDiv").css("margin-top", -tarHeight * 4 / 5);
    var logoWidth = Math.round(tarWidth / 3);
    var logoHeight = Math.round(logoWidth / logoRaito);
    $("#logoDiv").css("margin-left", "auto");
    $("#logoDiv").css("margin-right", "auto");
    var logoDivWidth = Math.round(logoWidth * 2 / 3), logoDivHeight = Math.round(logoHeight * 2 / 3);
    $("#logoDiv").css("width", logoDivWidth);
    $("#logoDiv").css("height", logoDivHeight);
    $("#logoImg").css("width", logoDivWidth);
    $("#logoImg").css("height", logoDivHeight);
    $("#logoDiv").css("z-index", 2);

    $("#footDiv").width(tarWidth);
    $("#footDiv").height(Math.round(tarHeight * 34 / 677));

    $("#linkDiv").css("margin-top", -Math.round(tarHeight * 2 / 5));
    $("#linkDiv").css("margin-left", Math.round(tarWidth / 3 * 2));
    $("#linkDiv").css("z-index", "2");

    /* 设置登陆框背景图片的宽高比，852*238  */
    //依旧使用bgRaito的比率换算
    var showWidth = Math.round(852 / 3840 * tarWidth);
    var showHeight = Math.round(238 / 1959 * tarHeight);
    $("#UserNameDiv").width(showWidth);
    $("#UserNameDiv").height(showHeight);
    $("#bgUserName").width(showWidth);
    $("#bgUserName").height(showHeight);
    $("#bgUserName").css("z-index", "2");


    $("#UserPwdDiv").width(showWidth);
    $("#UserPwdDiv").height(showHeight);
    $("#UserPwdDiv").css("margin-top", -(showHeight + 1));
    $("#bgUserPwd").width(showWidth);
    $("#bgUserPwd").height(showHeight);
    $("#bgUserPwd").css("z-index", "2");


    //向左偏移   110*110
    var btnWidth = Math.round(110 / 3840 * tarWidth);
    var btnHeight = btnWidth;
    $("#loginButtonDiv").width(btnWidth);
    $("#loginButtonDiv").height(btnWidth);
    $("#loginButtonDiv").css("margin-left", showWidth - btnWidth);
    $("#loginButtonDiv").css("margin-top", -(showHeight + btnHeight) / 2);

    $("#bgLoginButton").width(btnWidth);
    $("#bgLoginButton").height(btnHeight);
    $("#bgLoginButton").css("z-index", "2");
    $("#bgLoginButton").css("position", "absolute");

    $("#logionButton").width(btnWidth);
    $("#logionButton").height(btnHeight);
    $("#logionButton").css("z-index", "3");
    $("#logionButton").css("position", "absolute");
    $("#logionButton").css("cursor", "pointer");

    var UPwd = showWidth - Math.round(btnWidth * 3 / 2), UPhg = Math.round(showHeight / 2);
    //设置userName
    $("#UserName").width(UPwd);
    $("#UserName").height(UPhg);
    $("#UserName").css("z-index", "3");
    $("#UserName").css("position", "absolute");
    //$("#UserName").css("line-height", UPhg);

    //设置userPwd
    $("#UserPwd").width(UPwd);
    $("#UserPwd").height(UPhg);
    $("#UserPwd").css("z-index", "3");
    $("#UserPwd").css("margin-top", UPhg);
    $("#UserPwd").css("position", "absolute");
    //$("#UserPwd").css("line-height", UPhg);

    //如果是IE firefox margin-left showWidth 如果是chrome opera  margin-top -showHeight
    if (/webkit/.test(navigator.userAgent.toLowerCase())) {
        $("#UserName").css("margin-top", -showHeight);
        $("#UserPwd").css("margin-top", -showHeight / 2);
    } else {
        $("#UserName").css("margin-left", -showWidth);
        $("#UserPwd").css("margin-left", -showWidth);
    }
});