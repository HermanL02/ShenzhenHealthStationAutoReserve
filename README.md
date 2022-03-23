# ShenzhenHealthStationAutoReserve
Github Star! Please! 
Shenzhen Health Station Script Manual : Updated Feb.25, 2022, Tested Feb.23, 2022

Before running: 
1. Install Tampermonkey, import the javascript file into Tampermonkey
2. Edit Chrome icon on the deskop to =no-user-gesture-required
3. In Chrome settings, allow the websites of baidu.com and hk.sz.gov.cn/passInfo/detail pop-up

User guide: 
1. open hk.sz.gov.cn/passInfo/detail website, then open the script in the tampermonkey extension
2. open hk.sz.gov.cn/passInfo/detail in Chrome browser
3. it will keep refreshing, then you need to turn your speaker to the largest volume, then if it finds an orange button, it will alarm a beep sound
4. then you will need to process the following stuff

深圳健康驿站自动脚本 更新于2022-02-25，2022-02-23测试可用
运行前准备：
1. 安装Tampermonkey，将JS文件导入Tampermonkey
2. 将Chrome浏览器的快捷方式加入=no-user-gesture-required，方法自行百度
3. 在Chrome浏览器设置中允许baidu.com和hk.sz.gov.cn/passInfo/detail这两个页面弹窗(pop-up)

使用方法: 
白天日常捡漏: HealthStationJianLou.js，目前实测成功过一次
1. 打开hk.sz.gov.cn/passInfo/detail这个网址后，在右上角Tampermonkey中启用这个script 
2. 需要将Chrome浏览器打开到 hk.sz.gov.cn/passInfo/detail 这个页面
3. 脚本会不断刷新网页，此时你可以干别的，你需要将扬声器声音调到最大，如果发现橙色按钮自动点击并发出汽车鸣笛警报声
4. 然后你需要自行进行后续操作

早上抢票: 
1. 在Tampermonkey中关闭HealthStationJianLou
2. 在Tampermonkey中导入并打开HealthStationMorning
3. 直接在console里面输入

    setInterval(function(){
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        if((h==09&&m==59&&s>=58)||(h==10&&m==00&&s<=02)){
             window.open("https://hk.sz.gov.cn/passInfo/confirmOrder?checkinDate=2022-02-22&t=1&s=1");                                            window.open("https://hk.sz.gov.cn/passInfo/detail");                 
        }
    },1000);
4. 等待网页打开后继续进行操作
实测过程中并没有成功，通过setTimeout功能访问passInfo/detail页面显示无法连接到网站，建议有相同想法想要尝试的同仁可以进行更多尝试

***法律风险规避***
**注意:此脚本仅能代替人工手动刷新，并不具备任何侵入计算机系统功能。为个人开发的非盈利用途代码。**

**解释**
**此插件为个人开发，本人也非黄牛，黄牛使用的具体插件效率肯定会比本插件更高,仅供互相学习用途。**