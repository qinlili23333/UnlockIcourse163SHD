// ==UserScript==
// @name         找回超高清
// @namespace     https://www.zhihu.com/people/qinlili233
// @version      0.1
// @description  不用全屏也有超高清
// @author       琴梨梨
// @match        https://www.icourse163.org/*
// @grant        none
// @match        */*
//@run-at document-end
// ==/UserScript==

(function() {
    //据说写出非全屏隐藏超高清的程序员是个买不起高分屏的穷逼

    console.log("Initialized SHD Unlocker");
    function openHD(){
        try{
            console.log("Try Unlock SHD");
            document.getElementsByClassName("item f-dn")[0].innerHTML="超清";
            document.getElementsByClassName("item f-dn")[0].setAttribute("class","item");
            console.log("Success Unlock SHD");
        }
        catch(e){
        console.log("Not Loaded,Wait One Second");
            setTimeout(openHD,1000);
        }
    };
    openHD();
})();
