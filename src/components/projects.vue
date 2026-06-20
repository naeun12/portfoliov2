<!-- @format -->

<template>
  <div class="container-projects">
    <div class="title text-center">
      <h1>MY PROJECTS AND WORKS</h1>
    </div>

    <div class="card-container-projects g-4">
      <div class="card g-4" v-for="data in datas" :key="data.id">
        <!-- Image with Status Badge Overlay -->
        <div class="card-image-wrapper">
          <img
            :src="imageSource + data.image"
            :alt="data.title"
            class="card-img" />
          <span class="status-badge status-live">{{ data.status }}</span>
        </div>

        <!-- Content Area -->
        <div class="card-body">
          <div class="card-meta">
            <span class="project-category">{{ data.category }}</span>
            <span class="project-date">{{ data.date }}</span>
          </div>

          <h3 class="card-title">{{ data.title }}</h3>

          <p class="card-text">
            {{ data.description }}
          </p>

          <!-- Detailed Info Meta Grid -->
          <div class="project-details">
            <div class="detail-item">
              <span class="detail-label">Role:</span>
              <span class="detail-value">{{ data.role }}</span>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="tech-stack">
            <span
              v-for="tech in data.technologies"
              :key="tech"
              class="tech-tag"
              :class="'tech-' + tech.toLowerCase()">
              {{ tech }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="card-actions">
            <button class="btn btn-primary">
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
            <a
              :href="data.githubUrl"
              class="btn btn-icon"
              title="View Source Code"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projectsData from "./data/projectsData";
export default {
  data() {
    return {
      imageSource: "../../public/images/",
      datas: projectsData.Projects,
    };
  },
};
</script>
<style src="../../public/css/projects.css"></style>
