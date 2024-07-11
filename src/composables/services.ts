import { Service } from "@/types"
import { UserGroupIcon, WrenchScrewdriverIcon, BuildingOffice2Icon } from "@heroicons/vue/16/solid"

export default function useServices() {
    const services: Service[] = [
        {
            icon: UserGroupIcon,
            name: "Frontend and Design",
            summary: "We draw inspiration from Frank Lloyd Wright’s masterpiece, Fallingwater. This iconic house, seamlessly integrated with its natural surroundings, symbolizes our approach to frontend and design: harmonizing aesthetics with functionality to create stunning, user-centric digital experiences.",
            items: [
                {
                    name: "Web and mobile UI/UX design",
                    summary: "Just as Wright designed Fallingwater to blend perfectly with the landscape, we craft intuitive, visually appealing user interfaces that fit seamlessly into the lives of our users. Our designs prioritize user engagement and satisfaction, ensuring every interaction is both meaningful and delightful."
                },
                {
                    name: "Cross platform application development",
                    summary: "Fallingwater’s design adapts beautifully to its environment, much like our responsive web designs adapt to any device. By utilizing reusable code and theming, we ensure consistency, efficiency, and ease of maintenance across all your digital assets, mirroring Wright’s commitment to enduring quality."
                },
                {
                    name: "Responsive, reusable theme and styling",
                    summary: "Wright chose the best materials for Fallingwater, just as we select the most suitable frameworks for your projects. Whether it’s React, Angular, Vue, or Flutter, our framework-agnostic approach ensures we meet your unique needs with the most appropriate technology, creating digital structures as timeless and reliable as Fallingwater."
                }
            ],
            logos: [
                { name: "React", src: "./react.webp" },
                { name: "Vue", src: "./vue.webp" },
                { name: "Angular", src: "./angular.webp" },
                { name: "Swift", src: "./swift.png" },
                { name: "Flutter", src: "./flutter.png" },
                { name: "Figma", src: "./figma.png" }
            ]
        },
        {
            icon: WrenchScrewdriverIcon,
            name: "Backend and Data",
            summary: "Some service item summary.",
            items: [
                {
                    name: "API development and integration",
                    summary: "Some work item summary."
                },
                {
                    name: "SQL and NoSQL data modeling",
                    summary: "Some work item summary."
                },
                {
                    name: "Automated data processing pipelines",
                    summary: "Some work item summary."
                }
            ],
            logos: [
                { name: "Python", src: "./python.webp" },
                { name: "Node", src: "/node.png" },
                { name: "Go", src: "./go.svg" },
                { name: "PostgreSQL", src: "./postgresql.svg" },
                { name: "MongoDB", src: "./mongodb.svg" },
                { name: "OpenAI", src: "./openai.webp" }
            ]
        },
        {
            icon: BuildingOffice2Icon,
            name: "Infrastructure and Cloud",
            summary: "Some service item summary.",
            items: [
                {
                    name: "Automated testing and deployment workflows",
                    summary: "Some work item summary."
                },
                {
                    name: "Autoscaling serverless and containerized workloads",
                    summary: "Some work item summary."
                },
                {
                    name: "Upgradeable infrastructure as code",
                    summary: "Some work item summary."
                }
            ],
            logos: [
                { name: "AWS", src: "./aws.png" },
                { name: "GCP", src: "./gcp.svg" },
                { name: "Azure", src: "./azure.png" },
                { name: "Docker", src: "./docker.png" },
                { name: "Kubernetes", src: "./kubernetes.png" },
                { name: "Terraform", src: "./terraform.png" }
            ]
        }
    ]

    return { services }
}