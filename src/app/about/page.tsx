import Image from "next/image";
import CTA from "@/components/home/CTA";

const subThemes = [
  {
    title: "1. Green Chemistry Innovations for Environmental Sustainability",
    points: [
      "Bioremediation and Green Technologies for Oil Spill Cleanup",
      "Sustainable Waste Management and Circular Economy Approaches",
      "Development of Biodegradable and Eco-friendly Materials",
      "Green Chemistry Solutions for Air and Water Pollution Control",
      "Renewable Energy from Biomass and Waste-to-Energy Technologies",
    ],
  },
  {
    title:
      "2. Artificial Intelligence for Environmental Monitoring and Sustainable Development",
    points: [
      "AI in Environmental Monitoring and Pollution Prediction",
      "Machine Learning for Water Quality and Oil Spill Detection",
      "AI and Big Data Analytics in Climate Change Adaptation",
      "Predictive Modeling of Green Chemical Reactions Using AI",
      "Smart Sensors and AI Applications in Air Quality Monitoring",
    ],
  },
  {
    title: "3. Sustainable Agriculture and Food Security in the Niger Delta",
    points: [
      "AI and Green Chemistry for Soil Remediation and Fertility Enhancement",
      "Sustainable Agricultural Practices for Food Security",
      "Precision Agriculture: Leveraging AI for Smart Farming",
      "Bio-based Fertilizers and Green Pesticides",
      "AI-Driven Strategies for Climate-Resilient Farming",
    ],
  },
  {
    title: "4. Policy and Community Engagement for Sustainable Development",
    points: [
      "Policy Frameworks for Environmental Protection in the Niger Delta",
      "Community-Driven Sustainability Initiatives and Indigenous Knowledge",
      "Public-Private Partnerships for Green and AI-Based Solutions",
      "Capacity Building and Education in Green Chemistry and AI",
      "Role of Governments and NGOs in Environmental Sustainability",
    ],
  },
  {
    title: "5. Industrial Applications and Green Business Models",
    points: [
      "Green Chemistry for Sustainable Industrial Processes",
      "AI in Enhancing Circular Economy and Resource Optimization",
      "Green Entrepreneurship and Sustainable Business Models",
      "Eco-Friendly Manufacturing and Clean Energy Solutions",
      "Carbon Capture, Utilization, and Storage (CCUS) in Industry",
    ],
  },
  {
    title: "6. Health and Societal Impacts of Environmental Pollution",
    points: [
      "AI-Driven Health Risk Assessments for Polluted Environments",
      "Green Chemistry in Developing Safe and Sustainable Consumer Products",
      "Addressing Public Health Challenges Linked to Environmental Degradation",
      "Role of AI in Disease Prediction and Prevention Related to Pollution",
      "Sustainable Water Resource Management for Public Health",
    ],
  },
  {
    title: "7. Sustainable Energy and Renewable Resources",
    points: [
      "Green Chemistry Innovations in Biofuels and Alternative Energy",
      "Utilization of Lignocellulosic Biomass for Energy and Material Production",
      "Carbon Capture, Utilization, and Storage in the Niger Delta",
      "Sustainable Energy Solutions for Oil and Gas Communities",
    ],
  },
  {
    title: "8. AI in Smart Cities and Sustainable Urban Development",
    points: [
      "AI for Smart Waste Management and Recycling Solutions",
      "AI-Enabled Water Resource Management in Urban Areas",
      "Smart Transportation and AI-Driven Traffic Management for Low Carbon Emissions",
      "AI and IoT for Sustainable Infrastructure and Urban Planning",
      "AI-Powered Solutions for Reducing Energy Consumption in Buildings",
    ],
  },
  {
    title: "9. AI for Biodiversity Conservation and Ecosystem Management",
    points: [
      "AI in Wildlife Protection and Forest Conservation",
      "Remote Sensing and AI for Monitoring Deforestation and Land Degradation",
      "AI-Based Marine and Freshwater Ecosystem Monitoring",
      "AI for Sustainable Fisheries and Aquaculture Management",
      "Drone and Satellite-Based AI for Environmental Surveillance",
    ],
  },
  {
    title: "10. AI for Industrial Sustainability and Circular Economy",
    points: [
      "AI in Green Manufacturing and Sustainable Production Processes",
      "AI-Driven Material Discovery for Eco-Friendly Alternatives",
      "AI-Powered Supply Chain Optimization for Reducing Environmental Impact",
      "Predictive Maintenance in Industries to Reduce Waste and Energy Consumption",
      "AI and Blockchain for Sustainable and Transparent Supply Chains",
    ],
  },
];

