# How to use MySQL

> 데이터베이스의 한 종류인 MySQL 기본 명령어를 알아본다.



- 데이터베이스 접속

```
mysql -u <user_name> -p
```

- 사용자 추가

```sql
CREATE USER <user_name> IDENTIFIED BY <user_password>;
GRANT *.* TO 'user_name'@'localhost';
```

- 데이터베이스 생성

```sql
CREATE DATABASE <db_name>;
```

- 데이터베이스 사용

```sql
USE <db_name>;
```

- 데이터베이스 보기

```sql
SHOW DATABASES;
```

- 데이터베이스 삭제

```sql
DROP DATABASE <db_name>;
```



- 테이블 생성

```sql
CREATE TABLE <table_name> (
    col_name_1 INT PRIMARY KEY AUTO_INCREMENT,
    col_name_2 VARCHAR(15) NOT NULL,
    col_name_3 INT
);
```

- 테이블 보기

```sql
SHOW TABLES;
```

- 테이블에 데이터 넣기

```sql
INSERT INTO <table_name> VALUES (val_1, val_2, val_3, ... );
```

: VALUES 값은 스키마 순서대로 넣어주어야 한다.

