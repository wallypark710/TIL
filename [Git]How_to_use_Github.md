# How to use Git

### What is Git ?


> Git은 프로그램 등의 소스 코드 관리를 위한 분산 버전 관리 시스템이다. Git의 작업 폴더는 모두 전체 기록과 각 기록을 추적할 수 있는 정보를 포함하고 있으며 네트워크에 접근하거나 중앙 서버에 의존하지 않는다. 쉽게말해 진행되고있는 작업의 수정사항을 모두 기록하며 원하는 특정지점으로 되돌리기가 매우 용이하다. 다수의 사람들과 함께 작업할경우 각각의 변동사항을 체계적으로 관리할 수 있다.




### What is Github?


> 먼저 Git 과 Github은 다르다. Github은 분산 버전 관리 툴인 Git을 사용하는 프로젝트를 지원하는 웹호스팅 서비스이다. 쉽게말해 Git에 네트워크를 연결한것이 Github이다.



### Basic Git Workflow

0. 깃 사용자명/ 이메일 구성하기.

   ```text
   $git config user.name "USER_NAME"
   $git config user.email "EMAIL_ADDRESS"
   ```


1. 깃허브에 있는 원격 저장소를 로컬 저장소로 가져오기.

    ```text
    $git clone (github_repository_address)
    ```

2. 현재 깃의 상황을 확인하기. 

    ```text
    $git status
    ```

    - 새로운 파일의 추가나 여러 파일의 수정 여부등 깃의 상황을 한눈에 볼 수 있다.

3. 파일의 어떤 부분이 변경이되었는지를 확인.

    ```text
    $git diff
    ```

4. 어떤 파일을 원격 저장소(github)에 올릴지를 지정해주기.

    ```text
    $git add (file_name)
    ```

    - 원격 저장소에 올리기전 반드시 해야하는 작업

5. 어떤 부분이 변경되었는지를 기록

    ```text
    $git commit -m 'input message'
    ```

    - git commit 만 할 경우 vi 에디터로 이동하여 메세지를 입력하게 된다. 

6. 원격 저장소에 올리기

    ```text
    $git push origin master
    ```

7. 로컬에서 저장소를 만들때

    - github에 저장소를 먼저 만든다.

    - 지정하고자 하는 로컬 디렉터리로 이동

      ```text
      $git init
      $git remote add origin (github_repository_address)
      ```



8. 파일 이름 변경

    ```text
    $git mv (변경할 파일 이름) (수정된 파일 이름)
    ```

    - 이후 commit 과 push를 진행하면 github에 수정된 내용이 갱신된다.

