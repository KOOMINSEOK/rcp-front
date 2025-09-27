# 지능형원자로 냉각재 펌프 이상 진단 소프트웨어 개발

## 개요

<img width="725" height="329" alt="image" src="https://github.com/user-attachments/assets/a1957914-ed4c-46f9-b5e2-80d49157639b" />

원자로 냉각재 펌프의 진동 데이터와 AI를 이용해서 이상 여부를 판단해주는 소프트웨어입니다.
원자로 냉각재 펌프에 부착한 센서 데이터의 노이즈를 제거하고 Orbit 그래프로 변환한 뒤,
AI 모델을 통해 정상 상태와 비교하여 이상을 탐지합니다.

## 구현한 기능

  1. 분석 페이지

<img width="765" height="350" alt="image" src="https://github.com/user-attachments/assets/9b0a98c3-2271-4584-88a4-a2566d059e33" />

데이터가 들어가 있는 폴더를 선택하면 데이터 파일들이 보여짐. 이 중 데이터를 선택하면 서버에 업로드 되고, AI가 분석한 결과를 받음. 해당 결과를 간략히 보여주는 페이지

2. 결과 페이지

<img width="433" height="196" alt="image" src="https://github.com/user-attachments/assets/605d4bf2-2ffc-4dbb-b4dd-c9def4e2a042" />
<img width="424" height="211" alt="image" src="https://github.com/user-attachments/assets/178f8a85-dd93-41f0-87e4-e132f87db8de" />

업로드 했던 파일에 대한 자세한 분석을 확인할 수 있는 페이지. 1x 2x의 time, fft 도메인 그래프를 보여줘서 어떤 부분에 문제가 발생했는지 파악할 수 있게 해줌

3. 히스토리 페이지

<img width="713" height="318" alt="image" src="https://github.com/user-attachments/assets/b8509179-c58d-41b1-8171-8e2b418496a4" />

지금까지 AI를 통해 분석한 결과들을 확인할 수 있는 페이지 검색을 통해서 특정 시간대에 대한 파일들을 필터링해서 확인할 수 있음

## 트러블 슈팅

### 문제 상황
센서에서 수집한 Raw Binary 데이터를 AI 학습이 가능한 특징 데이터로 변환해야 했습니다. 
하지만 이를 위해 필수적인 진동 분석 이론이 복잡해서
팀원 전체가 데이터 처리 방향성을 이해하고 협업하는데 어려움을 겪는 문제가 있었습니다.

### 해결

진동 분석 도메인을 주도적으로 학습하여 팀의 '기술 통역사' 역할을 자처했습니다

#### 데이터 처리 파이프라인 설계
학습한 이론을 바탕으로, Raw Data를 AI 모델이 학습할 수 있는 의미 있는 특징(Feature) 데이터로 변환하는 전체 파이프라인(필터링 → FFT → 특징 추출)을 설계하고 시각화하여 팀원들에게 공유했습니다.
#### API 요구사항 명세화
클라이언트(UI)에서 사용자의 효과적인 진단을 돕기 위해 어떤 데이터(필터링된 신호, 주파수별 세기 등)가 필요한지를 명확히 정의하고, 백엔드 API 설계를 주도하여 문제 해결의 완성도를 높였습니다.

<img width="776" height="205" alt="image" src="https://github.com/user-attachments/assets/b42209b8-925f-4540-94ff-f44e98d50a64" />

### 주요 성과 및 배운점
전문 분야의 지식을 이용한 데이터 가공 로직을 설계하면서 서로 다른 분야의 지식을 융합하여 기술적인 해결책을 만드는 능력을 기를 수 있었습니다.
또, 복잡한 지식을 요구사항 구체화해서 팀원들이 이해하기 쉽게 프로젝트의 방향성을 제시하고 팀의 협업을 이끌었습니다. 

### 기술 스택

Frontend
•	React, JavaScript
Backend & API
•	Node.js
Data Processing
•	Python
Domain Knowledge
•	Signal Processing: FFT, Filtering, Noise Reduction
•	Vibration Analysis: 주파수 해석, 특징 추출 로직 설계

