<!-- @format -->

<template>
  <nav class="navbar navbar-expand-lg py-0 portfolio-navbar">
    <div
      class="container-fluid container-navigation d-flex justify-content-between align-items-center">
      <div class="logo-wrapper">
        <a class="navbar-brand-custom" href="#">
          <span class="brand-bracket">&lt;</span>LM<span class="brand-bracket"
            >/&gt;</span
          >
        </a>
      </div>

      <button
        class="menu-toggle-btn d-lg-none"
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle navigation">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <div class="links-items" :class="{ 'mobile-open': isMenuOpen }">
        <ul
          class="nav-links-list d-flex flex-column flex-lg-row gap-2 gap-md-4 mb-0 list-unstyled">
          <li v-for="item in menuItems" :key="item.id">
            <a
              class="nav-item-link"
              :class="{ active: activeSection === item.id }"
              @click.prevent="handleNavClick(item.id)">
              {{ item.label }}
            </a>
          </li>
        </ul>

        <button @click="toggleTheme" class="theme-btn">
          {{ theme === "dark" ? "☀ Light" : "🌙 Dark" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    scrollToSection: Function,
  },

  data() {
    return {
      activeSection: "home",
      theme: "dark",
      isMenuOpen: false, // Tracks mobile menu toggle state
      menuItems: [
        { id: "home", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "services", label: "Services" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "certifications", label: "Certifications" },
      ],
    };
  },

  mounted() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.theme = savedTheme;
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleNavClick(sectionId) {
      this.isMenuOpen = false; // Auto-close drawer menu when a link is clicked
      if (this.scrollToSection) {
        this.scrollToSection(sectionId);
      }
    },
  },
};
</script>
<style scoped src="../assets/css/navigation.css"></style>
