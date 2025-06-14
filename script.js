function calculateGrades() {
  const total = parseInt(document.getElementById("totalStudents").value);
  const gradeRatios = [0.04, 0.07, 0.12, 0.17, 0.20, 0.17, 0.12, 0.07, 0.04];

  if (isNaN(total) || total <= 0) {
    alert("유효한 전체 인원 수를 입력하세요.");
    return;
  }

  const results = gradeRatios.map(ratio => Math.round(total * ratio));

  let output = "<ul>";
  results.forEach((count, i) => {
    output += `<li>${i + 1}등급: ${count}명</li>`;
  });
  output += "</ul>";

  document.getElementById("gradeDistribution").innerHTML = output;
}

function addSubject() {
  const subjectsDiv = document.getElementById("subjects");
  const inputCount = subjectsDiv.querySelectorAll(".gradeInput").length + 1;

  // 새로운 과목 입력 블록
  const subjectWrapper = document.createElement("div");
  subjectWrapper.className = "subjectWrapper";
  subjectWrapper.style.marginBottom = "8px";

  const newInput = document.createElement("input");
  newInput.type = "number";
  newInput.className = "gradeInput";
  newInput.placeholder = `과목 ${inputCount} 등급 (1~9)`;
  newInput.min = 1;
  newInput.max = 9;
  newInput.style.marginRight = "8px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.onclick = () => {
    subjectsDiv.removeChild(subjectWrapper);
  };

  subjectWrapper.appendChild(newInput);
  subjectWrapper.appendChild(deleteBtn);
  subjectsDiv.appendChild(subjectWrapper);
}

function calculateAverage() {
  const inputs = document.querySelectorAll(".gradeInput");
  const grades = Array.from(inputs)
    .map(input => parseInt(input.value))
    .filter(v => !isNaN(v) && v >= 1 && v <= 9);

  if (grades.length === 0) {
    document.getElementById("averageResult").textContent = "등급을 입력해주세요.";
    return;
  }

  const sum = grades.reduce((a, b) => a + b, 0);
  const average = (sum / grades.length).toFixed(2);

  document.getElementById("averageResult").textContent = `전체 평균 등급: ${average}등급`;
}
