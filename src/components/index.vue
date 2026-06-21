<!-- @format -->

<template>
  <div id="app">
    <Navigation :scrollToSection="scrollToSection" />

    <!-- Gidugangan og v-if aron hingpit nga mawala sa DOM inig human sa animation -->
    <div
      v-if="showEntrance"
      class="portfolio-container"
      :class="{ 'hide-overlay': startFadeOut }">
      <animationEntrance>
        <section class="hero-section">
          <div class="profile-image-wrapper">
            <img src="/images/lance.png" alt="Profile" class="profile-img" />
          </div>
          <h1 class="hero-title">Creative Full-Stack Developer</h1>
        </section>
      </animationEntrance>
    </div>
    <div v-if="!showEntrance" class="section-indicator">
      <div class="indicator-track">
        <div
          class="indicator-progress"
          :style="{ height: progressHeight + '%' }"></div>
      </div>
      <div class="indicator-content">
        <span class="section-number">{{ currentPage }}</span>
        <div class="indicator-line-short"></div>
        <span class="section-name">{{ currentSection }}</span>
      </div>
    </div>
    <div
      :class="{ 'main-content-ready': startFadeOut }"
      class="main-content-wrapper">
      <div id="home" class="home-container section">
        <Home :scrollToSection="scrollToSection" />
      </div>
      <div id="about" class="aboutme-container section"><AboutMe /></div>
      <div id="services" class="services-container section"><Services /></div>
      <div id="skills" class="skills-container section"><Skills /></div>
      <div id="projects" class="projects-container section"><Projects /></div>
      <div id="certifications" class="certifications-container section">
        <Certifications />
      </div>
      <div id="contacts" class="contact-container section"><Contactme /></div>
    </div>
  </div>
</template>

<script>
import Home from "./home.vue";
import AboutMe from "./aboutme.vue";
import Services from "./services.vue";
import Skills from "./skills.vue";
import Projects from "./projects.vue";
import Certifications from "./certifications.vue";
import Contactme from "./contactme.vue";
import animationEntrance from "./animationEntrance.vue";
import Navigation from "./partials/navigation.vue";

export default {
  components: {
    Home,
    AboutMe,
    Services,
    Skills,
    Projects,
    Certifications,
    Contactme,
    animationEntrance,
    Navigation,
  },
  data() {
    return {
      startFadeOut: false,
      showEntrance: true,
      currentSection: "HOME",
      currentPage: "01",
      progressHeight: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.startFadeOut = true;
    }, 2200);
    setTimeout(() => {
      this.showEntrance = false;
    }, 3000);
    window.addEventListener("scroll", this.detectSection);
    this.detectSection();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.detectSection);
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },

    detectSection() {
      const sections = document.querySelectorAll(".section");

      // Kwentahon ang kinatibuk-ang scroll progress para sa dynamic line
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      this.progressHeight =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      const pageMap = {
        home: "01",
        about: "02",
        services: "03",
        skills: "04",
        projects: "05",
        certifications: "06",
        contacts: "07",
      };

      sections.forEach((section) => {
        const top = section.offsetTop - 250;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          this.currentSection = section.id.toUpperCase();
          this.currentPage = pageMap[section.id];
        }
      });
    },
  },
};
</script>

<style src="../components/assets/css/animationEffects.css"></style>
<style src="../components/assets/css/index.css"></style>
