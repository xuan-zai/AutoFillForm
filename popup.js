fetch('./data.json').then(res => res.json()).then(res => {
    const fater = document.getElementsByClassName('form-list-container')[0];
    for (let key in res) {
        fater.appendChild(createFormItem(res[key]))
    }
});

function createFormItem(props) {
    const formDataItem = document.createElement('div');
    formDataItem.className = 'form-data-item-container';

    const formDataContent = document.createElement('div');
    formDataContent.className = 'form-item-content-container';

    const formItemTitle = document.createElement('div');
    formItemTitle.classList = 'form-item-title-container';
    formItemTitle.innerText = props.title;

    const formItemDescription = document.createElement('div');
    formItemDescription.classList = 'form-item-description-container';
    formItemDescription.innerText = props.description;


    formDataContent.appendChild(formItemTitle);
    formDataContent.appendChild(formItemDescription);

    const formItemBtn = document.createElement('div');
    formItemBtn.classList = 'form-item-use-btn';
    formItemBtn.innerText = '添加';

    formItemBtn.addEventListener('click', async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        chrome.tabs.sendMessage(tab.id, {...props.data})
    });

    formDataItem.appendChild(formDataContent)
    formDataItem.appendChild(formItemBtn);

    return formDataItem;
}