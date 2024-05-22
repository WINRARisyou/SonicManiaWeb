if (!self.define) {
	let e, i = {};
	const r = (r, c) => (r = new URL(r + ".js", c).href, i[r] || new Promise((i => {
		if ("document" in self) {
			const e = document.createElement("script");
			e.src = r, e.onload = i, document.head.appendChild(e)
		} else e = r, importScripts(r), i()
	})).then((() => {
		let e = i[r];
		if (!e) throw new Error(`Module ${r} didn’t register its module`);
		return e
	})));
	self.define = (c, f) => {
		const a = e || ("document" in self ? document.currentScript.src : "") || location.href;
		if (i[a]) return;
		let n = {};
		const s = e => r(e, a),
			d = {
				module: {
					uri: a
				},
				exports: n,
				require: s
			};
		i[a] = Promise.all(c.map((e => d[e] || s(e)))).then((e => (f(...e), n)))
	}
}
define(["./workbox-74f734a4"], (function (e) {
	"use strict";
	self.addEventListener("message", (e => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
	})), e.precacheAndRoute([{
		url: "Data.rsdk",
		revision: "a5ed4ef178d076fdb6e8002bc5f34af5"
	}, {
		url: "img/128x128.png",
		revision: "a7a2000faa4f12e16453255ec26925ef"
	}, {
		url: "img/16x16.png",
		revision: "d89a699b9c9604b9534b259a99cf8be7"
	}, {
		url: "img/256x256.png",
		revision: "c289233d990f4fafaca4ccff3d2213d3"
	}, {
		url: "img/32x32.png",
		revision: "07938a9a102e6fc45f2ca22933713377"
	}, {
		url: "img/48x48.png",
		revision: "8b548b0168396e2d3baee0236869976c"
	}, {
		url: "img/512x512.ico",
		revision: "9add6f4b7c290bca877aa93d87e92eb0"
	}, {
		url: "img/512x512.png",
		revision: "2bb31c63aeda7c6d9c3032d1de84efe5"
	}, {
		url: "img/64x64.png",
		revision: "4164e1eaa702f3c3c5b29e5fe0302b3d"
	}, {
		url: "img/96x96.png",
		revision: "decb8be742f383f801e322603e8f4a93"
	}, {
		url: "index.html",
		revision: "10a6f7fcd0b5d252e458b725790ea7a2"
	}, {
		url: "manifest.json",
		revision: "8b633b21eaa5f943ab84d1ec7d8bc9c4"
	}, {
		url: "package-lock.json",
		revision: "f35f8b96db3f58e99676079abd20fc5e"
	}, {
		url: "package.json",
		revision: "765a5f7b28e475c8aafdb991c5fd067d"
	}, {
		url: "RSDKv5.js",
		revision: "8faf3fd156214ef9b61fe9a036c2cec2"
	}, {
		url: "RSDKv5.wasm",
		revision: "7e98420cd9d2ebb77bd7fb9000ab2299"
	}, {
		url: "style.css",
		revision: "9ecd062490c5c14d98a694f58bc2233a"
	}, {
		url: "https://files.catbox.moe/xsfgtj.rsdk",
		revision: "f0a3e6b3d9c7a8251e7fc2d4b6a91875"
	}], {
		ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
	})
}));
//# sourceMappingURL=sw.js.map