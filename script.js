window.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('bg');

  if (!bg) {
    console.error('背景要素が見つかりません。index.html の穴埋め①を確認してください。');
    return;
  }

  // 背景を表示状態にする（フェードイン用のクラスを付与）
  requestAnimationFrame(() => {
    // ★穴埋め：下の1行を、コメントを外してそのまま追加してください
    bg.classList.add('show');
  });
});