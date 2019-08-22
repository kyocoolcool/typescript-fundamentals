/**
$.ajax({
    type:"GET",
    url: "test.json",
    data:{userName:$("#userName").val(),content:$("#content").val()},
    dataType:"json"
})
*/
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.date);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');
            if (config.dateType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    date: 'name=張三',
    url: 'http://a.itying.com/api/productlist',
    dateType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', '小王'));
var sha1 = function (key, value) {
    return key + "-------" + value;
};
console.log(md5('pro', '小巴'));
