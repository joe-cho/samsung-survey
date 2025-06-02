const surveyData = {
  currentStep: 1,
  steps: [
    { instruction: '안녕하세요, 본 설문조사는 KAIST Computational Sociology Lab에서 효과적인 기업 사내 커뮤니케이션 증진을 위해 기획되었습니다. 귀하의 의견은 사내 커뮤니케이션의 질을 향상시키기 위한 소중한 자료로 쓰여질 것입니다. 설문조사에 소요되는 시간은 약 10분 내외로 예상되며, 참가하신 모든 분들께 스타벅스 무료 음료권 1장을 제공할 예정입니다. 설문조사와 관련하여 질문이 있으시면 본 이메일(lanukim@kaist.ac.kr)로 연락 부탁드립니다. 감사합니다.' },
    { instruction: '귀하는 현재 모 기업의 직원입니다. 귀하의 기업에서 불미의 사고가 일어났다고 가정합니다.  회사측에서 이 사건에 대해 직원들과 소통하기 위하여 제공되는 두 편의 그림을 주의깊게 읽고, 제공되는 질문에 답해주세요.' },
    { instruction: '다음은 그림  A입니다.' },
    { instruction: '다음은 그림  B입니다.' },
    { instruction: '다음 설문에 답해주세요.' },
    { instruction: '이상으로 모든 그림 비교 시나리오는 끝났습니다. 귀하께서 시나리오를 비교하면서 생각하셨던 점에 대해 간략히 답변해주십시오.' },
    { instruction: '마지막으로 다음의 질문에 답변해주십시오.' },
    { instruction: '감사합니다.' }
  ]
}

export default surveyData;