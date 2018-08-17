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
>
>     - Document Object Model의 약자로, 프로그래밍 언어로 문서 내부의 객체들을 다룰 수 있게 도와주는 역할
>     - HTML, XML 문서의 프로그래밍 API
>     - document.getElementById('title'); 을 jQuery에선 $('#title')[0]으로 간결하게 끝낼 수 있다.
>     - $('selecteor') 와 같이 사용하면 선택자에 해당하는 모든 DOM들을 배열과 비슷한 형태로 불러온다. 그러므로 DOM에 접근할 때는 [] operator를 사용해야 접근이 가능하다.
>
>     ![img](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)
>
> - Tag
>
>   ```html
>   <a> : 하이퍼링크를 정의
>   <a href="walliarchive.wordpress.com"> walli's blog </a>
>       
>   <p> : 단락을 정의
>       
>   <div> : 하나 이상의 태그를 묶는 태그. 묶여진 요소들은 하나의 객체로 취급되어 다루기 편하다. 또한 웹 문서에서 배치를 할 때도 유리하다.
>   ```





# jQuery

> - 웹에서 javascript로 구현할 수 있는 기능들을 미리 구현해 모아놓은 라이브러리
>
> - example
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>       <head>
>       	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>	//jQuery를 사용한다.
>       	<title> jQuery </title>
>       </head>
>       <body>
>           <h1> jQuery example </h1>
>           <script>
>               $(document).ready(function(){
>                   ...code here...
>               });	//document가 준비되면(로딩이 끝나면) 하위 코드 실행.
>           </script>
>       </body>
>       
>   </html>
>   ```
>
> - jQuery 기본 문법
>
>   ```javascript
>   $(제어대상).method1().method2();
>   ```
>
>   : 제어대상 = *element object*  ||  *CSS스타일 선택자*
>   : var $user = $('<div></div>');  와 같이 <div></div> 택을 생성하여 객체로 반환할 수도 있음
>
> - method
>
>   - attr()
>   - html() : 선택한 요소 안의 내용을 가져오거나, 다른 내용으로 바꿉니다.
>   - text() : html 태그와 비슷하지만 태그는 가져오지 않는다.
>   - A.appendTo(B) : A를 B에 추가
>   - click()





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
> - 기본 선택자
>
>   - type 선택자 : `elementname`
>   - class 선택자 : ` .classname`
>   - id 선택자 : `#idname`
>   - universal 선택자 : `* ns|* *|*`
>   - attribute 선택자 : `[attr=value]`
>     : 여기서 속성이라 함은 각 태그가 가지고 있는 속성. value 값은 따옴표로 묶여 있어야 함.
>
>   
>
> - CSS 속성 참고 자료 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Reference
>
> - CSS 색상 참고 자료 : https://developer.mozilla.org/ko/docs/Web/CSS/color_value
>
> 

