"use strict";
document.addEventListener("DOMContentLoaded", function(){

// DRY - заменил всех слушателей делегированием событий,
// объединил функции,
// тем самым избавился от повтора кода.

// YAGNI - "выкинул" лишние слушатели событий

    document.querySelector("body").addEventListener("click",function(event){
        const next = event.target.closest(".next");
        const previous = event.target.closest(".down");
        if (next) {
            slider(next, "next");
        }
        if (previous) {
            slider(previous, "prev");
        }
    });

// KISS - заменил переменные в селекторах на конкретные CSS классы,
// имена css классов и переменные стали более осознанными.

// заложен принцип SOLID:
// можно блок с картинками вставлять в .content многократно,
// можно добавлять любое количество div с картинками
// скрипт на новых блоках отработает корректно.

// Проверил код через JSLint и посталался исправить замечания.

    function slider(direction,key){
        const container = direction.closest(".container");
        const lastimg = container.querySelectorAll(".imgSlider__item");
        let searchBlock = container.querySelector(".imgSlider__item.display-block");
        searchBlock.classList.remove("display-block");
        let img; let neighboringImg;
        if (key === "next"){
            img = searchBlock.nextElementSibling;
            neighboringImg = lastimg[0];
        }else{
            img = searchBlock.previousElementSibling;
            neighboringImg = lastimg[lastimg.length -1];
        }
        if (img && img.classList.contains ("imgSlider__item")){
            img.classList.add("display-block");
        }else{
            neighboringImg.classList.add("display-block");
        }
    }
});