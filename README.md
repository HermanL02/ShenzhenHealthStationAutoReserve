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
1. 直接在console里面set timeout打开 hk.sz.gov.cn/passInfo/detail这个网站10次就可以


