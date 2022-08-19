# 💳 Business Card Maker

#### 💳 Business Card Maker : 비즈니스 카드 메이커 App(React-Application)

## 🕹️ Stack 사용스택

<div style="display:flex">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/PostCSS-%DD3A0A.svg?style=for-the-badge&logo=PostCSS&logoColor=white">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">

</div>
<br>

#### 🔐login page

<img src="/public/img/login.jpg" alt="app-login">

#### 💳card-maker page

<img src="/public/img/card-maker.jpg" alt="app-card-maker">

<br>

## ✨ Business Card Maker기능

<img src="/public/img/maker.jpg" alt="app-maker">
<img src="/public/img/preview.jpg" alt="app-preview">

- ~~Firebase Authentication(인증) 사용하여 로그인 기능 구현(구글, 페이스북, 깃헙)~~
- ~~로그인 성공 시 사용자 정보 받아와서 greeting 띄우기~~
- ~~React Router 사용하여 사용자 정보가 있을 경우 Business-card-maker 페이지로 이동~~
- ~~사용자 정보가 없을 시 최상위(/)경로로 이동~~
- ~~header에서 logout버튼 클릭 시 Authentication(인증) 로그아웃 기능~~
- ~~Card Maker의 AddForm에서 전송한 데이터 값으로 editForm 추가(Add)~~
- ~~Card Maker의 AddForm에서 전송한 데이터 값으로 Card Preview에 card 추가~~
- ~~Card Maker의 EditForm에서 card Delete기능(Delete)~~
- ~~Card Maker의 EditForm에서 onChange시 변경한 정보로 Cards State 업데이트하여 card 실시간으로 수정~~
- ~~Card Preview에서 card 색상 변경 기능~~
- ~~Firebase Realtime Database(실시간 데이터베이스) 사용하여 실시간으로 database 읽기·쓰기(데이터 가져오기, 저장) 및 삭제 기능 구현~~
- ~~Card Maker에서 Cloudinary 사용하여 프로필 이미지 업로드/변경 기능~~
- ~~이미지 업로드 시 로딩스피너 기능~~

<br>

## ♻️ Refactoring 리팩토링 / 보완한 기능(Clone)

#### 1. Object의 여러가지 key들에 간단하게 접근하는 방법

```javaScript
const Editor = ({ user }) => {
  const { name, company, job, email, message, theme } = user;
```

#### 2. Ref에서 form을 reset 가능하다.

```javaScript
const formRef = useRef();
formRef.current.reset();
```

#### 3. onChange event발생 시 event.currentTarget의 name과 value 이용하여 현재 변경된 key와 value만 수정하기

- Refactoring 전 코드

```javaScript
 const onChangeInput = () => {
    const changedCard = {
      id: id,
      name: nameRef.current.value,
      company: companyRef.current.value,
      job: jobRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      theme: themRef.current.value,
    };
    onChange(changedCard);
```

- Refactoring 후 코드

```javaScript
const onChange = (e) => {
    if (e.currentTarget == null) {
//event.currentTarget === null x event.currentTarget == null 이렇게 작성한 이유 : null과 undefined 둘 다 걸려주기 위해
      return;
    }
    e.preventDefault();
    addOrUpdateCard({
      ...card, //card 정보 복사한 후
      [e.currentTarget.name]: e.currentTarget.value, // 변경된 key만 value로 수정
    });
  };
```

#### 4. 2가지 기능이 가능한 함수를 props으로 전달 시, 필요한 용도로 명시하여 전달하면 용도와 쓰임을 명확히할 수 있다(가독성 등).

```javaScript
// addOrUpdateCard를 props으로 전달할 경우, 사용하고자 하는 용도로 명시하여 전달한다.
{Object.keys(cards).map((key) => (
          <EditForm
            card={cards[key]}
            key={key}
            updateCard={addOrUpdateCard} // addOrUpdateCard => updateCard로 전달
            deleteCard={deleteCard}
          ></EditForm>
        ))}
        <AddForm addCard={addOrUpdateCard}></AddForm> // addOrUpdateCard => addCard로 전달
```

