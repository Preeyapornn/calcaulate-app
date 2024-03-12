<template>
  <div class="calculator">
    <input v-model="display" readonly class="display" />
    <div class="keys">
      <button @click="handleButtonClick('1')">1</button>
      <button @click="handleButtonClick('2')">2</button>
      <!-- เพิ่มปุ่มตัวเลขอื่น ๆ ตามต้องการ -->
      <button @click="handleButtonClick('+')">+</button>
      <button @click="handleButtonClick('-')">-</button>
      <button @click="handleButtonClick('*')">*</button>
      <button @click="handleButtonClick('/')">/</button>
      <button @click="handleButtonClick('=')">=</button>
      <button @click="handleButtonClick('.')">.</button>
      <button @click="clear()">C</button>
    </div>
  </div>
</template>

<script setup>
//   const { ref } = defineProps(['display']);
const display = ref("");

function handleButtonClick(value) {
  if (value === "=") {
    calculate();
  } else {
    if (value === "." && display.value.includes(".")) {
      return; // ไม่ให้ทำการเพิ่ม '.' ซ้ำ
    }
    display.value += value;
    formatInput();
  }
}

function calculate() {
  try {
    // ให้ผลลัพธ์เป็น NumberFormat
    display.value = new Intl.NumberFormat().format(eval(display.value));
  } catch (error) {
    display.value = "Error";
  }
}

function formatInput() {
  // ฟอร์แมตให้เป็น NumberFormat
  display.value = new Intl.NumberFormat().format(
    parseFloat(display.value.replace(/,/g, ""))
  );
}

function clear() {
  display.value = "";
}
</script>

<style scoped>
.calculator {
  text-align: center;
}

.display {
  width: 200px;
  margin-bottom: 10px;
}

.keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

button {
  width: 50px;
  height: 50px;
  font-size: 1.2em;
}
</style>
