# Decorator Pattern

#### 1. define

> 객체의 추가적인 요건을 동적으로 추가한다. 서브 클래스를 만드는 것을 통해 기능을 유연하게 확장할 수 있는 방법을 제공한다.

- 다른 객체에 영향을 주지 않고 요건을 추가할 수 있게 된다. 또한 상속을 통해 구현 시, 너무 많은 서브 클래스들이 만들어질 것이 우려될 때나 동일한 기능을 반복해 수행하고 싶을 때 유용하다.
- 일반적인 상속 관계보다 유연하게 기능을 확장할 수 있지만 잡다한 클래스가 많아지거나 겹겹이 애워싼 구조 때문에 디버깅이 어려워 질수 있다.

#### 2. example

```javascript
 function Espresso(){
     this.cost = 2500;
 }
 
 function Water(espresso){
     espresso.cost = espresso.cost + 500;
     espresso.water = 250;
     return espresso;
 }
 
 function Milk(espresso){
     espresso.cost = espresso.cost + 500;
     espresso.milk = 100;
     return espresso;
 }
 
 /****** use ******/
 var espresso = new Espresso();
 //{ cost: 2500 }
 var americano = Water(new Espresso());
 //{ cost: 3000, water: 250}
 var latte = Milk(Water(new Espresso()));
 //{ cost: 3500, water: 250, milk: 100}
```



# Singleton Pattern

#### 1. define

> 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.

- 공통된 객체를 여러개 생성해서 사용하는 상황에 많이 사용된다.
- 클로저를 이용하여 모든 속성은 private이다.

#### 2. example

```javascript
 var singleton = (function(){
     var instance;
     var owner = 'walli';
     function init(){
         return {
             owner : owner
         };
     }
     
     return {
         getInstance: function(){
             if(!instance){
                 instance = init();
             }
             return instance;
         }
     }
 })();
 
 /****** use ******/
 var first = singleton.getInstance();
 var second = singleton.getInstance();
 console.log(first === second); //true
```



# MVC Pattern

#### 1. define

> MVC 는 Model, View, Controller의 약자로, 하나의 프로젝트를 세가지의 역할로 구분하는 것이다.

![img](https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjVfMTM0/MDAxNDkwNDQyNDI5OTAy.MUksll6Y9SzelJjmGW6zXOlPebJKOft3OhcnmhrcmTgg.4g4FxlhwEpgxp8kGXJVLf2LHlrRJhP7NqR7LJew8tL0g.PNG.jhc9639/ModelViewControllerDiagram.png?type=w800)



#### 2. Feature

- Model

  > 프로그램의 정보, 데이터를 나타낸다. 또한 이러한 데이터의 가공(처리)를 책임지는 컴포넌트를 말한다. Model은 아래와 같은 몇가지 규칙을 가지고 있다.

  - **사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다.**

    : 화면에 글자가 표시된다면, 글자내용, 위치, 포멧 정보등을 가지고 있어야 한다.

  - **View나 Controller에 대해서는 어떤 정보도 알지 말아야 한다.**

  - **변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 한다.**

- View

  > 텍스트, 체크박스 항목 등과 같은 사용자 인터페이스 요소를 나타낸다. 데이터 및 객체의 입력, 그리고 이것들을 보여주는 출력을 담당한다.

  - **Model이 가지고 있는 정보를 따로 저장해서는 안된다.**

    : 화면에 출력하기 위해 Model정보를 전달받게 될텐데, 그 정보를 유지하기 위해서 View내부에 저장하면 안된다. 단순히 받은 정보를 가지고 출력만 수행한다.

  - **Model이나 Controller같이 다른 구성요소들을 몰라야 한다.**

  - **변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 한다.**

- Controller

  > 데이터와 사용자 인터페이스 요소들을 연결하는 다리 역할을 한다. 클라이언트단에서 발생한 이벤트를 처리하는 부분을 말한다.

  - **Model이나 View에 대해서 알고 있어야 한다.**

    : model이나 view는 서로의 존재를 모르고, 변경을 외부로 알리기만 한다. 반면에 controller는 이들을 조정하는 역할을 해야한다.

  - **Model이나 View의 변경을 모니터링 해야 한다.**
