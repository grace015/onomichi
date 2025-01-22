  // =============================
// ----- header ドロワーメニュー -----
// =============================
// ハンバーガーアイコンとメニューコンテンツをそれぞれjQueryオブジェクトとして取得
// ハンバーガーメニューアイコンの要素
const drawerIcon = jQuery("#js-drawer-icon");
// ドロワーメニューのコンテンツ要素
const drawerContents = jQuery("#js-drawer-content");

// ハンバーガーメニューアイコンがクリックされた時のイベント処理
drawerIcon.on("click", function (e) {
    // デフォルトのクリックイベントを無効にする
    e.preventDefault();
    // ハンバーガーメニューの開閉状態を切り替えるためのクラス「is-checked」をトグル
    drawerIcon.toggleClass("is-checked");
    // メニューコンテンツの表示/非表示をスライドで切り替え。300ミリ秒でアニメーション
    drawerContents.slideToggle(300);
    // ページ全体を固定するためのクラス「is-fixed」をbodyにトグル
    // メニューが開いた時にページがスクロールしないようにする効果
    jQuery("body").toggleClass("is-fixed");
});

// メニュー内のリンクがクリックされた時のイベント処理
drawerContents.find("a").on("click", function (e) {
    // リンクのデフォルト動作を無効にする
    e.preventDefault();
    // ハンバーガーアイコンのクリックイベントを強制的に発火させ、メニューを閉じる
    drawerIcon.trigger("click");
});

  // =============================
  // キャンペーンについてスライダー
  // スライドが最後まで到達した際に、次のスライドを無限に続けるように見せかけるため、スライドを複製してループする
  // =============================
// スライダーのコンテナ（#js-about-swiper-wrap）を取得
const aboutSwiperWrap = document.querySelector("#js-about-swiper-wrap");
// スライダー内の各スライド（swiper-slide クラスを持つ要素）を全て取得
const aboutSwiperSlides = aboutSwiperWrap.querySelectorAll(".swiper-slide");

// スライドが動く際のアニメーションの滑らかさを設定（線形で一定速度になるように）
aboutSwiperWrap.style.transitionTimingFunction = "linear";

// 無限ループを実現するためにスライドを複製して追加する関数
function cloneAndAppend(element, swiperWrap) {
    // element（スライド）を複製
    let clonedElement = element.cloneNode(true);
    // 複製したスライドを swiperWrap（スライダーコンテナ）に追加
    swiperWrap.appendChild(clonedElement);
}
// 各スライドに対して、無限ループを実現するために複製してコンテナに追加
for (let aboutSwiperSlide of aboutSwiperSlides) {
    cloneAndAppend(aboutSwiperSlide, aboutSwiperWrap);
}

  // =============================
// ----- about ループスライド -----
// =============================
// スライダーオプション設定
const aboutSwiper = new Swiper("#js-about-swiper", {
    loop: true, // 無限ループを有効化
    width: 100, // スライドの横幅
    spaceBetween: 10, // スライド間の余白
    speed: 3000, // スライドが次に移動するまでの時間
      simulateTouch: false, // タッチ操作を無効

    // 自動再生オプション
    autoplay: {
      delay: 0, // 自動再生時にスライドが止まる時間を0
      disableOnInteraction: false, // ユーザーの操作後も自動再生を続行
    },

    // バーチャルスライドを有効にするオプション
    virtual: {
      enabled: true, // バーチャルスライドを有効化
      addSlidesAfter: 10, // 一度にレンダリングするスライドの枚数
    },

    // レスポンシブデザインのためのブレークポイント設定
    breakpoints: {
      // 900px以上のオプション
        900: {
        spaceBetween: 20, // スライド同士の間隔（余白）
        width: 200, // スライドの横幅
        },
    },
});

  // =============================
  // ----- prizes モーダル -----
  // =============================
  // モーダルを開く処理
