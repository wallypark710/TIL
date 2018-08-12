# How to use TestFramework

### Basic

1. *describe*

   ```javascript
   describe('test name', function() {
       ...test code...
   });
   ```

2. *it*

   ```javascript
   describe('test name', function() {
       it('describe test', function() {
           ...test code...
       });
   });
   ```

3. *assertion*

   ```javascript
   describe('test name', function() {
       it('describe test', function() {
           assert.equal( code_1, code_2 );
       });
   });
   ```



### Chai library style

1. *Expext, Should* 
   : BDD ( Behaviour-Driven Development ) 요구사항에 집중하여 테스트 케이스를 만드는 방식

   ```javascript
   expect('hello').to.equal('hello');
   expext('hello').to.be.a('string');
   
   'hello'.should.equal('hello');
   'hello'.should.be.a('string');
   ```

   

2. *Assert*
   : TDD ( Test-Driven Development ) 테스트에 집중하여 코드를 작성. assert는 하나의 메소드로써 테스트를 진행.

   ```javascript
   assert.equal(123, '123', '==와 같은 검사');
   assert.notEqual(3, 4, '!=와 같은 검사');
   assert.stricEqual(true, true, '===와 같은 검사');
   assert.notstricEqual(5, '5', '!==와 같은 검사');
   ```

   

