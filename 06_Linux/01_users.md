## User 권한

1. 사용자 권한 vs 관리자 권한
Linux shell에서 사용자와 관리자는 prompt 상에서 **$** 와 **#** 로 구분할 수 있다.<br>
아래와 같이 나올때, 우리는 사용자 권한 임을 알 수 있다.<br>
```bash
username@servername:~$
```
반면에, # 을 통해 현재 관리자 권한에 있음을 확인할 수 있다.
```bash
username@servername:~# 
```

2. 사용자 권한 -> 관리자 권한
- 우리가 항상 조심하게 사용해야 하는 `sudo`(Super User Do)
```bash
$ sudo su - root
$ sudo su -
$ sudo su
```
첫번째, `sudo su - root`는 root 관리자 계정으로 user를 바꾸겠다는 의미이다.
두번째, `sudo su -` 는 root 가 생략 됐으나, 위와 같은 기능인 root 계정으로 바꾼다.
세번째, `sudo su`는 계정을 바꾸지 않은 상태에서, 관리자 권한만 얻는다.

3. 관리자 권한 -> 사용자 권한
관리자권한에서 사용자 권한으로 다시 나오려면, `exit`으로 logout 하면 된다.
