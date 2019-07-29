### find & remove

공통된 패턴을 가지고 있는 파일 명에 대해서 찾고, 지우는 linux command
```bash

// 하나하나 지우는 파일 확인, press Y or N
find directory -name "file_name_pattern*" -exec rm -i {} \;

// 한번에 지우는
find . -name "best_model_2_*" -exec rm -f {} \;

// file only && not directory
find directory -type f -name "pattern" -exec rm -rf {} \;
```
1. -name "File name pattern" : 파일 패턴
2. -exec rm -rf {} \; : 패턴에 맞는 모든 파일을 지움
3. -type f : 디렉토리를 제외하고, 파일만 지움:
