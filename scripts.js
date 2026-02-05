const howManyNum = document.querySelector("#how-many")
const fromNum = document.querySelector("#from")
const toNum = document.querySelector("#to")

howManyNum.oninput = () => {
    let value = howManyNum.value.replace(/\D/g, "")
    howManyNum.value = value
}

from.oninput = () => {
    let value = from.value.replace(/\D/g, "")

    from.value = value
}

to.oninput = () => {
    let value = to.value.replace(/\D/g, "")

    to.value = value
}