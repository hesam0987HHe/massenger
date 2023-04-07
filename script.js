const messageInput = document.querySelector('input[type="text"]');
const messageList = document.querySelector('.message-body ul');

function addMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = message;
        messageList.appendChild(listItem);
        messageInput.value = '';
    }
}

messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addMessage();
    }
});

document.querySelector('button').addEventListener('click', addMessage);