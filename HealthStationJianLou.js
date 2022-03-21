// ==UserScript==
// @name         HealthStationJianLou
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
    var a = setTimeout(function() { myFunction(); },5000);
    function myFunction(){ // 声明一个函数
        setTimeout(function() { uselessFunction(); },1000);
        var button = document.getElementsByClassName("gray");//黑色按钮
        if(button!=null){
            console.log("正在运行中...");
        }
        console.log("灰色按钮数量"+button.length);
        var clickButton = document.getElementsByClassName("orange");
        var i;
        var b;
        var mp3 = "http://data.huiyi8.com/2014/lxy/05/15/16.mp3";
        
        var cannotClick = true;
        for (i = 0; i < clickButton.length; i++) {
            mp3 = new Audio(mp3);
            mp3.play();
            console.log("已检测到黄色，正在判断是否为按键...");
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
                    clearInterval(b);
                    cannotClick = false;
                    redirectOrder()
                    break;
                }
               
            }else{
                console.log(clickButton[i].tagName);//如果orange类不是button则打印出orange类的按钮类型

            }
        }
        if(clickButton.length==0&&cannotClick){
            console.log("黄色按钮数量"+clickButton.length);
            location.reload();
        }

        if(clickButton.length!=0&&cannotClick){
             b = setInterval(function() { myFunction(); },100);
        }

    }


    function uselessFunction(){

    }




})();


