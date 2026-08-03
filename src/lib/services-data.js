import {
  Building2,
  Factory,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Sofa,
  Users,
  Truck
} from "lucide-react";
const SERVICES = [
  {
    slug: "civil-construction",
    title: "Civil Construction",
    short: "End-to-end civil works for residential, commercial and infrastructure projects.",
    icon: Building2,
    overview: "From excavation and foundations to structural concreting and finishing, our civil construction team delivers durable buildings built to code and to last.",
    highlights: [
      "RCC framed structures & load-bearing works",
      "Foundations, plinth beams and slabs",
      "Brick, block and AAC masonry",
      "Plastering, waterproofing and finishing"
    ],
    process: [
      { step: "01", title: "Site Survey", desc: "Detailed survey, soil test and layout marking." },
      { step: "02", title: "Foundation", desc: "Excavation, PCC and reinforced foundation work." },
      { step: "03", title: "Superstructure", desc: "Columns, beams, slabs and masonry construction." },
      { step: "04", title: "Finishing", desc: "Plaster, waterproofing and handover-ready delivery." }
    ]
  },
  {
    slug: "industrial-civil-works",
    title: "Industrial Civil Works",
    short: "Heavy-duty civil construction for factories, warehouses and plants.",
    icon: Factory,
    overview: "We build the backbone of India's industry \u2014 pre-engineered building foundations, machine footings, flooring and ancillary civil works for factories and logistics parks.",
    highlights: [
      "PEB foundations & anchor bolt setting",
      "Heavy-duty industrial flooring (VDF, trimix)",
      "Machine foundations & equipment pits",
      "Roads, drains, compound walls and utilities"
    ],
    process: [
      { step: "01", title: "Planning", desc: "Layout, load analysis and BOQ preparation." },
      { step: "02", title: "Ground Works", desc: "Levelling, PCC and reinforced foundations." },
      { step: "03", title: "Flooring", desc: "High-strength trimix / VDF industrial floors." },
      { step: "04", title: "Ancillary", desc: "Roads, drains, MS gates and boundary walls." }
    ]
  },
  {
    slug: "fabrication",
    title: "Fabrication",
    short: "Structural steel and MS fabrication done on-site and in-shop.",
    icon: Wrench,
    overview: "Our fabrication crew handles structural steel, staircases, railings, gates and custom MS jobs \u2014 welded, ground and finished to spec.",
    highlights: [
      "Structural steel columns, beams and trusses",
      "Staircases, handrails and grills",
      "MS gates, doors and shutters",
      "On-site cutting, welding and erection"
    ],
    process: [
      { step: "01", title: "Drawings", desc: "Shop drawings & material take-off." },
      { step: "02", title: "Fabrication", desc: "Cutting, welding and finishing in shop." },
      { step: "03", title: "Erection", desc: "Site installation with cranes / manpower." },
      { step: "04", title: "Finish", desc: "Grinding, primer and final coating." }
    ]
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    short: "Licensed electrical contracting for residential, commercial and industrial sites.",
    icon: Zap,
    overview: "Complete electrical solutions \u2014 from concealed wiring and DB installation to HT/LT panels, cable trays and industrial power distribution.",
    highlights: [
      "Concealed & conduit wiring",
      "DB, MCB and panel installation",
      "HT/LT power distribution",
      "Cable tray, earthing and lightning protection"
    ],
    process: [
      { step: "01", title: "Design", desc: "Load calculation and single-line diagrams." },
      { step: "02", title: "Rough-in", desc: "Conduit, cable pulling and boxing." },
      { step: "03", title: "Termination", desc: "Panels, DBs and fixtures installed." },
      { step: "04", title: "Testing", desc: "Meggering, earth testing and commissioning." }
    ]
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    short: "Water supply, drainage and sanitary works done leak-free the first time.",
    icon: Droplets,
    overview: "Concealed and exposed plumbing for water supply, drainage, sewage and rain-water harvesting \u2014 all pressure tested before handover.",
    highlights: [
      "CPVC / UPVC water supply lines",
      "Soil, waste and vent piping",
      "Sanitary fixture installation",
      "Overhead tanks, pumps & RWH systems"
    ],
    process: [
      { step: "01", title: "Layout", desc: "Plumbing schematic and slab sleeving." },
      { step: "02", title: "Piping", desc: "Concealed CPVC / UPVC line installation." },
      { step: "03", title: "Fixtures", desc: "WC, basin, shower and tap fitting." },
      { step: "04", title: "Testing", desc: "Pressure test and leak certification." }
    ]
  },
  {
    slug: "painting",
    title: "Painting",
    short: "Interior & exterior painting with premium finishes and long warranties.",
    icon: Paintbrush,
    overview: "Surface prep, priming and 2\u20133 coat systems using Asian Paints / Berger / Dulux \u2014 from budget emulsions to premium textures and waterproof exteriors.",
    highlights: [
      "Interior emulsion & luxury finishes",
      "Exterior weatherproof coatings",
      "Wood polish, PU & duco",
      "Texture, stencil and accent walls"
    ],
    process: [
      { step: "01", title: "Prep", desc: "Scraping, sanding and putty work." },
      { step: "02", title: "Primer", desc: "Sealer / primer coat application." },
      { step: "03", title: "Coats", desc: "Two-to-three coats of chosen finish." },
      { step: "04", title: "Detailing", desc: "Cut-lines, cleanup and touch-ups." }
    ]
  },
  {
    slug: "interior-works",
    title: "Interior Works",
    short: "Turnkey interiors \u2014 false ceilings, partitions, modular furniture and decor.",
    icon: Sofa,
    overview: "Complete interior fit-outs for homes and offices including gypsum ceilings, glass partitions, modular kitchens, wardrobes and site-built furniture.",
    highlights: [
      "Gypsum & POP false ceilings",
      "Modular kitchens & wardrobes",
      "Glass, gypsum and wooden partitions",
      "Flooring, cladding and decor"
    ],
    process: [
      { step: "01", title: "Concept", desc: "3D design and material selection." },
      { step: "02", title: "Civil", desc: "Ceiling, partition and flooring work." },
      { step: "03", title: "Joinery", desc: "Modular units and site furniture." },
      { step: "04", title: "Styling", desc: "Lighting, hardware and final decor." }
    ]
  },
  {
    slug: "labour-supply",
    title: "Labour Supply",
    short: "Skilled and unskilled manpower on demand for every trade.",
    icon: Users,
    overview: "We supply trained masons, bar-benders, carpenters, welders, electricians, plumbers, painters and helpers \u2014 daily, monthly or contract basis, PF/ESI compliant.",
    highlights: [
      "Skilled tradesmen for every discipline",
      "Helpers & unskilled workforce",
      "PF, ESI and safety compliant",
      "Daily, monthly or project-based contracts"
    ],
    process: [
      { step: "01", title: "Requirement", desc: "Trade, count and duration confirmed." },
      { step: "02", title: "Deployment", desc: "Verified workforce mobilised on site." },
      { step: "03", title: "Supervision", desc: "On-site supervisor & attendance tracking." },
      { step: "04", title: "Billing", desc: "Transparent weekly / monthly invoicing." }
    ]
  },
  {
    slug: "machine-shifting",
    title: "Machine Shifting",
    short: "Safe rigging, shifting and re-installation of heavy machinery.",
    icon: Truck,
    overview: "In-plant and inter-plant relocation of CNCs, presses, DG sets and heavy equipment using cranes, hydraulic jacks, rollers and skilled riggers.",
    highlights: [
      "Rigging & dismantling of heavy machines",
      "Crane, forklift and hydraulic jacking",
      "In-plant and inter-plant shifting",
      "Foundation, alignment and re-commissioning"
    ],
    process: [
      { step: "01", title: "Survey", desc: "Site & route survey, method statement." },
      { step: "02", title: "Dismantle", desc: "Safe disconnection & preparation." },
      { step: "03", title: "Shift", desc: "Crane / roller movement to new location." },
      { step: "04", title: "Install", desc: "Foundation, levelling and commissioning." }
    ]
  }
];
const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export {
  SERVICES,
  getService
};
