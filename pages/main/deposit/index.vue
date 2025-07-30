<script setup>
import { ref } from 'vue'
import AnimatedNumber from './components/AnimatedNumber.vue' // 确保路径正确

// 使用 main 布局
definePageMeta({
	layout: 'main'
})

const accountBalance = ref(100.50)
const productQuantity = ref(5)

const deposit = (amount) => {
	accountBalance.value += amount
}

const withdraw = (amount) => {
	accountBalance.value -= amount
}

const resetBalance = () => {
	accountBalance.value = 0.00
}

const addProduct = (amount) => {
	productQuantity.value += amount
}

const removeProduct = (amount) => {
	if (productQuantity.value - amount >= 0) {
		productQuantity.value -= amount
	} else {
		productQuantity.value = 0
	}
}
</script>

<template>
  <div class="page">
    <ClientOnly>
			<h1>Vue 3 Animated Number</h1>

			<div class="counter-section">
				<p class="label">账户余额:</p>
				<div class="animated-value amount">
					$<AnimatedNumber :value="accountBalance" :decimals="2" :duration="1500" />
				</div>
				<button @click="deposit(50.75)">存入 $50.75</button>
				<button @click="withdraw(20.30)">取出 $20.30</button>
				<button @click="resetBalance">重置余额</button>
			</div>

			<hr>

			<div class="counter-section">
				<p class="label">商品数量:</p>
				<div class="animated-value quantity">
					<AnimatedNumber :value="productQuantity" :decimals="0" :duration="800" /> 件
				</div>
				<button @click="addProduct(100)">增加 100 件</button>
				<button @click="removeProduct(100)">减少 100 件</button>
			</div>
		</ClientOnly>
  </div>
</template>

<style lang="less" scoped>
.page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #28549e;
  margin-bottom: 40px;
}

.counter-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.label {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
}

.animated-value {
  font-size: 3em;
  font-weight: bold;
  color: #007bff; /* 默认颜色 */
  margin: 15px 0;
  min-height: 1.5em; /* 防止高度跳动 */
  display: inline-block; /* 确保能应用内联样式 */
}

.animated-value.amount {
  color: #28a745; /* 金额专用绿色 */
}

.animated-value.quantity {
  color: #ffc107; /* 数量专用黄色 */
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

hr {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 40px 0;
}
</style>
