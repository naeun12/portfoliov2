<!-- @format -->
<template>
  <div class="skills-viewport">
    <div class="container-skills">
      <!-- Header Area -->
      <div class="header-section">
        <h1 class="skills-heading">My Skills</h1>

        <!-- Navigation Tabs -->
        <div class="tabs-container">
          <button
            class="tab-link"
            :class="{
              active: activeTab === 'technical',
              inactive: activeTab !== 'technical',
            }"
            @click="switchTab('technical')">
            Technical Skills
          </button>

          <button
            class="tab-link"
            :class="{
              active: activeTab === 'soft',
              inactive: activeTab !== 'soft',
            }"
            @click="switchTab('soft')">
            Soft Skills
          </button>
        </div>
      </div>

      <!-- Main Content Grid (Full Height Body) -->
      <div class="content-area">
        <!-- Left Column: Categories -->
        <div class="sidebar scrollbar-hidden">
          <button
            v-for="skill in datas"
            :key="skill.id"
            class="category-btn"
            :class="{ 'active-btn': selectedSkill.id === skill.id }"
            @click="selectedSkill = skill">
            <span class="btn-text">{{ skill.category }}</span>
            <span class="arrow-icon">→</span>
          </button>
        </div>

        <!-- Right Column: Details Panel -->
        <div class="details-panel">
          <div v-if="selectedSkill" class="details-wrapper">
            <div class="details-header">
              <h3>{{ selectedSkill.category }}</h3>
              <div class="glow-line"></div>
            </div>

            <p class="description">
              {{ selectedSkill.description }}
            </p>

            <div class="skills-list scrollbar-hidden h-50">
              <span
                v-for="skill in selectedSkill.skills"
                :key="skill"
                class="skill-badge">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "./data/skillsData";

export default {
  data() {
    return {
      activeTab: "technical",

      datas: skills.skillsData,
      selectedSkill: skills.skillsData[0],
    };
  },

  methods: {
    switchTab(tab) {
      this.activeTab = tab;

      if (tab === "technical") {
        this.datas = skills.skillsData;
        this.selectedSkill = skills.skillsData[0];
      } else {
        this.datas = skills.softSkills;
        this.selectedSkill = skills.softSkills[0];
      }
    },
  },
};
</script>

<style src="../components/assets/css//skills.css"></style>
