/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.png",
    "revision": "99e4536ca1849a213514e6c08a74cc7e"
  },
  {
    "url": "git.png",
    "revision": "7946350a69203c75e2f0248f2eb00ad6"
  },
  {
    "url": "index.html",
    "revision": "232664ef126730c0f8020e7da9207879"
  },
  {
    "url": "manifest.json",
    "revision": "c4f292a4959f19bf7d1394d9c57e9219"
  },
  {
    "url": "poster.png",
    "revision": "3b74ff77ccb52054817664a0a01d100b"
  },
  {
    "url": "pwa_mystery_solver_512.png",
    "revision": "69cb233758fd1c061a14163ae315397e"
  },
  {
    "url": "pwa_mystery_solver.png",
    "revision": "67adf93ccd91f0c70a7f6fdbe669ab84"
  },
  {
    "url": "README.md",
    "revision": "fa04da7a2802ac0d55ff3c64893c75cc"
  },
  {
    "url": "screenshot1.png",
    "revision": "90a984e9da57c64497e52eb43fb98ae3"
  },
  {
    "url": "screenshot2.png",
    "revision": "ba7403978d4f9060de5174a279ed0fc4"
  },
  {
    "url": "workbox-config.js",
    "revision": "30f01d24a8ad52ef05e643c59b9f85ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
