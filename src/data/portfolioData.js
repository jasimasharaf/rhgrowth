/**
 * RH Growth - Portfolio Data Structure
 * Cloudinary Media Ready
 * 
 * Replace image/video URLs with your Cloudinary asset URLs:
 * e.g., "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/creative1.jpg"
 * e.g., "https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/vfx_promo.mp4"
 */

export const workCategories = [
  {
    id: "creative-work",
    title: "CREATIVE PRODUCTION",
    badge: "Visual Production",
    subtitle: "Professional visual content created for businesses and brands.",
    description: "From motion graphics and animated videos to VFX, promotional content and professional social media creatives, we create visual content designed to help businesses communicate their ideas effectively.",
    introText: "From motion graphics and animated videos to VFX, promotional content and professional social media creatives, we create visual content designed to help businesses communicate their ideas effectively.",
    coverImage: "https://res.cloudinary.com/zxszrucp/image/upload/v1789500665/WhatsApp_Image_2026-09-16_at_1.00.32_AM.jpg",
    capabilities: [
      "Animated Videos",
      "Motion Graphics",
      "VFX & Visual Effects",
      "Promotional Videos",
      "Professional Social Media Posts",
      "YouTube Animated Content",
      "Business Promotional Creatives",
      "Branded Visual Content"
    ],
    items: [
      {
        id: "cp-1",
        title: "Motion Graphics & Visual Effects",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Cloudinary MP4 URL
        category: "Motion Graphics & VFX",
        posterUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789500665/WhatsApp_Image_2026-09-16_at_1.00.32_AM.jpg",
        description: "Professional motion graphics video design created for brand communication."
      },
      {
        id: "cp-2",
        title: "Business Promotional Creative",
        type: "image",
        mediaUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789500665/WhatsApp_Image_2026-09-16_at_1.00.32_AM.jpg", // Cloudinary Image URL
        category: "Promotional Creatives",
        description: "High-contrast visual design poster built for social media campaigns."
      },
      {
        id: "cp-3",
        title: "YouTube Animated Content Showcase",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Animated Videos",
        posterUrl: "/assets/instagram_projects.png",
        description: "Animated video content designed for digital channels and brand awareness."
      },
      {
        id: "cp-4",
        title: "Branded Social Media Post Suite",
        type: "image",
        mediaUrl: "/assets/sad_platform.png",
        category: "Social Media Posts",
        description: "Clean aesthetic post layout designed for corporate communication."
      }
    ]
  },
  {
    id: "realtime-work",
    title: "REAL-TIME WORK",
    badge: "Execution & Shoots",
    description: "Real-world promotional content and projects created and executed for businesses.",
    coverImage: "https://res.cloudinary.com/zxszrucp/image/upload/v1789499741/WhatsApp_Image_2026-09-16_at_12.43.57_AM.jpg",
    items: [
      {
        id: "rw-1",
        title: "Product Promotion Campaign",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Product Promotion Videos",
        posterUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789499741/WhatsApp_Image_2026-09-16_at_12.43.57_AM.jpg",
        description: "Real-world product showcase video with audio commentary and feature highlights."
      },
      {
        id: "rw-2",
        title: "Commercial Product Shoot",
        type: "image",
        mediaUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789499741/WhatsApp_Image_2026-09-16_at_12.43.57_AM.jpg",
        category: "Real-World Product Shoots",
        description: "High-resolution product photography and promotional asset creation."
      },
      {
        id: "rw-3",
        title: "Business Campaign Reel",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        category: "Promotional Videos",
        posterUrl: "/assets/facebook_projects.png",
        description: "Dynamic promotional video created for client social media advertising."
      }
    ]
  },
  {
    id: "social-media-management",
    title: "SOCIAL MEDIA MANAGEMENT",
    badge: "Business Profiles",
    subtitle: "How We Build, Manage and Present Business Profiles on Social Media",
    description: "Examples of how we create, manage and present business profiles across social media.",
    coverImage: "/assets/instagram_projects.png",
    
    // EXACTLY THREE INSTAGRAM PAGE PROJECTS
    projects: [
      {
        id: "techhouse-in",
        title: "TECHHOUSE.IN",
        category: "Electronics",
        tagline: "An Instagram profile concept created for an electronics and appliance business.",
        profileScreenshot: "https://res.cloudinary.com/zxszrucp/image/upload/v1789495555/WhatsApp_Image_2026-09-15_at_9.57.23_AM.jpg",
        whatWeCreated: [
          "Instagram profile setup",
          "Professional profile presentation",
          "Product-focused content",
          "Social media posters",
          "Promotional creatives",
          "Animated content",
          "Reels and videos",
          "Product promotion content",
          "Consistent visual presentation"
        ],
        gallery: [
          {
            id: "th-poster-1",
            title: "Poster 01",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Creative promotional poster for TECHHOUSE.IN."
          },
          {
            id: "th-poster-2",
            title: "Poster 02",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Social media poster creative for TECHHOUSE.IN."
          },
          {
            id: "th-poster-3",
            title: "Poster 03",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Promotional poster creative for TECHHOUSE.IN."
          }
        ]
      },
      {
        id: "goodfood-in",
        title: "GOODFOOD.IN",
        category: "Food",
        tagline: "An Instagram profile concept created for a food business.",
        profileScreenshot: "https://res.cloudinary.com/zxszrucp/image/upload/v1789494836/mega2.jpg",
        whatWeCreated: [
          "Instagram profile setup",
          "Professional profile presentation",
          "Food-focused content",
          "Promotional posters",
          "Offer creatives",
          "Food visuals",
          "Reels and videos",
          "Promotional content",
          "Consistent social media presentation"
        ],
        gallery: [
          {
            id: "gf-poster-1",
            title: "Poster 01",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Food promotional poster for GOODFOOD.IN."
          },
          {
            id: "gf-poster-2",
            title: "Poster 02",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Special offer poster creative for GOODFOOD.IN."
          },
          {
            id: "gf-poster-3",
            title: "Poster 03",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Menu showcase poster for GOODFOOD.IN."
          }
        ]
      },
      {
        id: "freshdrop_oils",
        title: "FRESHDROP_OILS",
        category: "Coconut Oil",
        tagline: "An Instagram profile concept created for a coconut oil brand.",
        profileScreenshot: "https://res.cloudinary.com/zxszrucp/image/upload/v1789494931/mega.jpg",
        whatWeCreated: [
          "Instagram profile setup",
          "Product-focused profile presentation",
          "Coconut oil product visuals",
          "Social media posters",
          "Product promotional content",
          "Brand-focused creatives",
          "Reels and videos",
          "Consistent visual presentation"
        ],
        gallery: [
          {
            id: "fd-poster-1",
            title: "Poster 01",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Product benefit poster for FRESHDROP_OILS."
          },
          {
            id: "fd-poster-2",
            title: "Poster 02",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Organic coconut oil promotional creative."
          },
          {
            id: "fd-poster-3",
            title: "Poster 03",
            type: "image",
            mediaUrl: "/assets/brand_projects.png", // Provide link in next chat
            category: "Poster Design",
            description: "Branded visual poster for FRESHDROP_OILS."
          }
        ]
      }
    ]
  }
];
