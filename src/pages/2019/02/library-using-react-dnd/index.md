---
title: react-motion을 활용한 라이브러리 개발
date: '2019-02-25'
mainImage: './react-dnd.png'
tags: ['react', 'javascript']
---

> 이 글은 react 환경에서 `drag & drop` 효과를 쉽게 사용할 수 있도록 도와주는 `react-dnd`라는 라이브러리를 사용하면서 배웠던 내용들을 정리했다. 이번 글 역시 스스로의 학습 내용을 정리하는 글이기 때문에 편한 말투로 작성했다.<!-- end -->

우선 드래그 앤 드롭 이벤트의 경우 기본적으로 JavaScript에서 제공하는 인터페이스를 통해 해당 기능을 활용할 수 있지만 해당 기능을 활용하기 위해선 다소 복잡한 JavaScript 코드의 구현이 필요했다.

하지만 `HTML5`에서는 드래그 앤 드롭 기능이 표준 권고안에 포함되어 이 전에 JavaScript 만을 활용할때 보다 간단하게 사용할 수 있게 되었다(물론 이 과정에서도 JavaScript의 사용은 필요하다). 현재 사용되고 있는 대부분의 주요 브라우저들은 해당 기능을 제공하기 때문에 웹 페이지 내에 존재하는 요소에 대하여 드래그 앤 드롭 기능을 사용할 수 있는 환경이 되었다.

물론 react를 활용하는 경우에도 컴포넌트에서 기본적으로 제공하는 `onDrag` 관련 이벤트를 통해 드래그 앤 드롭 기능을 구현할 수 있다. 하지만 동일한 컴포넌트의 종속된 내부 컴포넌트에 대한 드래그 앤 드롭 이벤트가 아닌, 서로 다른 부모 컴포넌트를 가지는 자식 컴포넌트에 대한 드래그 앤 드롭 이벤트를 구현하기가 생각보다 쉽지 않았다.

그래서 이와 관련한 여러가지 라이브러리를 찾아보던 중 `react-dnd`라는 라이브러리를 찾게 되었고, 내가 원하고자 했던 기능뿐만 아니라 그와 관련된 다양한 기능을 제공하는 라이브러리라 판단되어 해당 라이브러리를 사용하게 되었다. 그럼 이제 `react-dnd`의 간단한 소개와 함께 실제 사용하면서 만들어 봤던 기능들에 대해 간단히 정리해보려 한다.

## react-dnd

앞서 설명한대로 `react-dnd` 는 특정 부모에 종속된 컴포넌트 구조와 상관없이 드래그 앤 드롭 관계로 연결된 컴포넌트 간의 이벤트를 제공해주는 기능을 제공하는 라이브러리이다. 다만 이러한 기능을 활용하기 위해서는 디자인 패턴과 관련된 개념을 익혀야 하며 나 역시 아직까지 해당 라이브러리를 제대로 사용하기 위한 모든 개념들을 전부 파악하진 못했다.

우선 앞서 설명한 특정 컴포넌트에 종속되지 않고 데이터를 처리하기 위한 패턴의 경우 이 전에 사용해왔던 `redux`의 개념과 유사하다. 실제로 `react-dnd` 라이브러리의 경우 내부적으로 `redux`를 사용하기 때문에 해당 라이브러리를 사용하기 위해서는 `redux`에 대한 개념을 어느정도 익히는 것이 필요하다.

또한 `react-dnd` 환경에서는 `HTML5`기반의 드래그 앤 드롭 기능을 활용하기 위한 플러그인이 제공하며 `react-dnd-html5-backend` 라는 플러그인을 통해 `HTML5 드래그 앤 드롭 API`를 기반으로 구축할 수 있다. 다만 해당 플러그인의 경우 `HTML5` 기반의 드래그 이벤트를 활용할 때와 같은 장/단점을 가지고 있다.

장점인 경우 앞서 언급한 내용처럼 복잡한 구조의 JavaScript 코드를 구현하지 않아도 기본적으로 브라우저에서 제공하는 기능을 통해 드래그되는 DOM 요소의 움직임을 표현할 수 있다. 다만 터치 스크린에서는 작동하지 않으며 낮은 버전의 IE 환경에서 사용할 수 없는 단점이 있다. 만약 모바일 환경의 서비스 또는 낮은 버전의 IE 환경에서의 서비스가 필요한 경우 해당 라이브러리의 사용을 고려해야봐 한다.

다만 해당 라이브러리를 통해 react 또는 그와 관련된 시멘틱 이벤트에 의존하지 않기 때문에 드래그 이벤트와 관련된 코드의 관리를 쉽게 할 수 있다. 그리고 이 과정은 `redux`를 활용한 패턴과 유사하다.

<figure>
  <iframe src="https://codesandbox.io/embed/zkkx7nvrnl?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</figure>