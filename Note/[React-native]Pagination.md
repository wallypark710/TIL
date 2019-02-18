# Pagination

대량의 데이터를 API 콜을 통해 불러올때 데이터를 한번에 띄우기 보다 스크롤 이벤트를 이용해서 나눠서 로딩하는것이 좋다. 현재 개발중인 서비스에 pagination을 적용할 필요가 있어 적용해 보았다. 여러개의 카페를 같은 크기로 보여주기 위해 `FlatList` 를 사용했다.

 `FlatList` 의 `onEndReached` 와 `onEndReachedThreshold` 를 이용해서 pagination을 구현하려고 했다. 이 두 요소는 스크롤의 위치에따라 이벤트를 걸어줄 수 있는 프로퍼티이다. 공식 문서를 참조하여 구현했는데 기능이 정상동작하지 않았다. 아예 동작하지않고 에러가 났다면 좀더 수월하게 원인을 알 수 있었을텐데 에러가 없었지만 내가 의도한데로 동작하지 않았다.

구글링을 해도 나오는결과는 내 코드와 동일했다. 오랜 구글링 끝에 github 이슈 게시판에서 한줄의 댓글을 발견했다.

"ScrollView 내부에 FlatList를 사용하면 정상동작하지 않을 수 있습니다."

나는 ScrollView 내부에서  FlatList를 사용하고 있었다. FlatList 내부에서 ScrollView가 들어있다는것을 간과하고 있었다. ScrollView 를 제거하고 나니 Pagination이 정상적으로 동작하는것을 확인할 수 있었다.

