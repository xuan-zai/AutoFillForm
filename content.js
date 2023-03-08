function fillIn(domId, value) {
    if (typeof value === 'object') {
        // 单选框
        if(value.type === 'radio'){
            let dom = [...document.getElementById(domId).getElementsByTagName('input')].filter(item => +item.value === value.value);
            dom[0].parentNode.click()
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