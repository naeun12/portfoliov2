<!-- @format -->

<template>
  <nav class="navbar navbar-expand-lg py-0 portfolio-navbar">
    <div
      class="container-fluid container-navigation d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <div class="logo-wrapper">
        <a class="navbar-brand-custom" href="#">
          <span class="brand-bracket">&lt;</span>LM<span class="brand-bracket"
            >/&gt;</span
          >
        </a>
      </div>

      <!-- Navigation Links -->
      <div class="links-items">
        <ul class="nav-links-list d-flex gap-2 gap-md-4 mb-0 list-unstyled">
          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'home' }"
              @click.prevent="scrollToSection('home')">
              Home
            </a>
          </li>

          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'about' }"
              @click.prevent="scrollToSection('about')">
              About Me
            </a>
          </li>

          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'services' }"
              @click.prevent="scrollToSection('services')">
              Services
            </a>
          </li>

          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'skills' }"
              @click.prevent="scrollToSection('skills')">
              Skills
            </a>
          </li>
          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'projects' }"
              @click.prevent="scrollToSection('projects')">
              Projects
            </a>
          </li>
          <li>
            <a
              class="nav-item-link"
              :class="{ active: activeSection === 'certifications' }"
              @click.prevent="scrollToSection('certifications')">
              Certifications
            </a>
          </li>
        </ul>
        <button @click="toggleTheme" class="theme-btn">
          {{ theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode" }}
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
      // 1. Set default to 'home' instead of 'services'
      activeSection: "home",
      theme: "dark",
    };
  },

  mounted() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
          entry.target.classList.add("show");
        }
      });
    }, {});

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
  },
};
</script>

<style scoped src="../../../public/css/navigation.css"></style>
