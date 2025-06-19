const sampleListings = [
  {
    title: "Luxury Beachfront Villa with Private Pool",
    description: "Wake up to stunning ocean views in this magnificent beachfront villa. Features a private infinity pool, direct beach access, and spacious terraces perfect for entertaining. The open-plan living area seamlessly connects indoor and outdoor spaces.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "beachfront-villa-01"
    },
    price: 4500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Downtown Penthouse with City Views",
    description: "Experience urban luxury in this stunning penthouse apartment. Floor-to-ceiling windows offer panoramic city views, while the modern design features high-end finishes throughout. Located in the heart of the financial district.",
    image: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "downtown-penthouse-01"
    },
    price: 3200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Cozy Mountain Cabin with Fireplace",
    description: "Escape to this charming log cabin nestled in the mountains. Features a stone fireplace, rustic wooden interiors, and a wrap-around deck with breathtaking mountain views. Perfect for a peaceful retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "mountain-cabin-01"
    },
    price: 1800,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Historic Tuscan Villa with Vineyard Views",
    description: "Immerse yourself in Italian culture at this beautifully restored 16th-century villa. Surrounded by rolling vineyards and olive groves, featuring original frescoes, terracotta floors, and a wine cellar.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "tuscan-villa-01"
    },
    price: 3800,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Unique Treehouse Retreat in the Forest",
    description: "Live among the canopy in this architectural marvel treehouse. Eco-friendly design with sustainable materials, panoramic forest views, and a rope bridge entrance. An unforgettable nature experience.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "treehouse-retreat-01"
    },
    price: 1200,
    location: "Portland",
    country: "United States"
  },
  {
    title: "Tropical Beach Resort Suite in Paradise",
    description: "Indulge in luxury at this beachfront resort suite. Features marble bathrooms, private balcony overlooking turquoise waters, and access to exclusive resort amenities including spa and water sports.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "tropical-resort-01"
    },
    price: 2800,
    location: "Cancun",
    country: "Mexico"
  },
  {
    title: "Lakeside Cottage with Private Dock",
    description: "Relax by the crystal-clear lake in this charming cottage. Includes a private dock for fishing and kayaking, screened porch, and cozy interior with lake views from every room. Perfect for water enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "lakeside-cottage-01"
    },
    price: 1600,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Ultra-Modern Glass House with Pool",
    description: "Architectural masterpiece featuring floor-to-ceiling glass walls, minimalist design, and infinity pool. Smart home technology throughout, with spectacular views of the city skyline and mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "glass-house-01"
    },
    price: 5500,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Alpine Ski Chalet with Mountain Views",
    description: "Ski-in/ski-out luxury chalet in the heart of the Swiss Alps. Features traditional Alpine architecture, modern amenities, hot tub, and panoramic mountain views. Perfect for winter sports enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1551524164-6cf2ac531c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "alpine-chalet-01"
    },
    price: 4200,
    location: "Verbier",
    country: "Switzerland"
  },
  {
    title: "Luxury Safari Lodge with Wildlife Views",
    description: "Experience African wildlife from this luxury tented lodge. Elevated platforms offer safe wildlife viewing, while maintaining comfort with en-suite bathrooms, fine dining, and guided safari tours.",
    image: {
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "safari-lodge-01"
    },
    price: 6500,
    location: "Serengeti National Park",
    country: "Tanzania"
  },
  {
    title: "Historic Amsterdam Canal House",
    description: "Stay in a piece of Dutch history in this 17th-century canal house. Beautifully preserved with original features, spiral staircase, and canal views. Walking distance to museums and cafes.",
    image: {
      url: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "amsterdam-canal-01"
    },
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Private Island Villa with Beach Access",
    description: "Ultimate privacy on your own private island. Luxury villa with multiple bedrooms, private chef available, pristine beaches, and water sports equipment. Helicopter transfer included.",
    image: {
      url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "private-island-01"
    },
    price: 15000,
    location: "Fiji",
    country: "Fiji"
  },
  {
    title: "Charming Cotswolds Stone Cottage",
    description: "Picture-perfect English cottage with thatched roof and honey-colored stone walls. Beautiful garden, cozy fireplace, and traditional features. Explore charming villages and countryside walks.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "cotswolds-cottage-01"
    },
    price: 1800,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Elegant Boston Brownstone Townhouse",
    description: "Historic brownstone in prestigious Back Bay neighborhood. Original Victorian features, modern updates, private garden, and walking distance to Boston Common and Newbury Street shopping.",
    image: {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "boston-brownstone-01"
    },
    price: 2800,
    location: "Boston",
    country: "United States"
  },
  {
    title: "Balinese Beach Villa with Infinity Pool",
    description: "Traditional Balinese architecture meets modern luxury. Open-air design, private infinity pool, tropical gardens, and direct beach access. Daily housekeeping and breakfast included.",
    image: {
      url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "bali-villa-01"
    },
    price: 2400,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Canadian Rockies Mountain Lodge",
    description: "Spectacular mountain lodge with panoramic views of snow-capped peaks. Features stone fireplace, exposed beam ceilings, and large windows showcasing the natural beauty of Banff National Park.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "banff-lodge-01"
    },
    price: 2100,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Art Deco Miami Beach Apartment",
    description: "Stylish Art Deco apartment in the heart of South Beach. Restored 1930s building with period features, modern amenities, and steps from the beach and Ocean Drive nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "miami-art-deco-01"
    },
    price: 2000,
    location: "Miami",
    country: "United States"
  },
  {
    title: "Luxury Thai Villa with Private Pool",
    description: "Stunning contemporary villa with traditional Thai touches. Features private pool, tropical gardens, outdoor sala, and panoramic views of Phang Nga Bay. Chef and spa services available.",
    image: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "phuket-villa-01"
    },
    price: 3500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Historic Scottish Highland Castle",
    description: "Live like royalty in this 12th-century castle. Towers, turrets, and tapestries create an authentic medieval experience. Includes grounds for exploring and nearby loch for fishing.",
    image: {
      url: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "scottish-castle-01"
    },
    price: 4800,
    location: "Scottish Highlands",
    country: "United Kingdom"
  },
  {
    title: "Dubai Desert Luxury Camp",
    description: "Glamping experience in the Arabian Desert. Luxury tented accommodation with air conditioning, en-suite bathrooms, and traditional Arabian decor. Includes camel rides and desert safari.",
    image: {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "dubai-desert-01"
    },
    price: 3200,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Montana Ranch House with Horse Stables",
    description: "Authentic ranch experience on working cattle ranch. Rustic luxury with modern amenities, horseback riding, fishing, and stunning views of Big Sky Country. Perfect for adventure seekers.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "montana-ranch-01"
    },
    price: 1900,
    location: "Montana",
    country: "United States"
  },
  {
    title: "Greek Island Villa with Aegean Views",
    description: "Whitewashed villa perched on clifftops overlooking the Aegean Sea. Traditional Cycladic architecture, infinity pool, and spectacular sunset views. Private beach access via footpath.",
    image: {
      url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "mykonos-villa-01"
    },
    price: 3800,
    location: "Mykonos",
    country: "Greece"
  },
  {
    title: "Costa Rica Eco-Lodge in Rainforest",
    description: "Sustainable eco-lodge in the heart of the rainforest. Elevated walkways, bird watching opportunities, and guided nature tours. Solar power and organic gardens showcase environmental commitment.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "costa-rica-eco-01"
    },
    price: 1400,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Charleston Historic Mansion",
    description: "Antebellum mansion in Charleston's historic district. Grand columns, original hardwood floors, and period furnishings. Beautiful gardens and carriage house. Walking distance to historic sites.",
    image: {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "charleston-mansion-01"
    },
    price: 2600,
    location: "Charleston",
    country: "United States"
  },
  {
    title: "Tokyo Modern Apartment in Shibuya",
    description: "Sleek modern apartment in vibrant Shibuya district. Floor-to-ceiling windows, minimalist design, and high-tech amenities. Walking distance to shopping, dining, and Tokyo's best nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "tokyo-apartment-01"
    },
    price: 2800,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "New Hampshire Lake House Retreat",
    description: "Classic New England lake house with private dock and sandy beach. Knotty pine interiors, stone fireplace, and wraparound porch. Canoe and kayak included for lake adventures.",
    image: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "new-hampshire-lake-01"
    },
    price: 1700,
    location: "New Hampshire",
    country: "United States"
  },
  {
    title: "Maldives Overwater Bungalow",
    description: "Ultimate luxury in an overwater bungalow with glass floor panels. Direct lagoon access, private sundeck, and unobstructed ocean views. Snorkeling equipment and kayak included.",
    image: {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "maldives-bungalow-01"
    },
    price: 8500,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Aspen Luxury Ski-In Ski-Out Condo",
    description: "Premium ski-in/ski-out condominium at the base of Aspen Mountain. High-end finishes, mountain views, private hot tub, and access to exclusive amenities including spa and fitness center.",
    image: {
      url: "https://images.unsplash.com/photo-1551524164-6cf2ac531c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "aspen-condo-01"
    },
    price: 5200,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Costa Rica Pacific Coast Beach House",
    description: "Stunning beach house on Costa Rica's Pacific coast. Open-air design, private pool, and direct beach access. World-class surfing, wildlife watching, and spectacular sunsets included.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "costa-rica-beach-01"
    },
    price: 2200,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "French Château with Vineyard Estate",
    description: "Magnificent 18th-century château surrounded by vineyards. Elegant period furnishings, wine cellar, and formal gardens. Wine tasting and tour of vineyards included in stay.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "french-chateau-01"
    },
    price: 4500,
    location: "Bordeaux",
    country: "France"
  },
  {
    title: "Moroccan Riad in Marrakech Medina",
    description: "Traditional riad in the heart of Marrakech's ancient medina. Stunning courtyard with fountain, rooftop terrace with Atlas Mountain views, and authentic Moroccan architecture and décor.",
    image: {
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "marrakech-riad-01"
    },
    price: 1800,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Australian Outback Luxury Lodge",
    description: "Unique luxury lodge experience in the Australian Outback. Eco-friendly design, stargazing opportunities, guided bushwalks, and authentic Aboriginal cultural experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "outback-lodge-01"
    },
    price: 3200,
    location: "Uluru",
    country: "Australia"
  },
  {
    title: "Norwegian Fjord Cabin with Aurora Views",
    description: "Remote cabin overlooking dramatic Norwegian fjords. Perfect for Northern Lights viewing, with panoramic windows, wood-burning stove, and traditional Scandinavian design.",
    image: {
      url: "https://images.unsplash.com/photo-1551524164-6cf2ac531c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "norwegian-cabin-01"
    },
    price: 2400,
    location: "Lofoten Islands",
    country: "Norway"
  },
  {
    title: "Santorini Cave House with Caldera Views",
    description: "Traditional cave house carved into volcanic cliffs. Infinity pool, spectacular caldera views, and authentic Cycladic architecture. Perfect for romantic getaways and sunset viewing.",
    image: {
      url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "santorini-cave-01"
    },
    price: 4200,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Icelandic Glass Igloo with Hot Spring",
    description: "Unique glass igloo accommodation with Northern Lights viewing opportunities. Private hot spring, heated floors, and panoramic views of Icelandic wilderness. Truly unforgettable experience.",
    image: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "iceland-igloo-01"
    },
    price: 3800,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Japanese Traditional Ryokan Inn",
    description: "Authentic ryokan experience in historic Kyoto. Tatami floors, futon beds, private onsen, and traditional kaiseki meals. Immerse yourself in Japanese culture and hospitality.",
    image: {
      url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "kyoto-ryokan-01"
    },
    price: 2800,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Patagonian Eco-Lodge with Glacier Views",
    description: "Sustainable lodge with breathtaking views of Patagonian glaciers and mountains. Guided hiking, wildlife viewing, and photography tours. Commitment to environmental conservation.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "patagonia-lodge-01"
    },
    price: 3600,
    location: "Torres del Paine",
    country: "Chile"
  },
  {
    title: "Seychelles Beach Villa with Private Chef",
    description: "Exclusive beach villa on pristine white sand beach. Private chef, butler service, water sports equipment, and helicopter transfers. Ultimate luxury in tropical paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "seychelles-villa-01"
    },
    price: 7500,
    location: "Mahé",
    country: "Seychelles"
  },
  {
    title: "Portuguese Quinta Wine Estate",
    description: "Historic wine estate in the Douro Valley. Traditional quinta with modern amenities, vineyard tours, wine tastings, and stunning views of terraced hillsides. Perfect for wine enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      filename: "douro-quinta-01"
    },
    price: 2600,
    location: "Douro Valley",
    country: "Portugal"
  }
];

module.exports = { data: sampleListings };