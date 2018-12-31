# Branch Flow

> 새로운 브랜치를 만들어 작업할 때 다음과 같은 과정을 거친다.



- Branch create

  ```text
  $ git branch [branch_name]
  ```



- Branch switch

  ```text
  $ git checkout [branch_name]
  ```



위의 두 작업을 동시에( 브랜치를 만들고, 만든 브랜치로 이동 ) 하고 싶다면 다음과 같이 입력한다.

```text
$ git checkout -b [branch_name]
```



- Branch push

  ```text
  $ git push origin [branch_name];
  ```

  : master 가 아니기 때문에, master에 push하지 않도록 주의!