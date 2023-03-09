function fillIn(domId, value) {
    if (typeof value === 'object') {
        // 单选框
        if (value.type === 'radio') {
            let dom = [...document.getElementById(domId).getElementsByTagName('input')].filter(item => +item.value === value.value);
            dom[0].parentNode.click()
        } else if (value.type === 'time') {
            // 时间选择框
            document.getElementById(domId).click();
            changeDomValue(document.getElementById(domId), value.value);
            let pickers = document.getElementsByClassName('ant-picker-content');
            [...pickers].forEach(ele => {
                let td_dom = [...ele.getElementsByTagName('tbody')[0].getElementsByTagName('td')].filter(item => item.title === value.value)
                if (td_dom.length) {
                    td_dom[0].click();
                }
            })
        }
    } else {
        // 文本框
        changeDomValue(document.getElementById(domId), value)
    }
}

function changeDomValue(dom, newText) {
    let lastValue = dom.value;
    dom.value = newText;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = dom._valueTracker;
    console.log(dom._valueTracker);
    tracker && tracker.setValue(lastValue)
    dom.dispatchEvent(event);
};


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let form = document.body.querySelector('form');
    if (!form) {
        alert('该页面没有 form 表单，请去有表单的页面重试');
        return;
    }
    for (let key in request) {
        fillIn(key, request[key])
    }
});