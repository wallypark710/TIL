# Stash

> git의 stash 기능은 stage에 올라온( git add ) 코드를 잠시 다른곳에 저장해놓고, 워킹 디렉토리를 비우는 기능이다. 쉽게 생각하면, 스냅샷을 찍어 어디에 저장해놓았다가 다시 불러올 수 있는 기능이다.



### 작업내용 담기 ( stash )

```text
$ git stash
$ git stash save STASH_NAME
```



### 저장된 작업 리스트 보기

```text
$ git stash list
```



### 다시 불러오기 ( unstash )

```text
$ git stash pop
```

: 가장 최근에 저장한 작업본을 가져온다. 가져온후 stash list 에서도 삭제 된다.



```text
$ git stash apply STASH_NAME
```

: 특정 작업본을 가져온다. pop과는 다르게 stash list 에서 지워지지 않는다.