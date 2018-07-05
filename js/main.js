//初始化数据
var getHash = init();
var keys = getHash.keys;
var hash = getHash.hash;


//监听键盘
listenToUser(hash);

//生成键盘

for (var index = 0; index < keys.length; index++) {
    var divContainer = tag('div', {className: 'row'});
    divContainer.className = 'row';
    mainContainer.appendChild(divContainer);

    rows = keys[index];
    // console.log(rows)

    for (var index2 = 0; index2 < rows.length; index2++) {

        var kbdContainer = tag('kbd');
        //键盘上的字母
        kbdContainer.textContent = rows[index2];
        kbdContainer.className = 'key';


        var imgContainer = createImages(hash[rows[index2]]);
        var btnContainer = createButton(rows[index2]);


        kbdContainer.appendChild(btnContainer);
        divContainer.appendChild(kbdContainer);
    }
}


//生成键盘所需的数据
function init() {
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
        u: 'www.uc.cn',
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
        b: 'bilibili.com',
        n: undefined,
        m: 'map.baidu.com',
    }

    //取出localStorage中的'localStorage'对应的hash
    var hasLocalStorage = getFromLocalStorage(localStorage);


    function getFromLocalStorage(name) {
        return JSON.parse(localStorage.getItem(name) || null)
    }

    if (hasLocalStorage) {
        hash = hasLocalStorage;
    }

    return {
        "keys": keys,
        "hash": hash
    }

}

//传来两个参数，一个是创建的标签名，一个是给标签加的类（哈希）;
function tag(tagName, attributes) {
    let elements = document.createElement(tagName);
    for (var key in attributes) {
        elements[key] = attributes[key]
    }
    return elements;

}


function createButton(id) {
    var btnContainer = tag('button');
    btnContainer.textContent = 'edit';
    btnContainer.id = id;

    // 插入icon
    console.log(kbdContainer)
    kbdContainer.appendChild(imgContainer);


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
    return btnContainer;
}

function createImages(domain) {
    var imgContainer = tag('img');
    if (domain) {
        imgContainer.src = "http://" + domain + "/favicon.ico";
    } else {
        // console.log(1)
        imgContainer.src = '//icons8.com/favicon.ico';
    }
    imgContainer.onerror = function (e) {
        e.target.src = '//icons8.com/favicon.ico'
    }
    return imgContainer;
}

function listenToUser(hash) {
    document.onkeypress = function (e) {
        var key = e.key;
        let website = hash[key];
        console.log(website)
        // location.href = 'http://' + website;
        window.open(
            'http://' + website,
            '_blank'
        );
    }
}