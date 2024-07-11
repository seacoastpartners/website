export default function usePrices() {
    const prices = [
        {
            name: "MVP Development",
            price: "$20k / mo.*",
            items: [
                "Custom MVP development",
                "Multi-environment setup (dev, stage, prod)",
                "User auth management",
                "Cloud config and deployment",
                "Continuous integration testing",
                "Fully documented and portable code"
            ],
            notes: [
                "*$20k / mo. for 1 month",
                "*$10k / mo. for 2 months"
            ]
        },
        {
            name: "Monthly Development",
            price: "$20k / mo.*",
            items: [
                "Discrete task and project scoping",
                "Pay on task completion",
                "Dedicated project lead (Chris)",
                "Direct comms and daily updates",
                "Unlimited requests and revisions",
                "Weekly syncs",
                "Pause or cancel anytime (monthly plan)"
            ],
            notes: [
                "*$18k / mo for 3 months (save $6k)",
                "*$15k / mo for 6 months (save $30k)"
            ]
        },
        {
            name: "Fractional CTO",
            price: "$40k / mo.*",
            items: [
                "Full product tech stack development",
                "Dedicated project lead (Chris)",
                "1 frontend engineer",
                "1 backend engineer",
                "1 devops engineer",
                "UI/UX design (as needed)",
                "Fully documented and portable code",
                "Direct comms and daily updates",
                "Weekly syncs",
                "Pause / cancel anytime (monthly plan)"
            ],
            notes: [
                "*$35k / mo for 3-6 months (save up to $30k)",
                "*$30k / mo for 7-12 months (save up to $120k)"
            ]
        }
    ]

    return { prices }
}