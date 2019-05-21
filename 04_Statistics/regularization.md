## $L_p$ norm
$$ ||X||_p = [\sum_{i=1}^{n} |x_i|^p]^{1/p}

## L1 Regularization
$$ + \lambda \sum |W| $$

### L1 = Feature Selection?
- L1은 왜 Feature Selection 이라고 하는가?
	- ex) LASSO
- Emmanuel Candes & Terence Tao 에 의해   
Minimize L1 = Minimize L0 가 증명되었다.

- 이 때, L0 norm 은 vector의 0 이 아닌 갯수로 정의 된다.
- L0 norm = Sparcity

- L1 norm 을 minimize 하는 것은 L0 norm 을 minimize 하는 것과 같고, 이는 matrix 의 0의 갯수를 maximize 하는 것과 같다.
- 이는 W 에 0이 많아지게 되고, 이는 주입하는 feature 가 그대로 나오는 것과 같다고 볼 수 있다.


## L2 Regularization
$$ + \lambda \sum |W|^2 $$
- Smoothing Factor


