// ==UserScript==
// @name         抖音视频下载器
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  下载抖音无水印视频（仅仅支持pc版网页，移动端请将浏览器ua改成电脑ua）
// @author       那年那兔那些事
// @include      *://*.douyin.com/*
// @include      *://*.douyinvod.com/*
// @icon         https://s3.bmp.ovh/imgs/2021/08/63899211b3595b11.png
// ==/UserScript==

(function() {
	function checkUrl() {
		var Url = window.location.href;
		var res = "others";
		if (Url.search("www.douyin.com") !== -1) {
			if (Url.search("video") !== -1) {
				res = "detail";
			} else if (Url.search("recommend") !== -1) {
				res = "recommend";
			} else if (Url.search("channel") !== -1) {
				res = "channel";
			} else if (location.pathname === "/") {
				res = "home";
			}
		} else if (Url.search("live.douyin.com") !== -1) {
			res = "live";
		} else if (Url.search("douyinvod.com") !== -1) {
			res = "download";
		}
		return res;
	}

	function createBtn(a0, i) {
		var VideoUrl;
		var videoID = a0.parentElement.children[0].href;
		if (videoID !== undefined) {
			videoID = videoID.slice(videoID.search("video/") + "video/".length);
			var res = fetch("https://www.douyin.com/web/api/v2/aweme/iteminfo/?item_ids=" + videoID).then(
					response =>
					response
					.json())
				.then(function(resJson) {
					VideoUrl = resJson.item_list[0].video.play_addr.url_list[0].replace("playwm", "play");
				});
		} else {
			videoID = "";
			VideoUrl = "";
		}
		var a01 = a0.children[1];
		var a02;
		if (a01 === undefined) {
			a02 = document.createElement("span");
			a02.setAttribute("class", "b32855717201aaabd3d83c162315ff0a-scss")
			a02.innerHTML =
				"<svg xmlns='http://www.w3.org/2000/svg' version='1.1' style='width:32px;height:32px; cursor: not-allowed;margin-left:5px;' fill='rgba(47,48,53,.4)'><path d='M12 7h8v8h-8z M8 15L24 15 16 24z M5 24h22v2h-22z M5 20h2v4h-2z M25 20h2v4h-2z' /></svg>";
			a02.style = "text-align: left;";
			a02.onmouseover = function() {
				a02.children[0].setAttribute("fill", "rgba(47,48,53,.9)");
			};
			a02.onmouseleave = function() {
				a02.children[0].setAttribute("fill", "rgba(47,48,53,.4)");
			}
			a0.appendChild(a02);
		} else {
			a02 = a01.cloneNode(true);
			a02.innerHTML =
				"<svg xmlns='http://www.w3.org/2000/svg' version='1.1' style='width:32px;height:32px; cursor: pointer;margin-left:5px;' fill='rgba(47,48,53,.4)'><path d='M12 7h8v8h-8z M8 15L24 15 16 24z M5 24h22v2h-22z M5 20h2v4h-2z M25 20h2v4h-2z' /></svg>";
			a02.style = "text-align: left;";
			a02.onmouseover = function() {
				a02.children[0].setAttribute("fill", "rgba(47,48,53,.9)");
			};
			a02.onmouseleave = function() {
				a02.children[0].setAttribute("fill", "rgba(47,48,53,.4)");
			}
			a02.onclick = function() {
				open(VideoUrl);
			}
			a0.insertBefore(a02, a01);
		}
		a0.name = "newBtn";
	}

	function mainFn() {
		if (checkUrl() === "detail") {
			Page = checkUrl();
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
			Timer = setInterval(function() {
				var BtnList = document.getElementsByClassName("_9c2452d0d6d8dbc6de035f37c1b11314-scss")[0];
				if (BtnList !== undefined) {
					if (BtnList.children[0] !== undefined) {
						clearInterval(Timer);
						console.log("抖音视频下载器启动成功,定时器(id:" + Timer + ")关闭");
						Timer = -1;
						var newBtn = BtnList.children[0].cloneNode(true);
						newBtn.setAttribute("id", "newBtnDownload");
						newBtn.children[0].children[0].setAttribute("d",
							"M12 7h8v8h-8z M8 15L24 15 16 24z M5 24h22v2h-22z M5 20h2v4h-2z M25 20h2v4h-2z"
						);
						newBtn.children[1].setAttribute("class", "_891e9d38c00e1b78e2eae43ab8b92359-scss");
						newBtn.children[1].innerText = "下载";
						newBtn.onclick = function() {
							var videoURL = document.getElementsByTagName("video")[0].src;
							open(videoURL);
						}
						BtnList.appendChild(newBtn);
					}
				}
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
			setTimeout(function() {
				if (Timer !== -1) {
					clearInterval(Timer);
					console.log("2s超时,定时器(id:" + Timer + ")关闭");
				}
			}, 2000);
		} else if (checkUrl() === "recommend") {
			Page = checkUrl();
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
			Timer = setInterval(function() {
				var BtnList = document.getElementsByClassName("_240bd410e1956131036dfa3fa3b986d7-scss")[0];
				if (BtnList !== undefined) {
					if (BtnList.name !== "newBtnDownload") {
						if (BtnList.children[0] !== undefined) {
							document.getElementsByClassName("_240bd410e1956131036dfa3fa3b986d7-scss")[0]
								.name =
								"newBtnDownload";
							var newBtn = BtnList.children[1].cloneNode(true);
							newBtn.children[0].children[0].children[0].setAttribute("d",
								"M14 9h8v8h-8z M10 17L26 17 18 26z M7 26h22v2h-22z M7 22h2v4h-2z M27 22h2v4h-2z"
							);
							newBtn.children[1].innerText = "下载";
							newBtn.onclick = function() {
								var videoURL = document.getElementsByTagName("video")[0].src;
								open(videoURL);
							}
							BtnList.appendChild(newBtn);
						}
					}
				}
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		} else if ((checkUrl() === "channel") || (checkUrl() === "home")) {
			Page = checkUrl();
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
			Timer = setInterval(function() {
				var a = document.getElementsByClassName("d8d25680ae6956e5aa7807679ce66b7e-scss");
				if (a !== undefined) {
					if (a.length !== 0) {
						for (let i = 0; i < a.length; i++) {
							if (a[i].name !== "newBtn") {
								createBtn(a[i], i);
							}
						}
					}
				}
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		} else if (checkUrl() === "download") {
			Page = checkUrl();
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
			var videoURL = checkUrl;
			var videoID = checkUrl.slice(checkUrl.search("tos-cn-ve-15/") + "tos-cn-ve-15/".length);
			videoID = videoID.slice(0, videoID.search("/"));
			var a = document.createElement("a");
			a.href = videoURL;
			a.download = videoID + ".mp4";
			a.click();
		} else if (checkUrl() === "live") {
			Page = checkUrl();
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
		}
	}
	var Timer = -1;
	var Page = "others";
	var checkTimer = setInterval(function() {
		var currentPage = checkUrl()
		if (Page !== currentPage) {
			if (Page !== "others") {
				console.log("页面切换(上一页为" + Page + "页)");
			}
			mainFn();
		}
	}, 200);
	console.log("抖音视频下载器(URL监听检测)启动,定时器(id:" + checkTimer + ")开启");
})();
