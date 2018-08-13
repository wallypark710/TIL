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