jQuery(".js-modal-open").on("click", function (e) {
    // デフォルトのクリックイベント（リンクの遷移など）を無効化
    e.preventDefault();

    // クリックされた要素のdata属性（data-target）から、対象のモーダルIDを取得
    let target = jQuery(this).data("target");
    // 取得したIDを使って対象のモーダルを開く
    jQuery("#" + target)[0].showModal();
    // モーダルを開いている間はページのスクロールを無効にする
    jQuery("html, body").css("overflow", "hidden");
});

// モーダルを閉じる処理
jQuery(".js-modal-close").on("click", function (e) {
    // デフォルトのクリックイベント（リンクの遷移など）を無効化
    e.preventDefault();

    // クリックされた要素の親要素であるモーダルウィンドウを閉じる
    jQuery(this).parents(".js-prizes-modal")[0].close();
    // モーダルを閉じたらページのスクロールを再度有効にする
    jQuery("html, body").css("overflow", "auto");
    // フォーカスされていた要素を解除（モーダル内のフォーカスをクリア）
    jQuery(document.activeElement).blur();
});

  // =============================
  // ----- spots スライダー -----
  // =============================
  // おすすめスポットスライダー
  // =============================
  // 無限ループのためスライドを複製する処理

// スライダー全体を包む要素（IDが#js-spots-swiper-wrapの要素）を取得
const spotsSwiperWrap = document.querySelector("#js-spots-swiper-wrap");
// スライダー内の全てのスライド要素（クラスが.swiper-slideの要素）を取得
const spotsSwiperSlides = spotsSwiperWrap.querySelectorAll(".swiper-slide");

// 取得したスライド要素ごとにループ処理
for (let spotsSwiperSlide of spotsSwiperSlides) {
    // 各スライド要素を複製して、スライダーラップ要素に追加
    cloneAndAppend(spotsSwiperSlide, spotsSwiperWrap);
}

// スライダーのオプション設定
const spotsSwiper = new Swiper("#js-spots-swiper", {
    loop: true, // ループ
    spaceBetween: 16, // スライド間余白
    slidesPerView: 1.5273, // 表示スライド枚数
    centeredSlides: true, // アクティブなスライドを中央
    keyboard: true, // キーボード操作でスライドを移動可能
    navigation: {
        nextEl: "#js-spots-next",// 次へ移動するボタンの要素を指定
        prevEl: "#js-spots-prev",// 前へ移動するボタンの要素を指定
    },
    breakpoints: {
          // 600px以上のオプション
        600: {
            slidesPerView: 2, // 表示スライド枚数
            centeredSlides: true, // アクティブなスライドを中央
        },
        // 900px以上のオプション
        900: {
            slidesPerView: 2.2, // 表示スライド枚数
            centeredSlides: false, // アクティブなスライドを中央に配置しない
        },
        // 1200px以上のオプション
        1200: {
            slidesPerView: 3.2234, // 表示スライド枚数
            spaceBetween: 32, // スライド間余白
            centeredSlides: false, // アクティブなスライドを中央に配置しない
        },
    },
});

  // =============================
  // ----- qa アコーディオン -----
  // =============================

  // .js-accordion クラスを持つ要素にクリックイベントを設定
  jQuery(".js-accordion").on("click", function (e) {
    // デフォルトの動作（リンク先への移動など）を防止
    e.preventDefault();
    // クリックされた要素に is-open クラスがあるかどうかをチェック
    if (jQuery(this).hasClass("is-open")) {
        // is-open クラスがある場合
        // クラスを削除してアコーディオンを閉じる
        jQuery(this).removeClass("is-open");
        // クリックされた要素の次の要素をスライドアップして非表示にする
        jQuery(this).next().slideUp();
    } else {
       // is-open クラスがない場合
       // クラスを追加してアコーディオンを開く
        jQuery(this).addClass("is-open");
        // クリックされた要素の次の要素をスライドダウンして表示する
        jQuery(this).next().slideDown();
    }
});

  // =============================
  // ----- contact フォームバリデーション -----
  // =============================
  // #js-form IDを持つフォーム要素を取得
  const form = jQuery("#js-form");
  // フォーム内の .js-form-input クラスを持つ入力要素をすべて取得
  const inputElements = form.find(".js-form-input");
  
  // フォームの送信ボタンが押されたときの処理
  form.on("submit", function (e) {
      // フォームのデフォルト送信動作を防止（ページのリロードを防ぐ）
      e.preventDefault();
      // 全ての入力要素から is-error クラスを削除して、エラースタイルをリセット
      inputElements.removeClass("is-error");
      // フォームが有効かどうか（全ての入力が正しいか）をチェック
      const isValid = form[0].checkValidity();
      if (isValid) {
          // 入力が全て正しい場合の処理
          // フォーム送信完了のメッセージを表示
          alert("送信完了");
          // フォームの内容をリセットする（全てのフィールドを空にする）
          form[0].reset();
      }
  });
  
  // 各入力要素が無効（入力が不正）な場合に発生するイベントの処理
  inputElements.on("invalid", function () {
      // 無効な入力要素に is-error クラスを追加して、エラースタイルを適用
      jQuery(this).addClass("is-error");
  });
  
  // 入力中に発生するイベントの処理
  inputElements.on("input", function () {
      if (this.checkValidity()) {
        // 入力が有効な場合（バリデーションをクリアした場合）の処理
        // エラースタイル（is-errorクラス）を削除
          jQuery(this).removeClass("is-error");
      }
  });

  // トップへ戻るボタン
  //=============================
  // 「#js-pagetop-button」の要素を取得して変数に代入
