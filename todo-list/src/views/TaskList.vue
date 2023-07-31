<template>
  <nav class="deep-purple lighten-3 lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><i
          class="material-icons">check_box</i></a>
      <ul class="right">
        <li><a href="/login">Login</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>

  <!-- Sidebar -->
  <aside :class="{ 'is-expanded': isSidebarExpanded }">
      <div class="logo">
        <!-- Your logo here -->
      </div>
      <div class="menu-toggle-wrap">
        <!-- Sidebar toggle button -->
        <div class="menu-toggle" @click="toggleSidebar">
          <i class="material-icons">menu</i>
        </div>
      </div>
      <div class="menu">
        <!-- Sidebar links -->
        <router-link to="/link1" class="button">
          <i class="material-icons">dashboard</i>
          <span class="text">Link 1</span>
        </router-link>
        <router-link to="/link2" class="button">
          <i class="material-icons">settings</i>
          <span class="text">Link 2</span>
        </router-link>
        <!-- Add more links as needed -->
      </div>
    </aside>

</template>

<script>
//import api from '../services/api';

import M from 'materialize-css';

export default {
  name: "taskPage",
  components: {},
  data() {
    return {
		isSidebarExpanded: false
    }
  },
  mounted() {
    const options = {
      edge: 'left' // Define o lado da barra lateral (esquerda)
    };
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, options);
    });

  },
  methods: {
	toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  }

};

</script>

<style lang="scss" scoped>
aside {
	display: flex;
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