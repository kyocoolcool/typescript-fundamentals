/**
$.ajax({
    type:"GET",
    url: "test.json",
    data:{userName:$("#userName").val(),content:$("#content").val()},
    dataType:"json"
})
*/

/**如何運作ajax範例*/
interface Config {
    type: string;
    url: string;
    date?: string;
    dateType: string;
}


function ajax(config:Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.date);
    xhr.onreadystatechange=function () {
        if (xhr.readyState == 4 && xhr.status==200) {
            console.log('成功')
            if (config.dateType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }else {
                console.log(xhr.responseText);
            }
        }
    }
}

ajax({
    type: 'get',
    date: 'name=張三',
    url:'http://a.itying.com/api/productlist',
    dateType:'json'
})

/**函數類型接口，對方法傳入的參數即返回值進行約束，批量進行約束*/
/**加密的函數類型接口*/
interface encrypt {
    (key: string, value: string): string;
}

var md5:encrypt=function (key:string,value:string):string {
    return key + value;
}

console.log(md5('name', '小王'));

var sha1:encrypt=function (key:string,value:string):string {
    return key +"-------"+value;
}

console.log(md5('pro', '小巴'));