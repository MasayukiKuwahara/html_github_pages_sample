$(document).ready(function() {
    const nameForm = $('#nameForm');
    const nameInput = $('#nameInput');
    const greetingMessage = $('#greetingMessage');
  
    // 初回訪問時に名前を尋ねる
    if (!localStorage.getItem('userName')) {
      nameForm.show();
    } else {
      showGreeting();
    }
  
    // フォーム送信時の処理
    nameForm.submit(function(event) {
      event.preventDefault();
  
      const userName = nameInput.val();
  
      // 名前をLocalStorageに保存
      localStorage.setItem('userName', userName);
  
      // フォームを非表示にする
      nameForm.hide();
  
      // 挨拶を表示する
      showGreeting();
    });
  
    function showGreeting() {
      const userName = localStorage.getItem('userName');
      greetingMessage.text('こんにちは、' + userName + 'さん！');
    }
  });
  