#### 5. ❗cards State를 배열에서 > 오브젝트로 변경하여 성능 개선하기(접근성,비즈니스로직 수행속도 향상 등)

- Refactoring 전 코드 : cards State => 배열[]일 때

```javaScript
 const updateCard = (newCard) => {
    const updatedCard = cards.map((card) => { // .map, filter, float 등으로 접근
      if (card.id === newCard.id) {
        return { ...newCard };
      }
      return card;
  })
  }
```

- Refactoring 후 코드 : cards State => 배열x 오브젝트{}로 변경하여 key로 접근 가능

```jsx
<ul className={styles.cards}>
        {Object.keys(cards).map((key) => ( // keys배열들을 .map하여 key를 전달 => card = cards[key]로 접근 가능
          <EditForm
            card={cards[key]}
            key={key}
            addOrUpdateCard={addOrUpdateCard}
            deleteCard={deleteCard}
          ></EditForm>
        ))}
```

- ❗배열을 오브젝트로 변경한 이유 : 배열에는 각각의 데이터가 순차적으로 들어있다. map하거나 filter하거나 어떤 조건에 맞는 아이를 찾을 때, 첫번째 부터 끝까지 찾는다. 때문에 배열의 길이가 길면 길수록 알고리즘을 수행하는 속도는 길다. 특히 주기적으로 실행되는 경우, 배열이 1000개라면 업데이트를 실행하기 위해 1000개의 배열을 매번 호출하므로 성능에 좋지않다.

- 오브젝트의 특징을 사용하면 배열의 길이에 상관없이 오브젝트의 key로 접근 가능하여 비즈니스 로직 수행 속도를 개선 할 수 있다(성능 개선).

#### 6. React Router에서 navigate사용 시 새 변수에 담아 인자를 전달받아 호출()도 가능하다.

```javaScript
const navigate = useNavigate();
  const gotoMaker = (user) => { // navigate를 새 변수에서 할당, 인자로 userId받음 > 호출 시 페이지 이동
    navigate({
      pathname: "/card-maker", // 로그인시 card-maker로 이동
      state: { user: user  }, // card-maker에 State를 생성
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.id)
      .then((data) => {
        getUserData(data.user);
        gotoMaker(data.user.uid); // gotoMaker에 인자 전달하며 호출
      });
  };
```

- card-maker에서 navigate로 생성한 state 사용 가능

```javaScript
    const navigateState = useLocation.state;
    const [userData, setUserData] = useState(navigateState && navigateState.user);
```

#### 7. Switch문 사용하여 styles 변경하기(여러개의 스타일 적용 시, select옵션 등)

```javaScript
const Card = ({ user }) => {
  const { name, company, job, email, message, fileURL, theme } = user;

	return (
	    <li className={`${styles.card} ${bgChange(theme)}`}>
	    </li>
	  );
	};

	function bgChange(theme) {
	  switch (theme) {
	    case "purple":
	      return styles.purple;
	    case "pink":
	      return styles.pink;
	    case "blue":
	      return styles.blue;
	    case "dark":
	      return styles.dark;
	    default:
	      throw new Error(`unknown theme: ${theme}`);
	  }
	}
```

<br>

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

- 컴포넌트들은 각각 독립적으로 파일을 만들어 사용한다(파일내부>파일x, 각각 컴포넌트별 파일 생성).

- 항상 재사용성과 확장성을 고려하여 코드를 작성한다(로그인 기능 구현 시 다양한 provider로 로그인 가능하도록 재사용성 고려).

- 컴포넌트 자체에서 onClick시 호출되지않고 props으로 전달된다. > button사용 시 컴포넌트에서 onClick으로 함수 호출불가, props으로 전달하여 button에서 호출해야 한다.
