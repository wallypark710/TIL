# What is Storybook

> 프론트엔드의 개발은 점점 복잡해지고 있다. 이러한 복잡도를 어떻게하면 낮출 수 있을까? 

### Intro

리액트는 컴포넌트가 트리구조(계층구조)를 이룬다. 리액트의 경우 모든 컴포넌트가 모델과 연결되어 있지 않기 때문에 어떤 컴포넌트의 상태 변경이 필요할땐 상태를 관리하는 부모 컴포넌트, 그리고 그 부모의 하위로 부모 컴포넌트가 내려준 데이터를 단순히 렌더하는 자식 컴포넌트로 작성하는 패턴을 주로 사용한다. 

SPA에서는 상태관리가 매우 중요한 이슈중 하나이기 때문에 우리는 보통 state를 관리하는 Container component에 집중하는 경향이 있다. 하지만 이 container component만큼이나 중요한 것이 바로 결국 우리 눈에 보이는 presentation component이다.

Presentation component는 단순히 데이터를 보여주는 컴포넌트이지만 이 컴포넌트가 가지는 경우의 수( 즉 상태)는 매우 다양하고, 또한 이 presentation component가 깊숙이 숨어있는 경우도 있다.

- 보통 presentation component가 가지는 상태는 기본적으로 세가지 이다. Loading 상태, Null 데이터가 넘어온 상태, Null이 아닌 데이터가 넘어온 상태이다. 이 세가지 상태 외에도 다양한 가짓수가 존재할 수 있다.
- Presentation component는 때때로 깊숙이 숨어있는 경우가 있다. 예를들면 결제 과정의 결과 페이지. 회원가입시 추가 정보를 입력받는 페이지, 특정 유저에게만 나타나는 팝업 페이지 등이 있다.
- Presentation component는 특정 조건하에서만 렌더되는 경우도 빈번하다. 이런경우 이 컴포넌트를 보기위해서는 상당히 귀찮은 일이다.

이처럼 presentation component의 장점은 오직 parameter에만 의존적이라는 것인데 이 장점이 컴포넌트를 테스팅함에 있어서는 상당히 귀찮고 어려움이 뒤따른다.



### Storybook

>  "Storybook은 컴포넌트 기반 UI 개발 환경이다."

스토리북은 위에서 이야기한 presentation component의 개발을 더 쉽게 할 수 있도록 도와준다. storybook은 모든 presentation component를 한줄로 세워준다. 즉 계층구조를 이루고 있던 컴포넌트를 같은 레벨의 구조로 만들어 주는 것이다.

이렇게 된다면, 우리는 특정 presentation component에 우리가 원하는 데이터(목업 state)를 주입하여 상하 의존성 없이 바로 테스트해보며 개발 할 수있다.

storybook은 스캐폴딩을 지원하기 때문에 우리는 하나의 스토리를 다양하게 구성할 수 있다. 비슷한 컴포넌트를 모아 스토리로 구성할 수 있고, 흐름에따라 스토리를 이어나갈수도 있다.



> Normalize, Modularization, Isolated



Storybook은 현재 프로젝트와 독립적으로 동작한다.


