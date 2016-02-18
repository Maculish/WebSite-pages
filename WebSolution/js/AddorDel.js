
function addNewTr() {
    $("#targetTr").clone(true).appendTo($("#targetTb"));
    //重置当前序号
    var num = $(".tableContentNum").length - 1;
    $($(".tableContentNum")[num]).text(num + 1);
    $("#targetSpa").clone(true).appendTo($("#targetTb"));
}
function deletNewTr(node) {
    var num = $(".tableContentNum").length;
    if (num <= 1) return;
    $(node).parent().parent().parent().parent().next().remove();
    $(node).parent().parent().parent().parent().remove();
    //重置所有序号
    var num = $(".tableContentNum").length - 1
    for (var i = 0, length = num + 1; i < length; i++) {
        $($(".tableContentNum")[i]).text(i + 1);
    }
}

function startonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("start_Press");
}

function startonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("start_unPress");
}

function enableonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("enable_Press");
}

function enableonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("enable_unPress");
}

function disenableonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("disenable_Press");
}

function disenableonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("disenable_unPress");
}

function addonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("add_Press");
}
function addonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("add_unPress");
}
function delonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("delete_Press");
}
function delonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("delete_unPress");
}

function searchonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("search_Press");
}
function searchonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("search_unPress");
}

function editonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("edite_Press");
}
function editonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("edite_unPress");
}
function detailonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("detail_Press");
}
function detailonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("detail_unPress");
}

function impDbonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("impDb_Press");
}
function impDbonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("impDb_unPress");
}

function expDbonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("expDb_Press");
}
function expDbonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("expDb_unPress");
}

function exponMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("exp_Press");
}
function exponMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("exp_unPress");
}

function releationonMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("releation_Press");
}
function releationonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("releation_unPress");
}

function nextononMouseDown(node) {
    $(node).removeClass()
    $(node).addClass("next_Press");
}
function nextonMouseUp(node) {
    $(node).removeClass()
    $(node).addClass("next_unPress");
}