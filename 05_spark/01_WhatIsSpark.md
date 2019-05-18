# Apache Spark 란?
- Spark 를 한마디로 요약하자면, **Computing Engine** 이라고 할 수 있다. 
- 대용량 데이터 프로세싱을 처리하는 In-Memory 기반 클러스터 컴퓨팅 엔진
- 분산 메모리 기반의 빠른 분산 병렬 처리
- 범용 호환이 가능한 엔진
- Scala, Java, Python, R 등 High-Level APIs 제공

> Apache Spark Engine 은 Scala 로 구현되어 있다.
그렇기 때문에 제일 먼저 나오는 API 는 Scala 로 먼저 공개되는 특징


### Features
1. Unified Engine : 다양한 Workroad 를 한번에 처리
2. High-lvel APIs
3. Integrate Broadly

### Core Vocabulary
spark 를 배우면서 자주 등장하는 단어
- Resource Manager : 분산 컴퓨팅에 사용되는 resource (cpu, memory 등) 등을 관리
    - STANDALONE : spark 내장 cluster manager
- worker : 일하는 Machine 을 관리
- RDD : 정형/비정형 데이터의 저장소 (sc - spark context)
- DataFrame : RDD 와 같은 기능을 하는 데이터의 저장소 이지만, 정형 데이터에 대해서만 사용 (sparksession)

