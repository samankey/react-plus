# GubgooBackoffice

# 기본사용

## 스토리북 열기

nx storybook design-system

## design-system 패키지의 components/Button 폴더에 Button컴포넌트 추가

nx g c -p design-system -e -P --dir lib/components Button

## 스토리북 자동 생성

nx g @nrwl/react:stories -p 패키지명

## 더미서버 실행

nx serve dummy-backend

# 관리

## 앱 추가

yarn nx g @nrwl/react:app 앱이름

## 패키지 추가

yarn nx g @nrwl/react:lib 패키지 명

## 라이브러리 추가

nx g lib 패키지명

## 라이브러리에 스토리북 추가

nx g @nrwl/react:storybook-configuration 패키지명 --generateStories=true --bundler=vite --configureTestRunner=true --storybook7Configuration=true --tsConfiguration=true

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve admin` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.