const onload = () => {
    const navigationItems = document.getElementsByClassName("items")[0]
    const expandButton = document.getElementsByClassName("expand")[0]

    let itemsState = false
    expandButton.addEventListener("click", () => {
        itemsState = !itemsState
        itemsState ? navigationItems.classList.add("active") : navigationItems.classList.remove("active")
    })

}

window.onload = onload