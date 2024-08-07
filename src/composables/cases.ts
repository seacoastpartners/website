import { Case } from "@/types"

export function useCases() {
    const cases: Case[] = [
        {
            name: "BasisPoint+",
            color: "#7382FA",
            link: "https://basispointplus.com",
            areas: ["Product design", "Frontend", "Backend", "Startup strategy"],
            image: "./basispointplus-case.png",
            summary: "We built the initial prototype for BasisPoint+, integrating an advanced analytics SDK to enable clients to visualize their data through customized dashboards. BasisPoint+ also entrusted us as their exclusive development partner to enhance their full-stack application, build new features, and address technical customer support issues.",
            details: "BasisPoint+, recognized as the Best Sustainable Investing Tech Innovator of the Year by the Wealth and Finance International Ethical Finance Awards in 2024, empowers fund managers to track key metrics across their portfolio companies throughout the investment horizon from due diligence to exit.",
            tags: ["mvp"]
        },
        {
            name: "WealthFeed",
            color: "#46DAA8",
            link: "https://wealthfeed.com",
            areas: ["Data pipeline", "Infrastructure as code", "CI/CD", "Application monitoring"],
            image: "./wealthfeed-case.png",
            summary: "We helped analyze and integrate multiple new event sources to the core WealthFeed data pipeline. We also completed the migration of their critical AWS resources (like VPCs, databases, EKS clusters, and security groups) from the console to Terraform infrastructure as code, and set up GitHub Actions CI/CD automation to test, version, and deploy app services.",
            details: "WealthFeed is a spin-off of Catalyze AI, which has served over 1,700 real estate and financial services customers. It provides an AI-powered Money-in-Motion platform empowering Financial Advisors to grow their book of business, increase client retention and grow wallet-share with current clients. The company raised $2M in 2024.",
            tags: []
        },
        {
            name: "HealthNet",
            color: "#FF6B6B",
            link: "https://consensusnetworks.com/healthnet",
            areas: ["Product design", "Frontend", "Backend", "Data architecture", "API design", "Serverless", "IoT"],
            image: "./healthnet-case.png",
            summary: "As part of Consensus Networks, we helped architect and build a full-stack web application and secured a $1.5M grant from the US Navy to develop an IoT-enabled medical supply chain logistics platform. This platform enhances the tracking and allocation of supplies, such as blood products, across various medical and field locations, significantly improving efficiency.",
            details: "Consensus Networks specializes in designing, building, and securing decentralized communications solutions such as HealthNet, a globally secure logistics system using real-time data to track medical supplies through IoT and satellite communications.",
            tags: []
        },
        {
            name: "VitalView",
            color: "#38C2D5",
            link: "https://vitalviewtech.com",
            areas: ["Product design", "Digital signal processing", "Hardware systems", "Startup strategy"],
            image: "./vitalview-case.png",
            summary: "We founded VitalView by developing the business case, raising capital, recruiting the initial team, and building the first hardware prototype. This prototype required complex algorithm development to handle high bandwidth signal processing.",
            details: "In partnership with the University of Notre Dame, VitalView was established to create a scalable solution for monitoring and addressing the symptoms of heart failure patients, thereby reducing hospital readmissions. The company's core technology and intellectual property were developed by Dr. Tom Pratt at the University of Notre Dame. VitalView has successfully raised over $5M in funding to date.",
            tags: []
        },
        {
            name: "CardioSpeed",
            color: "#817FBC",
            link: "https://www.linkedin.com/company/cardiospeed",
            areas: ["Frontend", "Backend", "AI/ML", "Computer vision", "Startup strategy"],
            image: "./cardiospeed-case.png",
            summary: "We developed a cross-platform prototype that packaged CardioSpeed's core AI and computer vision technology into a cross-platform desktop app. This prototype was essential for CardioSpeed's initial customer validation and feedback, playing a critical role in gathering valuable insights from users and informing launch strategy.",
            details: "Based in Washington, DC, CardioSpeed originated as a spinout from a partnership between Securiport, a federal contractor, and AI researchers at the University of Notre Dame. The technology utilized computer vision to measure and track heart rates of individuals captured by a web camera. Despite the innovative approach, CardioSpeed ceased operations due to strategic reasons, influenced primarily by competitive and market-driven forces.",
            tags: ["mvp"]
        },
        {
            name: "Investarters",
            color: "#012B65",
            link: "https://mentoring.investarters.com",
            areas: ["Product design", "Frontend", "Backend", "Startup strategy"],
            image: "./investarters-case.png",
            summary: "We partnered with startup founder, social media personality, and content creator Antonio Cucciniello to develop a service that helps his clients find and invest in real estate properties. We built a backend process that streamlined his previously manual workflow with a series of integrations, including Google Cloud and OpenAI APIs, to automate the creation of personalized investment plans for his clients.",
            details: "Antonio Cucciniello is a social media personality and content creator with close to 1M followers on TikTok and Instagram. Antonio founded Investarters to give his social media following the tools they need to successfully invest in their first real estate investment properties.",
            tags: ["mvp"]
        }
    ]

    return { cases }
}