//今回はJavaScriptを別ファイルに記載し、HTMLファイル側で読み込む方法を採用しています
 //足し算の結果をアラート表示するコードを書いています。
 
  //var 変数名;
  //var hoge;  ← hogeという箱を宣言している
  //var 変数名 = 値;
  //var name = taro; ← nameという箱にtaroという名前を入れている
  function sum(){
    var x = 3;      // ← xという箱を作り、その中に3を入れろ！という命令
    var y = 4;      // ← yという箱を作り、その中に4を入れろ！という命令
    var z = x + y;  // ← zという箱を作り、その中にxの中身（3）とyの中身（4）を足した値を入れろ！という命令
    alert(z);       // ← zの中身をアラートで表示しろ！という命令
  }
