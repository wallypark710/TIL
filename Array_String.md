# Array

> #### Feature
>
> - Method를 사용할때 immutable 한지 mutable 한지 확인.
> - Underscore.js 라이브러리를 적절히 이용.
>
> 
>
> #### Method 
>
> - *.push ( element )*  :  요소를 배열 뒷쪽에 추가, 배열의 길이를 반환.
>
> - *.unshift( element )*  :  요소를 배열 앞쪽에 추가, 배열의 길이를 반환.
>
> - *.pop()*  :  배열의 마지막 요소를 반환.
>
> - *.slice( begin, end )*  :  배열의 인덱스에 해당하는 부분을 복사, end는 포함하지 않는다, 인덱스를 넘기지 않으면 배열 전체를 복사.
>
> - *.splice( index, num, item )*  :  index부터 num개의 요소를 삭제하고, item을 추가.
>
> - *.join( separator )*  :  배열의 요소를 구분자로 연결하여 문자열로 반환.
>
> - *.forEach( callback )*  :  배열의 모든 요소를 돌며 callback을 실행.
>
> - *.map( callback )*  :  배열의 모든 요소를 돌며 callback을 실행하여 실행 결과를 담은 새로운 배열을 반환. forEach와 다른점은 callback 내의 return 이 필요.
>
> - *.filter( callback )*  :  callback의 조건을 만족하는 요소들만을 모은 새로운 배열을 반환.
>
> - *.reduce( callback, initValue )*  :  callback( accumulator, element, index ) 배열의 각 요소에 대해 하나의 단일 값으로 줄이는 함수를 적용. initValue를 지정하지 않으면 배열의 첫번째 요소가 initValue가 된다.
>
> - *Array.isArray( param )*  :  배열인지 아닌지를 true or false로 반환.
>
>   



# String

> #### Feature
>
> - 모든 string method는 immutable 하다.
> - read only
>
> 
>
> #### Method
>
> - *.split( seperator )*  :  문자열을 seperator로 구분하여 배열에 담아 반환.
>
> - *.substring( start, end )*  :  인덱스에 해당하는 부분을 복사하여 문자열로 반환.
>
> - *.substr( start , length )*  :  시작 인덱스부터 길이만큼에 해당하는 문자열을 복사.
>
> - *.indexOf( element )*  :  element에 해당하는 인덱스를 반환. 동일한 element가 존재할경우 앞쪽 인덱스르 반환.
>
> - *.lastIndexOf( element )*  :  indexOf 메서드와 동일한 기능이며, 차이점은 뒤에서부터 탐색한다.
>
> - *.charCodeAt( index )*  :  주어진 인덱스에 대한 아스키코드값을 반환.
>
> - *.charAt( index )*  :  문자열내 해당 인덱스에 해당하는 문자를 반환.
>
> - *String.fromCharCode( asciiValue )*  :  아스키코드값에 해당하는 문자를 반환.
>
> - *JSON.stringify( sources )*  :  source값을 문자열로 반환.
>
> - *JSON.parse( sources )*  :  stringify의 반대 기능.
>  
