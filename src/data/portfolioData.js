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
    coverImage: "/assets/brand_projects.png",
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
        posterUrl: "/assets/brand_projects.png",
        description: "Professional motion graphics video design created for brand communication."
      },
      {
        id: "cp-2",
        title: "Business Promotional Creative",
        type: "image",
        mediaUrl: "/assets/brand_projects.png", // Cloudinary Image URL
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
    coverImage: "/assets/sad_platform.png",
    items: [
      {
        id: "rw-1",
        title: "Product Promotion Campaign",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Product Promotion Videos",
        posterUrl: "/assets/sad_platform.png",
        description: "Real-world product showcase video with audio commentary and feature highlights."
      },
      {
        id: "rw-2",
        title: "Commercial Product Shoot",
        type: "image",
        mediaUrl: "/assets/sad_platform.png",
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
            id: "th-1",
            title: "Instagram Profile Screenshot & Grid",
            type: "image",
            mediaUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789495555/WhatsApp_Image_2026-09-15_at_9.57.23_AM.jpg",
            category: "Profile Screenshot",
            description: "Full Instagram page presentation for TECHHOUSE.IN."
          },
          {
            id: "th-2",
            title: "Electronics Offer Poster",
            type: "image",
            mediaUrl: "/assets/brand_projects.png",
            category: "Posters & Creatives",
            description: "Promotional poster for flagship electronics launch."
          },
          {
            id: "th-3",
            title: "Gadget Feature Showcase Reel",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            posterUrl: "/assets/instagram_projects.png",
            category: "Reels & Videos",
            description: "Short video showcasing gadget performance and features."
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
            id: "gf-1",
            title: "Instagram Profile Screenshot",
            type: "image",
            mediaUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789494836/mega2.jpg",
            category: "Profile Screenshot",
            description: "Food profile presentation and highlight cover design for GOODFOOD.IN."
          },
          {
            id: "gf-2",
            title: "Special Offer Creative Poster",
            type: "image",
            mediaUrl: "/assets/sad_platform.png",
            category: "Posters & Offers",
            description: "Visual promo poster for seasonal menu specials."
          },
          {
            id: "gf-3",
            title: "Dish Preparation Reel",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            posterUrl: "/assets/brand_projects.png",
            category: "Reels & Videos",
            description: "Food preparation video clip for high engagement."
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
            id: "fd-1",
            title: "Instagram Profile Screenshot",
            type: "image",
            mediaUrl: "https://res.cloudinary.com/zxszrucp/image/upload/v1789494931/mega.jpg",
            category: "Profile Screenshot",
            description: "Clean organic brand profile setup for FRESHDROP_OILS."
          },
          {
            id: "fd-2",
            title: "Product Benefit Infographic Poster",
            type: "image",
            mediaUrl: "/assets/rh_experiments.png",
            category: "Brand Creatives",
            description: "Product photography and benefit visual poster."
          },
          {
            id: "fd-3",
            title: "Natural Origin Brand Reel",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback.mp4",
            posterUrl: "/assets/facebook_projects.png",
            category: "Reels & Videos",
            description: "Natural sourcing and purity campaign video."
          }
        ]
      }
    ]
  }
];
