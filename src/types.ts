export interface PhoneSpec {
  screen: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
}

export interface Review {
  id: string;
  brand: string;
  model: string;
  price: string;
  rating: number;
  image: string;
  summary: string;
  pros: string[];
  cons: string[];
  specs: PhoneSpec;
  publishedAt: string;
  content: string;
}
