> 패턴인식과 머신러닝 (크리스토퍼 비숍) 2장을 읽고 짧게 정리한 내용입니다.


### 분포의 역할
- 분포의 역할들 중 하나는 한정된 수의 관찰 data $x_1, x_2, ... , x_N$가 주어 졌을 때, 확률변수 $x$ 의 확률 분포 $p(x)$를 모델링 하는 것이다.

### Conjugate prior: 켤레 사전확률
- 켤레 사전확률은 사후 확률이 사전 확률과 같은 함수적 형태를 띠도록 만들어 준다.
- 그 결과, 베이지안 분석이 매우 단순해진다.<br>
<br>
**켤레 사전확률 예**
다항 분포 매개변수의 켤레 사전확률 - 디리클레분포<br>
가우시한 분포 평균값의 켤레 사전확률 - 또 다른 가우시안 분포<br>

### 매개변수적인 접근법의 한계
1. 분포가 특정한 함수의 형태를 띠고 있다고 가정
2. 이 가정이 적절하지 않은 경우에는 비매개변수적(nonparametric) 밀도 추정 방식이 대안으로 활용될 수 있다.
3. 
