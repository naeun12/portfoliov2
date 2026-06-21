<!-- @format -->

<template>
  <section id="contact" class="contact-section">
    <div class="ambient-glow glow-1"></div>
    <div class="ambient-glow glow-2"></div>

    <div class="container contact-container">
      <div class="title-container text-center mb-5">
        <span
          class="section-subtitle text-uppercase fw-bold mb-2 d-block small">
          Get In Touch
        </span>
        <h1 class="fw-bold">Contact Me</h1>
      </div>

      <div class="row g-5 align-items-center justify-content-center">
        <div class="col-lg-5 col-md-11">
          <div class="info-wrapper d-flex flex-column gap-4">
            <h2 class="info-heading fw-bold">
              Let's talk about your next big project.
            </h2>
            <p class="info-text">
              I am open to collaborations, full-time positions, or freelance web
              development projects. Drop a message and let's turn your concept
              into deployment.
            </p>

            <div class="info-card-item">
              <div class="info-icon-box">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="info-details">
                <span>Email Me</span>
                <a href="mailto:niinaeun@gmail.com">niinaeun@gmail.com</a>
              </div>
            </div>

            <div class="info-card-item">
              <div class="info-icon-box">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-details">
                <span>Location</span>
                <p>Cebu, Philippines</p>
              </div>
            </div>

            <div class="info-card-item">
              <div class="info-icon-box">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div class="info-details">
                <span>Phone Number</span>
                <p>+63 923 124 1628</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-11">
          <div class="contact-card-glass">
            <div
              v-if="alert.show"
              :class="['image-style-alert', `alert-${alert.type}`]">
              <div class="alert-icon-wrapper">
                <i class="bi bi-check-lg"></i>
              </div>

              <div class="alert-text-block">
                <h5 class="alert-headline">Success</h5>
                <p class="alert-paragraph">{{ alert.message }}</p>
              </div>

              <button
                type="button"
                class="alert-dismiss-btn"
                @click="alert.show = false">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="input-group-custom">
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      required
                      placeholder=" " />
                    <label for="name">Your Name</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-group-custom">
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      placeholder=" " />
                    <label for="email">Your Email</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="input-group-custom">
                    <input
                      type="text"
                      id="subject"
                      v-model="form.subject"
                      required
                      placeholder=" " />
                    <label for="subject">Subject</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="input-group-custom">
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      required
                      placeholder=" "></textarea>
                    <label for="message">Your Message</label>
                  </div>
                </div>

                <div class="col-12 text-end mt-4">
                  <button
                    type="submit"
                    class="btn-submit"
                    :disabled="isSubmitting">
                    <span v-if="!isSubmitting">
                      Send Message <i class="bi bi-send-fill ms-2"></i>
                    </span>
                    <span v-else>Sending...</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const isSubmitting = ref(false);
const alert = ref({
  show: false,
  type: "success",
  message: "",
});
const handleSubmit = async () => {
  if (isSubmitting.value) return;
  alert.value.show = false;
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    alert.value = {
      show: true,
      type: "error",
      message: "Please fill in all fields before sending.",
    };
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await emailjs.send(
      "service_8kmtbkr",
      "template_mplv6df",
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        to_email: "niinaeun@gmail.com",
      },
      "34p6kJp1Tu3i9ioCT",
    );
    console.log("SUCCESS!", response.status, response.text);
    alert.value = {
      show: true,
      type: "success",
      message: `Message sent successfully. Thank you, ${form.value.name}!`,
    };
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    console.log("EMAILJS ERROR:", error);
    alert.value = {
      show: true,
      type: "error",
      message: "Failed to send message. Please check EmailJS setup.",
    };
  } finally {
    isSubmitting.value = false;

    // auto hide alert
    setTimeout(() => {
      alert.value.show = false;
    }, 6000);
  }
};
</script>

<style scoped src="../components/assets/css/contactme.css"></style>
