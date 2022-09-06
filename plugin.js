"use strict";

// SELECTOR PLUGIN  //

const $ = function(selector){
     return document.querySelector(selector)
}
const $all = function(selector){
    return document.querySelectorAll(selector)
}

// CREATE PLUGIN //
const createm = function (tagName, className, textName){
    const name = document.createElement(tagName);
    if(className){
        name.setAttribute("class",className);
    }
    if(textName){
        name.innerHTML=textName;
    }
    return name
}







const select = $("select"),
    noni = $(".nonim"),
    kattaligi = $(".div1"),
    kattaligi2 = $(".div2"),
    kattaligi3 = $(".div3"),
    kk = $(".kattaligi");
    

    
    select.addEventListener("input",()=>{
        noni.innerHTML=select.value;
    })




kattaligi.addEventListener("click",()=>{
    kk.innerHTML="25cm";
})
kattaligi2.addEventListener("click",()=>{
    kk.innerHTML="30cm";
})
kattaligi3.addEventListener("click",()=>{
    kk.innerHTML="35cm";
})