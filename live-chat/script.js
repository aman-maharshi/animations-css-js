const openChatButton = document.querySelector(".open-chat")
const closeChatButton = document.querySelector(".close")
const chat = document.querySelector(".chat")

openChatButton.addEventListener("click", () => {
    if (chat.classList.contains("close-chat-animation")) {
        chat.classList.remove("close-chat-animation")
    }
    chat.classList.add("open-chat-animation")
})

closeChatButton.addEventListener("click", () => {
    chat.classList.add("close-chat-animation")
    chat.classList.remove("open-chat-animation")
})
