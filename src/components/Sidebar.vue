<template>
  <aside :class="{ 'is-expanded': is_expanded }">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <!-- Search section ----------------------------------------------------------- -->
    <div>
      <input v-if="is_expanded" class="search" type="text" placeholder="Search..." />
      <div v-else class="search-icon" @click="toggleMenu">
        <span class="material-icons">search</span>
      </div>
    </div>

    <!-- Main menu section of logic ------------------------------------------------->
    <h3>Menu</h3>
    <div class="menu">
      <router-link v-for="item in menuItems" :key="item.text" :to="item.to" class="button" :title="item.text">
        <span class="material-icons">{{ item.icon }}</span>
        <span class="text">{{ item.text }}</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <!-- Bottom Menu section ------------------------------------------------------------------------->
    <div class="menu">
      <router-link v-for="item in bottomMenuItems" :key="item.text" :to="item.to" class="button" :title="item.text">
        <span class="material-icons">{{ item.icon }}</span>
        <span class="text">{{ item.text }}</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import logoURL from '../assets/logo.png';

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem('is_expanded', is_expanded.value);
};

const menuItems = [
  { to: '/', icon: 'dashboard', text: 'Dashboard' },
  { to: '/task', icon: 'task', text: 'Tasks' },
  { to: '/team', icon: 'group', text: 'Team' },
  { to: '/bin', icon: 'delete', text: 'Bin' }
];

const bottomMenuItems = [
  { to: '/account', icon: 'account_circle', text: 'Account' },
  { to: '/setting', icon: 'settings', text: 'Settings' }
];
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  .search {
    width: 100%;
    margin-bottom: 1rem;
    background-color: var(--dark-alt);
    flex: 1;
    align-items: center;
    background: transparent;
    border-radius: 5px;
    padding: 0.2rem;
    border: 1px solid var(--primary);
    color: var(--light);
    padding: 0.5rem;
    font-size: 1rem;
  }
  .search-icon {
    text-decoration: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: 0.2s ease-out;
    }
    &:hover {
      .material-icons {
        color: var(--primary);
      }
    }
  }

  h3, .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      position: relative;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons, .text {
          color: var(--primary);
        }
      }

      &::after {
        content: attr(title);
        position: absolute;
        left: 100%;
        white-space: nowrap;
        background-color: var(--primary);
        color: var(--light);
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        opacity: 0;
        transform: translateX(1rem);
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        pointer-events: none;
      }

      &:hover::after {
        opacity: 1;
        transform: translateX(0);
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons, .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3, .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
