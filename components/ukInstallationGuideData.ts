import {
  Flame,
  Smartphone,
  Monitor,
  Tv,
  Apple,
  Laptop,
  Box,
  type LucideIcon,
} from "lucide-react";

export interface UkDeviceGuide {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  intro?: string;
  steps: string[];
  benefitsTitle?: string;
  benefits?: string[];
  supportedAppsTitle?: string;
  supportedApps?: string[];
  supportTitle?: string;
  supportText?: string;
  supportCta?: string;
}

export const requirements = [
  "An active IPTV subscription",
  "Your IPTV login details",
  "Username and password (if applicable)",
  "Portal URL or activation information (when required)",
  "A stable internet connection",
  "A compatible streaming device",
];

export const smartTvApps = [
  "CR7 Player",
  "IBO Player",
  "IBO Player Pro",
  "HOT IPTV",
  "Bay IPTV",
  "SmartOne IPTV",
  "IBO X Player",
];

export const appleApps = [
  "iPlayTV AIO",
  "Smarters Player Lite",
  "IBO Player Pro",
  "GSE Smart IPTV",
  "IPTVX",
];

export const ukDeviceGuides: UkDeviceGuide[] = [
  {
    id: "firestick",
    label: "Amazon Fire TV Stick",
    icon: Flame,
    title: "Amazon Fire TV Stick IPTV Setup Guide",
    intro:
      "Amazon Fire TV Stick is one of the most popular streaming devices for IPTV because it offers an easy installation process, smooth performance, and a user-friendly interface.",
    steps: [
      "Install Downloader by AFTVnews from the Amazon Appstore.",
      "Enter the download code provided by our support team to install the recommended IPTV application.",
      "After installation, enter your IPTV login details supplied with your subscription to begin streaming.",
    ],
    benefitsTitle: "Why Fire TV Stick Works Well for IPTV",
    benefits: [
      "Easy installation",
      "Fast navigation",
      "Reliable streaming experience",
      "Compatible with popular IPTV applications",
      "Simple remote control interface",
    ],
  },
  {
    id: "android-tv",
    label: "Android TV",
    icon: Smartphone,
    title: "Android TV IPTV Installation Guide",
    intro:
      "Android TV provides a flexible platform for IPTV streaming and supports a wide range of IPTV applications available through Google Play.",
    steps: [
      "Open the Google Play Store and install Downloader by AFTVnews.",
      "Enter the download code provided by our support team to install the recommended IPTV player.",
      "Once installed, sign in using your IPTV account details.",
    ],
    benefitsTitle: "Android TV Benefits",
    benefits: [
      "Access to Google Play Store",
      "Easy application management",
      "Smooth IPTV streaming",
      "Compatible with multiple IPTV players",
    ],
  },
  {
    id: "chromecast",
    label: "Google Chromecast",
    icon: Monitor,
    title: "Google Chromecast IPTV Setup",
    intro:
      "Google Chromecast with Google TV provides a convenient way to stream IPTV content directly on your television.",
    steps: [
      "On Chromecast with Google TV, open the Google Play Store and install Downloader by AFTVnews.",
      "Enter the setup code provided by our support team to install the recommended IPTV application.",
      "Complete the setup using your IPTV login credentials.",
    ],
    benefitsTitle: "Chromecast Advantages",
    benefits: [
      "Compact streaming device",
      "Easy IPTV setup",
      "Smooth content playback",
      "User-friendly navigation",
    ],
  },
  {
    id: "samsung",
    label: "Samsung Smart TV",
    icon: Tv,
    title: "Samsung Smart TV IPTV Installation",
    intro:
      "Samsung Smart TVs support several IPTV applications, allowing users to choose the option that best suits their viewing preferences.",
    supportedAppsTitle: "Supported IPTV Applications",
    supportedApps: smartTvApps,
    steps: [
      "Install your preferred IPTV application.",
      "Provide the Device ID or activation details (if required) to our support team.",
      "We will send your activation information so you can start watching.",
    ],
    benefitsTitle: "Samsung Smart TV Benefits",
    benefits: [
      "Large screen viewing",
      "Easy IPTV application installation",
      "Excellent streaming quality",
      "Simple navigation",
    ],
    supportTitle: "Need Help During Installation?",
    supportText:
      "If you experience any issues while installing IPTV on your device, our support team is available to help with activation details, setup codes, application recommendations, and device configuration.",
    supportCta: "Contact Our Support Team for Installation Assistance",
  },
  {
    id: "lg",
    label: "LG Smart TV",
    icon: Tv,
    title: "LG Smart TV IPTV Setup Guide",
    intro:
      "LG Smart TVs also support several compatible IPTV applications, making the installation process straightforward for most users.",
    supportedAppsTitle: "Supported IPTV Applications",
    supportedApps: smartTvApps,
    steps: [
      "After installing your chosen IPTV application, send us the Device ID if required.",
      "We will configure your subscription and provide your IPTV login details.",
    ],
    benefitsTitle: "LG Smart TV Benefits",
    benefits: [
      "Reliable IPTV compatibility",
      "Easy activation process",
      "Smooth streaming experience",
      "Simple user interface",
    ],
  },
  {
    id: "sony",
    label: "Sony Smart TV",
    icon: Tv,
    title: "Sony Smart TV IPTV Installation Guide",
    intro:
      "Sony Smart TVs powered by Android TV make IPTV installation simple through the Google Play Store. The setup process is quick and requires only a few steps before you can start streaming.",
    steps: [
      "Sony Smart TVs use Google Play Store.",
      "Install Downloader by AFTVnews, enter the download code supplied by our support team, install the recommended IPTV application, and log in with your IPTV credentials.",
    ],
    benefitsTitle: "Why Choose Sony Smart TV for IPTV?",
    benefits: [
      "Android TV platform",
      "Easy IPTV application installation",
      "Reliable streaming performance",
      "User-friendly interface",
    ],
  },
  {
    id: "philips",
    label: "Philips Smart TV",
    icon: Tv,
    title: "Philips Smart TV IPTV Setup Guide",
    intro:
      "Philips Smart TVs running Android TV or Google TV support IPTV installation using the recommended IPTV application.",
    steps: [
      "Philips Smart TVs with Google TV or Android TV can install Downloader by AFTVnews from the Play Store.",
      "Enter the installation code supplied by our support team, then complete setup using your IPTV account.",
    ],
    benefitsTitle: "Philips Smart TV Benefits",
    benefits: [
      "Simple IPTV installation",
      "Google Play Store access",
      "Smooth streaming experience",
      "Compatible with IPTV applications",
    ],
  },
  {
    id: "hisense",
    label: "Hisense Smart TV",
    icon: Tv,
    title: "Hisense Smart TV IPTV Installation",
    intro:
      "Hisense Smart TVs support multiple IPTV installation methods depending on the operating system available on your television.",
    supportedAppsTitle: "Supported IPTV Applications",
    supportedApps: smartTvApps,
    steps: [
      "Hisense Smart TVs running VIDAA or Android support several installation methods depending on the model.",
      "For compatible models, we recommend the supported IPTV applications listed above.",
      "If your TV uses Android, install Downloader by AFTVnews and use the code provided by our support team.",
    ],
    benefitsTitle: "Hisense IPTV Advantages",
    benefits: [
      "Flexible installation options",
      "Multiple supported IPTV players",
      "Reliable streaming compatibility",
      "Easy activation process",
    ],
  },
  {
    id: "tcl",
    label: "TCL Smart TV",
    icon: Tv,
    title: "TCL Smart TV IPTV Setup Guide",
    intro:
      "TCL Smart TVs powered by Android TV provide a straightforward IPTV installation process.",
    steps: [
      "Open Google Play Store, install Downloader by AFTVnews, enter the installation code supplied by our support team, and complete the setup with your IPTV account details.",
    ],
    benefitsTitle: "TCL Smart TV Benefits",
    benefits: [
      "Beginner-friendly setup",
      "Google Play Store support",
      "Reliable IPTV compatibility",
      "Smooth streaming experience",
    ],
  },
  {
    id: "vidaa",
    label: "VIDAA Smart TV",
    icon: Tv,
    title: "VIDAA Smart TV IPTV Installation",
    intro:
      "VIDAA Smart TVs support several IPTV applications, allowing users to choose the option that best suits their television.",
    supportedAppsTitle: "Supported IPTV Applications",
    supportedApps: smartTvApps,
    steps: [
      "Install the recommended IPTV application and contact our support team with your device information if activation is required.",
    ],
    benefitsTitle: "VIDAA TV Advantages",
    benefits: [
      "Multiple IPTV player options",
      "Easy device activation",
      "User-friendly interface",
      "Reliable IPTV compatibility",
    ],
  },
  {
    id: "apple-tv",
    label: "Apple TV",
    icon: Apple,
    title: "Apple TV IPTV Setup Guide",
    intro:
      "Apple TV offers an excellent streaming experience with several IPTV applications available through the App Store.",
    supportedAppsTitle: "Recommended IPTV Applications",
    supportedApps: appleApps,
    steps: [
      "Install any available app from the App Store, then enter your IPTV login details supplied with your subscription and complete the setup following our support instructions.",
    ],
    benefitsTitle: "Apple TV Benefits",
    benefits: [
      "Premium streaming experience",
      "Smooth navigation",
      "Excellent video quality",
      "Easy IPTV setup",
    ],
  },
  {
    id: "iphone",
    label: "iPhone & iPad",
    icon: Apple,
    title: "iPhone & iPad IPTV Installation",
    intro:
      "Watching IPTV on iPhone and iPad is simple using supported IPTV applications available on the Apple App Store.",
    supportedAppsTitle: "Recommended IPTV Applications",
    supportedApps: appleApps,
    steps: [
      "Download your preferred app from the App Store and sign in using the IPTV credentials provided after your subscription is activated.",
    ],
    benefitsTitle: "iPhone & iPad Benefits",
    benefits: [
      "Watch IPTV anywhere",
      "Easy application installation",
      "Flexible mobile streaming",
      "Quick account activation",
    ],
  },
  {
    id: "android-ph",
    label: "Android Phones & Tablets",
    icon: Smartphone,
    title: "Android Phone & Tablet IPTV Setup",
    intro:
      "Android smartphones and tablets provide an easy way to enjoy IPTV while traveling or away from home.",
    steps: [
      "Download Downloader by AFTVnews from Google Play Store.",
      "Enter the installation code supplied by our support team to install the recommended IPTV player.",
      "Once installed, log in using your IPTV account details.",
    ],
    benefitsTitle: "Android Mobile Benefits",
    benefits: [
      "Portable entertainment",
      "Easy setup",
      "Flexible viewing",
      "Compatible with recommended IPTV applications",
    ],
  },
  {
    id: "windows",
    label: "Windows PC",
    icon: Monitor,
    title: "Windows PC IPTV Installation Guide",
    intro:
      "Windows computers provide another convenient way to enjoy IPTV entertainment.",
    supportedAppsTitle: "Recommended IPTV Applications",
    supportedApps: ["IBO Player", "IBO Player Pro", "IPTV Smarters Expert"],
    steps: [
      "Open Microsoft Store and install either IBO Player, IBO Player Pro, or IPTV Smarters Expert.",
      "After installation, enter your IPTV login information to complete the setup.",
    ],
    benefitsTitle: "Windows PC Benefits",
    benefits: [
      "Large screen viewing",
      "Easy IPTV management",
      "Reliable streaming",
      "Convenient navigation",
    ],
  },
  {
    id: "mac",
    label: "Mac",
    icon: Laptop,
    title: "Mac IPTV Setup Guide",
    steps: [
      "Open the App Store and install IBO Player or IBO Player Pro.",
      "Enter the IPTV account details provided by our support team to activate your subscription.",
    ],
    benefitsTitle: "Mac Benefits",
    benefits: [
      "Simple installation",
      "Smooth streaming",
      "User-friendly interface",
      "Reliable IPTV compatibility",
    ],
  },
  {
    id: "mag",
    label: "MAG Box",
    icon: Box,
    title: "MAG Box IPTV Installation",
    intro:
      "MAG Box remains a popular IPTV device because it offers a dedicated IPTV experience.",
    steps: [
      "Send us your MAG Box MAC Address after placing your order.",
      "Our support team will configure your subscription and provide the Portal URL required to complete the setup.",
    ],
    benefitsTitle: "MAG Box Benefits",
    benefits: [
      "Dedicated IPTV hardware",
      "Stable performance",
      "Simple activation process",
      "Reliable IPTV streaming",
    ],
  },
  {
    id: "formuler",
    label: "Formuler Box",
    icon: Box,
    title: "Formuler Box IPTV Setup Guide",
    intro:
      "Formuler devices are designed specifically for IPTV and media streaming.",
    steps: [
      "Open Google Play Store, install Downloader by AFTVnews, enter the installation code supplied by our support team, and complete the setup using your IPTV account details.",
    ],
    benefitsTitle: "Formuler Box Benefits",
    benefits: [
      "Excellent IPTV performance",
      "Easy installation",
      "Smooth navigation",
      "Reliable streaming experience",
    ],
  },
  {
    id: "nvidia",
    label: "NVIDIA Shield TV",
    icon: Monitor,
    title: "NVIDIA Shield TV IPTV Installation",
    intro:
      "NVIDIA Shield TV delivers powerful performance for IPTV streaming and supports Android applications through Google Play.",
    steps: [
      "Open Google Play Store and install Downloader by AFTVnews.",
      "Use the download code supplied by our support team to install the recommended IPTV application, then sign in using your IPTV subscription details.",
    ],
    benefitsTitle: "NVIDIA Shield TV Benefits",
    benefits: [
      "Powerful streaming hardware",
      "Android TV support",
      "Fast IPTV performance",
      "Premium viewing experience",
    ],
    supportTitle: "Need Help Setting Up Your Device?",
    supportText:
      "No matter which compatible device you use, our support team is ready to help with application recommendations, activation details, login information, and setup assistance.",
    supportCta: "Contact Our IPTV Support Team for Device Setup Assistance",
  },
];
