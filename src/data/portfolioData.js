/**
 * RH Growth - Portfolio Data Structure
 * Cloudinary Media Ready
 * 
 * Replace image/video URLs with your Cloudinary asset URLs:
 * e.g., "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/techhouse_profile.jpg"
 */

export const workCategories = [
  {
    id: "creative-work",
    title: "CREATIVE WORK",
    badge: "Design & Animation",
    description: "Posters, social media creatives, animated designs and promotional content created by our team.",
    coverImage: "/assets/brand_projects.png",
    items: [
      {
        id: "cw-1",
        title: "Social Media Campaign Poster",
        type: "image",
        mediaUrl: "/assets/brand_projects.png",
        category: "Posters",
        description: "Custom graphic poster design for social media promotional campaign."
      },
      {
        id: "cw-2",
        title: "Animated Motion Creative",
        type: "image",
        mediaUrl: "/assets/instagram_projects.png",
        category: "Animated Designs",
        description: "Motion graphic design built for high-engagement social posts."
      },
      {
        id: "cw-3",
        title: "Brand Identity Design Suite",
        type: "image",
        mediaUrl: "/assets/sad_platform.png",
        category: "Social Media Designs",
        description: "Cohesive visual layout and graphic asset kit for business branding."
      },
      {
        id: "cw-4",
        title: "Promotional Creative Video",
        type: "video",
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        category: "Creative Videos",
        posterUrl: "/assets/rh_experiments.png",
        description: "Short-form promotional video creative designed with sound and visual motion."
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
        profileScreenshot: "/assets/instagram_projects.png", // Paste Cloudinary URL here
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
            mediaUrl: "/assets/instagram_projects.png", // Paste Cloudinary URL
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
        profileScreenshot: "/assets/brand_projects.png", // Paste Cloudinary URL here
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
            mediaUrl: "/assets/brand_projects.png",
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
        id: "fresh-drops",
        title: "FRESH DROPS COCONUT OILS",
        category: "Coconut Oil",
        tagline: "An Instagram profile concept created for a coconut oil brand.",
        profileScreenshot: "/assets/facebook_projects.png", // Paste Cloudinary URL here
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
            mediaUrl: "/assets/facebook_projects.png",
            category: "Profile Screenshot",
            description: "Clean organic brand profile setup for FRESH DROPS COCONUT OILS."
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
