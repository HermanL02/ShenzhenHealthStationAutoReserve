# ShenzhenHealthStationAutoReserve
深圳健康驿站自动脚本 更新于2022-02-25，2022-02-23测试可用
运行前准备：
1. 安装Tampermonkey，将JS文件导入Tampermonkey
2. 将Chrome浏览器的快捷方式加入=no-user-gesture-required，方法自行百度
3. 在Chrome浏览器设置中允许baidu.com和hk.sz.gov.cn/passInfo/detail这两个页面弹窗(pop-up)

使用方法: 
白天日常捡漏: HealthStationJianLou.js，目前实测成功过一次
1. 在Tampermonkey中打开这个script 
2. 需要将Chrome浏览器打开到 hk.sz.gov.cn/passInfo/detail 这个页面
3. 脚本会不断刷新网页，此时你可以干别的，你需要将扬声器声音调到最大，如果发现橙色按钮自动点击并发出汽车鸣笛警报声
4. 然后你需要自行进行后续操作

早上抢票: 
1. 直接在console里面set timeout打开 hk.sz.gov.cn/passInfo/detail这个网站10次就可以
