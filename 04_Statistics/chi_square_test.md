# Chi Square Test
- Category Variable X 와 Catebory Variable Y 간의 상관관계를 측정하는 검정
- 귀무가설 : X 와 Y 간의 상관관계가 없다.
- pvalue 가 유의수준보다 높을 경우, 귀무가설은 채택되고, 상관관계가 없다고 판단
- pvalue 가 유의수준보다 높을 경우, 귀무가설은 기각되고, 상관관계가 있다고 판단

### python package
```python
import scipy as sp
statistics, pvalue, _, _ = sp.stats.chi2_contingency()
```
- 이 때 주의해야 할 것은, `chi2_contingency`의 parameter 에 contingency table 을 넣어주어야한다.
- groupby 등을 통해 contingency table 을 생성할 것 !!!!
