# [Apollo] Local state management

> Apollo client 2.5 버전부터 apollo cache 내부에 local date를 넣어 관리할 수 있다. 이 로컬 데이터에 접근할 땐 서버에 보내는것과 똑같이 쿼리를 하면 된다. 심지어 같은 쿼리로 서버와 로컬에 같은 요청을 보낼 수 있다.


- Cache.writeData 를 이용해서 캐시 데이터를 업데이트 할 수 있다.

  ```js
  Cache.writeData({
    data:{ isLogin : true }  // 원하는 데이터를 넣어준다.
  })
  ```

- 또다른 하나는 mutation 쿼리를 이용해서 데이터를 업데이트 할 수 있다.

- 쿼리뒤에 `@client`를 붙이면 로컬 데이터를 fetch해온다.

  > `@client` 를 이용하여 로컬 state(아폴로 캐시)에 있는 데이터를 쿼리할 수 있다. Mutation 역시 가능한데, 로컬과 서버에 같은 이름의 mutation을 정의해놓고 `@client`를 이용하여 타겟 mutation을 선택할 수 있다.

- resolvers 작성시

  ```js
  const resolvers = {
  	Resolver_name : ( _root, variables, {cache}) => {
      /... action .../
      return result
    }  
  }
  
  /**** example ***/
  
  const resolvers = {
    Mutation: {
      toggleLogin: (_, {isLogin}, {cache}) => {
        const newLoginState = { value : login, __typename: 'isLogin'}
        const data = {isLogin : newLoginState};
        cache.writeData({data});
        return newLoginState
      }
    }
  }
  ```

- Cache를 삭제하고 싶을 때

  ```
  client.onResetStore( ( ) => ( 삭제후 액션 ) )
  ```

- 로컬과 서버에 동시에 쿼리하는 방법

  > 로컬 패치를 하고싶은 값에는 `@client` 를 붙여준다.

  ```js
  const GET_LAUNCH_DETAILS = gql`
    query LaunchDetails($launchId: ID!) {
      launch(id: $launchId) {
        isInCart @client
        site
        rocket {
          type
        }
      }
    }
  `;
  ```

  

- 상위 쿼리의 인자를 기준으로 하위 쿼리 결과를 선택해서 가져올 수 있다.

  ```js
  const query = gql`
    query currentAuthorPostCount($authorId: Int!) {
      currentAuthorId @client @export(as: "authorId")
      postCount(authorId: $authorId) @client
    }
  `;
  
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    resolvers: {
      Query: {
        postCount(_, { authorId }) {
          return authorId === 12345 ? 100 : 0;
        },
      },
    },
  });
  
  cache.writeData({
    data: {
      currentAuthorId: 12345,
    },
  });
  
  ```

  

- 다양한 fetchPolicy를 이용하여 아폴로 캐시를 좀 더 다이나믹하게 사용할 수 있다.

  **cache-first**
  : 항상 캐시를 먼저 확인한다. 캐시에 데이터가 없다면 network 요청을 한다.

  

  **network-only**
  : 캐시를 확인하지 않고 항상 network 요청을 한다.

  

  **cache-only**
  : 캐시만 확인한다. 캐시에 데이터가 없다면 에러를 반환한다.

  

  **cache-and-network**
  : 먼저 캐시를 확인하여 데이터를 반환한다.(업데이트 되지 않은 데이터일지라도) 이후 network요청을 하여 새로운 데이터를 받아와 캐시를 업데이트하고, 업데이트된 캐싱 데이터를 다시 반환한다.

  
  
  > fetchPolicy를 각각의 쿼리요청마다 다르게 부여할 수 있다. 