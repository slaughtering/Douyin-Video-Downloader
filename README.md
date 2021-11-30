# 🎯抖音视频下载器(Douyin Video Downloader)
* 本脚本能在下载抖音APP端禁止下载的视频

* 本脚本能在pc版抖音"首页"、"推荐页"、视频"详情页"、其他"频道页"、"热点页"、"搜索页"添加下载按钮，在移动端分享页添加下载按钮,点击下载无水印视频

* 本脚本能提取抖音直播间真实推流地址，能屏蔽直播间影响观看直播的不必要组件

* 本脚本能展开页面左侧侧栏所有选项,屏蔽一些非必要的弹窗(强制登录页面、登录提示、满意度调查等)

* 本脚本为纯原生JS脚本,未使用特殊接口,因此原理上支持所有拥有脚本管理器的电脑或移动端浏览器,如:PC端Chrome、Edge、华为浏览器(HWbrowser)等,移动端Kiwi、Yandex、Via等

* 本脚本仅供学习交流使用,切勿商用!

# 📖使用流程
一、电脑端(或浏览器UA为电脑UA):

1、打开抖音网页版(https://www.douyin.com)

2、不同页面，下载图标位置不同:

(1)推荐页或关注页:点击右下角三个点,选择下载

(2)首页、频道页、热点页或搜索页:每个视频作者名边上都有下载按钮,点击下载;或者也可以点击视频进入详情页,参考(3)下载

(3)详情页:视频名下方，分享按钮右侧为下载按钮

(4)直播页:位于直播间标题右侧，“手机观看”按钮左侧。

<br>

二、移动端(或浏览器UA为手机等移动端UA)

1、打开移动端分享页URL

2、点击左下角视频作者名右侧或下方的“点击下载”按钮（注意：这里仅仅指视频分享，直播间分享请使用pc版网页）

<br>

三、下载抖音禁止下载的视频

两种方法，分为移动端、电脑端操作:

1、移动端操作:

(1)APP端点击分享，选择“复制链接”

(2)在从APP端获取的链接文字中找到URL（如果自己是在分不清哪个是URL，哪些不是，可以将链接通过微信或QQ发送个某个人，字体颜色不一样的https开头的就是URL）

(3)浏览器中打开URL，按照“二”操作下载视频即可

2、电脑端操作:

(1)APP端点击小红心先收藏

(2)登录抖音网页版，左侧侧栏选择关注

(3)按照“一”操作下载视频即可

# 💊问题解答
Q1:没有出现“下载”图标

A1:按照以下方法解决

(1)请确认本脚本已启用(尽量使用主流脚本管理器,如Tampermonkey、Violentmonkey)

(2)关闭广告拦截插件,脚本可能被广告插件误拦截

(3)多刷新下页面,有时候就很迷,油猴匹配不到脚本,需要二次刷新才能使用

(4)使用Edge浏览器与Tampermonkey

(5)如果都没用,按F12将控制台信息以及页面窗口截图通过Greasyfork/Github反馈给我

<br>

Q2:点击下载按钮无反应

A2:添加的按钮都通过右键或长按获取下载链接,将链接粘贴到第三方下载器下载（若采用第三方下载器下载，文件默认为html格式，需要手动将文件名后缀改为mp4）

(1)非详情页、推荐页和关注页:点击视频进入详情页，根据(2)操作

(2)详情页、推荐页或关注页:右键下载按钮的文字部分,手机用户长按文字部分(注意:是文字不是LOGO)，选择复制链接

(3)移动端分享页:右键按钮文字部分按钮,手机用户长按按钮文字部分，选择复制链接

<br>


Q3:跳转的页面无法自动下载

A3:复制跳转后的网页的URL(xxx.douyinvod.com/xxxxx)，粘贴到第三方下载器下载

# 🔔特别声明
* 本人业余时间开发，并非专业开发者，代码质量可能不佳。如果有大佬想帮忙优化，可以联系我QwQ

* 本脚本随缘更新。若无bug或业余时间不足,可能没时间更新脚本

* 测试用平台:Windows系统Edge浏览器Tampermonkey脚本管理器

* 再次提醒:本脚本仅供学习交流使用!切勿商用!切勿商用!切勿商用!

# 🌎相关地址
* 更新日志: https://github.com/IcedWatermelonJuice/Douyin-Video-Downloader#更新日志
* Greasyfork: https://greasyfork.org/scripts/431344
* Github仓库: https://github.com/IcedWatermelonJuice/Douyin-Video-Downloader

# 🔍参考截图
* 从左往右(从上往下)依次为:推荐页、详情页、频道页、移动端分享页、直播页
![推荐页](https://user-images.githubusercontent.com/87429695/130788855-0a08659d-bce2-412c-ae24-bff209fbb33d.png)
![详情页](https://user-images.githubusercontent.com/87429695/130788874-be412740-a314-4616-8a86-5e9fad8b9889.png)
![频道](https://user-images.githubusercontent.com/87429695/130845639-ad4afe36-f594-4d3b-9994-bd5e2881a7b8.png)
![移动端分享页](https://user-images.githubusercontent.com/87429695/131793226-9f7f02f6-ec68-4475-961e-eba5618987e7.png)
![直播页](https://user-images.githubusercontent.com/87429695/144091848-dedbc52a-dfcc-45c5-8beb-e6fcdac77ae7.PNG)

# 📕更新日志
<版本 1.28> 2021.12.1
* 支持提取抖音直播间真实推流地址
* 算法优化，并修复了部分bug

<版本 1.27> 2021.11.30
* 直播页详情增加一个设置页
* 沉浸式观看模式支持自定义，支持自动启动
* 沉浸式观看模式增加对聊天窗口的隐藏
* 移除原本的相关直播隐藏/显示功能
* 设置页样式优化

<版本 1.26> 2021.11.28
* 增加一个设置页。设置页入口位于右下角(抖音网页版的“意见反馈边上”)，图标为一倾斜扳手。
* 设置页支持自定义是否自动下载
* 设置页支持自定义是否自动下载时重命名的格式（“完整”、“仅视频名”、“数字id”）

<版本 1.25> 2021.11.27
* 下载的视频如果能获取到视频相关信息，则保存为“视频名+@+作者名.mp4”；如果获取不到视频相关信息，则保存为“抖音无水印视频.mp4”
* 视频路径增加对字节CDN的支持（zjcdn.com）
* swiper类型播放器（推荐页、关注页）相关算法改进

<版本 1.24> 2021.11.26
* 修复由于抖音结构大改导致的按钮全部失效的问题
* 直播间增加“沉浸式观看”按钮，可以隐藏所有与直播无关的内容，提高观看体验

<版本 1.23> 2021.11.12
* 修复部分页面下载按钮失效问题
* 修复直播间无法自动隐藏相关直播的问题

<版本 1.22> 2021.11.10
* 解决移动端分享页下载按钮丢失的问题

<版本 1.21> 2021.10.22
* 修复按钮错位bug
* 建议1.20版本升级到1.21版本

<版本 1.20> 2021.10.21
* 紧急修复下载器突然无法使用的问题

<版本 1.19> 2021.10.15
* 增加了当UA为pc时，对iesdouyin.com下detail页的支持
* 增加了跳转功能，当UA从mobile切换至pc时，会提示是否转跳pc页
* 修复了移动设备ua时，用户登录弹窗误屏蔽的问题
* 优化了部分代码

<版本 1.18> 2021.10.15
* 优化代码
* 修复了部分移动分享页无法下载的问题

<版本 1.17> 2021.10.14
* 代码大幅度重构，降低后续维护难度
* 修复了侧栏在部分页面无法全部展开的问题
* 修复了弹窗有时会误屏蔽或漏屏蔽的问题

<版本 1.16> 2021.10.13
* 修复了在手机分享页内"点击下载"按钮失效的问题
* 在直播详情页内增加了一个"相关直播"的隐藏按钮

<版本 1.15> 2021.10.9
* 屏蔽弹窗功能增加了一个对强制登录弹窗的屏蔽

<版本 1.14> 2021.9.23
* 优化代码结构
* 增加了对"热点"页的支持

<版本 1.13> 2021.9.13
* 增加了对"搜索结果"的支持

<版本 1.12> 2021.9.2
* 增加了对"关注"页的支持

<版本 1.11> 2021.9.2
* 增加了对移动端"分享"页的支持

<版本 1.10> 2021.9.1
* 增加了弹窗屏蔽功能

<版本 1.9> 2021.8.28
* 更新了一波版号(手动滑稽.jpg,主要是这个版本忘记更新内容了)

<版本 1.8> 2021.8.28
* 侧栏展开功能中，把重复的项隐藏了

<版本 1.7> 2021.8.28
* 侧栏展开功能增加了对"直播"主页的支持

<版本 1.6> 2021.8.26
* 修复了下载按钮可能会丢失或错位的问题

<版本 1.5> 2021.8.26
* 下载按钮增加增加了右键获取下载地址的功能

<版本 1.4> 2021.8.26
* 修复了下载按钮可能会丢失或错位的问题

<版本 1.3> 2021.8.26
* 修复了脚本对"主页"支持失效的问题

<版本 1.2> 2021.8.26
* 增加了对"频道"页的支持

<版本 1.1> 2021.8.25
* 增加了脚本图标

<版本 1.0> 2021.8.25
* 可在频道页/视频详情页下载抖音无水印视频（仅仅支持pc版网页，移动端请将浏览器ua改成电脑ua）
