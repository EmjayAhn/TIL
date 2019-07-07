# Basic 한 DOCKER COMMAND

- 처음 공부하는거라 어색하니, 적응 할 때까진 정리된 것을 참고하기

## 1. Docker Image 받아오기

```bash
docker image pull [repository]
```

## 2. 시작 & 종료

```bash
// 시작
$ docker container run -t -p [image]

// 종료
// docker container ls -q 하면 실행되고 있는 container 의 id 를 보여줌
$ docker stop $(docker container ls -q)
```

## 3.Instrunctions

1. FROM 인스트럭션

- 도커 이미지의 바탕이 될 베이스 이미지를 지정
- Dockerfile로 이미지가 빌드 될 때 제일 먼저 FROM 인스트럭션에 지정된 이미지를 먼저 내려받음
- FROM 은 DockerHub 를 참조

1. RUN 인스트럭션

- 도커 이미지를 실행할 때, 컨테이너 안에서 실행될 명령을 정의
- RUN 뒤에 컨테이너 안에서 실행할 명령을 그대로 씀 (RUN [command])
- 이미지를 빌드할 때 실행
  
1. COPY 인스트럭션

- 도커가 떠있는 host 의 파일이나 디렉토리를 도커 컨테이너 안으로 복사

1. CMD 인스트럭션
   
- 도커 컨테이너가 실행될 때, 컨테이너 안에서 실행할 프로세스를 지정
- CMD 는 컨테이너를 시작할 때 한 번 실행.
- RUN 은 어플리케이션 업데이트 및 배치에, CMD는 어플리케이션 자체를 실행하는 명령이라고 생각

## 4. 도커 이미지 빌드
- 빌드 할 시, -t 태그로 이미지명을 만들어주지 않으면 해쉬값으로 그 이름을 구분해야하므로, 반드시 해주어야한다.
```bash
docker image build -t 이미지명[:태그명] Dockerfile의_경로
```

- 생성된 이미지 확인
```bash
docker image ls
```

## 5. 도커 컨테이너 실행

```
docker container run 이미지명[:태그명]

//백그라운드 실행
docker container run -d 이미지명[:태그명]
```
- 실행 중인 컨테이너 확인
```bash
docker container ls
```
