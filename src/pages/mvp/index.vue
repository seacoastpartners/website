<template>
    <div id="page">
        <IntroSection />
        <div class="cta">
            <ApplyNowButton />
        </div>
        <IncludedSection />
        <ProcessSection />
        <div
            v-if="isMobile" 
            class="cta second-cta fade-in-on-scroll"
        >
            <ApplyNowButton />
        </div>
        <WorkSection />
        <TestimonialSection />
        <div class="cta final-cta fade-in-on-scroll">
            <ApplyNowButton />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { useWindowSize } from "@/composables/window"
import IntroSection from "./components/IntroSection.vue"
import ApplyNowButton from "./components/ApplyNowButton.vue"
import IncludedSection from "./components/IncludedSection.vue"
import ProcessSection from "./components/ProcessSection.vue"
import WorkSection from "./components/WorkSection.vue"
import TestimonialSection from "./components/TestimonialSection.vue"
  
const { isMobile } = useWindowSize()
</script>
  
  <style scoped>
  .cta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .final-cta {
    padding: 32px 0;
  }
  </style>
  