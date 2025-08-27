import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "VoiceApp Builder",
    "one_liner": "Create fully functioning apps using only your voice.",
    "why_now": "The growing popularity of voice assistants opens up new avenues for intuitive app development.",
    "novel_mechanism": "Use LLMs to map voice commands directly to app logic and UI components.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Speech",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Elderly users creating simple apps without coding knowledge.",
      "Business professionals designing quick prototypes while in meetings."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command recognition",
        "Basic app templates",
        "Output code generation"
      ],
      "tools": [
        "React",
        "Firebase",
        "Node.js",
        "Twilio"
      ],
      "data_bootstrap": [
        "Public APIs for app functionalities",
        "Use synthetic data to train voice command recognition"
      ],
      "risk": [
        "Quality of generated code",
        "User frustration with voice recognition"
      ],
      "mitigation": [
        "Utilize robust testing frameworks for code output",
        "Implement a feedback loop to refine voice command accuracy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live voice demo during launch",
        "User testimonials highlighting ease of app creation"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "Discord"
      ],
      "pricing": {
        "free": "Limited app creations per month",
        "pro": "$9.99/month for unlimited use",
        "business": "$49.99/month with collaboration tools"
      }
    },
    "moat": [
      "User-generated app templates",
      "Community-driven enhancements",
      "Voice command database growth"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "It addresses the untapped market of non-developers wanting to create applications, which is overlooked by traditional coding platforms."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}