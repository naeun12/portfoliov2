<!-- @format -->

<template>
  <div class="certifications-container">
    <div class="title-section">
      <span class="subtitle">Achievements</span>
      <h1>Verified Certifications</h1>
      <div class="title-underline"></div>
    </div>

    <div class="certifications-grid">
      <div class="card" v-for="data in certificationsData" :key="data.title">
        <div class="card-glow"></div>
        <div class="card-content">
          <div class="card-image-wrapper-certifications">
            <img
              :src="imageSource + data.image"
              :alt="data.title"
              class="card-image-certifications" />
          </div>
          <h5 class="card-title">{{ data.title }}</h5>
          <p class="card-issuer">{{ data.issuer }}</p>

          <p class="card-description">
            {{ data.description }}
          </p>

          <span class="card-date">{{ data.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import certificationsData from "./data/certificationsData";
export default {
  name: "CertificationsSection",
  data() {
    return {
      certificationsData: certificationsData,
      imageSource: "../../public/images/certifications/",
    };
  },
};
</script>

<style src="../../public/css/certifications.css"></style>
