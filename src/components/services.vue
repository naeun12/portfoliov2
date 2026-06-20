<!-- @format -->

<template>
  <div class="container-services p-3">
    <div class="title-container text-center">
      <h1 class="mt-4 mb-4">MY SERVICES</h1>
    </div>
    <div class="card-container">
      <div class="row row-gap-4">
        <!-- Added gap for better modern spacing -->
        <div class="col-lg-4 col-md-6" v-for="data in services" :key="data.id">
          <div class="modern-card">
            <!-- Image Wrapper -->
            <div class="card-img-wrapper">
              <img
                :src="imageSource + data.image"
                :alt="data.title"
                class="resizable-img" />
            </div>
            <!-- Content Wrapper -->
            <div class="card-content">
              <h5 class="card-title">{{ data.title }}</h5>
              <p class="card-text">{{ data.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import servicesData from "./data/servicesData";
export default {
  data() {
    return {
      services: servicesData.Services,
      imageSource: "../../public/images/",
    };
  },
};
</script>
<style src="../../public/css/services.css"></style>
