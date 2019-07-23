# Vim
로망 중에 하나였던 Vim..<br>
이 레포를 작성할 때 Vim 을 이용하기 시작해서, 슬슬 vim 으로 넘어가야겠다.<br>
지금 시작은 예쁜 color theme 과 유용한 plugin 설치부터 😁

### tabs
1. 탭 여는 두가지방법
- `:tabnew filename`
- `vim -p filename filename filename`
2. 탭 리스트 보기
- `:tabs`
3. 탭 이동
- 오른쪽: :tabn :tabnext gt
- 왼쪽: :tabp :tabprevious gT
- 처음으로: :tabfirst
- 마지막으로: :tabl, :tablast
4. 탭에 있는 문서에 모두 같은 작업하기
- 탭에 열려있는 모든 문서에 foo -> bar 로 바꾸고 싶을 때
- :tabdo %s/foo/bar/g

### windows (화면분할)
1. 화면 분할
- 가로분할: :sp filename
- 세로분할: :vs filename
2. 화면 이동
- ctrl + w w
- ctrl + 방향키(hjkl)
