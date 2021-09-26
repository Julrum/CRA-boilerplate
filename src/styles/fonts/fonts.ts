import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 900;
 	font-display: swap;
 	src: local('Pretendard Black'), url('./pretendard/Pretendard-Black.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 800;
 	font-display: swap;
 	src: local('Pretendard ExtraBold'), url('./pretendard/Pretendard-ExtraBold.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 700;
 	font-display: swap;
 	src: local('Pretendard Bold'), url('./pretendard/Pretendard-Bold.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 600;
 	font-display: swap;
 	src: local('Pretendard SemiBold'), url('./pretendard/Pretendard-SemiBold.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 500;
 	font-display: swap;
 	src: local('Pretendard Medium'), url('./pretendard/Pretendard-Medium.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 400;
 	font-display: swap;
 	src: local('Pretendard Regular'), url('./pretendard/Pretendard-Regular.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 300;
 	font-display: swap;
 	src: local('Pretendard Light'), url('./pretendard/Pretendard-Light.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 200;
 	font-display: swap;
 	src: local('Pretendard ExtraLight'), url('./pretendard/Pretendard-ExtraLight.woff2') format('woff2');
 }
 @font-face {
 	font-family: 'Pretendard';
 	font-weight: 100;
 	font-display: swap;
 	src: local('Pretendard Thin'), url('./pretendard/Pretendard-Thin.woff2') format('woff2');
 }
 `;

export default FontStyles;
