export interface PricingTier {
  free_trial: string;
  basic_plan: number;
  premium_plan: number;
  ads_supported: boolean;
}

export interface Content {
  total_movies_series: string;
  exclusive_shows: string[];
  genres: string[];
}

export interface Quality {
  max_resolution: string;
  dolby_atmos: boolean;
  surround_sound: boolean;
}

export interface Availability {
  offline_download: boolean;
  multiple_profiles: boolean;
}

export interface PlatformSupport {
  web_browser: boolean;
  mobile_app: boolean;
  smart_tv: boolean;
  game_consoles: boolean;
}

export interface PromoCode {
  code: string;
  discount: string;
  valid_until: string;
  terms: string;
}

export interface StreamingService {
  name: string;
  slug: string;
  rating: number;
  order: number;
  url: string;
  logo: string;
  pricing: PricingTier;
  content: Content;
  quality: Quality;
  availability: Availability;
  platform_support: PlatformSupport;
  promo_codes: PromoCode[];
}