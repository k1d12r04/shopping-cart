<template>
  <header>
    <h1>
      <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <TransitionGroup name="navList" tag="ul">
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </TransitionGroup>
    </nav>
    <div>
      <transition name="fade" appear mode="out-in">
        <button v-if="!isLoggedIn" @click="login">Login</button>
        <button v-else @click="logout">Logout</button>
      </transition>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout',
    }),
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedInResult;
    },
    cartQuantity() {
      return this.$store.getters['products/quantity'];
    },
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #3b4d61;
  border-color: #3b4d61;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  /* border: 1px solid #1e847f; */
  border: none;
  background-color: transparent;
  color: #1e847f;
  border-radius: 30px;
  transition: all 0.1s ease-in-out;
}

button:hover,
button:active {
  background-color: #ecc19c;
  color: #fff;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.navList-move,
.navList-enter-active,
.navList-leave-active {
  transition: all 0.3s ease;
}

.navList-enter-from,
.navList-leave-to {
  opacity: 0;
  transform: translateY(3rem);
}

.navList-enter-to,
.navList-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
