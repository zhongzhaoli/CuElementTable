try {
} catch (e) {
  // 同步错误
  console.log('资源或同步代码错误');
}
window.onerror = function (msg, url, row, col, error) {
  // JS错误
  // 异步错误也能获取
  console.log('windowonEr错误');
};
window.addEventListener('unhandledrejection', (e) => {
  // Promise错误
});
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    console.log('隐藏');
  }
});
addEventListener(
  'error',
  (e) => {
    console.log(e);
    // 资源加载错误
  },
  true
);
