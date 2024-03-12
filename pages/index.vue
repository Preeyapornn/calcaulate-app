<script setup>
import { ref, watch, onMounted } from "vue";
const theme = ref("1");
const total = ref("0");
const showPreview = ref(true);
const allResult = ref(false);
const disableButton = ref(false);
const hasDecimal = ref(false);
const operators = ["+", "-", "*", "/"];
const preview = ref("0");

const key = (value) => {
  if (total.value === "0") {
    total.value = "";
  }
  total.value += value;
};

const toggleResult = () => {
  allResult.value = true;
  showPreview.value = !showPreview.value;
};

// const key = (value) => {
//   if (total.value === "0") {
//     total.value = "";
//   }
//   const isOperator = ["+", "-", "*", "/"].includes(value);
//   if (total.value.length > 0) {
//     if (isOperator) {
//       if (
//         !["+", "-", "*", "/"].includes(
//           total.value.charAt(total.value.length - 1)
//         )
//       ) {
//         let numericValue = Number(total.value);
//         total.value = new Intl.NumberFormat().format(numericValue);
//         total.value += ` ${value} `;
//       } else {
//         total.value = total.value.slice(0, -1) + ` ${value} `;
//       }
//     } else {
//       total.value += value;
//     }
//   } else {
//     total.value += value;
//   }
// };

const equal = () => {
  try {
    let result = new Intl.NumberFormat().format(parseFloat(eval(total.value)));
    total.value = result.toString();
    disableButton.value = true;
    console.log("result = " + result);
  } catch (error) {
    total.value = "Error";
  }
  toggleResult();
};

// // ---------- ทศนิยมไม่สามารถใช้ได้
// watch(total, (newTotal) => {
//   const parts = newTotal.split(/(\D)/).filter(Boolean);
//   console.log("parts : " + parts);
//   const num1 = Intl.NumberFormat().format(Number(parts[0]));
//   const operator = parts[1];
//   const num2 = Intl.NumberFormat().format(Number(parts[2]));

//   if (parts.length === 3 && operators.includes(parts[1])) {
//     preview.value = `${num1} ${operator} ${num2}`;
//     console.log("preview num1 op num2 : " + preview.value);
//   } else if (parts.length === 1) {
//     preview.value = num1;
//     console.log("preview num1 : " + preview.value);
//   } else if (parts.length === 2 && operators.includes(parts[1])) {
//     preview.value = `${num1} ${operator}`;
//     console.log("preview num1 and op : " + preview.value);
//   } else {
//     preview.value = `${num1} ${operator} ${num2}`;
//   }

//   console.log("total.value : " + total.value);
// });

watch(total, (newTotal) => {
  const parts = newTotal.split(/(\D)/).filter(Boolean);
  console.log("parts : " + parts);
  const num1 = formatNumber(parts[0]);
  const operator = parts[1] || "";
  const num2 = formatNumber(parts[2]);

  if (parts.length === 3 && operators.includes(parts[1])) {
    preview.value = `${num1} ${operator} ${num2}`;
    console.log("preview num1 op num2 : " + preview.value);
  } else if (parts.length === 1) {
    preview.value = num1;
    console.log("preview num1 : " + preview.value);
  } else if (parts.length === 2 && operators.includes(parts[1])) {
    preview.value = `${num1} ${operator}`;
    console.log("preview num1 and op : " + preview.value);
  } else {
    preview.value = `${num1} ${operator} ${num2}`;
  }
  console.log("total.value : " + total.value);
  console.log("preview.value : " + preview.value);
});

watch(total, (newDecimal) => {
  let decimal = newDecimal.toString();
  if (decimal.includes(".")) {
    hasDecimal.value = true;
    showPreview.value = false;
  } else {
    hasDecimal.value = false;
  }
});
const formatNumber = (num) => {
  if (num !== undefined && !isNaN(num)) {
    return Intl.NumberFormat().format(Number(num));
  } else {
    if (num !== undefined && num.toString().includes(".")) {
      return "";
    }
    return "";
  }
};

const clear = () => {
  total.value = "0";
  preview.value = "0";
  showPreview.value = true;
  allResult.value = false;
  disableButton.value = false;
};

//   // total.value = eval(total.value);
//   // '1' '+' '2' parseFloat  '1+2'
// };

function delNum() {
  if (total.value.length === 1) {
    total.value = "0";
  } else if (total.value.length > 1) {
    total.value = total.value.slice(0, -1);
  } else {
    total.value = total.value.slice(0, -1);
  }
}

const changeTheme = (newTheme) => {
  theme.value = newTheme;
  if (newTheme === "1") {
    console.log("theme 1");
  } else if (newTheme === "2") {
    console.log("theme 2");
  } else {
    console.log("theme 3");
  }
};
onMounted(() => {
  watch();
});
</script>