const moreSubThemes = [
  {
    title: "11. AI for Public Health and Environmental Safety",
    points: [
      "AI for Early Detection and Mitigation of Environmental Health Hazards",
      "AI-Powered Air Quality and Water Quality Prediction Models",
      "AI-Enabled Disease Surveillance Linked to Environmental Pollution",
      "AI-Driven Smart Healthcare Solutions for Remote and Underserved Communities",
      "AI in the Development of Green Pharmaceuticals and Drug Discovery",
    ],
  },
  {
    title: "12. AI-Driven Education and Capacity Building for Sustainability",
    points: [
      "AI-Powered Personalized Learning for Green Chemistry and Sustainability Education",
      "Virtual and Augmented Reality for Environmental Awareness and Training",
      "AI-Based Decision Support Systems for Policymakers and Environmental Managers",
      "AI in Open Science and Knowledge Sharing for Global Sustainability Initiatives",
      "AI and Big Data Analytics for Sustainable Development Research",
    ],
  },
  {
    title: "13. AI for Sustainable Energy and Climate Action",
    points: [
      "AI-Driven Optimization of Renewable Energy Systems (Solar, Wind, and Biomass)",
      "Smart Grid Technologies and AI for Energy Efficiency",
      "AI-Based Carbon Footprint Monitoring and Reduction Strategies",
      "AI in Climate Change Mitigation and Adaptation Strategies",
      "Predictive Analytics for Extreme Weather Events and Disaster Management",
    ],
  },
  {
    title: "14. AI and Biotechnology for Conservation of Genetic Resources",
    points: [
      "AI-Driven Genome Sequencing and Characterization of Endangered Species",
      "Predictive Analytics for Enhancing Genetic Diversity and Breeding Programs",
      "AI in Plant and Animal Gene Editing for Climate Resilience",
      "Machine Learning for Identifying and Mapping Genetic Variability",
      "AI in Phylogenetic Studies for Understanding Evolutionary Relationships",
    ],
  },
  {
    title:
      "15. Sustainable Agriculture and AI-Driven Genetic Resource Management",
    points: [
      "AI-Powered Crop and Livestock Improvement for Enhanced Productivity",
      "AI for Smart Selection of Drought-Resistant and High-Yield Crop Varieties",
      "Precision Livestock Farming Using AI for Disease Monitoring and Management",
      "AI-Driven Pollination Optimization and Biodiversity Conservation in Agriculture",
      "AI in Enhancing Indigenous and Traditional Agricultural Knowledge",
    ],
  },
  {
    title: "16. AI and Green Chemistry for Biodiscovery and Drug Development",
    points: [
      "AI in Screening Medicinal Plants for Novel Drug Discovery",
      "AI-Assisted Extraction and Synthesis of Bioactive Compounds from Plants and Animals",
      "Sustainable Use of Genetic Resources for Pharmaceutical and Nutraceutical Development",
      "AI-Driven Drug Repurposing from Natural Products",
      "Ethical and Regulatory Frameworks for AI-Based Biodiscovery",
    ],
  },
  {
    title:
      "17. Conservation and Sustainable Utilization of Marine and Aquatic Genetic Resources",
    points: [
      "AI-Powered Marine Biodiversity Monitoring and Sustainable Fisheries Management",
      "Genetic Conservation of Aquatic Species for Sustainable Aquaculture",
      "AI-Driven Identification of Marine-Derived Bioactive Compounds",
      "AI and Remote Sensing for Monitoring Coral Reef and Mangrove Ecosystems",
      "Climate-Resilient Aquaculture: AI-Optimized Selective Breeding Programs",
    ],
  },
  {
    title: "18. AI in Wildlife Conservation and Endangered Species Protection",
    points: [
      "AI-Powered Tracking and Monitoring of Threatened Species",
      "Machine Learning for Predicting Habitat Loss and Human-Wildlife Conflicts",
      "AI-Based Genetic Mapping for Endangered Animal Breeding Programs",
      "Drone and Satellite AI for Anti-Poaching and Illegal Wildlife Trade Detection",
      "AI in Rewilding and Ecosystem Restoration for Sustainable Biodiversity",
    ],
  },
  {
    title: "19. AI for Sustainable Agro-Biodiversity and Food Security",
    points: [
      "AI in Domestication and Commercialization of Underutilized Indigenous Crops",
      "AI-Powered Selection of High-Nutrition and Climate-Resilient Crop Varieties",
      "Genetic Conservation Strategies for Pollinators and Beneficial Insects",
      "AI for Enhancing Seed Banks and Germplasm Conservation",
      "Blockchain and AI for Traceability of Genetic Resources in Food Supply Chains",
    ],
  },
  {
    title:
      "20. Policy, Ethics, and Socioeconomic Considerations in Genetic Resource Utilization",
    points: [
      "AI for Sustainable Land-Use Planning and Genetic Resource Conservation Policies",
      "Intellectual Property Rights and Ethical Issues in AI-Driven Genetic Research",
      "Community Engagement and Indigenous Knowledge Integration in Genetic Conservation",
      "Socioeconomic Impacts of AI-Based Genetic Resource Utilization",
      "AI and Big Data in Policymaking for Sustainable Biodiversity Management",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conference Theme */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
                Theme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#073b4c] mb-6 leading-tight">
                Conference Main Theme
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Green Chemistry and Artificial Intelligence for Sustainable
                  Development in the Niger Delta
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/school.JPG"
                alt="Conference room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Themes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 bg-[#118ab2]/10 text-[#118ab2] px-4 py-1.5 rounded-full text-sm font-medium">
              Sub-Themes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#073b4c] mb-6">
              Conference Sub-Themes
            </h2>
          </div>

          <div className="space-y-8">
            {subThemes.map((theme, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#073b4c] mb-4">
                  {theme.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {theme.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            {moreSubThemes.map((theme, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#073b4c] mb-4">
                  {theme.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {theme.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
