'use strict';

$(function() {
  $('#tab-btn .btn:first-of-type a').addClass("is-active");
   //最初のbtnのaにis-activeクラスを追加
  $('#tab-contents .tab-contents-item:first-of-type').addClass("is-active"); 
  //最初の.tab-contents-itemにis-activeクラスを追加
  $('#tab-btn a').click(function(){
    // #tab-btn内のaをクリックした時、
      $('#tab-btn a').removeClass("is-active");
      //もともとついているis-activeクラスを取り除き
      $(this).addClass("is-active");
      //表示させたいエリアのタブリンク名をクリックしたら、押したボタンにis-activeクラスを追加 
      $('#tab-contents .tab-contents-item').removeClass("is-active");
      //もともとついているis-activeクラスを取り除き、
      $($(this).attr('data-tab')).addClass("is-active")
      // クリックされたaのdate属性にあたるdivを表示し、
      return false;// これらの動作を繰り返さずに、終了させる。
  });
});

// ハンバーガーメニュー

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