<template>
  <div>
    <div class="title">
      <div class="toggle">
        <h3
          :class="{
            'text-white': theme === '1',
            'text-black': theme === '2',
            'text-[#ffe53d]': theme === '3',
          }"
        >
          Calc
        </h3>
        <div class="right">
          <p
            id="one"
            :class="{
              'text-white': theme === '1',
              'text-black': theme === '2',
              'text-[#ffe53d]': theme === '3',
            }"
            @click="() => changeTheme('1')"
          >
            1
          </p>
          <p
            id="two"
            :class="{
              'text-white': theme === '1',
              'text-black': theme === '2',
              'text-[#ffe53d]': theme === '3',
            }"
            @click="() => changeTheme('2')"
          >
            2
          </p>
          <p
            id="three"
            :class="{
              'text-white': theme === '1',
              'text-black': theme === '2',
              'text-[#ffe53d]': theme === '3',
            }"
            @click="() => changeTheme('3')"
          >
            3
          </p>
        </div>
      </div>
      <div class="control">
        <p
          :class="{
            'text-white': theme === '1',
            'text-black': theme === '2',
            'text-[#ffe53d]': theme === '3',
          }"
        >
          Theme
        </p>
        <div class="box mt-1">
          <div
            :class="{
              ' bg-redKeyBackground': theme === '1',
              'bg-theme2-keyToggle2': theme === '2',
              'bg-[#00e0d1]': theme === '3',
            }"
            class=""
            id="circle"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-end rounded-lg mb-3"
      :class="{
        'bg-keypadBackground': theme === '1',
        'bg-[#d1cccc]': theme === '2',
        'bg-[#160628]': theme === '3',
      }"
    >
      <div
        class="font-bold text-3xl my-4 pr-4"
        :class="{
          'text-white': theme === '1',
          'text-black': theme === '2',
          'text-[#ffe53d]': theme === '3',
        }"
      >
        <p v-if="allResult && !hasDecimal">
          {{ total }}
        </p>
        <p v-if="hasDecimal">{{ total }}</p>
        <p v-if="showPreview">{{ preview }}</p>
      </div>
    </div>
    <div
      class="rounded-lg"
      :class="{
        'bg-keypadBackground': theme === '1',
        'bg-[#d1cccc]': theme === '2',
        'bg-[#160628]': theme === '3',
      }"
    >
      <div
        class="butGroup font-bold text-xl p-5 gap-4 grid grid-cols-4 col-span-4 justify-items-center"
      >
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg"
          @click="key('7')"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black  shadow-lg ': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
        >
          7
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('8')"
        >
          8
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('9')"
        >
          9
        </button>
        <button
          :disabled="disableButton"
          class="butDel w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-keyBackground text-white shadow- shadow-keyShadow shadow-lg':
              theme === '1',
            'bg-[#377f86] text-white': theme === '2',
            'bg-theme3-keyShadow3 text-white shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="delNum"
        >
          DEL
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('4')"
        >
          4
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('5')"
        >
          5
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('6')"
        >
          6
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('+', 's')"
        >
          +
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('1')"
        >
          1
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('2')"
        >
          2
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('3')"
        >
          3
        </button>
        <button
          :disabled="disableButton"
          class="butOp w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('-')"
        >
          -
        </button>
        <button
          :disabled="disableButton"
          class="butOp w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('.')"
        >
          .
        </button>
        <button
          :disabled="disableButton"
          class="butNum w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('0')"
        >
          0
        </button>
        <button
          :disabled="disableButton"
          class="butOp w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('/')"
        >
          /
        </button>
        <button
          :disabled="disableButton"
          class="butOp w-full h-12 rounded-lg shadow-md"
          :class="{
            'bg-lightGrayishOrange text-black shadow-grayishOrange shadow-lg':
              theme === '1',
            'bg-theme2-screenBackground2 text-black': theme === '2',
            'bg-theme3-keyBackground3 text-[#ffe53d] shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
          @click="key('*')"
        >
          x
        </button>
      </div>
      <div class="grid grid-cols-4 col-span-4 gap-4 font-bold px-4 pb-4">
        <button
          @click="clear"
          class="resetBut p-4 col-span-2 rounded-lg"
          :class="{
            'bg-keyBackground text-white shadow-keyShadow shadow-lg':
              theme === '1',
            'bg-[#377f86] text-white': theme === '2',
            'bg-theme3-keyShadow3 text-white shadow-theme3-keyShadow3 shadow-lg':
              theme === '3',
          }"
        >
          RESET
        </button>
        <button
          :disabled="disableButton"
          @click="equal"
          class="equalBut p-4 rounded-lg col-span-2"
          :class="{
            'bg-toggleBackground text-white': theme === '1',
            'bg-[#ca5502] text-white': theme === '2',
            'bg-[#00e0d1] text-black shadow-lg shadow-theme3-keyToggleShadow3':
              theme === '3',
          }"
        >
          =
        </button>
      </div>
    </div>
    <div class="mt-5">
      <div>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" class="font-bold">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/Preeyapornn" class="font-bold">
          Preeyaporn Petc.
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 375px) {
  * {
    margin-left: 10px;
    margin-right: 10px;
  }
}

.control #circle {
  width: 15px;
  height: 15px;
  /* background-color: hsl(6, 63%, 50%); */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 30px;
  transition: left 0.3s ease;
}

.control p {
  color: #fff;
  cursor: pointer;
  margin-right: 4px;
}

.control {
  display: flex;
  justify-content: flex-end;
}
.control .box {
  width: 60px;
  height: 15px;
  background-color: hsl(224, 36%, 15%);
  border-radius: 30px;
  margin-left: 4px;
  position: relative;
}

body.active1 {
  background-color: var(--mainbg2color);
}
body.active1 .btn {
  background-color: var(--mainbg2color);
}
body.active2 {
  background-color: var(--mainbg2color);
}

.toggle {
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.toggle p {
  margin: 0 5px;
  color: #fff;
  cursor: pointer;
}
.butGroup {
  grid-template-columns: repeat(4, 1fr);
}
</style>
