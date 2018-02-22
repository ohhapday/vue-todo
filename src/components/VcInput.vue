<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Todo 입력" v-model="message">
          <span class="input-group-btn">
              <button type="button" class="btn btn-success" @click="postData">
                <i class="fa fa-save"></i>
                저장
              </button>
          </span>
        </div>
      </div>
    </div>
    <p>
      메시지: {{ message }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vc-input',
    methods: {
      postData() {
        this.$emit('postData', this.message);
        this.message = '';
      }
    },
    data() {
      return {
        message: '',
      };
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
