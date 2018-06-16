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
    r: undefined,
    t: 'taobao.com',
    y: 'youtube.com',
    u: undefined,
    i: 'iqiyi.com',
    o: 'oppo.com',
    p: undefined,
    a: 'alibaba.com',
    s: undefined,
    d: undefined,
    f: undefined,
    g: undefined,
    h: undefined,
    j: undefined,
    k: undefined,
    l: undefined,
    z: 'zhihu.com',
    x: undefined,
    c: undefined,
    v: undefined,
    b: undefined,
    n: undefined,
    m: undefined,
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
        var imgContainer = document.createElement('img');
        if (hash[rows[index2]]) {
            imgContainer.src = "http://" + hash[rows[index2]] + "/favicon.ico";
        } else {
            // console.log(1)
            imgContainer.src = '//icons8.com/favicon.ico';
        }

        var btnContainer = document.createElement('button');
        btnContainer.textContent = 'edit';
        btnContainer.id = rows[index2];
        kbdContainer.appendChild(btnContainer);
        kbdContainer.appendChild(imgContainer);
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