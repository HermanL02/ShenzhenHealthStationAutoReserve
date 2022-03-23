// ==UserScript==
// @name         HealthStationMorning
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @include      *://hk.sz.gov.cn/passInfo/detail*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    // Your code here..
   var a = setInterval(function() { myFunction(); },100);
    function myFunction(){ // 声明一个函数
        var button = document.getElementsByClassName("gray");//黑色按钮
        if(button!=null){
            console.log("正在运行中...");
        }
        console.log("灰色按钮数量"+button.length);
        var clickButton = document.getElementsByClassName("orange");
        var i;

                for (i = 0; i < clickButton.length; i++) {
            console.log("正在执行橙色按钮点击步骤...");
            if(clickButton[i].tagName=="BUTTON"||clickButton[i].tagName=="button"){
                var clickButtonDataSign = clickButton[i].getAttribute("data-sign");//attributes["data-sign"].nodeValue;
                var clickButtonDataSignLength = 0;
                if(clickButtonDataSign!=null){
                    clickButtonDataSignLength = clickButtonDataSign.length;
                }
                if(clickButtonDataSignLength==32){
                    console.log(clickButtonDataSign);
                    clickButton[i].click();
                    console.log("橙色按钮已点击...");
                    clearInterval(a);
                    break;
                }
            }else{
                console.log(clickButton[i].tagName);//如果orange类不是button则打印出orange类的按钮类型

            }
        }
        if(clickButton.length==0){
            console.log("木有黄的...");
        }
    }


    function uselessFunction(){

    }




})();