const pagetop = jQuery("#js-pagetop-button");

// ウィンドウのスクロールイベントに対して処理を実行
jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop() > 300) {
      // スクロール位置が300pxより下なら「ページトップへ戻るボタン」を表示
        pagetop.fadeIn();// フェードインして表示
    } else {
      // スクロール位置が300px以内ならボタンを非表示にする
        pagetop.fadeOut();// フェードアウトして非表示
    }
});

// 「ページトップへ戻るボタン」をクリックした際の処理
pagetop.on("click", function () {
    const speed = 500;// スクロール速度を500ミリ秒に設定
    // ページの最上部までスクロール（body, html全体のスクロール）
    jQuery("body, html").animate({ scrollTop: 0 }, speed, "swing");
    // 「swing」効果を使用してスムーズなスクロールを実現
});

  // スムーススクロール
  //=============================
  // href属性が「#」で始まるリンクをクリックした際の処理を定義
jQuery('a[href^="#"]').on("click", function () {
    // 「#js-header」要素を取得して変数に代入
    const header = jQuery("#js-header");
    // ヘッダーの高さを取得して変数に代入
    const headerHeight = header.innerHeight();
    // スクロール速度を500ミリ秒に設定
    const speed = 500;
    // クリックされたリンクの「href」属性値を取得
    const id = jQuery(this).attr("href");
    // 移動先のターゲット要素を取得。「#」の場合はhtml要素をターゲットに
    const target = jQuery("#" == id ? "html" : id);
    // 移動先のターゲットの位置を計算。ヘッダーの高さを引いて調整
    const position = jQuery(target).offset().top - headerHeight;

    if ("fixed" !== header.css("position")) {
        // ヘッダーが固定されていない場合は位置をそのまま設定
        position = jQuery(target).offset().top;
    }
    if (0 > position) {
        // スクロール位置が負の値になった場合は0に修正（画面外に出ないように）
        position = 0;
    }
    jQuery("html, body").animate(
        {
            // 計算された位置までスクロール
            scrollTop: position,
        },
        speed,// スクロール速度
        "swing"// 「swing」効果を使ったスムーズなスクロール
    );
});
