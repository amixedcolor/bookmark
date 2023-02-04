// jquery基本構文
// $(“セレクタ”).メソッド(“パラメータ[引数]”);

// const form = document.getElementById("upload");
// const submitButton = document.getElementById("submit-button");
// const mask = document.getElementById('mask');
// const modal = document.getElementById('modal');
// const progress = document.getElementById('progress');

// $('#finput').on('change', function () {
//     var file = $(this).prop('files')[0];
//     $('#foutput').text(file.name + " を選択中");
// });

// function post() {
//     const formData = new FormData(document.getElementById("upload"));
//     const action = upload.getAttribute("action");
//     const options = {
//         method: 'POST',
//         body: formData,
//     }

//     dispLoading("処理中...");

//     fetch(action, options).then((e) => {
//         if(e.status === 200) {
//         alert("保存しました。")
//         return
//         }
//         alert("保存できませんでした。")
//     })

// }

// var interval_id;
// submitButton.addEventListener('click', () => {
//     mask.classList.remove('hidden');
//     modal.classList.remove('hidden');
//     progress.classList.remove('hidden');
//     interval_id = setInterval(() => {
//         progress.value += 0.1;
//     }, 60000/80/10);
// });

// $('#upload').bind('ajax:complete', function(){
//   mask.classList.add('hidden');
//   modal.classList.add('hidden');
// });

$('#finput').on('change', function () {
    var file = $(this).prop('files')[0];
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.width = 200
    $("body").append(image);
    $("body").append("\n");
});

$(function () {
  // const formData = new FormData(document.getElementById("upload"));
  // const action = upload.getAttribute("action");
  // console.log(action);
  $("#submit-button1").on("click", function() {
    removeEmote()
    $("body").append("<div id='emote'> 🤣が押されました！\n </div>");
  });
  $("#submit-button2").on("click", function() {
    removeEmote()
    $("body").append("<div id='emote'> 😍が押されました！\n </div>");
  });
  $("#submit-button3").on("click", function() {
    removeEmote()
    $("body").append("<div id='emote'> 😭が押されました！\n </div>");
  });
  $("#submit-button4").on("click", function() {
    removeEmote()
    $("body").append("<div id='emote'> 😡が押されました！\n </div>");
  });
  $("#submit-button5").on("click", function() {
    removeEmote()
    $("body").append("<div id='emote'> 😱が押されました！\n </div>");
  });

//   $("#submit-button").on("click", function() {

//     $("body").append("<div id='loading'>" + dispMsg + "</div>");
    // let $upfile = $('input[name="video"]');
    // // console.log(JSON.stringify($('input[name="video"]')));
    // // console.log(JSON.stringify($upfile.files));
    // let formData = new FormData();
    // console.log($upfile.prop('files')[0]);
    // var file = $('input')[0].files[0];
    // if (file == undefined)
    // {
    //     mask.classList.add('hidden');
    //     modal.classList.add('hidden');
    //     progress.classList.add('hidden');
    //     $('#foutput').text("動画を選択してください");
    //     progress.value += 0;
    //     clearInterval(interval_id);
    //     return;
    // }
    // var name = file.name.replaceAll('_', 'ul');
    // var blob = file.slice(0, file.size, 'image/png'); 
    // file = new File([blob], name, {type: 'video'});
    // // var name = "thisisnotthefiletouse.mp4"
    // // var blob = file.slice(0, file.size, 'image/png'); 
    // // file = new File([blob], name, {type: 'video'});
    // formData.append("video", file);
    // console.log(formData);
    // for (var [key, value] of formData.entries()) { 
    //   console.log(key, value);
    // }
 
    // // 処理前に Loading 画像を表示
    // // dispLoading("処理中...");
 
    // // 非同期処理
    // $.ajax({
    //   url : "https://8306-240b-10-84e1-f800-3d1b-3ae6-95de-f512.jp.ngrok.io/api/upload/",
    //   type:"post",
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   cache: false,
    //   xhrFields: {
    //     responseType: "blob"
    //   },
    // })
    // .done(function (data, status, xhr) {
    //     clearInterval(interval_id);
    //     var start_value = progress.value;
    //     interval_id = setInterval(() => {
    //         progress.value += 0.1;
    //         if (progress.value == 100) {
    //             var fileName = "result.txt"
    //             var blob = new Blob([data], { type: "application/octetstream" });
        
    //             //Check the Browser type and download the File.
    //             var isIE = false || !!document.documentMode;
    //             if (isIE) {
    //                 window.navigator.msSaveBlob(blob, fileName);
    //             } else {
    //                 var url = window.URL || window.webkitURL;
    //                 link = url.createObjectURL(blob);
    //                 var a = $("<a />");
    //                 a.attr("download", fileName);
    //                 a.attr("href", link);
    //                 $("body").append(a);
    //                 a[0].click();
    //                 $("body").remove(a);
    //             }
    //             mask.classList.add('hidden');
    //             modal.classList.add('hidden');
    //             progress.classList.add('hidden');
    //             progress.value = 0;
    //             clearInterval(interval_id);
    //         }
    //     }, 10 / (100 - start_value));
    // })
    // // 通信成功時
    // // .done( function(data) {
    // //   console.log("成功しました");
    // // })
    // // 通信失敗時
    // .fail( function(data) {
    //     console.log("失敗しました");
    //     mask.classList.add('hidden');
    //     modal.classList.add('hidden');
    //     progress.classList.add('hidden');
    //     progress.value = 0;
    //     clearInterval(interval_id);
    // })
    // // 処理終了時
    // // .always( function(data) {
    // //   // Lading 画像を消す
    // //   // removeLoading();
    // //   mask.classList.add('hidden');
    // //   modal.classList.add('hidden');
    // // });
//   });
});

// function sleep(msec) {
//     // jQueryのDeferredを作成します。
//     var objDef = new $.Deferred;
//     setTimeout(function () {
//         // sec秒後に、resolve()を実行して、Promiseを完了します。
//         objDef.resolve(msec);
//     }, msec);
//     return objDef.promise();
// };

// /* ------------------------------
// Loading イメージ表示関数
// 引数： msg 画面に表示する文言
// ------------------------------ */
// function dispLoading(msg){
//     // 引数なし（メッセージなし）を許容
//     if( msg == undefined ){
//         msg = "";
//     }
//     // 画面表示メッセージ
//     var dispMsg = "<div class='loadingMsg'>" + msg + "</div>";
//     // ローディング画像が表示されていない場合のみ出力
//     if($("#loading").length == 0){
//         $("body").append("<div id='loading'>" + dispMsg + "</div>");
//     }
// }

// /* ------------------------------
// Loading イメージ削除関数
// ------------------------------ */
// function removeLoading(){
//     $("#loading").remove();
// }

function removeEmote(){
    $("#emote").remove();
}