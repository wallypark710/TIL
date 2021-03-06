# HTML

> - 웹 페이지의 요소들을 구성해 주는 역할
>
> - Tree 구조를 가지고 있다.
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
>   - 만약 태그 내부에 내용이 없다면 \<tag />와 같이 줄여 쓸 수 있다.
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
>   
>   <link> : 외부의 문서를 연결시키는 태그
>       - href : 연결할 곳의 주소
>       - rel : 현재문서와 연결문서의 관계 표시
>       - type : 연결 문서의 MIME유형 (href 속성이 설정될 때만 사용)
>       	* css 파일 : text/css
>       	* js 파일 : text/javascript
>       	* xml 파일 : application/xml
>       
>   <input> : 사용자의 데이터 입력
>       - type : input 요소의 종류
>       	* text : 한 줄의 텍스트 입력칸
>       	* password : text 속성값과 같지만, 문자를 숨겨서 표시
>       	* checkbox
>       	* radio	
>       	* button
>       
>   <textarea> : 여러줄의 텍스트를 입력할 수 있는 입력칸
>   <form> : 웹페이지의 정보를 다른 페이지로 전송하는 역할
>   ```
>
>   - \<div> vs \<span>
>     - 두 태그 모두 영역을 설정할 때 사용.
>     - div경우 가로폭을 전부 차지함, span의 경우 태그안의 내용만 차지함.
>     - \<div>는 style = "display : block;" 과 같은 성질이다.
>     - \<span>는 style = "display : inline;" 과 같은 성질이다.
>     - div 와 block은 블럭을 쌓듯 위로 포게지는 속성을 갖고 있으며, 사각형 박스 형태로 width, height값에 영향을 받는다.
>     - span 과 inline은 직렬 또는 횡렬로 옆으로 붙는 속성을 갖고 있으며, 영역을 그 안에 들어가는 내용 크기 만큼으로 제한된다. 즉 width, height값에 영향을 받지 않는다.
>
> - id 와 class
>
>   - id : 특정 엘리먼트에 이름을 붙이는데 사용
>   - class : 스타일 분류에 사용. 클래스는 스페이스 구분으로 여러개를 설정할 수 있다.





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
>   - 제어대상 = *element object*  ||  *CSS스타일 선택자*
>   -  var $user = $('\<div>\</div>');  와 같이 \<div>\</div> 택을 생성하여 객체로 반환할 수도 있음
>
> - method
>
>   - attr()
>   - html() : 선택한 요소 안의 내용을 가져오거나, 다른 내용으로 바꿉니다.
>   - text() : html 태그와 비슷하지만 태그는 가져오지 않는다.
>   - A.appendTo(B) : A를 B에 추가
>   - click() : ( function() {}) 을 정의하여 클릭 이벤트를 연결할 수 있다.
>   - val() : input value를 가져온다.
>   - remove() : 특정 태그를 제거한다.
>   - empty() : 태그 안의 내용을 비운다.
>   - ready()
>     - $(document).ready( ... ) : 바디태그 안에 내용을 보장해주는 역할
>     - 실행되는 코드 ( DOM과 관련된 부분 )만 ready안에 넣어주고, 정의되는 코드는 ready밖에 써주는게 좋다.
>


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
> - Box Model
>
>   : 문서에서, 각 요소는 사각형 박스로 나타낸다.
>
> - CSS 속성 특징
>
>   - text-align : block 요소 안에 있는 inline 요소를 정렬한다.
>     - block 요소 : \<p>, \<div>, \<ol>, \<table>
>     - inline 요소 : \<span>, \<b>, \<a>, \<img>
>
> - CSS 속성 참고 자료 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Reference
> - CSS 색상 참고 자료 : https://developer.mozilla.org/ko/docs/Web/CSS/color_value
>
> 

