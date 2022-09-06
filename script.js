"use strict";
const checkbox = $all("input"),
    check1 = checkbox[0],
    check2 = checkbox[1],
    check3 = checkbox[2],
    check4 = checkbox[3],
    check5 = checkbox[4],
    check6 = checkbox[5],
    check7 = checkbox[6],
    check8 = checkbox[7],
    usti = $(".usti"),
    buyur = $(".buyurtma"),
    btnbutton = $(".buyur"),
    bos = $(".viklyuchit"),
    bosma = $(".otklyuchit")



check1.addEventListener("input", () => {
    if (check1.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check1.value}`
        usti.appendChild(palla)
    }
})
check2.addEventListener("input", () => {
    if (check2.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check2.value}`
        usti.appendChild(palla)
    }
})
check3.addEventListener("input", () => {
    if (check3.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check3.value}`
        usti.appendChild(palla)
    }
})
check4.addEventListener("input", () => {
    if (check4.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check4.value}`
        usti.appendChild(palla)
    }
})
check5.addEventListener("input", () => {
    if (check5.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check5.value}`
        usti.appendChild(palla)
    }
})
check6.addEventListener("input", () => {
    if (check6.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check6.value}`
        usti.appendChild(palla)
    }
})







check7.addEventListener("input", () => {
    if (check7.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check7.value}`
        buyur.appendChild(palla)
    }
})
check8.addEventListener("input", () => {
    if (check8.checked === true) {
        const palla = createm("p", "noni");
        palla.innerHTML = `- ${check8.value}`
        buyur.appendChild(palla)
    }
})






btnbutton.addEventListener("click", () => {
    const oxiri = $all(".noni");
    console.log(oxiri);
    if (oxiri.length == 0 || noni == undefined) {
        bosma.style.display="flex"
    } else {
        bos.style.display="flex"
    }
}) 