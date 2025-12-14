// Style cho body
Object.assign(document.body.style, {
  backgroundColor: "#ffd21fae",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  margin: "0",
  fontFamily: "Arial, sans-serif"
});
// Tạo khung máy tính
const calculator = document.createElement("div");
Object.assign(calculator.style, {
  backgroundColor: "#fff",
  width: "320px",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0 10px 20px #e4e4e7",
  display: "flex",
  flexDirection: "column"
});
document.body.appendChild(calculator);
// Tạo màn hình hiển thị
const displayScreen = document.createElement("div");
Object.assign(displayScreen.style, {
  backgroundColor: "#222",
  borderRadius: "15px",
  height: "60px",
  padding: "10px 15px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  overflow: "hidden"
});
calculator.appendChild(displayScreen);
// Phần hiển thị giá trị
const output = document.createElement("div");
output.textContent = "0";
Object.assign(output.style, {
  color: "#fff",
  fontSize: "48px",
  whiteSpace: "nowrap",
  overflow: "hidden"
});
displayScreen.appendChild(output);
// Khung nút
const buttonGrid = document.createElement("div");
Object.assign(buttonGrid.style, {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px"
});
calculator.appendChild(buttonGrid);
// Các nút
const buttons = [
  "C", "DEL", ".", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", "="
];
// Tạo và gán chức năng cho nút
buttons.forEach(label => {
  const btn = document.createElement("button");
  btn.textContent = label;
  Object.assign(btn.style, {
    padding: "15px",
    fontSize: "22px",
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 5px 5px #bebebe",
    cursor: "pointer",
    backgroundColor: label === "=" ? "#a27c5d" : "#f2f2f2",
    color: label === "=" ? "#fff" : "#000",
    gridColumn: label === "=" ? "span 2" : "auto"
  });
  // Xử lý sự kiện click
  btn.addEventListener("click", () => {
    if (label === "C") {
      output.textContent = "0";
    } else if (label === "DEL") {
      output.textContent = output.textContent.slice(0, -1) || "0";
    } else if (label === "=") {
      try {
        let result = eval(output.textContent);
        output.textContent = +result.toFixed(10);
      } catch {
        output.textContent = "Lỗi";
      }
    } else {
      if (output.textContent === "0" && /[0-9]/.test(label)) {
        output.textContent = label;
      } else {
        output.textContent += label;
      }
    }
  });
  buttonGrid.appendChild(btn);
});
