# hypeTemplater

hypeTemplates with Next.js

skills

- front : Next.js
- back : firebase,
- design: figma,

deploy ref

- https://www.youtube.com/watch?v=KvoFvmu5eRo

design ref

- http://www.dazedkorea.com/

structure

- 메인 페이지
- 상세 페이지 (포스팅)
- 에디팅 페이지 (커스텀 템플레이트)
- 다크모드

# Season 1. TODO LIST

## 1st Week

- next setting

  - [ ] start (install)

- api research

  - [x] firebase
        : firebase는 실시간 데이터베이스, 인증, 스토리지, 호스팅, 애널리틱스, 클라우드 메시징를 제공합니다. 웹 어플리케이션을 개발하는데 필요한 많은 기능을 제공하기 때문에 백엔드 서버가 없는 상황에서는 좋은 선택입니다. 하지만, Firebase의 Client SDK는 브라우저 내 스토리지에 현재 사용자의 인증 정보를 저장하고 관리하기 때문에 SSG를 사용하는데 한계가 있습니다. 그러나, next-firebase-auth 를 사용하면 소셜 로그인 기능을 구현할 수 있기 때문에 이번 프로젝트와 같이 소규모 프로젝트를 진행하기에 firebase는 충분하다고 생각합니다.
  - [ ] notion api
        : Notion API는 데이터베이스, 페이지, 블록 등을 포함한 노션의 모든 콘텐츠를 프로그래밍 방식으로 조작하고 처리할 수 있는 API를 제공합니다. Notion은 데이터를 저장하고 공유하는 플랫폼으로서, 다양한 종류의 데이터를 하나의 작업 공간에서 관리할 수 있습니다. 따라서, 만약 해당 서비스에서 Notion의 데이터를 사용하고 관리해야 한다면 Notion API를 사용하는 것이 좋습니다. 하지만, 이번 프로젝트에서는 Notion page와 연동하여 data를 관리해야 하는 상황이 아니기 때문에 맞지 않다고 생각했습니다. 또한, notion에서는 사용자 로그인, 회원가입 등의 인증 기능을 제공하지 않습니다. next-auth와 같은 다른 라이브러리를 사용해야 합니다.

- firebase research
  - [x] image upload
        : Firebase Storage를 사용하면 사용자가 업로드한 파일, 이미지, 비디오 등을 저장하고, 다운로드할 수 있습니다. Firebase Storage를 사용하여 이미지를 업로드하려면, Firebase SDK를 사용하여 클라이언트에서 업로드 요청을 만들어야 합니다.
  - [x] SWR
        SWR은 Next.js에서 개발된 라이브러리로, 다음과 같은 점에서 SSR(Server Side Rendering)에 최적화되어 있습니다.
    1. 데이터 프리페칭(Prefetching): SWR은 데이터를 요청하는 동안 데이터를 프리페칭하여 캐시에 저장할 수 있습니다. 이를 통해 서버에서 렌더링하는 동안 필요한 데이터를 미리 불러올 수 있으므로 SSR에 적합합니다.
    2. 캐시(Cache) 관리: SWR은 데이터를 캐시에 저장하여 불필요한 데이터 요청을 줄입니다. 이를 통해 SSR에서 렌더링할 때 필요한 데이터를 빠르게 불러올 수 있습니다.
    3. 서버사이드 캐싱(Server-side caching): SWR은 서버사이드 캐싱을 지원합니다. 이를 통해 서버에서 데이터를 불러오는 시간과 대역폭을 절약할 수 있습니다.
    4. 사용성(Usability): SWR은 서버사이드와 클라이언트사이드 모두에서 사용이 가능합니다. 따라서, Next.js에서는 서버사이드 렌더링에 최적화된 SWR을 사용할 수 있습니다.

## 2nd Week

- firebase setting

  - [x] firebase 계정생성
  - [x] firebase config setting

- plan + db structure setting

  - [x] 필요한 기능 나열

    - 메인 페이지 <Main>
      헤더 - GNB, 로그인 <Header>
      컨텐츠 - 포폴 리스트 <PortfolioList>
      푸터 <Footer>
      공유하기 kakao SDK, facebook <ShareSNS>
      상단으로가기버튼 <Button>
      다크모드버튼 <Button>

    - 상세페이지 <Detail>
      무한스크롤(?) 파이어베이스에서 커서 관리 가능한지 리서치 필요
      템플릿 뷰어 <Template>
      댓글 <Comment>
      더보기리스트 <PortfolioMore>

    - 에디팅페이지 <Edit>
      파일(이미지) 업로드기능
      텍스트 에디팅 기능

    - 로그인 페이지 <Login>
      소셜 로그인 기능

    - 마이 페이지 <MyPage>
      탈퇴기능
      나의 포트폴리오 리스트 보기 기능 (CRUD)

  - [x] 공통 컴포넌트 구현

    - 버튼
      공유버튼, 상단으로가기버튼, 다크모드 버튼, 일반 텍스트 버튼들...
    - 아이콘
      공유아이콘, 화살표아이콘, 햄버거(메뉴바), 다크모드 아이콘,

  - [x] setting db model (User, Portfolio, \*Tempalte ...)

    - User
      uid: string;
      name: string;
      password(???): string
      userRole: 'admin' | 'designer'
      useProfile
      phone: number;
      email: string;

    - Portfolio
      user: User;
      id: number;
      createdAt: Date;
      deletedAt: number;
      updatedAt: Date;
      title: string;
      template: Template[];
      thumbnail: Thumbnail;
      comments: Comment[];

    - Thumbnail
      !TODO File 처리 Firebase 리서치 필요!

    - Comment
      content: string;
      id: number;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: number;
      portfolioID: number;
      user: User;

    - Template
      리서치 필요 ..

## 3rd Week

- design system

  - [ ] page component
  - [ ] element component (primary, secondary + darkkmode)
  - [ ] assets

- firebase api connect
  - [ ] firebase (login auth, get, update, new, delete)
  - [ ] firebase config setting

## 4th Week

- page rendering

# Season2. TODO LIST

## 1st Week

- editor template setting
