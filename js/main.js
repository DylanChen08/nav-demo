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
    u: 'www.ubuntu.com',
    i: 'iqiyi.com',
    o: 'oppo.com',
    p: undefined,
    a: 'alibaba.com',
    s: 'www.sogou.com',
    d: 'www.didiglobal.com',
    f: undefined,
    g: 'google.com',
    h: undefined,
    j: 'www.jd.com',
    k: 'www.kugou.com',
    l: undefined,
    z: 'zhihu.com',
    x: '',
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
    // console.log(rows)
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
        imgContainer.onerror = function (e) {
            e.target.src = '//icons8.com/favicon.ico'
        }

        var btnContainer = document.createElement('button');
        btnContainer.textContent = 'edit';
        btnContainer.id = rows[index2];
        kbdContainer.appendChild(imgContainer);
        kbdContainer.appendChild(btnContainer);

        btnContainer.onclick = function (btn) {
            /*
            * btn中target中的Id，利用哈希（数组）的特性
            * 获取到所点击按钮的target对象
            *
            * */
            let btnSetter = btn['target'];
            // console.log('点击了' + btn['target']['id'])
            //获取到所点击按钮的兄弟元素=>img
            let imgSetter = btnSetter.previousSibling;
            console.log(btnSetter.previousSibling)
            let key = btnSetter['id'];
            let x = prompt('给我一个网址');
            hash[key] = x;
            //给修改的网址加上新的icon
            imgSetter.src = "http://" + x + "/favicon.ico";
            //当设置的网址不存在或者出错的时候，自动设置一个默认的
            imgSetter.onerror = function (e) {
                e.target.src = '//icons8.com/favicon.ico'
            }
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