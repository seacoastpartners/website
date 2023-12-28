<template>
  <section class="tech-stack">
    <h2>Full Stack Developers</h2>
    <div
      ref="techLogos"
      class="tech-logos"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    >
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="tech-logo"
        :style="{ userSelect: isDragging ? 'none' : 'auto' }"
      >
        <img
          :src="tech.logo"
          :alt="tech.name"
          draggable="false"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
const technologies = [
    { name: "AWS", logo: "/tech-stack-images/aws.png" },
    { name: "Google Cloud", logo: "/tech-stack-images/google-cloud.svg" },
    { name: "JavaScript", logo: "/tech-stack-images/javascript.png" },
    { name: "NodeJs", logo: "./tech-stack-images/node-js.webp" },
    { name: "React", logo: "./tech-stack-images/react.webp" },
    { name: "Vue", logo: "./tech-stack-images/vue.webp" },
    { name: "Angular", logo: "./tech-stack-images/angular.webp" },
    { name: "MySql", logo: "./tech-stack-images/mysql.svg" },
    { name: "Python", logo: "./tech-stack-images/python.webp" },
    { name: "Firebase", logo: "./tech-stack-images/firebase.webp" },
    { name: "Firebase", logo: "./tech-stack-images/firebase.webp" },
]
const techLogos = ref(null)

const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

onMounted(() => {
    if (techLogos.value) {
        techLogos.value.scrollLeft = 0 // Reset scroll position on load
    }
})

function startDrag(e) {
    console.log("Starting Drag")
    e.preventDefault()
    isDragging.value = true
    startX.value = e.pageX - techLogos.value.offsetLeft
    scrollLeft.value = techLogos.value.scrollLeft
    console.log(`Start X: ${startX.value}, Scroll Left: ${scrollLeft.value}`)
}

function onDrag(e) {
    if (!isDragging.value) return
    console.log("Dragging")
    e.preventDefault()
    const x = e.pageX - techLogos.value.offsetLeft
    const walk = (x - startX.value) * 3 // Speed of scroll
    console.log(`Walk: ${walk}`)
    techLogos.value.scrollLeft = scrollLeft.value - walk
}

function endDrag()  {
    console.log("Ending Drag")
    isDragging.value = false
}

</script>

<style scoped>
.tech-stack {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    padding: 20px 0 50px 0;
}

h2 {
    color: black;
    font-size: 48px;
}

.tech-logos {
    cursor: grab;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
    user-select: none;
}


.tech-logo {
    /* Ensure logos are aligned properly, you might adjust these */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
}

.tech-logo img {
    height: 50px;
    /* Adjust size as needed */
    transition: transform 0.3s ease;
    /* Smooth scaling on hover */
}

.tech-logo img:hover {
    transform: scale(1.1);
    /* Slightly enlarge logos on hover */
}
</style>
