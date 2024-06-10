//copy event
copyBtn.addEventListner("click", () => {
    navigator.clipboard.writeText(quoteText.innerText.value);
});
