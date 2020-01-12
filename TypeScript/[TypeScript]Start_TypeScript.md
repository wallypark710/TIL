# Start TypeScript 

> 타입스크립트는 자바스크립트에 정적 타이핑을 도입한 언어이다. 타입스크립트는 컴파일 과정을 거쳐 자바스크립트파일로 변환된다. 컴파일 과정에서 타입을 체크하는 과정이 있다.



## Type Annotation

> 변수 또는 값의 타입을 표시하기 위해 타입 표기를 사용한다. 타입 표기는 식별자 또는 값 뒤에 콜론( : )을 붙여 value : type 형태로 표기한다.

```typescript
//String and number
const name: string = 'walli';
const age: nunmber = 70
const isDone: boolean = true;

//Function
function nothing(): void { ... }

//Array
const pibonacci: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
const person: string[] = ['walli', 'park', 'jun'];
                          
//Object
const user: { name: string, height: number } = { name: 'walli', heigth:178 }

//Object etc
const user: { name: string, height?: number } = {
  name: 'walli'
}

//Read only Object-props
const user: {
  readonly name: string,
  height: number;
} = { name : 'walli', height: 178 }

/* readonly가 붙은 요소는 재할당이 불가하다. */
                          

//튜플 : 타입이 섞여있는 배열이나 객체
const nameAndHeight: [string, number] = ['walli', '100'];
```



### Enum

```ts
enum Color {Red, Green, Blue }
let c : Color = Color.Green;
```



### Object

```ts
interface Person {
  [name:string] : number
}
```



### Public, private, and protected modifiers

```ts
class Animal {
    private name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

