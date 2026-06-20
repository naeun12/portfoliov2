<!-- @format -->

<template>
  <div id="app">
    <Navigation :scrollToSection="scrollToSection" />

    <div id="home" class="home-container section"><Home /></div>

    <div id="about" class="aboutme-container section">
      <AboutMe />
    </div>

    <div id="services" class="services-container section">
      <Services />
    </div>

    <div id="skills" class="skills-container section">
      <Skills />
    </div>
    <div id="projects" class="projects-container section">
      <Projects />
    </div>
    <div id="certifications" class="certifications-container section">
      <Certifications />
    </div>
    <div id="contacts" class="contact-container section">
      <Contactme />
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
    Navigation,
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
  },
};
</script>
