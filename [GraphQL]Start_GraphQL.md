# Start GraphQL

> GraphQL은 API를 위한 Query Language이며 타입 시스템을 사용하여 Query를 실행하는 ***server side runtime***이다. 기존의 web 혹은 mobile application에서 API를 구현할 때는 REST API가 사용되었다. 하지만 REST API를 사용하게 되면 고질적으로 Over-Fetching과 Under-Fetching이 발생한다.
>
> - ***Over-Fetching***
>   : 특정 정보만 필요해도 요청에대한 응답으로 보내지는 모든 정보를 받게 되는 것. 받은 데이터중에서 필요한 정보만을 거르는 작업을 수행해야 한다.
>
> - ***Under-Fetching***
>
>   : 하나의 view를 완성하기위해 여러번의 요청이 필요한 경우. 예를들어 myPage를 띄운다고 했을 때, 사용자 정보, 알림 메시지 등을 불러와야하는데 이런 데이터를 불러오기위해서는 여러번의 요청이 필요하다.
>
> 이러한 문제를 GraphQL로 해결할 수 있다. GraphQL은 하나의 end-Point로 필요한 정보만을 가져올 수 있다.
>
> GraphQL은 특정한 DB나 Storage엔진과 관계되어 있지 않다.



### GraphQL yoga

> graphql-yoga는 graphql 프로젝트를 빠르게 시작할 수 있게 도와준다. 일종의 `create-react-app` 명령어와 비슷하다.



#### Install

``` bash
$ yarn add graphql-yoga
```

#### Usage

```js
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
```

```js
# Using option

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
```

