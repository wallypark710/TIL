# HTML

> - 웹 페이지의 요소들을 구성해 주는 역할
>
> - example
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>       <head>
>           <title> Page Name </title>
>       </head>
>       <body>
>           <h1> Hello world </h1>
>       </body>
>   </html>
>   ```
>
>   - 만약 태그 내부에 내용이 없다면 <tag />와 같이 줄여 쓸 수 있다.
>
> - HTML Tag 참고자료 : https://developer.mozilla.org/en-US/docs/Web/HTML/Element
>
> - Javascript in HTML
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>       <head>
>           <title> Page Name</title>
>           <script>
>               ...javascript code... // 초기화를 위해 사용.
>           </script>
>       </head>
>       <body>
>           <h1> Hello world </h1>
>           <script>
>               ...javascript code... // 페이지 기능에 관한 코드.
>           </script>
>       </body>
>   </html>
>   ```
>
>   - body 끝 부분에 script를 넣는 이유는 html, css를 모두 불러온 후 script를 작동시키기 때문에 페이지 로딩이 빨라진다.
>
>   - example_1
>
>     ```html
>     <!DOCTYPE html>
>     <html>
>         <head>
>             <title> Page Name</title>
>         </head>
>         <body>
>             <h1> Hello world </h1>
>             <button id="first"> Hello </button>
>             <script>
>                 var button = document.getElementById('first');
>                 button.onclick = function(){
>                     alert("hello");
>                 }
>             </script>
>         </body>
>     </html>
>     ```
>
>   - example_2
>
>     ```html
>     <!DOCTYPE html>
>     <html>
>         <head>
>             <title> Page Name</title>
>         </head>
>         <body>
>             <h1> Hello world </h1>
>             <button button onclick = "handleClick()">
>                 Hello
>             </button>
>             <script>
>                 var handleClick = function(){
>                     for(var i = 0; i < 5; i++){
>                         alert(i);
>                     }
>                 }
>             </script>
>         </body>
>     </html>
>     ```
>
>   
>
>   - DOM
>     - Document Object Model의 약자로, 프로그래밍 언어로 문서 내부의 객체들을 다룰 수 있게 도와주는 역할
>     - document.getElementById('title'); 을 jQuery에선 $('#title')[0]으로 간결하게 끝낼 수 있다.
>     - $('selecteor') 와 같이 사용하면 선택자에 해당하는 모든 DOM들을 배열과 비슷한 형태로 불러온다. 그러므로 DOM에 접근할 때는 [] operator를 사용해야 접근이 가능하다.





# CSS

> - 웹 페이지 구성요소들의 스타일을 정의해주는 언어
>
> - CSS를 HTML에 적용하는 데에는 3가지 방식이 있다.
>
>   - inline 방식
>
>     ```html
>     <h1 style="color : red";>
>         Hello world
>     </h1>
>     ```
>
>   - HTML 내부에 스타일 시트를 작성하는 방식
>
>     ```html
>     <!DOCTYPE html>
>     <html>
>         <head>
>             <style>
>                 h1 { color : red; }
>                 #id_name { color : blue; }
>                 .class_name { color : yellow; }
>             </style>
>         </head>
>     </html>
>     ```
>
>   - HTML 외부에 스타일 시트를 작성하는 방식
>
>     ```html
>     <!DOCTYPE html>
>     <html>
>         <head>
>             <link rel="stylesheet" type="text/css" href="myStyle.css">
>         </head>
>     </html>
>     ```
>
>   
>
> - CSS 속성 참고 자료 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Reference

