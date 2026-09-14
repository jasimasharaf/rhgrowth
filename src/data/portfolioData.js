/**
 * RH Growth - Portfolio Data Structure
 * Cloudinary Media Ready
 * 
 * Replace image/video URLs with your Cloudinary asset URLs:
 * e.g., "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/poster1.jpg"
 * e.g., "https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/promo1.mp4"
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
        type: "image", // 'image' or 'video'
        mediaUrl: "/assets/brand_projects.png", // Replace with Cloudinary URL
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
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Cloudinary MP4 URL placeholder
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
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", // Cloudinary MP4 URL placeholder
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
        mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", // Cloudinary MP4 URL placeholder
        category: "Promotional Videos",
        posterUrl: "/assets/facebook_projects.png",
        description: "Dynamic promotional video created for client social media advertising."
      }
    ]
  },
  {
    id: "social-media-management",
    title: "SOCIAL MEDIA MANAGEMENT",
    badge: "Profiles & Strategy",
    description: "Examples of how we create, manage and present business profiles across social media.",
    coverImage: "/assets/instagram_projects.png",
    
    // Dedicated Project Area: ZAAD Platforms
    zaadPlatform: {
      title: "ZAAD Platforms",
      subtitle: "Full Social Media & Content Management",
      description: "Comprehensive social media execution completed for ZAAD Platforms across Instagram and Facebook.",
      items: [
        {
          id: "zaad-1",
          title: "ZAAD Campaign Poster",
          type: "image",
          mediaUrl: "/assets/sad_platform.png",
          category: "Posters & Creatives",
          description: "Posters and creative designs developed for ZAAD Platforms."
        },
        {
          id: "zaad-2",
          title: "ZAAD Video Content",
          type: "video",
          mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyflights.mp4",
          category: "Promotional Video",
          posterUrl: "/assets/sad_platform.png",
          description: "Promotional reel and video content created for ZAAD Platforms."
        },
        {
          id: "zaad-3",
          title: "ZAAD Social Media Grid",
          type: "image",
          mediaUrl: "/assets/sad_platform.png",
          category: "Instagram & Facebook Management",
          description: "Feed layout, post graphics, and community presentation for ZAAD Platforms."
        }
      ]
    },

    // 3 Specific Social Media Page Projects
    pageProjects: [
      {
        id: "proj-electronics",
        title: "Electronics Shop",
        category: "Retail & Tech",
        description: "Social media management and product showcase executed for an electronics store.",
        items: [
          {
            title: "Instagram Profile Presentation",
            type: "image",
            mediaUrl: "/assets/instagram_projects.png",
            note: "Profile layout, bio optimization, highlight covers."
          },
          {
            title: "Product Launch Post & Highlights",
            type: "image",
            mediaUrl: "/assets/brand_projects.png",
            note: "Product carousels, offer banners, and store highlights."
          },
          {
            title: "Gadget Demo Reel / Video",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            posterUrl: "/assets/instagram_projects.png",
            note: "Reel showcase highlighting new gadget arrivals."
          }
        ]
      },
      {
        id: "proj-food",
        title: "Food Shop",
        category: "Restaurant & Cafe",
        description: "Aesthetic food photography, offer creatives, and short reels for a food outlet.",
        items: [
          {
            title: "Instagram Profile Presentation",
            type: "image",
            mediaUrl: "/assets/brand_projects.png",
            note: "Food shop Instagram page structure & story highlights."
          },
          {
            title: "Menu & Special Offer Creatives",
            type: "image",
            mediaUrl: "/assets/sad_platform.png",
            note: "Food promotional posts and discount campaign graphics."
          },
          {
            title: "Dish Preparation Reel",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            posterUrl: "/assets/brand_projects.png",
            note: "Short-form video highlighting dish preparation and ambience."
          }
        ]
      },
      {
        id: "proj-coconut-oil",
        title: "Coconut Oil Brand",
        category: "Organic & FMCG",
        description: "Brand positioning, pure product messaging, and organic social media content.",
        items: [
          {
            title: "Instagram Profile Presentation",
            type: "image",
            mediaUrl: "/assets/facebook_projects.png",
            note: "Organic brand tone, bio setup, and clean visual grid."
          },
          {
            title: "Product Benefit Posts",
            type: "image",
            mediaUrl: "/assets/rh_experiments.png",
            note: "Educational carousel posts and product packaging visuals."
          },
          {
            title: "Brand Promotional Video",
            type: "video",
            mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback.mp4",
            posterUrl: "/assets/facebook_projects.png",
            note: "Natural origin video campaign for coconut oil brand."
          }
        ]
      }
    ]
  }
];
