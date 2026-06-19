import { Product, Concern, CustomerReview, BlogPost } from './types';

export const CONCERNS: Concern[] = [
  {
    id: 'plantar-fasciitis',
    name: 'Plantar Fasciitis',
    description: 'Sharp throbbing heel pain during early morning steps.',
    icon: 'Activity'
  },
  {
    id: 'flat-feet',
    name: 'Flat Feet & Arch Pain',
    description: 'Instability, arch fatigue, and misalignment while standing.',
    icon: 'TrendingDown'
  },
  {
    id: 'heel-pain',
    name: 'Heel Spur & Pain',
    description: 'Direct impact shock on the heel bones during heel strike.',
    icon: 'ShieldAlert'
  },
  {
    id: 'knee-pain',
    name: 'Knee & Joint Stress',
    description: 'Fatigue extending upwards due to poor shock absorption.',
    icon: 'AlertCircle'
  },
  {
    id: 'foot-fatigue',
    name: 'General Foot Fatigue',
    description: 'Tired, aching feet after hours of standing or walking.',
    icon: 'Sparkles'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'slide-01',
    name: 'Medofoot Ultimate Cloud Indoor Slipper',
    description: 'Medical-grade contoured orthopedic slipper designed for deep heel-cupping support & plush fleece embrace.',
    price: 1899,
    originalPrice: 2499,
    category: 'indoor-slippers',
    concern: ['Plantar Fasciitis', 'Heel Spur & Pain', 'General Foot Fatigue'],
    rating: 4.8,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
    features: ['High Arch Support', 'Shock-Absorbing EVA Layer', 'Super-Soft Velvet Cover']
  },
  {
    id: 'slide-02',
    name: 'Medofoot ErgoWalk Hybrid Outdoor Slipper',
    description: 'Sturdy water-resistant outdoor slides featuring multi-density slip-resistant soles and active orthopedic strap.',
    price: 2199,
    originalPrice: 2899,
    category: 'outdoor-slippers',
    concern: ['Flat Feet & Arch Pain', 'General Foot Fatigue', 'Knee & Joint Stress'],
    rating: 4.7,
    reviewsCount: 218,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    badge: 'New Launch',
    features: ['Outdoor Grip Tech', 'Breathable Cork Footbed', 'Adjustable Dual-Fit Straps']
  },
  {
    id: 'slide-03',
    name: 'Medofoot Dual-Gel Orthotic Arch Insoles',
    description: 'Advanced biomechanical design with high-density nylon core flanked by responsive silicone gel pads.',
    price: 1199,
    originalPrice: 1699,
    category: 'insoles',
    concern: ['Plantar Fasciitis', 'Flat Feet & Arch Pain', 'Knee & Joint Stress'],
    rating: 4.9,
    reviewsCount: 954,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80',
    badge: 'Doctor Recommended',
    features: ['Polite Deep-Heel Cradle', 'Carbon TPU Stabilizer', 'Trimmable Custom Fitting']
  },
  {
    id: 'slide-04',
    name: 'Medofoot ActiveFit Sports Arch Insoles',
    description: 'Built for high impact running and cross-training with specialized high-bounce foam and lateral stability.',
    price: 1399,
    originalPrice: 1999,
    category: 'insoles',
    concern: ['Knee & Joint Stress', 'Flat Feet & Arch Pain', 'General Foot Fatigue'],
    rating: 4.6,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    badge: 'Athletes Choice',
    features: ['High-Rebound cushioning', 'Sweat-Wicking Top Mesh', 'Impact Dispersion Shields']
  },
  {
    id: 'slide-05',
    name: 'Medofoot ArchCare Compression Socks',
    description: 'Gradient compression socks targeting the plantar fascia ligament with micro-massaging weave technology.',
    price: 499,
    originalPrice: 799,
    category: 'socks',
    concern: ['Plantar Fasciitis', 'General Foot Fatigue', 'Heel Spur & Pain'],
    rating: 4.7,
    reviewsCount: 412,
    image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    features: ['20-30 mmHg Gradient Wrap', 'Seamless Toe Comfort', 'Deep Heel Cushioning Pocket']
  },
  {
    id: 'slide-06',
    name: 'Medofoot CloudStep Plush Indoor Slipper',
    description: 'Wrap your feet in zero-gravity cloud slippers designed for immediate morning heel spur relief.',
    price: 1699,
    originalPrice: 2299,
    category: 'indoor-slippers',
    concern: ['Heel Spur & Pain', 'General Foot Fatigue'],
    rating: 4.8,
    reviewsCount: 188,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    features: ['Ultra-Thick 4cm EVA Sole', 'Ergonomic 15° Angle Tip', 'Antimicrobial Easy-Washable']
  },
  {
    id: 'slide-07',
    name: 'Medofoot Cushioned Diabetic Thermal Socks',
    description: 'Extra cushioning foot protection. Non-binding relaxed fit that does not constrict circulation.',
    price: 549,
    originalPrice: 899,
    category: 'socks',
    concern: ['General Foot Fatigue', 'Knee & Joint Stress'],
    rating: 4.9,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&w=600&q=80',
    badge: 'Diabetic Friendly',
    features: ['Super Soft Bamboo Weave', 'Relaxed Elastic Welts', 'Anti-friction Padding']
  },
  {
    id: 'slide-08',
    name: 'Medofoot WorkDay Heavy-Duty Insoles',
    description: 'Formulated for boots and office wear. Neutralizes 8+ hours of hard ground vibration.',
    price: 1249,
    originalPrice: 1799,
    category: 'insoles',
    concern: ['General Foot Fatigue', 'Heel Spur & Pain', 'Flat Feet & Arch Pain'],
    rating: 4.7,
    reviewsCount: 298,
    image: 'https://images.unsplash.com/photo-1620138546344-7b2c08516edc?auto=format&fit=crop&w=600&q=80',
    features: ['Activated Charcoal Deodorizer', 'Full Foot Shock-Gel', 'Fatigue-Fighter Architecture']
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    name: 'Amisha Patel',
    rating: 5,
    comment: 'The Ultimate Cloud Slippers literally saved my mornings! I was dreading getting out of bed due to terrible Plantar Fasciitis heel sparks. The first step on these slippers feels completely supported.',
    productName: 'Medofoot Ultimate Cloud Indoor Slipper',
    verified: true,
    date: '2 weeks ago'
  },
  {
    id: 'rev-02',
    name: 'Rajesh Sharma',
    rating: 5,
    comment: 'The Orthotic Insoles fit perfectly inside my running shoes. Flat-feet fatigue is gone. I stood during an entire 6-hour trade show without back or knee strain.',
    productName: 'Medofoot Dual-Gel Orthotic Arch Insoles',
    verified: true,
    date: '1 month ago'
  },
  {
    id: 'rev-03',
    name: 'Dr. Vivek Menon (Physiotherapist)',
    rating: 5,
    comment: 'I actively prescribe the ArchCare Socks and Insoles combination to patients recovering from Achilles tendonitis. The arch stability in Medofoot products is correctly calculated for optimal ankle alignment.',
    productName: 'Medofoot ArchCare Compression Socks',
    verified: true,
    date: '3 weeks ago'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Pain-Free Mornings Start Here',
    subtitle: 'Zero Gravity Comfort',
    description: 'Formulated by orthotic experts to eliminate Plantar Fasciitis, flat feet fatigue, and heel spur exhaustion.',
    cta: 'Explore Comfort Slippers',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
    tag: 'COMFORT FOOTWEAR'
  },
  {
    id: 2,
    title: 'Your Shoes, Better Alignment',
    subtitle: 'Doctor Recommended Insoles',
    description: 'Transform any athletic, work, or casual boots with therapeutic arch support and biomechanical deep heel cups.',
    cta: 'Discover Insoles',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
    tag: 'CUSTOM INSOLES'
  },
  {
    id: 3,
    title: 'Smart Cushioning, Zero Constriction',
    subtitle: 'Ergonomic Therapeutic Socks',
    description: 'Targeted compression zones engineered to boost venous circulation and minimize Achilles fatigue instantly.',
    cta: 'Browse Compression Socks',
    image: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1200&q=80',
    tag: 'THERAPEUTIC SOCKS'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Understanding Morning Heel Pain: Plantar Fasciitis Decoded',
    excerpt: 'Why do the first steps out of bed hurt so much? Learn about the inflammatory process of the plantar ligament and how ergonomic slippers halt further micro-tears.',
    category: 'Foot Health',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&w=600&q=80',
    date: 'May 24, 2026'
  },
  {
    id: 'blog-02',
    title: 'Do Insoles Actually Correct Alignment? What Research Says',
    excerpt: 'We review major clinical trials demonstrating the direct mechanical correlation between pronated ankles, high arch support, and reduced lower back fatigue.',
    category: 'Science',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    date: 'May 10, 2026'
  },
  {
    id: 'blog-03',
    title: 'The Guide to Choosing Indoor vs. Outdoor Shock Protection',
    excerpt: 'Selecting the right hardness index for footpads when traversing carpeted flooring vs. concrete pathways. Why dynamic rebound density matters.',
    category: 'Lifestyle',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=600&q=80',
    date: 'Apr 28, 2026'
  }
];

export const FOUNDER_QUOTE = {
  quote: "My team and I started Medofoot out of a simple frustration: orthotics were either ugly, clinical, and expensive, or retail footwear prioritized fashion over skeletal health. We merged orthotic engineering with beautiful, plush everyday materials so that foot health is effortless, and premium design meets instant therapeutic luxury.",
  speaker: "Mathew Sebastian",
  title: "Team Head, Medofoot"
};
