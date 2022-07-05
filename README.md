## 클래스형 컴포넌트의 라이프 사이클

1. 마운트(컴포넌트가 화면에 보이기 까지)

- DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트 라고함
- 컴포넌트 만들기 -> constuctor -> getDerivedStateFromProps -> render -> componentDidMount 순으로 진행

- constuctor 컴포넌트를 새로 만들때마다 호출됨
- getDerivedStateFromProps props에 있는 값을 state 값으로 넣을때 사용함
- render UI를 렌더링 하는 메서드
- componentDidMount 컴포넌트가 웹 브라우저에상에 나타난후 호출되는 메서드

2. 업데이트(컴포넌트가 업데이트 될때 나타남)

- props가 바뀔때
- state가 바뀔때
- 부모 컴포넌트가 리렌더링 될때
- this.forceUpdate로 강제로 업데이트가 될때

- getDerivedStateFromProps -> shouldComponentUpdate ->(true시 render 진행, false 시 작업 취소) -> render -> componentDidUpdate 순으로 진행

- getDerivedStateFromProps props에 있는 값을 state 값으로 넣을때 사용함
- shouldComponentUpdate 는 컴포넌트 리랜더링을 결정함 (true시 render 진행, false 시 작업 취소)
- render UI를 렌더링 하는 메서드
- componentDidMount 컴포넌트가 업데이트 이후 호출되는 메서드

3. 언마운트(컴포넌트가 Dom에서 제거될때 나타남)

- 언마운트 하기 -> componentWillUnmount 순으로 진행

- componentWillUnmount 컴포넌트가 웹 브라우저 상에 사라지기 전에 호출하는 메서드 입니다.
