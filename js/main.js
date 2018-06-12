var keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 3
}

var hash = {
    q: 'qq.com',
    w: 'weibo.com',
    e: 'ele.me',
    r: 'renren.com',
    t: 'taobao.com',
    y: 'yahoo.cn',
    u: 'ubuntu.com',
    i: 'iqiyi.com',
    o: 'oppo.com',
    p: undefined,
    a: 'alibaba.com',
    z: 'zhihu.com'
}
//取出localStorage中的'localStorage'对应的hash
var hasLocalStorage = JSON.parse(localStorage.getItem('localStorage') || null)

if (hasLocalStorage) {
    hash = hasLocalStorage;
}


var index = 0;
while (index < keys.length) {
    var divContainer = document.createElement('div');
    divContainer.className = 'row';
    mainContainer.appendChild(divContainer);

    rows = keys[index];
    console.log(rows)
    index2 = 0;

    while (index2 < rows.length) {
        var kbdContainer = document.createElement('kbd');
        kbdContainer.textContent = rows[index2];
        kbdContainer.className = 'key';
        var btnContainer = document.createElement('button');
        btnContainer.textContent = 'edit';
        btnContainer.id = rows[index2];
        kbdContainer.appendChild(btnContainer);
        btnContainer.onclick = function (btn) {
            // 打印btn中target中的Id，利用哈希（数组）的特性
            console.log('点击了' + btn['target']['id'])
            let key = btn['target']['id'];
            let x = prompt('给我一个网址');
            hash[key] = x;
            localStorage.setItem('localStorage', JSON.stringify(x));
        }
        divContainer.appendChild(kbdContainer);
        index2++;
    }

    index = index + 1;
}

document.onkeypress = function (e) {
    var key = e.key;
    let website = hash[key];
    console.log(website)
    location.href = 'http://' + website;
}