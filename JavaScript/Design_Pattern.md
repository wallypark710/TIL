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



