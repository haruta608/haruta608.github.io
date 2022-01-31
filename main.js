bubbly({
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    bubbles: 80,
    compose: "source-over",
    shadowColor: "#afeeee",
    radiusFunc: () => Math.random() * 30,
    bubbleFunc: () => `hsla(0, 0%, 80%, ${Math.random() * 0.25})`,
  });

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.section-ttl').each(function(){ //section-ttlというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
