<script>
// Aqui uso Options API
export default {
  data() {
    return {
      currentValue: "",
      tags: [],
    };
  },

  methods: {
    handleKeyDown(e) {
      if (this.currentValue !== "" && e.key === "Enter") {
        if (!this.tags.some((t) => t === this.currentValue.toLowerCase())) {
          this.tags.push(this.currentValue);
          this.currentValue = "";
          return;
        }
      }

      if (this.currentValue === "" && e.key === "Backspace") {
        this.tags.pop();
        return;
      }
    },
    deleteTag(text) {
      this.tags = this.tags.filter((item) => item !== text);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="inputTag">
      <div class="tags">
        <div class="tag" v-for="(tag, index) in tags" :key="index">
          {{ tag }} <button @click="deleteTag(tag)">X</button>
        </div>
      </div>
      <input type="textarea" v-model="currentValue" @keydown="handleKeyDown" />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: blue;
  margin: 20px;
  text-align: center;
  min-height: 45px;
  height: auto;
}
.inputTag {
  display: inline-flex;
  border: solid 1px blue;
  min-height: 35px;
  margin-top: 4.5px;
  height: auto;
}

.tags {
  display: flex;
  gap: 3px;
  padding: 3px;
  background-color: #ffffff;
  max-width: 70%;
  overflow-wrap: break-word;
}

.tags .tag {
  display: flex;
  /* padding: 5px; */
  border: solid 1px black;
  border-radius: 3px;
  gap: 5px;
  align-items: center;
  background-color: #f5f5f5;
  justify-content: center;
}

.inputTag input {
  border: none;
  outline: none;
  /* z-index: 5;
  position: relative; */
}

.inputTag button {
  background-color: transparent;
  border: none;
  border-radius: 3px;
}
.inputTag button:hover {
  background-color: #ccc;
}
</style>
