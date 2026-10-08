import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for unified error formatting
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'An unexpected error occurred. Please try again.';
    if (error.response?.data?.detail) {
      if (typeof error.response.data.detail === 'string') {
        message = error.response.data.detail;
      } else if (Array.isArray(error.response.data.detail)) {
        // Pydantic validation error array
        message = error.response.data.detail.map((err) => `${err.loc?.join('.') || 'field'}: ${err.msg}`).join('; ');
      }
    } else if (error.message) {
      message = error.message;
    }
    return Promise.reject(new Error(message));
  }
);

// Fallback initial data in case the server is offline during static reviews
const FALLBACK_BUSINESSES = [
  {
    id: 1,
    name: 'Well within',
    slug: 'good-herb',
    business_type: 'Ayurveda-inspired modern wellness',
    short_description: 'A contemporary wellness brand inspired by traditional Ayurveda and designed for modern lifestyles.',
    description: 'Well within represents the wellness vertical of Balaji Essentials, harmonizing ancient Ayurvedic wisdom with contemporary lifestyle demands. Focused on responsible, unadulterated botanical formulations.',
    image_url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    is_active: true,
  },
  {
    id: 2,
    name: 'PHA Pallets Manufacturing',
    slug: 'pha-pallets',
    business_type: 'Industrial pallet manufacturing',
    short_description: 'Pallet solutions for industrial, warehousing, logistics, manufacturing and export applications.',
    description: 'PHA Pallets Manufacturing is an industrial supply-chain initiative by Balaji Essentials developing standardized and custom material handling solutions for manufacturing, warehousing, freight, and export logistics.',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    is_active: true,
  },
  {
    id: 3,
    name: 'EV Battery Recycling',
    slug: 'ev-battery-recycling',
    business_type: 'Circular-energy recycling initiative',
    short_description: 'A Vijayapura-based circular-energy initiative focused on responsible battery collection, processing and material recovery.',
    description: 'A forward-looking clean-energy initiative under Balaji Essentials dedicated to safe handling, systematic aggregation, and responsible material recovery from end-of-life electric vehicle batteries.',
    image_url: 'https://images.unsplash.com/photo-1558441719-aa34bbe5f347?auto=format&fit=crop&w=1200&q=80',
    is_active: true,
  },
];

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: 'Night Mode',
    slug: 'night-mode',
    category: 'Sleep & relaxation',
    description: 'Ayurveda-inspired botanical formulation designed to support evening relaxation and natural sleep cycles.',
    image_url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 2,
    name: 'Rooted',
    slug: 'rooted',
    category: 'Hair nutrition',
    description: 'Traditional botanical hair care nutrition designed to support root nourishment and scalp wellness.',
    image_url: 'https://images.unsplash.com/photo-1608248597358-1e4b3e8e2c45?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 3,
    name: 'Gut Reset',
    slug: 'gut-reset',
    category: 'Digestive wellness',
    description: 'Gentle herbal formulation focused on digestive equilibrium and daily metabolic comfort.',
    image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 4,
    name: 'Glow Daily',
    slug: 'glow-daily',
    category: 'Beauty & skin support',
    description: 'Botanical nutrients inspired by classical Ayurvedic beauty formulations to support skin health and natural radiance.',
    image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 5,
    name: 'Prime',
    slug: 'prime',
    category: 'Performance & vitality',
    description: 'Targeted adaptogenic botanical blend designed to support physical vitality and daily stamina.',
    image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 6,
    name: 'Her Balance',
    slug: 'her-balance',
    category: 'Women\'s wellness',
    description: 'Carefully selected herbs formulated to support hormonal balance, rhythmic comfort, and female vitality.',
    image_url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 7,
    name: 'Daily Defence',
    slug: 'daily-defence',
    category: 'Daily wellness / immunity',
    description: 'Synergistic herbal compound designed for daily immune support and physiological resilience.',
    image_url: 'https://images.unsplash.com/photo-1512290900672-1f41d08e5091?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 8,
    name: 'Active 50+',
    slug: 'active-50-plus',
    category: 'Healthy ageing',
    description: 'Botanical nutrition developed to support healthy mobility, joint ease, and active vitality for mature adults.',
    image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
  {
    id: 9,
    name: 'Bone Daily',
    slug: 'bone-daily',
    category: 'Bone nutrition',
    description: 'Traditional herbal nourishment structured to support bone strength and skeletal integrity.',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    is_active: true,
  },
];

export const api = {
  // Businesses
  async getBusinesses() {
    try {
      const response = await apiClient.get('/businesses');
      return response.data;
    } catch (err) {
      console.warn('API /businesses unreachable, using fallback data:', err.message);
      return FALLBACK_BUSINESSES;
    }
  },

  async getBusinessBySlug(slug) {
    try {
      const response = await apiClient.get(`/businesses/${slug}`);
      return response.data;
    } catch (err) {
      console.warn(`API /businesses/${slug} unreachable, using fallback:`, err.message);
      return FALLBACK_BUSINESSES.find((b) => b.slug === slug) || null;
    }
  },

  // Well within
  async getGoodHerbProducts(category = null) {
    try {
      const params = category ? { category } : {};
      const response = await apiClient.get('/good-herb/products', { params });
      return response.data;
    } catch (err) {
      console.warn('API /good-herb/products unreachable, using fallback:', err.message);
      if (category) {
        return FALLBACK_PRODUCTS.filter((p) => p.category === category);
      }
      return FALLBACK_PRODUCTS;
    }
  },

  async getGoodHerbProductBySlug(slug) {
    try {
      const response = await apiClient.get(`/good-herb/products/${slug}`);
      return response.data;
    } catch (err) {
      console.warn(`API /good-herb/products/${slug} unreachable:`, err.message);
      return FALLBACK_PRODUCTS.find((p) => p.slug === slug) || null;
    }
  },

  // Forms and Enquiries
  async submitEnquiry(data) {
    const response = await apiClient.post('/enquiries', data);
    return response.data;
  },

  async getEnquiries() {
    const response = await apiClient.get('/enquiries');
    return response.data;
  },

  async submitGeneralEnquiry(data) {
    const response = await apiClient.post('/enquiries', data);
    return response.data;
  },

  async submitPalletEnquiry(data) {
    const response = await apiClient.post('/pallet-enquiries', data);
    return response.data;
  },

  async submitBatteryEnquiry(data) {
    const response = await apiClient.post('/battery-enquiries', data);
    return response.data;
  },

  async submitContactMessage(data) {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },

  // Health
  async getHealth() {
    const response = await apiClient.get('/health');
    return response.data;
  },
};

export default api;
