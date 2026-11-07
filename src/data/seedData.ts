import { Country, Recipe, CategoryInfo, UserProfile } from '../types';

export const HERO_IMAGE_PATH = '/src/assets/images/hero_world_cuisine_1794011181074.jpg';
export const CUISINE_SPREAD_IMAGE = '/src/assets/images/country_cuisine_spread_1794011179688.jpg';
export const COOKING_MASTERCLASS_IMAGE = '/src/assets/images/cooking_masterclass_1794011181297.jpg';

export const INITIAL_COUNTRIES: Country[] = [
  {
    id: 'india',
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    description: 'A kaleidoscope of aromatic spices, slow-simmered curries, tandoori breads, and fragrant basmati rice dishes representing diverse regional culinary traditions.',
    popularDishes: ['Chicken Biryani', 'Butter Chicken', 'Dal Makhani', 'Paneer Butter Masala', 'Punjabi Samosa', 'Masala Dosa', 'Palak Paneer', 'Gulab Jamun'],
    recipeCount: 9,
    region: 'South Asia'
  },
  {
    id: 'italy',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    description: 'Renowned for fresh simplicity, highlighting sun-ripened tomatoes, extra virgin olive oil, handmade pasta shapes, artisanal cheeses, and Mediterranean herbs.',
    popularDishes: ['Margherita Pizza', 'Spaghetti Carbonara', 'Fettuccine Alfredo', 'Risotto alla Milanese', 'Tiramisu'],
    recipeCount: 3,
    region: 'Southern Europe'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    code: 'MX',
    flag: '🇲🇽',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    description: 'An ancient UNESCO cultural heritage cuisine celebrating charred chiles, warm corn tortillas, slow-roasted meats, fresh citrus, cilantro, and creamy avocados.',
    popularDishes: ['Tacos al Pastor', 'Enchiladas Verdes', 'Guacamole Tradicional', 'Chiles Rellenos', 'Churros'],
    recipeCount: 3,
    region: 'North America'
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    description: 'Built around the pursuit of umami, seasonal harmony, meticulous knife work, rich broths, steamed rice, dashi, and delicate seafood preparations.',
    popularDishes: ['Tonkotsu Ramen', 'Salmon Teriyaki', 'Chicken Katsu Curry', 'Nigiri Sushi', 'Miso Soup'],
    recipeCount: 2,
    region: 'East Asia'
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    description: 'The foundation of classical culinary arts, celebrating rich butter reductions, wine braises, crusty baguettes, delicate pastries, and meticulous technique.',
    popularDishes: ['Beef Bourguignon', 'Ratatouille Provençale', 'French Onion Soup', 'Coq au Vin', 'Crème Brûlée'],
    recipeCount: 2,
    region: 'Western Europe'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    code: 'TH',
    flag: '🇹🇭',
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    description: 'A harmonious dance of sweet, sour, salty, bitter, and fiery spicy flavors powered by lemongrass, galangal, kaffir lime, coconut milk, and fresh Thai basil.',
    popularDishes: ['Pad Thai', 'Tom Yum Goong', 'Green Curry Chicken', 'Som Tum Papaya Salad', 'Mango Sticky Rice'],
    recipeCount: 2,
    region: 'Southeast Asia'
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    code: 'KR',
    flag: '🇰🇷',
    imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant fermented pastes like gochujang and doenjang, spicy kimchi, sizzling tabletop barbecues, and colorful balanced grain bowls.',
    popularDishes: ['Bibimbap', 'Kimchi Jjigae', 'Korean Fried Chicken', 'Bulgogi Beef', 'Tteokbokki'],
    recipeCount: 2,
    region: 'East Asia'
  },
  {
    id: 'united-states',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'A melting pot of hearty barbecue traditions, coastal seafood boils, comforting diner classics, and regional soul food favorites.',
    popularDishes: ['Classic Smash Burger', 'New England Clam Chowder', 'New York Cheesecake', 'Smoked BBQ Ribs', 'Macaroni and Cheese'],
    recipeCount: 2,
    region: 'North America'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    code: 'TR',
    flag: '🇹🇷',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'A bridge between Europe and Asia featuring charcoal-grilled kebabs, flaky phyllo pastries, aromatic flatbreads, and velvety meze spreads.',
    popularDishes: ['Shish Kebab', 'Menemen Scramble', 'Turkish Baklava', 'Lahmacun', 'Lentil Soup Mercimek'],
    recipeCount: 2,
    region: 'Middle East / Europe'
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
    description: 'Convivial tapas culture, saffron-infused rice pans, cured ibérico jamón, smoky pimentón, and fresh seafood from Atlantic and Mediterranean waters.',
    popularDishes: ['Seafood Paella', 'Patatas Bravas', 'Tortilla Española', 'Chilled Gazpacho', 'Gambas al Ajillo'],
    recipeCount: 2,
    region: 'Southern Europe'
  },
  {
    id: 'greece',
    name: 'Greece',
    code: 'GR',
    flag: '🇬🇷',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    description: 'Sun-drenched Aegean simplicity loaded with briny Kalamata olives, creamy feta, oregano, tender lamb, and crisp phyllo pies.',
    popularDishes: ['Traditional Moussaka', 'Greek Village Salad', 'Souvlaki Skewers', 'Spanakopita', 'Tzatziki Dip'],
    recipeCount: 2,
    region: 'Southern Europe'
  },
  {
    id: 'china',
    name: 'China',
    code: 'CN',
    flag: '🇨🇳',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    description: 'Mastery of wok hei heat, intricate dim sum folding, bold Sichuan peppercorn numbing spice, and centuries of culinary harmony.',
    popularDishes: ['Kung Pao Chicken', 'Mapo Tofu', 'Handmade Pork Dumplings', 'Peking Roast Duck', 'Beef Chow Fun'],
    recipeCount: 2,
    region: 'East Asia'
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    imageUrl: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=800&q=80',
    description: 'Comforting rustic gastronomy with golden schnitzels, warm potato salads, tangy sauerkraut, crusty sourdoughs, and decadent Black Forest gateaux.',
    popularDishes: ['Crispy Wiener Schnitzel', 'Bratwurst with Sauerkraut', 'Kartoffelsalat', 'Black Forest Cake', 'Pretzels'],
    recipeCount: 2,
    region: 'Central Europe'
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    code: 'ID',
    flag: '🇮🇩',
    imageUrl: 'https://images.unsplash.com/photo-1603073163308-9655c7071e54?auto=format&fit=crop&w=800&q=80',
    description: 'An archipelago feast bursting with fragrant shallot sambals, sweet kecap manis, caramelized coconut beef rendang, and skewered satays.',
    popularDishes: ['Nasi Goreng', 'Beef Rendang', 'Chicken Satay with Peanut Sauce', 'Gado-Gado', 'Soto Ayam'],
    recipeCount: 2,
    region: 'Southeast Asia'
  },
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Lush tropical abundance featuring slow-simmered black bean stews, warm cassava cheese puffs, seafood moqueca, and sweet condensed milk truffles.',
    popularDishes: ['Feijoada Completa', 'Pão de Queijo', 'Moqueca Baiana', 'Brigadeiros', 'Coxinha'],
    recipeCount: 2,
    region: 'South America'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    code: 'VN',
    flag: '🇻🇳',
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    description: 'Crystal-clear aromatic broths, piles of fresh coriander and mint, crispy rice paper rolls, and crusty French-influenced baguettes.',
    popularDishes: ['Beef Pho Bo', 'Banh Mi Sandwich', 'Goi Cuon Spring Rolls', 'Bun Cha Hanoi', 'Vietnamese Iced Coffee'],
    recipeCount: 2,
    region: 'Southeast Asia'
  },
  {
    id: 'morocco',
    name: 'Morocco',
    code: 'MA',
    flag: '🇲🇦',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Earthenware conical tagines layering preserved lemons, plump apricots, saffron, cinnamon, ras el hanout, and steamed semolina couscous.',
    popularDishes: ['Chicken Tagine with Preserved Lemon', 'Seven Vegetable Couscous', 'Harira Soup', 'Lamb Tagine with Prunes', 'Mint Tea'],
    recipeCount: 2,
    region: 'North Africa'
  }
];

export const INITIAL_RECIPES: Recipe[] = [
  // 1. INDIA
  {
    id: 'rec-in-1',
    title: 'Authentic Royal Chicken Dum Biryani',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    totalTimeMinutes: 75,
    servings: 4,
    description: 'A celebrated masterpiece of fragrant long-grain basmati rice layered with yogurt-marinated chicken, golden fried onions (birista), saffron milk, and fresh mint, slow-cooked under dough seal.',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i1', name: 'Bone-in Chicken pieces', amount: '800', unit: 'g' },
      { id: 'i2', name: 'Aged Basmati Rice', amount: '500', unit: 'g' },
      { id: 'i3', name: 'Greek Yogurt / Curd', amount: '1', unit: 'cup' },
      { id: 'i4', name: 'Thinly sliced Red Onions', amount: '3', unit: 'large' },
      { id: 'i5', name: 'Ginger-Garlic Paste', amount: '2', unit: 'tbsp' },
      { id: 'i6', name: 'Biryani Garam Masala', amount: '1.5', unit: 'tbsp' },
      { id: 'i7', name: 'Kashmiri Red Chilli Powder', amount: '1', unit: 'tbsp' },
      { id: 'i8', name: 'Turmeric Powder', amount: '0.5', unit: 'tsp' },
      { id: 'i9', name: 'Saffron strands soaked in warm milk', amount: '2', unit: 'tbsp' },
      { id: 'i10', name: 'Fresh Mint & Cilantro leaves', amount: '0.5', unit: 'cup' },
      { id: 'i11', name: 'Pure Desi Ghee', amount: '3', unit: 'tbsp' },
      { id: 'i12', name: 'Whole spices (cardamom, cinnamon, cloves, bay leaf)', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate the Chicken',
        description: 'In a large mixing bowl, combine chicken pieces with yogurt, ginger-garlic paste, red chilli powder, turmeric, garam masala, chopped mint, half of the fried onions, and 1 teaspoon of salt. Mix thoroughly and allow it to marinate for at least 30 minutes.',
        durationMinutes: 10,
        tip: 'Bone-in chicken keeps the meat juicy during the dum cooking phase.'
      },
      {
        stepNumber: 2,
        title: 'Crisp the Golden Onions (Birista)',
        description: 'Heat ghee and oil in a wide heavy-bottomed pot. Fry the sliced onions over medium-low heat with a pinch of sugar until they turn uniformly golden brown and crisp. Drain on a paper towel.',
        durationMinutes: 12,
        tip: 'Remove onions just before your desired shade; residual heat continues cooking them.'
      },
      {
        stepNumber: 3,
        title: 'Par-boil the Basmati Rice to 70%',
        description: 'Rinse basmati rice until water runs clear and soak for 20 minutes. Boil 6 cups of water with whole spices, salt, and 1 tsp ghee. Add drained rice and boil for 5-6 minutes until 70% cooked. Drain immediately.',
        durationMinutes: 8,
        tip: 'Do not overcook the rice now; it will finish steaming in the pot.'
      },
      {
        stepNumber: 4,
        title: 'Layer the Biryani',
        description: 'In a heavy pot, spread the marinated chicken evenly at the bottom. Layer the hot par-boiled rice over the chicken. Drizzle with saffron-infused milk, melted ghee, fried onions, and fresh chopped mint and cilantro.',
        durationMinutes: 5,
        tip: 'Drizzle a splash of rose water or kewra water for authentic royal aroma.'
      },
      {
        stepNumber: 5,
        title: 'Dum Cook under Tight Seal & Rest',
        description: 'Cover the pot with aluminum foil or a tight lid sealed with dough. Cook on high heat for 10 minutes, then place the pot on a flat tawa (griddle) over lowest heat for 25 minutes. Rest off-heat for 10 minutes before gently fluffing.',
        durationMinutes: 40,
        tip: 'Never stir vigorously through the center to avoid breaking long rice grains.'
      }
    ],
    rating: 4.9,
    reviewCount: 38,
    isPublished: true,
    createdAt: '2026-02-14',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: true
  },
  {
    id: 'rec-in-2',
    title: 'Creamy Restaurant Butter Chicken (Murgh Makhani)',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    totalTimeMinutes: 45,
    servings: 4,
    description: 'Charred tandoori chicken tikka simmered in a silky, mildly sweet gravy of ripe tomatoes, butter, heavy cream, and aromatic crushed fenugreek leaves (kasuri methi).',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i84', name: 'Boneless Chicken Thighs, cut in chunks', amount: '600', unit: 'g' },
      { id: 'i85', name: 'Ripe Red Roma Tomatoes', amount: '6', unit: 'medium' },
      { id: 'i86', name: 'Unsalted Butter', amount: '4', unit: 'tbsp' },
      { id: 'i87', name: 'Heavy Cream', amount: '0.5', unit: 'cup' },
      { id: 'i88', name: 'Raw Cashews (soaked)', amount: '15', unit: 'nuts' },
      { id: 'i89', name: 'Ginger & Garlic, minced', amount: '2', unit: 'tbsp' },
      { id: 'i90', name: 'Kashmiri Chili Powder', amount: '1.5', unit: 'tbsp' },
      { id: 'i91', name: 'Garam Masala', amount: '1', unit: 'tsp' },
      { id: 'i92', name: 'Kasuri Methi (crushed fenugreek)', amount: '1', unit: 'tbsp' },
      { id: 'i93', name: 'Honey or brown sugar', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate & Broil Chicken Tikka',
        description: 'Toss chicken chunks with yogurt, lemon juice, chili powder, and ginger-garlic. Broil in the oven or sear in a smoking hot skillet for 8-10 minutes until edges get charred black spots.',
        durationMinutes: 12,
        tip: 'Charred edges give the curry smoky complexity.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Tomato-Cashew Sauce',
        description: 'In a pot, boil chopped tomatoes, cashews, ginger, garlic, cloves, and cardamom with 1 cup water for 15 minutes until tomatoes collapse completely.',
        durationMinutes: 15,
        tip: 'Cashews create luxurious creaminess without flour.'
      },
      {
        stepNumber: 3,
        title: 'Blend to Satin Smooth Gravy',
        description: 'Blend tomato-cashew mixture until totally smooth. Pass through a fine mesh strainer back into the pan for that signature velvety restaurant texture.',
        durationMinutes: 5,
        tip: 'Straining is the secret restaurant step for silky smoothness.'
      },
      {
        stepNumber: 4,
        title: 'Simmer Makhani Sauce with Butter',
        description: 'Melt 3 tbsp butter in gravy over low heat. Add Kashmiri chili powder, garam masala, honey, and salt. Simmer for 5 minutes until butter rises to top.',
        durationMinutes: 5,
        tip: 'Kashmiri chili gives radiant red color without scorching heat.'
      },
      {
        stepNumber: 5,
        title: 'Add Charred Chicken & Heavy Cream',
        description: 'Add charred chicken into sauce. Pour in heavy cream and rub crushed kasuri methi between palms directly into the pot. Simmer 3 minutes and serve with warm garlic naan.',
        durationMinutes: 4,
        tip: 'Kasuri methi is non-negotiable for true butter chicken aroma.'
      }
    ],
    rating: 4.97,
    reviewCount: 46,
    isPublished: true,
    createdAt: '2026-02-11',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: true
  },
  {
    id: 'rec-in-3',
    title: 'Slow-Simmered Dal Makhani',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 15,
    cookTimeMinutes: 60,
    totalTimeMinutes: 75,
    servings: 4,
    description: 'Whole black urad lentils and red kidney beans slow-cooked overnight with ginger, garlic, pure tomato reduction, creamy butter, and finished with a fragrant charcoal smoke dhungar.',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i111', name: 'Whole Black Lentils (Sabut Urad)', amount: '1', unit: 'cup' },
      { id: 'i112', name: 'Red Kidney Beans (Rajma)', amount: '0.25', unit: 'cup' },
      { id: 'i113', name: 'Pure Tomato Purée', amount: '1', unit: 'cup' },
      { id: 'i114', name: 'Desi White Butter (Makhan)', amount: '4', unit: 'tbsp' },
      { id: 'i115', name: 'Fresh Heavy Cream', amount: '0.33', unit: 'cup' },
      { id: 'i116', name: 'Ginger-Garlic paste', amount: '1.5', unit: 'tbsp' },
      { id: 'i117', name: 'Kashmiri Red Chilli Powder', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Soak and Pressure Cook Lentils',
        description: 'Soak black lentils and kidney beans overnight for 8 hours. Pressure cook with 4 cups of water and salt for 6-8 whistles until beans are completely mashable.',
        durationMinutes: 30,
        tip: 'Gentle mashing releases natural starches that make the dal thick and creamy.'
      },
      {
        stepNumber: 2,
        title: 'Build the Tomato-Ginger Base',
        description: 'Melt 2 tbsp butter in a heavy kadai. Add ginger-garlic paste and sauté for 1 minute. Add tomato purée and Kashmiri chili; cook until fat separates from masala.',
        durationMinutes: 10,
        tip: 'Cook tomatoes thoroughly until bright and glossy.'
      },
      {
        stepNumber: 3,
        title: 'Slow Simmer Dal on Low Flame',
        description: 'Pour cooked lentils into the tomato masala. Add 1 cup of hot water and simmer uncovered on low heat for 30-40 minutes, stirring frequently with a wooden spoon.',
        durationMinutes: 35,
        tip: 'The longer it simmers on low heat, the creamier and darker it becomes.'
      },
      {
        stepNumber: 4,
        title: 'Finish with Butter & Cream',
        description: 'Swirl in remaining butter and heavy cream. Sprinkle roasted kasuri methi and garam masala. Serve hot with steamed rice or butter tandoori roti.',
        durationMinutes: 5,
        tip: 'A dollop of cold butter on steaming hot dal is pure perfection.'
      }
    ],
    rating: 4.92,
    reviewCount: 31,
    isPublished: true,
    createdAt: '2026-02-20',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: false
  },
  {
    id: 'rec-in-4',
    title: 'Shahi Paneer Butter Masala',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 4,
    description: 'Soft cubes of fresh malai paneer simmered in a royal, velvety sauce of roasted cashews, sun-ripened tomatoes, sweet butter, aromatic green cardamom, and crushed kasuri methi.',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i271', name: 'Fresh Malai Paneer cubes', amount: '400', unit: 'g' },
      { id: 'i272', name: 'Ripe Red Roma Tomatoes', amount: '5', unit: 'medium' },
      { id: 'i273', name: 'Cashew nuts (soaked in warm water)', amount: '18', unit: 'nuts' },
      { id: 'i274', name: 'Desi White Butter', amount: '3', unit: 'tbsp' },
      { id: 'i275', name: 'Heavy Cream', amount: '0.33', unit: 'cup' },
      { id: 'i276', name: 'Ginger & Garlic paste', amount: '1.5', unit: 'tbsp' },
      { id: 'i277', name: 'Kashmiri Chili Powder', amount: '1', unit: 'tbsp' },
      { id: 'i278', name: 'Shahi Garam Masala & Green Cardamom', amount: '1', unit: 'tsp' },
      { id: 'i279', name: 'Kasuri Methi (crushed fenugreek leaves)', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil & Blend Cashew Tomato Purée',
        description: 'Simmer chopped tomatoes, soaked cashews, cardamom pods, and ginger-garlic with 1 cup water for 12 minutes. Blend into a silky satin gravy and strain through a sieve.',
        durationMinutes: 12,
        tip: 'Straining the blended sauce ensures that signature silk-smooth texture.'
      },
      {
        stepNumber: 2,
        title: 'Cook Masala in Foaming Butter',
        description: 'Melt butter in a wide kadai. Add Kashmiri red chili powder, shahi garam masala, and immediately pour in the strained tomato-cashew purée. Simmer for 6 minutes.',
        durationMinutes: 6,
        tip: 'Adding chili powder directly to warm butter blooms the radiant orange-red color.'
      },
      {
        stepNumber: 3,
        title: 'Simmer Paneer Cubes Gently',
        description: 'Soak paneer cubes in warm water for 5 minutes to keep them ultra-soft. Gently fold paneer into the simmering gravy along with heavy cream and 1 tsp honey.',
        durationMinutes: 4,
        tip: 'Never boil paneer vigorously or it turns chewy.'
      },
      {
        stepNumber: 4,
        title: 'Finish with Kasuri Methi and Ghee',
        description: 'Crush dried kasuri methi between palms and sprinkle on top with a final swirl of cream. Serve hot with garlic naan or butter kulcha.',
        durationMinutes: 2,
        tip: 'Rubbing kasuri methi activates its rich restaurant aroma.'
      }
    ],
    rating: 4.95,
    reviewCount: 42,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: true
  },
  {
    id: 'rec-in-5',
    title: 'Crispy Punjabi Samosas with Chutneys',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Street Food',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    totalTimeMinutes: 55,
    servings: 6,
    description: 'Golden, crackling pastry triangles flavored with carom seeds (ajwain), generously stuffed with chunky cumin-roasted potatoes, green peas, toasted cashews, ginger, and green chilies.',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i280', name: 'All-Purpose Flour (Maida)', amount: '2', unit: 'cups' },
      { id: 'i281', name: 'Ajwain (Carom seeds)', amount: '1', unit: 'tsp' },
      { id: 'i282', name: 'Ghee or Oil for dough shortening', amount: '4', unit: 'tbsp' },
      { id: 'i283', name: 'Boiled Potatoes, peeled & roughly crushed', amount: '4', unit: 'large' },
      { id: 'i284', name: 'Green Peas', amount: '0.5', unit: 'cup' },
      { id: 'i285', name: 'Whole Coriander Seeds, coarsely crushed', amount: '1', unit: 'tbsp' },
      { id: 'i286', name: 'Amchur (Dry Mango Powder) & Garam Masala', amount: '1', unit: 'tsp each' },
      { id: 'i287', name: 'Green Chilies & Ginger, finely chopped', amount: '2', unit: 'tbsp' },
      { id: 'i288', name: 'Mint Chutney & Sweet Saunth Tamarind Chutney', amount: '1', unit: 'batch' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Knead Firm Khasta Dough',
        description: 'Rub ghee into flour and ajwain with fingertips until the mixture resembles breadcrumbs and holds shape when squeezed. Add cold water gradually to knead a very stiff, firm dough. Rest covered for 25 minutes.',
        durationMinutes: 10,
        tip: 'A stiff dough is the secret to blister-free, shatteringly crisp samosa crust.'
      },
      {
        stepNumber: 2,
        title: 'Sauté Spiced Chunky Aloo Filling',
        description: 'Heat 1 tbsp oil, crackle crushed coriander seeds and cumin. Sauté ginger and green chilies. Add crushed potatoes, green peas, amchur, garam masala, and salt. Cook for 5 minutes and cool completely.',
        durationMinutes: 8,
        tip: 'Never mash the potatoes completely smooth; chunky texture is authentic.'
      },
      {
        stepNumber: 3,
        title: 'Shape and Fill Pastry Cones',
        description: 'Roll dough into an oval, cut in half. Form half-circle into a cone, sealing the overlapping seam with water. Fill with potato masala, dampen open top edges, make a pleat at the back, and press firmly closed.',
        durationMinutes: 15,
        tip: 'Ensure the bottom seal is completely closed so oil cannot seep inside.'
      },
      {
        stepNumber: 4,
        title: 'Low Heat Slow Fry to Golden Perfection',
        description: 'Drop samosas into moderately warm oil (not smoking). Fry slowly over low heat for 15-20 minutes, turning occasionally until crust is pale gold, then increase heat for 2 minutes to crisp. Drain and serve hot with chutneys.',
        durationMinutes: 20,
        tip: 'Frying in low temperature oil prevents blisters and produces a flaky cookie-like crunch.'
      }
    ],
    rating: 4.96,
    reviewCount: 39,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: true
  },
  {
    id: 'rec-in-6',
    title: 'Dhaba-Style Palak Paneer',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 4,
    description: 'Fresh tender spinach leaves blanched and puréed with green chilies, simmered with caramelized onions, golden garlic, cumin, and soft pan-seared paneer cubes, finished with fresh ginger juliennes.',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i289', name: 'Fresh Spinach leaves (Palak), cleaned', amount: '500', unit: 'g' },
      { id: 'i290', name: 'Fresh Paneer cubes', amount: '300', unit: 'g' },
      { id: 'i291', name: 'Garlic cloves, finely chopped', amount: '6', unit: 'cloves' },
      { id: 'i292', name: 'Ginger juliennes & Green chilies', amount: '2', unit: 'tbsp' },
      { id: 'i293', name: 'Cumin seeds & Kasuri methi', amount: '1', unit: 'tsp each' },
      { id: 'i294', name: 'Heavy Cream or Ghee', amount: '2', unit: 'tbsp' },
      { id: 'i295', name: 'Lemon juice', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Blanch Spinach in Ice Water',
        description: 'Drop washed spinach leaves into boiling water with a pinch of sugar for 90 seconds. Immediately transfer to an ice bath, drain, and blend into a bright green purée with green chilies.',
        durationMinutes: 5,
        tip: 'The ice water bath locks in vibrant emerald green chlorophyll color.'
      },
      {
        stepNumber: 2,
        title: 'Caramelize Garlic and Spices',
        description: 'Heat ghee in a pan. Add cumin seeds and chopped garlic; sauté until golden and fragrant. Add onions and cook until lightly browned.',
        durationMinutes: 5,
        tip: 'Toasted garlic flavor is the defining characteristic of dhaba-style palak.'
      },
      {
        stepNumber: 3,
        title: 'Simmer Palak Gravy with Paneer',
        description: 'Pour in the vibrant spinach purée. Season with salt, garam masala, and 2 tbsp water. Simmer on low heat for 5 minutes, then gently drop in fresh paneer cubes.',
        durationMinutes: 5,
        tip: 'Cook uncovered to retain the bright green hue.'
      },
      {
        stepNumber: 4,
        title: 'Finish with Lemon and Cream',
        description: 'Swirl in heavy cream, lemon juice, and crushed kasuri methi. Garnish with fresh ginger juliennes and serve with hot makki ki roti or parathas.',
        durationMinutes: 2,
        tip: 'Lemon juice cuts the iron richness of spinach and brightens flavor.'
      }
    ],
    rating: 4.89,
    reviewCount: 28,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: false
  },
  {
    id: 'rec-in-7',
    title: 'Crispy Masala Dosa with Sambar & Coconut Chutney',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Breakfast',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    servings: 4,
    description: 'Golden paper-thin fermented rice and urad dal crepes spread with fragrant red chili garlic chutney, stuffed with spiced mustard-tempered potato masala, served with piping hot vegetable sambar and fresh coconut chutney.',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i296', name: 'Fermented Dosa Batter (rice & urad dal)', amount: '3', unit: 'cups' },
      { id: 'i297', name: 'Boiled Potatoes, peeled and mashed', amount: '3', unit: 'medium' },
      { id: 'i298', name: 'Mustard seeds & Urad dal', amount: '1', unit: 'tsp each' },
      { id: 'i299', name: 'Curry leaves & Fresh Green chilies', amount: '10', unit: 'leaves, 3 chilies' },
      { id: 'i300', name: 'Turmeric powder & Sliced Onions', amount: '0.5', unit: 'tsp turmeric, 1 onion' },
      { id: 'i301', name: 'Desi Ghee or Sesame oil for roasting', amount: '4', unit: 'tbsp' },
      { id: 'i302', name: 'Fresh Coconut Chutney & Toor Dal Sambar', amount: '1', unit: 'serving' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Temper the Potato Masala (Aloo Palya)',
        description: 'Heat 1 tbsp oil in a pan. Splutter mustard seeds, urad dal, curry leaves, and green chilies. Sauté sliced onions and ginger until soft. Add turmeric and mashed potatoes with 3 tbsp water; stir into a moist savory filling.',
        durationMinutes: 8,
        tip: 'Adding a splash of water keeps the potato filling spreadable and soft.'
      },
      {
        stepNumber: 2,
        title: 'Heat & Season the Cast Iron Tawa',
        description: 'Heat a heavy cast iron tawa until water droplets sizzle and dance. Rub with half a cut onion dipped in oil to create a natural non-stick patina.',
        durationMinutes: 4,
        tip: 'The onion rub seasons the pan and guarantees smooth dosa release.'
      },
      {
        stepNumber: 3,
        title: 'Spread Batter in Spiral from Center',
        description: 'Pour a ladleful of batter into the center of the tawa. Using the base of the ladle, spread outward in a continuous spiral motion into a thin even round.',
        durationMinutes: 2,
        tip: 'Do not pause while spreading; keep one fluid motion.'
      },
      {
        stepNumber: 4,
        title: 'Drizzle Ghee, Fill, and Roll',
        description: 'Drizzle ghee around the edges and center. Roast on medium-high heat until underside is golden brown and crackling crisp. Place potato masala in center, fold into a cylinder, and serve with sambar and coconut chutney.',
        durationMinutes: 4,
        tip: 'Pure ghee produces that irresistible restaurant-style golden shine and aroma.'
      }
    ],
    rating: 4.97,
    reviewCount: 44,
    isPublished: true,
    createdAt: '2026-02-25',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: true
  },
  {
    id: 'rec-in-8',
    title: 'Coastal Malabar Prawn Curry (Chemmeen Curry)',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dinner',
    cuisineType: 'Indian',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    totalTimeMinutes: 33,
    servings: 3,
    description: 'Plump ocean prawns poached in creamy coconut milk infused with kudampuli (Malabar kokum), mustard seeds, shallots, fiery green chilies, fenugreek, and crispy fresh curry leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i303', name: 'Fresh Tiger Prawns, peeled and deveined', amount: '450', unit: 'g' },
      { id: 'i304', name: 'Thick Coconut Milk & Thin Coconut Milk', amount: '1', unit: 'cup each' },
      { id: 'i305', name: 'Kudampuli (Malabar Kokum soaked in water)', amount: '3', unit: 'pieces' },
      { id: 'i306', name: 'Small Pearl Shallots, thinly sliced', amount: '10', unit: 'shallots' },
      { id: 'i307', name: 'Curry leaves & Fresh Ginger juliennes', amount: '2', unit: 'sprigs, 1 tbsp' },
      { id: 'i308', name: 'Coconut Oil for authentic tempering', amount: '2', unit: 'tbsp' },
      { id: 'i309', name: 'Turmeric & Kashmiri Chili powder', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Soak Kudampuli & Sauté Aromatics',
        description: 'Soak kudampuli pieces in 1/2 cup warm water. Heat coconut oil in an earthenware pot (meen chatti). Sauté sliced shallots, ginger, green chilies, and curry leaves until translucent.',
        durationMinutes: 5,
        tip: 'Earthen clay pots impart a signature rustic Kerala flavor.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Kokum with Thin Coconut Milk',
        description: 'Add turmeric, chili powder, and coriander powder; fry for 30 seconds. Pour in thin coconut milk and soaked kudampuli with its water. Bring to a gentle boil for 5 minutes.',
        durationMinutes: 6,
        tip: 'Kudampuli provides a smoky, tart depth superior to tamarind.'
      },
      {
        stepNumber: 3,
        title: 'Poach Prawns in Coconut Milk',
        description: 'Drop cleaned prawns into simmering broth. Cook for 3-4 minutes just until prawns curl into "C" shapes and turn coral pink.',
        durationMinutes: 4,
        tip: 'Prawns curl into a "C" when cooked; an "O" shape means overcooked.'
      },
      {
        stepNumber: 4,
        title: 'Temper with Coconut Oil and Thick Milk',
        description: 'Pour in thick coconut cream and turn off heat immediately. In a separate small ladle, crackle mustard seeds, fenugreek, and curry leaves in 1 tbsp coconut oil; pour over curry and cover.',
        durationMinutes: 3,
        tip: 'Never boil thick coconut milk or it will separate.'
      }
    ],
    rating: 4.93,
    reviewCount: 31,
    isPublished: true,
    createdAt: '2026-02-25',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: false
  },
  {
    id: 'rec-in-9',
    title: 'Royal Khoya Gulab Jamun',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    category: 'Dessert',
    cuisineType: 'Indian',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    totalTimeMinutes: 50,
    servings: 8,
    description: 'Melt-in-mouth milk solid (mawa/khoya) dumplings gently kneaded with fresh paneer and cardamoms, deep-fried to deep golden-amber over gentle flame and soaked in warm saffron-rosewater syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i310', name: 'Fresh Khoya / Mawa (grated)', amount: '250', unit: 'g' },
      { id: 'i311', name: 'Soft Fresh Paneer (crumbled fine)', amount: '100', unit: 'g' },
      { id: 'i312', name: 'All-Purpose Flour (Maida)', amount: '3', unit: 'tbsp' },
      { id: 'i313', name: 'Baking Powder', amount: '0.25', unit: 'tsp' },
      { id: 'i314', name: 'Desi Ghee for frying', amount: '2', unit: 'cups' },
      { id: 'i315', name: 'Sugar for syrup', amount: '2', unit: 'cups' },
      { id: 'i316', name: 'Green Cardamom pods & Saffron strands', amount: '5', unit: 'pods, 1 pinch' },
      { id: 'i317', name: 'Pure Rose Water', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prepare Aromatic Saffron Sugar Syrup',
        description: 'Boil sugar and 2 cups water with bruised cardamoms and saffron for 8-10 minutes until lightly sticky (half-string consistency). Stir in rose water and keep warm.',
        durationMinutes: 10,
        tip: 'Syrup must be warm, not boiling, when soaking fried jamuns.'
      },
      {
        stepNumber: 2,
        title: 'Knead Smooth Crack-Free Khoya Dough',
        description: 'Mash grated khoya and paneer together with the heels of your palms for 8 minutes until completely smooth. Sift in flour and baking powder. Gently combine into a soft dough without over-kneading.',
        durationMinutes: 10,
        tip: 'Knead until no granular texture remains; smooth dough prevents cracking during frying.'
      },
      {
        stepNumber: 3,
        title: 'Roll into Mirror-Smooth Spheres',
        description: 'Pinch small portions and roll between gentle palms into small, perfectly smooth balls without any surface cracks.',
        durationMinutes: 6,
        tip: 'Any hairline surface crack will split open in hot ghee.'
      },
      {
        stepNumber: 4,
        title: 'Gentle Low-Flame Ghee Fry',
        description: 'Heat ghee on lowest heat. Gently slide balls in. Swirl the ghee with a spoon without touching the jamuns so they rotate and brown evenly for 12-14 minutes until deep mahogany amber.',
        durationMinutes: 14,
        tip: 'Low flame cooking allows heat to cook all the way through to the core.'
      },
      {
        stepNumber: 5,
        title: 'Soak in Warm Syrup for 2 Hours',
        description: 'Remove hot jamuns and immediately immerse in warm sugar syrup. Let soak for at least 2 hours as they swell and become tender, spongy, and juicy.',
        durationMinutes: 5,
        tip: 'Serve warm with slivered pistachios or alongside vanilla bean ice cream.'
      }
    ],
    rating: 4.98,
    reviewCount: 52,
    isPublished: true,
    createdAt: '2026-02-25',
    authorName: 'Chef Sanjeev Anand',
    isFeatured: false
  },

  // 2. ITALY
  {
    id: 'rec-it-1',
    title: 'Classic Neapolitan Pizza Margherita',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    category: 'Dinner',
    cuisineType: 'Italian',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    totalTimeMinutes: 30,
    servings: 2,
    description: 'The queen of pizzas created in Naples: 24-hour slow-fermented crust topped with crushed San Marzano tomatoes, creamy fresh fior di latte mozzarella, fragrant basil leaves, and extra virgin olive oil.',
    imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i13', name: 'Tipo 00 Pizza Flour dough balls', amount: '2', unit: 'balls (250g each)' },
      { id: 'i14', name: 'Canned San Marzano Tomatoes, hand-crushed', amount: '200', unit: 'g' },
      { id: 'i15', name: 'Fresh Mozzarella / Fior di Latte', amount: '150', unit: 'g' },
      { id: 'i16', name: 'Fresh Basil leaves', amount: '10', unit: 'leaves' },
      { id: 'i17', name: 'Extra Virgin Olive Oil', amount: '2', unit: 'tbsp' },
      { id: 'i18', name: 'Fine Sea Salt', amount: '1', unit: 'tsp' },
      { id: 'i19', name: 'Grated Parmigiano-Reggiano', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Preheat Oven & Pizza Stone',
        description: 'Position your pizza stone on top rack. Turn oven to maximum temperature (260°C / 500°F) for at least 45 minutes.',
        durationMinutes: 45,
        tip: 'A blistering hot baking stone replicates a wood-fired stone hearth.'
      },
      {
        stepNumber: 2,
        title: 'Prepare Sauce and Cheese',
        description: 'Hand-crush San Marzano whole peeled tomatoes with sea salt. Tear fresh mozzarella into strips and let drain in a sieve for 15 minutes to prevent excess moisture.',
        durationMinutes: 10,
        tip: 'Do not cook the tomato sauce beforehand; raw tomato paste tastes brighter.'
      },
      {
        stepNumber: 3,
        title: 'Stretch the Pizza Dough',
        description: 'Dust your work surface with semolina flour. Place dough ball and gently push from the center outwards using fingertips, preserving a 1-inch raised border (cornicione).',
        durationMinutes: 5,
        tip: 'Never use a rolling pin, which crushes all the delicate fermentation gas bubbles.'
      },
      {
        stepNumber: 4,
        title: 'Top with Sauce and Mozzarella',
        description: 'Spread 3 tablespoons of crushed tomatoes in a spiral from center to edge. Scatter drained mozzarella, a dusting of Parmigiano-Reggiano, and a drizzle of olive oil.',
        durationMinutes: 3,
        tip: 'Less is more: heavy toppings make the crust soggy.'
      },
      {
        stepNumber: 5,
        title: 'Bake and Garnish with Fresh Basil',
        description: 'Slide pizza onto blistering hot stone. Bake for 6-8 minutes until crust is leopard-spotted and cheese bubbles golden. Remove and immediately scatter fresh basil leaves.',
        durationMinutes: 7,
        tip: 'Adding basil right after baking prevents the delicate leaves from charring black.'
      }
    ],
    rating: 4.95,
    reviewCount: 42,
    isPublished: true,
    createdAt: '2026-02-18',
    authorName: 'Chef Marco Rossi',
    isFeatured: true
  },
  {
    id: 'rec-it-2',
    title: 'Silky Fettuccine all’Alfredo Tradizionale',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    category: 'Dinner',
    cuisineType: 'Italian',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    totalTimeMinutes: 22,
    servings: 2,
    description: 'The authentic Rome original: handmade egg fettuccine tossed with young sweet butter, 24-month Parmigiano-Reggiano, and starchy pasta cooking water to create an emulsion without heavy cream.',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i118', name: 'Fresh Egg Fettuccine pasta', amount: '250', unit: 'g' },
      { id: 'i119', name: 'Finely grated Parmigiano-Reggiano DOP', amount: '120', unit: 'g' },
      { id: 'i120', name: 'Unsalted Cultured Butter', amount: '60', unit: 'g' },
      { id: 'i121', name: 'Starchy pasta cooking water', amount: '0.5', unit: 'cup' },
      { id: 'i122', name: 'Freshly cracked Black Pepper', amount: '0.5', unit: 'tsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Fresh Fettuccine in Salted Water',
        description: 'Bring a large pot of water to a rolling boil with 1 tablespoon of sea salt. Drop fresh egg fettuccine and cook for 2 to 3 minutes until al dente.',
        durationMinutes: 3,
        tip: 'Save at least 1 cup of cloudy, starchy pasta water before draining.'
      },
      {
        stepNumber: 2,
        title: 'Melt Butter in Warm Skillet',
        description: 'In a wide skillet off direct high heat, melt the diced cultured butter with 3 tablespoons of hot pasta water to begin the emulsion.',
        durationMinutes: 2,
        tip: 'Gentle warmth prevents butter from breaking into clear grease.'
      },
      {
        stepNumber: 3,
        title: 'Mantecatura (Vigorous Toss with Parmigiano)',
        description: 'Transfer hot fettuccine directly into the skillet with tongs. Gradually scatter grated Parmigiano-Reggiano in three batches while continuously tossing and swirling the pasta.',
        durationMinutes: 4,
        tip: 'Continuous agitation and starch create a velvety cream sauce without heavy cream.'
      },
      {
        stepNumber: 4,
        title: 'Plate Immediately with Cracked Pepper',
        description: 'Twirl onto warm pasta bowls, dust with extra Parmigiano and freshly cracked black pepper, and serve immediately.',
        durationMinutes: 2,
        tip: 'Serve in pre-warmed bowls as the cheese emulsion thickens quickly as it cools.'
      }
    ],
    rating: 4.89,
    reviewCount: 24,
    isPublished: true,
    createdAt: '2026-02-21',
    authorName: 'Chef Marco Rossi',
    isFeatured: false
  },
  {
    id: 'rec-it-3',
    title: 'Authentic Venetian Coffee Tiramisu',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    category: 'Dessert',
    cuisineType: 'Italian',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 0,
    totalTimeMinutes: 25,
    servings: 6,
    description: 'Crisp Italian savoiardi ladyfingers soaked in freshly pulled dark espresso, layered with a cloud-like cream of whipped mascarpone cheese and dusted with Dutch cocoa powder.',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i123', name: 'Savoiardi Ladyfingers', amount: '24', unit: 'biscuits' },
      { id: 'i124', name: 'Italian Mascarpone cheese', amount: '500', unit: 'g' },
      { id: 'i125', name: 'Fresh Egg Yolks', amount: '4', unit: 'large' },
      { id: 'i126', name: 'Granulated Sugar', amount: '100', unit: 'g' },
      { id: 'i127', name: 'Freshly brewed strong Espresso', amount: '300', unit: 'ml' },
      { id: 'i128', name: 'High-fat Heavy Cream, whipped', amount: '200', unit: 'ml' },
      { id: 'i129', name: 'Unsweetened Dutch Dark Cocoa', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk Egg Yolks and Sugar',
        description: 'In a heatproof bowl set over simmering water (bain-marie), whisk egg yolks and sugar vigorously for 6 minutes until pale yellow, thick, and doubled in volume.',
        durationMinutes: 7,
        tip: 'Gently cooking the yolks ensures pasteurization and velvety texture.'
      },
      {
        stepNumber: 2,
        title: 'Fold in Mascarpone and Cream',
        description: 'Beat softened mascarpone into the cooled egg mixture until smooth. Gently fold in whipped heavy cream in two additions to keep the mixture light and airy.',
        durationMinutes: 5,
        tip: 'Do not overbeat mascarpone or it may curdle.'
      },
      {
        stepNumber: 3,
        title: 'Quick Dip the Ladyfingers',
        description: 'Pour cooled espresso into a shallow dish. Dip each ladyfinger for 1-2 seconds per side. Arrange closely in a single layer at the bottom of an 8x8 ceramic dish.',
        durationMinutes: 5,
        tip: 'A rapid dip keeps biscuits cake-like without becoming soggy.'
      },
      {
        stepNumber: 4,
        title: 'Layer Cream and Chill Overnight',
        description: 'Spread half of the mascarpone cream over the biscuits. Add a second layer of dipped ladyfingers, and top with remaining cream. Chill in refrigerator for at least 4 hours (ideally overnight).',
        durationMinutes: 6,
        tip: 'Overnight resting melds espresso and sweet cream into harmonic magic.'
      },
      {
        stepNumber: 5,
        title: 'Dust with Cocoa Powder and Serve',
        description: 'Right before serving, generously sift dark unsweetened cocoa powder over the top layer using a fine tea strainer.',
        durationMinutes: 2,
        tip: 'Dust cocoa at the last minute to keep the surface powdery and matte.'
      }
    ],
    rating: 4.96,
    reviewCount: 39,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Marco Rossi',
    isFeatured: false
  },

  // 3. MEXICO
  {
    id: 'rec-mx-1',
    title: 'Street-Style Tacos al Pastor',
    countryId: 'mexico',
    countryName: 'Mexico',
    countryFlag: '🇲🇽',
    category: 'Street Food',
    cuisineType: 'Mexican',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    totalTimeMinutes: 45,
    servings: 4,
    description: 'Thinly sliced pork marinated in an earthy paste of achiote, guajillo chiles, pineapple juice, and warm spices, seared crispy in a cast iron skillet and served on warm corn tortillas with charred pineapple.',
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i20', name: 'Pork shoulder, thinly sliced', amount: '600', unit: 'g' },
      { id: 'i21', name: 'Achiote paste block', amount: '50', unit: 'g' },
      { id: 'i22', name: 'Dried Guajillo chiles, stemmed & seeded', amount: '3', unit: 'pods' },
      { id: 'i23', name: 'Fresh Pineapple juice', amount: '0.5', unit: 'cup' },
      { id: 'i24', name: 'White Vinegar', amount: '2', unit: 'tbsp' },
      { id: 'i25', name: 'Garlic cloves', amount: '4', unit: 'cloves' },
      { id: 'i26', name: 'Ground Cumin & Mexican Oregano', amount: '1', unit: 'tsp each' },
      { id: 'i27', name: 'Fresh ripe Pineapple sliced into rings', amount: '4', unit: 'slices' },
      { id: 'i28', name: 'Small Corn Tortillas', amount: '12', unit: 'pieces' },
      { id: 'i29', name: 'Finely diced White Onion & Cilantro', amount: '0.5', unit: 'cup' },
      { id: 'i30', name: 'Fresh Lime wedges & Salsa Verde', amount: '1', unit: 'batch' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Blend the Adobo Marinade',
        description: 'Soak guajillo chiles in hot water for 10 minutes until soft. Blend rehydrated chiles with achiote paste, pineapple juice, vinegar, garlic, cumin, oregano, and salt until smooth.',
        durationMinutes: 10,
        tip: 'Strain marinade if your blender leaves small chile skins.'
      },
      {
        stepNumber: 2,
        title: 'Marinate the Pork Slices',
        description: 'Coat paper-thin pork slices with the rich red adobo. Let sit for at least 30 minutes at room temperature or up to 24 hours in the fridge.',
        durationMinutes: 30,
        tip: 'Pineapple enzymes naturally tenderize the pork shoulder.'
      },
      {
        stepNumber: 3,
        title: 'Char the Pineapple',
        description: 'In a smoking hot cast iron skillet, sear pineapple slices for 3-4 minutes per side until caramelized with dark grill marks. Dice finely into small cubes.',
        durationMinutes: 8,
        tip: 'The caramelized sweetness provides perfect balance to smoky chile pork.'
      },
      {
        stepNumber: 4,
        title: 'Sear Pork to Crisp Edges',
        description: 'In the same hot skillet with a tablespoon of oil, sear marinated pork in batches over high heat for 3-5 minutes, allowing edges to develop delicious crispy caramelized bits.',
        durationMinutes: 10,
        tip: 'Do not crowd the skillet so meat sears rather than steams.'
      },
      {
        stepNumber: 5,
        title: 'Assemble Tacos on Warm Tortillas',
        description: 'Warm corn tortillas on a dry comal until pliable. Pile high with crispy pork, charred pineapple chunks, diced white onion, fresh cilantro, and squeeze fresh lime juice over top.',
        durationMinutes: 5,
        tip: 'Double up corn tortillas Mexico City style for structural stability.'
      }
    ],
    rating: 4.88,
    reviewCount: 29,
    isPublished: true,
    createdAt: '2026-02-19',
    authorName: 'Chef Sofia Ramirez',
    isFeatured: true
  },
  {
    id: 'rec-mx-2',
    title: 'Enchiladas Verdes Suizas',
    countryId: 'mexico',
    countryName: 'Mexico',
    countryFlag: '🇲🇽',
    category: 'Dinner',
    cuisineType: 'Mexican',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    totalTimeMinutes: 45,
    servings: 4,
    description: 'Corn tortillas stuffed with shredded chicken, rolled and smothered in a tangy roasted tomatillo and serrano salsa verde, enriched with Mexican crema and broiled Oaxaca cheese.',
    imageUrl: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i130', name: 'Fresh Tomatillos husked and rinsed', amount: '500', unit: 'g' },
      { id: 'i131', name: 'Serrano peppers', amount: '2', unit: 'peppers' },
      { id: 'i132', name: 'Shredded poached Chicken breast', amount: '400', unit: 'g' },
      { id: 'i133', name: 'Corn Tortillas', amount: '12', unit: 'tortillas' },
      { id: 'i134', name: 'Mexican Crema or sour cream', amount: '0.5', unit: 'cup' },
      { id: 'i135', name: 'Shredded Oaxaca or Monterey Jack cheese', amount: '200', unit: 'g' },
      { id: 'i136', name: 'Fresh Cilantro & white onion slices', amount: '0.5', unit: 'cup' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Roast Tomatillos & Blend Salsa Verde',
        description: 'Boil or char tomatillos and serrano peppers in a skillet until soft and blistered. Blend with garlic, cilantro, and 1 tsp salt until smooth. Simmer sauce in 1 tbsp oil for 5 minutes, then stir in crema.',
        durationMinutes: 12,
        tip: 'Stirring Mexican crema into the warm salsa creates the signature Suizas velvet texture.'
      },
      {
        stepNumber: 2,
        title: 'Quick Flash-Fry Tortillas',
        description: 'Dip each corn tortilla into hot oil for 5 seconds per side until softened and pliable without crisping. Drain on paper towels.',
        durationMinutes: 5,
        tip: 'A quick oil pass prevents tortillas from absorbing too much sauce and tearing.'
      },
      {
        stepNumber: 3,
        title: 'Roll Enchiladas with Shredded Chicken',
        description: 'Dip each tortilla into warm salsa verde, place a generous spoonful of shredded chicken in the center, roll up snugly, and arrange seam-side down in a baking dish.',
        durationMinutes: 6,
        tip: 'Arrange rolls tightly together so they hold their shape.'
      },
      {
        stepNumber: 4,
        title: 'Smother with Salsa, Cheese & Broil',
        description: 'Pour remaining salsa verde evenly over the rolls. Scatter shredded Oaxaca cheese across the top. Broil in preheated oven at 200°C (400°F) for 10 minutes until cheese is bubbling golden.',
        durationMinutes: 10,
        tip: 'Garnish with thinly sliced white onion rings and fresh cilantro.'
      }
    ],
    rating: 4.91,
    reviewCount: 22,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Sofia Ramirez',
    isFeatured: false
  },

  // 4. JAPAN
  {
    id: 'rec-jp-1',
    title: 'Rich Tokyo Tonkotsu Ramen Bowl',
    countryId: 'japan',
    countryName: 'Japan',
    countryFlag: '🇯🇵',
    category: 'Dinner',
    cuisineType: 'Japanese',
    dietary: 'Non-vegetarian',
    difficulty: 'Hard',
    prepTimeMinutes: 40,
    cookTimeMinutes: 60,
    totalTimeMinutes: 100,
    servings: 2,
    description: 'A deeply satisfying bowl of silky, rich pork bone broth infused with garlic tare, fresh springy ramen noodles, melt-in-your-mouth chashu pork belly, marinated soft-boiled ajitsuke tamago egg, and nori.',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i31', name: 'Fresh Ramen Noodles', amount: '2', unit: 'portions (150g each)' },
      { id: 'i32', name: 'Rich Pork Broth (Tonkotsu stock)', amount: '800', unit: 'ml' },
      { id: 'i33', name: 'Soy Sauce Shoyu Tare', amount: '4', unit: 'tbsp' },
      { id: 'i34', name: 'Rolled Chashu Pork Belly slices', amount: '4', unit: 'thick slices' },
      { id: 'i35', name: 'Ramen Soft-Boiled Eggs (Ajitsuke Tamago)', amount: '2', unit: 'halved' },
      { id: 'i36', name: 'Menma (Seasoned Bamboo Shoots)', amount: '0.25', unit: 'cup' },
      { id: 'i37', name: 'Finely chopped Scallions / Green Onions', amount: '0.5', unit: 'cup' },
      { id: 'i38', name: 'Nori Seaweed sheets', amount: '2', unit: 'squares' },
      { id: 'i39', name: 'Black Garlic Oil (Mayu) or Chili Oil', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Warm the Serving Bowls',
        description: 'Pour boiling water into your ramen bowls to warm them thoroughly for 3 minutes, then discard water. This keeps the rich broth piping hot.',
        durationMinutes: 3,
        tip: 'A cold bowl drops broth temperature instantly.'
      },
      {
        stepNumber: 2,
        title: 'Simmer the Tonkotsu Broth & Tare',
        description: 'In a saucepan, bring pork broth to a rolling simmer. In each warmed bowl, measure 2 tablespoons of shoyu tare and a dash of black garlic oil.',
        durationMinutes: 8,
        tip: 'Emulsified collagen in tonkotsu broth gives it signature creamy richness.'
      },
      {
        stepNumber: 3,
        title: 'Boil Fresh Noodles Al Dente',
        description: 'Bring a deep pot of water to a rolling boil. Drop fresh ramen noodles and boil for exactly 75 to 90 seconds (kata-me firmness). Vigorously shake dry in a noodle strainer.',
        durationMinutes: 2,
        tip: 'Shaking water out vigorously prevents broth from being diluted.'
      },
      {
        stepNumber: 4,
        title: 'Combine Broth and Fold Noodles',
        description: 'Pour 400ml of boiling broth into each bowl with tare and whisk briefly. Lay noodles into the broth and use chopsticks to fold them into a neat nest.',
        durationMinutes: 2,
        tip: 'Folding noodles creates the iconic Tokyo ramen presentation.'
      },
      {
        stepNumber: 5,
        title: 'Garnish with Chashu, Egg, and Nori',
        description: 'Quickly torch or sear chashu pork belly slices and place on top. Add halved marinated egg, crunchy menma bamboo shoots, scallions, and slot nori sheet against the rim.',
        durationMinutes: 4,
        tip: 'Slurp loudly: taking in air cools the noodles while unlocking aromatic steam.'
      }
    ],
    rating: 4.96,
    reviewCount: 51,
    isPublished: true,
    createdAt: '2026-02-10',
    authorName: 'Chef Kenji Takahashi',
    isFeatured: true
  },
  {
    id: 'rec-jp-2',
    title: 'Crispy Chicken Katsu Japanese Curry',
    countryId: 'japan',
    countryName: 'Japan',
    countryFlag: '🇯🇵',
    category: 'Dinner',
    cuisineType: 'Japanese',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    totalTimeMinutes: 45,
    servings: 3,
    description: 'Golden panko-crusted crispy chicken cutlet served alongside rich, aromatic sweet-savory Japanese brown curry loaded with tender carrots and potatoes over steamed Koshihikari rice.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i137', name: 'Chicken Cutlets pounded 1/2 inch', amount: '3', unit: 'pieces' },
      { id: 'i138', name: 'Japanese Panko breadcrumbs', amount: '1.5', unit: 'cups' },
      { id: 'i139', name: 'Japanese Curry Roux blocks (S&B or Golden Curry)', amount: '100', unit: 'g' },
      { id: 'i140', name: 'Potatoes and Carrots, cubed', amount: '2', unit: 'each' },
      { id: 'i141', name: 'Yellow Onion, sliced thick', amount: '1', unit: 'large' },
      { id: 'i142', name: 'Steamed Japanese Short-Grain Rice', amount: '3', unit: 'bowls' },
      { id: 'i143', name: 'Fukujinzuke (Red pickled radish)', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Simmer the Curry Vegetables',
        description: 'Sauté sliced onions in 1 tbsp oil until translucent. Add cubed potatoes, carrots, and 3 cups of water. Bring to a boil and simmer for 15 minutes until vegetables are tender.',
        durationMinutes: 15,
        tip: 'A grated green apple or spoonful of honey adds authentic Japanese depth.'
      },
      {
        stepNumber: 2,
        title: 'Dissolve Curry Roux',
        description: 'Turn off heat. Break curry roux blocks into small pieces and whisk into the pot until completely dissolved. Simmer on low heat for 5 minutes until thick and glossy.',
        durationMinutes: 5,
        tip: 'Dissolving roux off the heat guarantees a velvety sauce without lumps.'
      },
      {
        stepNumber: 3,
        title: 'Bread and Fry the Chicken Katsu',
        description: 'Dredge seasoned chicken cutlets in flour, beaten egg, and press firmly into panko breadcrumbs. Deep fry in 170°C (340°F) oil for 5-6 minutes until deeply golden and crunchy.',
        durationMinutes: 8,
        tip: 'Rest fried cutlets on a wire rack for 2 minutes to keep the bottom crust crisp.'
      },
      {
        stepNumber: 4,
        title: 'Slice and Plate with Rice',
        description: 'Slice katsu into 1-inch strips with a sharp knife. Place steamed rice on one side of a wide shallow bowl, pour steaming curry on the other, arrange sliced katsu on top, and add red fukujinzuke pickles.',
        durationMinutes: 3,
        tip: 'Pour curry sauce over half the cutlet to enjoy both crunchy and saucy bites.'
      }
    ],
    rating: 4.93,
    reviewCount: 36,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Kenji Takahashi',
    isFeatured: false
  },

  // 5. FRANCE
  {
    id: 'rec-fr-1',
    title: 'Boeuf Bourguignon Grand Mère',
    countryId: 'france',
    countryName: 'France',
    countryFlag: '🇫🇷',
    category: 'Dinner',
    cuisineType: 'French',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    cookTimeMinutes: 120,
    totalTimeMinutes: 150,
    servings: 6,
    description: 'The quintessential French slow braise: tender beef chuck slowly stewed in full-bodied red Burgundy wine, beef stock, garlic, bouquet garni, pearl onions, and butter-browned button mushrooms.',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i52', name: 'Beef Chuck Roast, cut in 2-inch chunks', amount: '1.2', unit: 'kg' },
      { id: 'i53', name: 'Smoked Bacon Lardons', amount: '180', unit: 'g' },
      { id: 'i54', name: 'Red Wine (Pinot Noir / Burgundy)', amount: '750', unit: 'ml' },
      { id: 'i55', name: 'Rich Beef Bone Broth', amount: '500', unit: 'ml' },
      { id: 'i56', name: 'Carrots sliced thick', amount: '3', unit: 'medium' },
      { id: 'i57', name: 'Pearl Onions, peeled', amount: '20', unit: 'pieces' },
      { id: 'i58', name: 'Button Cremini Mushrooms, halved', amount: '300', unit: 'g' },
      { id: 'i59', name: 'Tomato Paste', amount: '2', unit: 'tbsp' },
      { id: 'i60', name: 'All-purpose Flour', amount: '2', unit: 'tbsp' },
      { id: 'i61', name: 'Bouquet Garni (thyme, bay leaf, parsley)', amount: '1', unit: 'bundle' },
      { id: 'i62', name: 'Unsalted French Butter', amount: '3', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Render Lardons and Brown Beef',
        description: 'In a large enameled Dutch oven, brown lardons over medium heat until crispy. Transfer lardons to a plate. Sear beef chunks in the rendered bacon fat in batches until deeply browned on all sides.',
        durationMinutes: 15,
        tip: 'Deep browning (the Maillard reaction) creates the rich foundational glaze.'
      },
      {
        stepNumber: 2,
        title: 'Caramelize Aromatics & Dust Flour',
        description: 'Add carrots and sliced onions to the pot; cook for 4 minutes. Stir in tomato paste and minced garlic. Sprinkle flour over the beef and vegetables, tossing for 2 minutes to cook out raw flour flavor.',
        durationMinutes: 6,
        tip: 'Flour thickens the braising liquid into a velvety sauce.'
      },
      {
        stepNumber: 3,
        title: 'Deglaze with Burgundy Wine & Simmer',
        description: 'Pour in full bottle of red wine and beef broth, scraping up every bit of fond from bottom of the pot. Return lardons and beef. Nestle bouquet garni into liquid. Bring to gentle simmer.',
        durationMinutes: 10,
        tip: 'Use wine you would happily drink at the dinner table.'
      },
      {
        stepNumber: 4,
        title: 'Low and Slow Oven Braise',
        description: 'Cover tightly and place into oven preheated to 160°C (325°F). Braise gently for 2 to 2.5 hours until beef is fork-tender.',
        durationMinutes: 120,
        tip: 'Gentle low heat prevents meat proteins from toughening.'
      },
      {
        stepNumber: 5,
        title: 'Glaze Pearl Onions & Mushrooms',
        description: 'In a separate skillet, sauté mushrooms in butter until golden. Braise pearl onions in 2 tbsp water and butter until tender. Fold sautéed mushrooms and onions into the stew 15 minutes before serving.',
        durationMinutes: 15,
        tip: 'Cooking mushrooms separately keeps their earthy aroma and springy texture intact.'
      }
    ],
    rating: 4.94,
    reviewCount: 27,
    isPublished: true,
    createdAt: '2026-02-05',
    authorName: 'Chef Hélène Laurent',
    isFeatured: true
  },
  {
    id: 'rec-fr-2',
    title: 'Traditional Ratatouille Provençale',
    countryId: 'france',
    countryName: 'France',
    countryFlag: '🇫🇷',
    category: 'Dinner',
    cuisineType: 'French',
    dietary: 'Vegan',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    totalTimeMinutes: 70,
    servings: 4,
    description: 'Sun-drenched summer celebration from Nice: tender zucchini, Japanese eggplant, yellow squash, and ripe tomatoes layered over a fragrant bell pepper piperade with thyme and extra virgin olive oil.',
    imageUrl: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i144', name: 'Zucchini and Yellow Squash, sliced thin', amount: '2', unit: 'each' },
      { id: 'i145', name: 'Slender Eggplants, sliced thin', amount: '2', unit: 'medium' },
      { id: 'i146', name: 'Roma Tomatoes, sliced thin', amount: '4', unit: 'tomatoes' },
      { id: 'i147', name: 'Roasted Red Bell Pepper Purée (Piperade base)', amount: '1', unit: 'cup' },
      { id: 'i148', name: 'Extra Virgin Olive Oil', amount: '4', unit: 'tbsp' },
      { id: 'i149', name: 'Fresh Thyme and Rosemary', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Spread the Piperade Base',
        description: 'Spread the savory bell pepper, onion, and garlic tomato purée evenly across the bottom of an oval porcelain baking dish.',
        durationMinutes: 5,
        tip: 'A rich piperade provides moisture and deep flavor to roasted vegetable rounds.'
      },
      {
        stepNumber: 2,
        title: 'Arrange Alternating Vegetable Spiral',
        description: 'Layer alternating slices of eggplant, zucchini, yellow squash, and tomato in tight overlapping concentric spirals covering the entire dish.',
        durationMinutes: 15,
        tip: 'Slicing vegetables to uniform 2mm thickness ensures even cooking.'
      },
      {
        stepNumber: 3,
        title: 'Season with Herbes de Provence',
        description: 'Drizzle generously with extra virgin olive oil, minced garlic, sea salt, cracked black pepper, and fresh thyme leaves.',
        durationMinutes: 3,
        tip: 'High-quality Provençal olive oil enhances the delicate vegetable sweetness.'
      },
      {
        stepNumber: 4,
        title: 'Parchment-Covered Slow Bake',
        description: 'Cut a round of parchment paper with a small vent hole in the center. Place over vegetables. Bake at 180°C (350°F) for 40 minutes until vegetables are tender.',
        durationMinutes: 40,
        tip: 'Parchment traps steam to soften vegetables while allowing liquid to gently reduce.'
      }
    ],
    rating: 4.88,
    reviewCount: 19,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Hélène Laurent',
    isFeatured: false
  },

  // 6. THAILAND
  {
    id: 'rec-th-1',
    title: 'Traditional Bangkok Pad Thai Goong',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    category: 'Dinner',
    cuisineType: 'Thai',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 2,
    description: 'The definitive Thai street wok dish: chewy soaked rice noodles flash-fried with juicy prawns, pressed tofu, eggs, crunchy bean sprouts, and garlic chives in a sweet-tart tamarind palm sugar sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i40', name: 'Medium Rice Noodles (dry)', amount: '150', unit: 'g' },
      { id: 'i41', name: 'Large Tiger Prawns, peeled & deveined', amount: '8', unit: 'prawns' },
      { id: 'i42', name: 'Yellow Firm Tofu, cubed small', amount: '80', unit: 'g' },
      { id: 'i43', name: 'Eggs', amount: '2', unit: 'large' },
      { id: 'i44', name: 'Tamarind Paste concentrate', amount: '3', unit: 'tbsp' },
      { id: 'i45', name: 'Palm Sugar (shaved)', amount: '2.5', unit: 'tbsp' },
      { id: 'i46', name: 'Fish Sauce (Nam Pla)', amount: '2.5', unit: 'tbsp' },
      { id: 'i47', name: 'Fresh Bean Sprouts', amount: '1.5', unit: 'cups' },
      { id: 'i48', name: 'Garlic Chives cut into 2-inch batons', amount: '1', unit: 'bunch' },
      { id: 'i49', name: 'Roasted Peanuts, coarsely crushed', amount: '3', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Soak Noodles and Whisk Sauce',
        description: 'Soak dry rice noodles in room temperature water for 45 minutes until pliable and opaque. In a bowl, whisk tamarind paste, palm sugar, and fish sauce until sugar dissolves.',
        durationMinutes: 15,
        tip: 'Never boil Pad Thai noodles in hot water or they turn into mush in the wok.'
      },
      {
        stepNumber: 2,
        title: 'Sear Prawns & Crispy Tofu',
        description: 'Heat 2 tbsp oil in a smoking hot wok. Sear prawns for 1 minute per side until pink; set aside. Add tofu cubes, stirring until golden.',
        durationMinutes: 4,
        tip: 'Removing prawns early ensures they stay succulent and tender.'
      },
      {
        stepNumber: 3,
        title: 'Wok-fry Noodles with Tamarind Sauce',
        description: 'Add drained noodles with 3 tablespoons of water. Toss for 1-2 minutes until noodles turn chewy. Pour in Pad Thai sauce and toss until noodles absorb the caramelized color.',
        durationMinutes: 3,
        tip: 'Keep the wok moving quickly to prevent noodles from sticking.'
      },
      {
        stepNumber: 4,
        title: 'Scramble the Eggs',
        description: 'Push noodles to side of wok. Crack in eggs and break yolks. Let set for 15 seconds, then fold noodles over eggs and toss together.',
        durationMinutes: 2,
        tip: 'Allowing egg to set partially creates distinct golden ribbons.'
      },
      {
        stepNumber: 5,
        title: 'Toss Veggies and Serve',
        description: 'Return cooked prawns to wok with bean sprouts and garlic chives. Toss over blazing heat for 30 seconds only. Plate immediately with crushed peanuts and lime wedges.',
        durationMinutes: 1,
        tip: 'Residual heat cooks sprouts just enough while keeping them snappy.'
      }
    ],
    rating: 4.92,
    reviewCount: 34,
    isPublished: true,
    createdAt: '2026-02-15',
    authorName: 'Chef Somchai Prasert',
    isFeatured: true
  },
  {
    id: 'rec-th-2',
    title: 'Spicy Lemongrass Tom Yum Goong',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    category: 'Soup',
    cuisineType: 'Thai',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 3,
    description: 'The world-famous hot, sour, and aromatic Thai soup featuring jumbo river prawns, bruised lemongrass, fresh galangal, kaffir lime leaves, straw mushrooms, and roasted chili jam (Nam Prik Pao).',
    imageUrl: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i150', name: 'Jumbo Head-on Prawns', amount: '8', unit: 'prawns' },
      { id: 'i151', name: 'Lemongrass stalks, bruised and sliced', amount: '3', unit: 'stalks' },
      { id: 'i152', name: 'Galangal root, sliced thin', amount: '6', unit: 'slices' },
      { id: 'i153', name: 'Kaffir Lime Leaves torn', amount: '5', unit: 'leaves' },
      { id: 'i154', name: 'Bird’s Eye Thai Chilies bruised', amount: '4', unit: 'chilies' },
      { id: 'i155', name: 'Oyster or Straw Mushrooms halved', amount: '150', unit: 'g' },
      { id: 'i156', name: 'Thai Roasted Chili Jam (Nam Prik Pao)', amount: '2', unit: 'tbsp' },
      { id: 'i157', name: 'Fresh Lime Juice & Fish Sauce', amount: '3', unit: 'tbsp each' },
      { id: 'i158', name: 'Evaporated Milk (for creamy style)', amount: '3', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Extract Prawn Head Stock',
        description: 'Remove prawn heads and sauté in pot with 1 tsp oil for 2 minutes to release fragrant orange prawn fat. Add 4 cups of water and bring to a simmer.',
        durationMinutes: 6,
        tip: 'Prawn head juices give authentic Tom Yum its glowing amber hue.'
      },
      {
        stepNumber: 2,
        title: 'Infuse Aromatics',
        description: 'Add bruised lemongrass, galangal slices, torn kaffir lime leaves, and smashed Thai chilies. Simmer gently for 5 minutes until intensely fragrant.',
        durationMinutes: 5,
        tip: 'Tearing lime leaves by hand releases essential oils better than knife cuts.'
      },
      {
        stepNumber: 3,
        title: 'Cook Prawns & Mushrooms',
        description: 'Drop mushrooms and peeled prawn bodies into the boiling broth. Cook for 2-3 minutes just until prawns curl and turn coral pink.',
        durationMinutes: 3,
        tip: 'Overcooked prawns become rubbery; remove heat promptly.'
      },
      {
        stepNumber: 4,
        title: 'Season Off the Heat',
        description: 'Turn off heat. Stir in Thai chili jam, fish sauce, fresh lime juice, and evaporated milk. Garnish with fresh cilantro and serve steaming hot.',
        durationMinutes: 2,
        tip: 'Never boil fresh lime juice, which can impart bitterness.'
      }
    ],
    rating: 4.95,
    reviewCount: 28,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Somchai Prasert',
    isFeatured: false
  },

  // 7. SOUTH KOREA
  {
    id: 'rec-kr-1',
    title: 'Authentic Dolsot Bibimbap',
    countryId: 'south-korea',
    countryName: 'South Korea',
    countryFlag: '🇰🇷',
    category: 'Lunch',
    cuisineType: 'Korean',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    totalTimeMinutes: 40,
    servings: 2,
    description: 'Crispy sizzling stone-pot rice bowl topped with seasoned sautéed vegetables (namul), marinated beef bulgogi, a raw or sunny-side egg yolk, and sweet-spicy gochujang sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i94', name: 'Steamed Short-grain Rice', amount: '2', unit: 'cups' },
      { id: 'i95', name: 'Thinly sliced Ribeye / Beef Bulgogi', amount: '200', unit: 'g' },
      { id: 'i96', name: 'Fresh Spinach blanched', amount: '1', unit: 'cup' },
      { id: 'i97', name: 'Soybean Sprouts blanched', amount: '1', unit: 'cup' },
      { id: 'i98', name: 'Carrots cut into fine matchsticks', amount: '1', unit: 'medium' },
      { id: 'i99', name: 'Shiitake mushrooms sliced', amount: '4', unit: 'mushrooms' },
      { id: 'i100', name: 'Toasted Sesame Oil', amount: '2', unit: 'tbsp' },
      { id: 'i101', name: 'Korean Gochujang Chili Paste', amount: '3', unit: 'tbsp' },
      { id: 'i102', name: 'Eggs (sunny-side up or yolks)', amount: '2', unit: 'eggs' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate & Sauté Bulgogi Beef',
        description: 'Toss beef with soy sauce, sesame oil, sugar, and minced garlic. Stir-fry in a hot skillet for 3 minutes until cooked through.',
        durationMinutes: 5,
        tip: 'Thin beef cooks in flash seconds.'
      },
      {
        stepNumber: 2,
        title: 'Season the Vegetable Namul',
        description: 'Separately blanch spinach and bean sprouts for 1 minute; squeeze dry and season with sesame oil, salt, and garlic. Stir-fry carrot matchsticks and mushrooms separately.',
        durationMinutes: 10,
        tip: 'Sautéing each topping separately preserves individual colors.'
      },
      {
        stepNumber: 3,
        title: 'Prepare Bibimbap Gochujang Sauce',
        description: 'Whisk gochujang paste, 1 tbsp sesame oil, 1 tbsp water, 1 tsp honey, and toasted sesame seeds in a small bowl until glossy.',
        durationMinutes: 3,
        tip: 'Water and honey loosen thick gochujang for effortless mixing.'
      },
      {
        stepNumber: 4,
        title: 'Sizzle the Rice Crust (Nurungji)',
        description: 'Coat a heavy stone bowl or skillet with sesame oil. Press cooked rice into bottom. Heat for 4-5 minutes until you hear rice sizzling loudly.',
        durationMinutes: 5,
        tip: 'Sesame oil guarantees that legendary crunchy scorched rice.'
      },
      {
        stepNumber: 5,
        title: 'Arrange Rainbow Toppings and Mix',
        description: 'Arrange beef and each colored vegetable in decorative wedges over hot rice. Place egg in center and spoon gochujang sauce alongside. Serve sizzling and mix enthusiastically.',
        durationMinutes: 4,
        tip: 'Mix thoroughly right away so hot rice and steam cook the egg through.'
      }
    ],
    rating: 4.87,
    reviewCount: 19,
    isPublished: true,
    createdAt: '2026-02-16',
    authorName: 'Chef Min-ho Park',
    isFeatured: false
  },
  {
    id: 'rec-kr-2',
    title: 'Crispy Korean Fried Chicken (Yangnyeom)',
    countryId: 'south-korea',
    countryName: 'South Korea',
    countryFlag: '🇰🇷',
    category: 'Street Food',
    cuisineType: 'Korean',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    totalTimeMinutes: 40,
    servings: 4,
    description: 'Double-fried chicken wings with an ultra-thin glass-like crispy potato starch crust, tossed in a sticky sweet, tangy, and spicy gochujang and strawberry jam glaze with crushed peanuts.',
    imageUrl: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i159', name: 'Chicken Wings & Drumettes', amount: '1', unit: 'kg' },
      { id: 'i160', name: 'Potato Starch or Cornstarch', amount: '1', unit: 'cup' },
      { id: 'i161', name: 'Gochujang (Korean Chili Paste)', amount: '3', unit: 'tbsp' },
      { id: 'i162', name: 'Ketchup & Honey / Corn Syrup', amount: '3', unit: 'tbsp each' },
      { id: 'i163', name: 'Brown Sugar & Soy Sauce', amount: '1', unit: 'tbsp each' },
      { id: 'i164', name: 'Minced Garlic & Ginger', amount: '2', unit: 'tbsp' },
      { id: 'i165', name: 'Toasted Sesame seeds & Crushed Peanuts', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Season and Coat Chicken in Starch',
        description: 'Season chicken with salt, black pepper, and ginger juice. Toss in potato starch until completely coated with a dry, powdery exterior.',
        durationMinutes: 8,
        tip: 'Potato starch creates an ultra-crispy crust that stays crunchy even when coated in sauce.'
      },
      {
        stepNumber: 2,
        title: 'Simmer the Yangnyeom Glaze',
        description: 'In a saucepan, combine gochujang, ketchup, honey, brown sugar, soy sauce, and minced garlic. Simmer for 3 minutes until bubbling and syrupy.',
        durationMinutes: 5,
        tip: 'Honey gives the sauce its signature mirror-like gloss.'
      },
      {
        stepNumber: 3,
        title: 'First Fry (Cook Meat Through)',
        description: 'Deep fry chicken wings at 170°C (340°F) for 10 minutes until light golden. Transfer to a wire rack to drain and steam out for 5 minutes.',
        durationMinutes: 10,
        tip: 'Resting between fries releases internal moisture, preventing sogginess.'
      },
      {
        stepNumber: 4,
        title: 'Second Flash Fry (Glass-like Crunch)',
        description: 'Raise oil temperature to 190°C (375°F). Drop chicken for a second quick fry of 2-3 minutes until deep golden brown and sounding hollow when tapped.',
        durationMinutes: 3,
        tip: 'The second fry vaporizes remaining surface water for shatteringly crisp skin.'
      },
      {
        stepNumber: 5,
        title: 'Toss in Warm Glaze & Garnish',
        description: 'Transfer screaming hot chicken directly into warm sauce, toss vigorously in a large bowl, and garnish with crushed peanuts and sesame seeds.',
        durationMinutes: 2,
        tip: 'Serve immediately with pickled Korean daikon radish (chikin-mu).'
      }
    ],
    rating: 4.96,
    reviewCount: 45,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Min-ho Park',
    isFeatured: false
  },

  // 8. UNITED STATES
  {
    id: 'rec-us-1',
    title: 'Double Smash Cheeseburger with Secret Sauce',
    countryId: 'united-states',
    countryName: 'United States',
    countryFlag: '🇺🇸',
    category: 'Lunch',
    cuisineType: 'American',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    totalTimeMinutes: 23,
    servings: 2,
    description: 'Two lacy, crispy-edged beef patties smashed ultra-thin on a blazing hot cast-iron griddle, melted American cheese, dill pickle chips, and tangy homemade burger sauce on toasted brioche buns.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i104', name: '80/20 Ground Beef Chuck, loose balls', amount: '360', unit: 'g (4 balls)' },
      { id: 'i105', name: 'Brioche Burger Buns', amount: '2', unit: 'buns' },
      { id: 'i106', name: 'Real American Cheese slices', amount: '4', unit: 'slices' },
      { id: 'i107', name: 'Dill Pickle chips', amount: '8', unit: 'slices' },
      { id: 'i108', name: 'Finely minced Yellow Onion', amount: '0.25', unit: 'cup' },
      { id: 'i109', name: 'Mayonnaise, Ketchup, Mustard, Relish', amount: '2', unit: 'tbsp each' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Mix Burger Sauce and Toast Buns',
        description: 'Whisk mayonnaise, ketchup, yellow mustard, sweet relish, and vinegar. Butter sliced brioche buns and toast in a dry skillet until golden brown.',
        durationMinutes: 4,
        tip: 'Toasted buns prevent sauce from soaking into the bread.'
      },
      {
        stepNumber: 2,
        title: 'Preheat Griddle and Prepare Meat',
        description: 'Heat a dry cast-iron skillet over high heat until lightly smoking. Keep beef chilled in loosely packed 90g spheres until the moment you cook.',
        durationMinutes: 4,
        tip: 'Cold fat smashes better and retains moisture.'
      },
      {
        stepNumber: 3,
        title: 'The Hard Smash',
        description: 'Place meat balls on screaming hot surface. Immediately press down with a heavy spatula (using parchment paper to avoid sticking) paper-thin with ragged lacy edges.',
        durationMinutes: 2,
        tip: 'Smash within the first 20 seconds before fat renders out.'
      },
      {
        stepNumber: 4,
        title: 'Season, Flip, and Melt Cheese',
        description: 'Season top with salt and pepper. Cook 2 minutes until deeply browned and crisp. Scrape underneath hard and flip. Immediately top with American cheese.',
        durationMinutes: 2,
        tip: 'American cheese melts smoothly without separating into oil.'
      },
      {
        stepNumber: 5,
        title: 'Stack and Assemble',
        description: 'Stack one cheesy patty on top of the other. Spread generous burger sauce on bottom bun, add pickles, double patty stack, extra sauce, and close.',
        durationMinutes: 2,
        tip: 'Pickles at the bottom cut through the rich beef fat.'
      }
    ],
    rating: 4.93,
    reviewCount: 33,
    isPublished: true,
    createdAt: '2026-02-13',
    authorName: 'Chef Tyler Brooks',
    isFeatured: false
  },
  {
    id: 'rec-us-2',
    title: 'Classic Baked New York Cheesecake',
    countryId: 'united-states',
    countryName: 'United States',
    countryFlag: '🇺🇸',
    category: 'Dessert',
    cuisineType: 'American',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 60,
    totalTimeMinutes: 85,
    servings: 8,
    description: 'Dense, rich, and velvety smooth baked New York cheesecake on a buttery Graham cracker crust, scented with Madagascar vanilla and fresh lemon zest, crowned with strawberry compote.',
    imageUrl: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i166', name: 'Full-fat Cream Cheese, room temperature', amount: '900', unit: 'g' },
      { id: 'i167', name: 'Graham Cracker crumbs', amount: '200', unit: 'g' },
      { id: 'i168', name: 'Melted Butter', amount: '80', unit: 'g' },
      { id: 'i169', name: 'Granulated Sugar', amount: '200', unit: 'g' },
      { id: 'i170', name: 'Sour Cream & Heavy Cream', amount: '0.5', unit: 'cup each' },
      { id: 'i171', name: 'Large Eggs, room temperature', amount: '4', unit: 'eggs' },
      { id: 'i172', name: 'Vanilla bean paste & lemon zest', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Press and Pre-bake Graham Crust',
        description: 'Mix crushed Graham crackers with melted butter and 2 tbsp sugar. Press firmly into bottom of a 9-inch springform pan. Bake at 175°C (350°F) for 10 minutes and cool.',
        durationMinutes: 12,
        tip: 'Use the flat bottom of a drinking glass to pack crust tightly.'
      },
      {
        stepNumber: 2,
        title: 'Beat Cream Cheese Silky Smooth',
        description: 'Beat room temperature cream cheese and sugar on low speed until creamy and lump-free. Mix in sour cream, heavy cream, vanilla, and lemon zest.',
        durationMinutes: 6,
        tip: 'Low mixer speed prevents incorporating excess air that causes surface cracks.'
      },
      {
        stepNumber: 3,
        title: 'Add Eggs One at a Time',
        description: 'Crack in eggs one by one on lowest speed, beating just until incorporated. Pour the velvety batter over cooled crust.',
        durationMinutes: 4,
        tip: 'Overbeating after adding eggs makes the cheesecake puff up and collapse.'
      },
      {
        stepNumber: 4,
        title: 'Water Bath Bake and Gradual Cool',
        description: 'Wrap pan base tightly in foil and place in roasting pan filled with 1 inch hot water. Bake at 160°C (325°F) for 60 minutes. Turn oven off, prop door open with wooden spoon, and rest inside for 1 hour.',
        durationMinutes: 70,
        tip: 'Slow gradual cooling guarantees a silky flat top without cracks.'
      }
    ],
    rating: 4.97,
    reviewCount: 40,
    isPublished: true,
    createdAt: '2026-02-25',
    authorName: 'Chef Tyler Brooks',
    isFeatured: false
  },

  // 9. TURKEY
  {
    id: 'rec-tr-1',
    title: 'Char-Grilled Adana Shish Kebab',
    countryId: 'turkey',
    countryName: 'Turkey',
    countryFlag: '🇹🇷',
    category: 'Dinner',
    cuisineType: 'Turkish',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    totalTimeMinutes: 40,
    servings: 4,
    description: 'Hand-minced lamb shoulder kneaded with tail fat, red sweet capia peppers, sumac, and Turkish hot pepper paste, pressed onto wide flat skewers and grilled over charcoal.',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i173', name: 'Ground Lamb Shoulder (20% fat)', amount: '600', unit: 'g' },
      { id: 'i174', name: 'Red Capia / Bell Pepper, finely minced', amount: '1', unit: 'large' },
      { id: 'i175', name: 'Turkish Hot Pepper Paste (Biber Salçası)', amount: '1.5', unit: 'tbsp' },
      { id: 'i176', name: 'Ground Cumin & Sumac', amount: '1', unit: 'tsp each' },
      { id: 'i177', name: 'Turkish Lavash or Pide flatbreads', amount: '4', unit: 'breads' },
      { id: 'i178', name: 'Sumac Red Onion Salad & Grilled Tomatoes', amount: '1', unit: 'garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Mince and Squeeze Red Peppers',
        description: 'Finely mince red bell peppers and squeeze out excess moisture in a towel so the meat paste stays firm on the skewers.',
        durationMinutes: 6,
        tip: 'Excess water makes kebab meat slip off skewers during grilling.'
      },
      {
        stepNumber: 2,
        title: 'Knead Meat until Sticky and Emulsified',
        description: 'Combine ground lamb, drained peppers, pepper paste, cumin, sumac, and 1.5 tsp salt. Knead vigorously with your hands for 10 minutes until meat develops a sticky myosin bind.',
        durationMinutes: 10,
        tip: 'Kneading creates protein strands that keep the kebab securely attached.'
      },
      {
        stepNumber: 3,
        title: 'Shape onto Wide Flat Iron Skewers',
        description: 'With wet hands, shape a handful of meat along wide flat swords, pressing finger indentations every 2 inches.',
        durationMinutes: 6,
        tip: 'Use wide flat skewers; round skewers spin inside the meat.'
      },
      {
        stepNumber: 4,
        title: 'Grill over High Heat and Serve with Lavash',
        description: 'Grill skewers over high heat for 6-8 minutes, turning every minute. Press warm lavash flatbread against the cooking meat to soak up juices, and serve with sumac onions.',
        durationMinutes: 8,
        tip: 'Steaming lavash on the kebab captures flavorful spiced juices.'
      }
    ],
    rating: 4.92,
    reviewCount: 26,
    isPublished: true,
    createdAt: '2026-02-20',
    authorName: 'Chef Emre Demir',
    isFeatured: false
  },
  {
    id: 'rec-tr-2',
    title: 'Gaziantep Pistachio Turkish Baklava',
    countryId: 'turkey',
    countryName: 'Turkey',
    countryFlag: '🇹🇷',
    category: 'Dessert',
    cuisineType: 'Turkish',
    dietary: 'Vegetarian',
    difficulty: 'Hard',
    prepTimeMinutes: 40,
    cookTimeMinutes: 45,
    totalTimeMinutes: 85,
    servings: 12,
    description: 'Forty paper-thin layers of hand-rolled phyllo pastry brushed with clarified sheep’s butter, packed with vibrant green Antep pistachios and soaked in fragrant lemon syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i179', name: 'Ultra-thin Phyllo Dough sheets', amount: '1', unit: 'pack (500g)' },
      { id: 'i180', name: 'Clarified Butter (Ghee), melted', amount: '250', unit: 'g' },
      { id: 'i181', name: 'Antep Pistachios, coarsely ground', amount: '300', unit: 'g' },
      { id: 'i182', name: 'Granulated Sugar', amount: '400', unit: 'g' },
      { id: 'i183', name: 'Water & Lemon juice', amount: '1.5', unit: 'cups' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil and Cool Sugar Syrup',
        description: 'Boil sugar and water for 15 minutes. Stir in lemon juice and remove from heat to cool completely.',
        durationMinutes: 15,
        tip: 'Cold syrup poured over hot baked pastry ensures maximum crispness.'
      },
      {
        stepNumber: 2,
        title: 'Layer Phyllo with Clarified Butter',
        description: 'Brush baking pan with clarified butter. Layer 20 sheets of phyllo, brushing melted butter between every two sheets. Spread ground pistachios in an even layer.',
        durationMinutes: 20,
        tip: 'Clarified butter prevents burnt milk solids on the delicate pastry.'
      },
      {
        stepNumber: 3,
        title: 'Top Layers, Cut Diamonds, and Bake',
        description: 'Top with remaining 20 buttered phyllo sheets. Slice into classic diamond shapes with a razor-sharp knife before baking. Bake at 170°C (340°F) for 45 minutes until golden and flaky.',
        durationMinutes: 45,
        tip: 'Pre-cutting allows butter and syrup to penetrate all layers evenly.'
      },
      {
        stepNumber: 4,
        title: 'Pour Cold Syrup on Sizzling Hot Baklava',
        description: 'Immediately pour cooled syrup over the bubbling hot baklava. Listen to the loud sizzle! Rest for 2 hours before serving.',
        durationMinutes: 5,
        tip: 'Never cover baklava or trapped steam will soften the crisp crunch.'
      }
    ],
    rating: 4.95,
    reviewCount: 33,
    isPublished: true,
    createdAt: '2026-02-21',
    authorName: 'Chef Emre Demir',
    isFeatured: false
  },

  // 10. SPAIN
  {
    id: 'rec-es-1',
    title: 'Authentic Valencian Seafood Paella',
    countryId: 'spain',
    countryName: 'Spain',
    countryFlag: '🇪🇸',
    category: 'Dinner',
    cuisineType: 'Spanish',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    servings: 4,
    description: 'Golden Bomba short-grain rice simmered in rich saffron shellfish broth with jumbo prawns, calamari, mussels, sweet peppers, and smoky Spanish paprika, crowned with coveted crispy socarrat bottom.',
    imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i63', name: 'Spanish Bomba Rice', amount: '350', unit: 'g' },
      { id: 'i64', name: 'Rich Seafood or Fish Broth', amount: '1', unit: 'liter' },
      { id: 'i65', name: 'Spanish Saffron threads', amount: '0.5', unit: 'g' },
      { id: 'i66', name: 'Jumbo Prawns (shell on)', amount: '8', unit: 'pieces' },
      { id: 'i67', name: 'Fresh Mussels, cleaned & debearded', amount: '300', unit: 'g' },
      { id: 'i68', name: 'Calamari rings', amount: '200', unit: 'g' },
      { id: 'i69', name: 'Grated ripe Tomatoes (Sofrito)', amount: '2', unit: 'medium' },
      { id: 'i70', name: 'Smoky Spanish Pimentón Dulce', amount: '1.5', unit: 'tsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Infuse Saffron in Hot Broth',
        description: 'Lightly crush saffron threads between fingers and steep in 1 cup of hot fish broth for 15 minutes to unlock intense golden color.',
        durationMinutes: 15,
        tip: 'Warm broth accelerates saffron pigment extraction.'
      },
      {
        stepNumber: 2,
        title: 'Sear Seafood in Paella Pan',
        description: 'Heat olive oil in paella pan. Sear prawns for 1.5 minutes per side until pink; remove. Flash-fry calamari rings for 1 minute; remove.',
        durationMinutes: 4,
        tip: 'Searing shellfish infuses the base oil with deep ocean flavor.'
      },
      {
        stepNumber: 3,
        title: 'Build Sofrito and Toast Bomba Rice',
        description: 'In the same oil, sauté grated tomato, garlic, and smoky pimentón until jammy sofrito forms. Add Bomba rice and stir for 2 minutes to coat every grain.',
        durationMinutes: 5,
        tip: 'Toasting Bomba rice prevents grains from turning sticky.'
      },
      {
        stepNumber: 4,
        title: 'Simmer Rice without Stirring',
        description: 'Pour in boiling saffron broth. Distribute rice evenly once, then DO NOT stir again. Simmer on medium-high for 8 minutes, then reduce to low heat for 10 minutes.',
        durationMinutes: 18,
        tip: 'Never stir paella rice after spreading: stirring releases starch and destroys texture.'
      },
      {
        stepNumber: 5,
        title: 'Nestle Seafood and Form Socarrat',
        description: 'Arrange prawns, calamari, and mussels into rice. Turn heat to high for final 2 minutes until you hear a crackling sound (socarrat crust forming). Cover and rest for 5 minutes.',
        durationMinutes: 7,
        tip: 'Listen carefully: the rhythmic crackle indicates the coveted toasted socarrat.'
      }
    ],
    rating: 4.91,
    reviewCount: 31,
    isPublished: true,
    createdAt: '2026-02-17',
    authorName: 'Chef Javier Mendez',
    isFeatured: true
  },
  {
    id: 'rec-es-2',
    title: 'Crispy Patatas Bravas with Smoked Aioli',
    countryId: 'spain',
    countryName: 'Spain',
    countryFlag: '🇪🇸',
    category: 'Appetizer',
    cuisineType: 'Spanish',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 4,
    description: 'Crisp, golden parboiled and fried potato cubes tossed with coarse sea salt, served with fiery smoked Spanish pimentón salsa brava and creamy garlic alioli.',
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i184', name: 'Starchy Russet or Agria Potatoes cut in 1-inch chunks', amount: '800', unit: 'g' },
      { id: 'i185', name: 'Olive Oil for frying', amount: '2', unit: 'cups' },
      { id: 'i186', name: 'Smoked Spanish Pimentón (Sweet & Hot)', amount: '1.5', unit: 'tbsp' },
      { id: 'i187', name: 'Tomato paste & Sherry vinegar', amount: '2', unit: 'tbsp each' },
      { id: 'i188', name: 'Garlic Alioli mayonnaise', amount: '0.5', unit: 'cup' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Parboil Potatoes in Salted Water',
        description: 'Boil potato chunks in salted water for 5 minutes until edges are tender. Drain thoroughly and let steam dry in colander for 5 minutes.',
        durationMinutes: 10,
        tip: 'Rough up potato edges slightly in the colander for maximum crispy surface area.'
      },
      {
        stepNumber: 2,
        title: 'Cook Spicy Brava Sauce',
        description: 'Sauté minced garlic in 2 tbsp olive oil. Whisk in flour and pimentón for 1 minute. Add tomato paste, chicken or veggie broth, and sherry vinegar. Simmer for 5 minutes until thickened.',
        durationMinutes: 6,
        tip: 'Authentic Madrid brava sauce is thickened with a pimentón roux, not ketchup.'
      },
      {
        stepNumber: 3,
        title: 'Double Fry Potatoes to Ultra-Crisp',
        description: 'Fry potatoes in olive oil at 180°C (350°F) for 6-8 minutes until blistered, deep golden, and crackling crisp. Drain on paper towels and toss with sea salt.',
        durationMinutes: 8,
        tip: 'Parboiling + frying ensures a fluffy mashed center inside a glassy shell.'
      },
      {
        stepNumber: 4,
        title: 'Drizzle Brava Sauce and Garlic Aioli',
        description: 'Pile crispy potatoes onto a serving platter. Drizzle with fiery brava sauce and dollop with garlic alioli.',
        durationMinutes: 2,
        tip: 'Serve immediately while bubbling hot with chilled Spanish beer.'
      }
    ],
    rating: 4.89,
    reviewCount: 23,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Javier Mendez',
    isFeatured: false
  },

  // 11. GREECE
  {
    id: 'rec-gr-1',
    title: 'Traditional Greek Baked Moussaka',
    countryId: 'greece',
    countryName: 'Greece',
    countryFlag: '🇬🇷',
    category: 'Dinner',
    cuisineType: 'Greek',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 35,
    cookTimeMinutes: 50,
    totalTimeMinutes: 85,
    servings: 6,
    description: 'Golden baked layers of roasted eggplant slices, sliced potatoes, and cinnamon-spiced ground lamb ragù, blanketed with a thick, velvety nutmeg-infused béchamel sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i74', name: 'Eggplants sliced 0.5-inch thick', amount: '2', unit: 'large' },
      { id: 'i75', name: 'Yukon Gold Potatoes, sliced', amount: '3', unit: 'medium' },
      { id: 'i76', name: 'Ground Lamb or Beef', amount: '600', unit: 'g' },
      { id: 'i77', name: 'Crushed Tomato purée', amount: '400', unit: 'g' },
      { id: 'i78', name: 'Ground Cinnamon & Allspice', amount: '0.5', unit: 'tsp each' },
      { id: 'i79', name: 'Whole Milk for Béchamel', amount: '3', unit: 'cups' },
      { id: 'i80', name: 'Butter & All-purpose flour', amount: '4', unit: 'tbsp each' },
      { id: 'i81', name: 'Egg yolks whisked', amount: '2', unit: 'yolks' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Roast Eggplant and Potatoes',
        description: 'Toss sliced eggplant and potato rounds in olive oil with salt. Spread on baking sheets. Roast at 200°C (400°F) for 20 minutes until tender and lightly golden.',
        durationMinutes: 20,
        tip: 'Roasting instead of pan-frying cuts excess oil while preserving structure.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Spiced Lamb Ragù',
        description: 'Brown ground lamb with diced onions and garlic. Stir in tomato purée, cinnamon, allspice, red wine, and salt. Simmer for 20 minutes until sauce is thick and not watery.',
        durationMinutes: 22,
        tip: 'Cinnamon is the trademark Greek note that elevates the lamb.'
      },
      {
        stepNumber: 3,
        title: 'Whisk the Velvety Béchamel',
        description: 'Melt butter in saucepan, whisk in flour for 1 minute. Gradually stream in warm milk, whisking constantly until silky and bubbling thick. Off heat, whisk in egg yolks and nutmeg.',
        durationMinutes: 10,
        tip: 'Egg yolks stabilize the béchamel into a gorgeous custard layer.'
      },
      {
        stepNumber: 4,
        title: 'Layer the Moussaka in Baking Dish',
        description: 'In a deep baking dish, arrange roasted potato slices as sturdy base. Layer roasted eggplant over potatoes. Pour spiced meat sauce evenly over vegetables. Top with thick béchamel.',
        durationMinutes: 8,
        tip: 'Smooth béchamel evenly with a spatula to reach every corner.'
      },
      {
        stepNumber: 5,
        title: 'Bake to Golden Brown & Cool',
        description: 'Dust top with extra grated cheese. Bake at 180°C (350°F) for 45 minutes until top is deep golden with toasted spots. Cool for at least 25 minutes before slicing.',
        durationMinutes: 45,
        tip: 'Cooling allows the layers to set cleanly into picture-perfect squares.'
      }
    ],
    rating: 4.89,
    reviewCount: 22,
    isPublished: true,
    createdAt: '2026-02-12',
    authorName: 'Chef Elena Papadopoulos',
    isFeatured: false
  },
  {
    id: 'rec-gr-2',
    title: 'Authentic Greek Village Salad (Horiatiki)',
    countryId: 'greece',
    countryName: 'Greece',
    countryFlag: '🇬🇷',
    category: 'Lunch',
    cuisineType: 'Greek',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 12,
    cookTimeMinutes: 0,
    totalTimeMinutes: 12,
    servings: 4,
    description: 'The real Greek tavern classic: sun-ripened tomatoes, crisp Persian cucumbers, thinly sliced red onion, briny Kalamata olives, and a whole slab of barrel-aged Greek feta drizzled with Greek oregano and extra virgin olive oil.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i189', name: 'Ripe Vine Tomatoes, cut in rough wedges', amount: '4', unit: 'large' },
      { id: 'i190', name: 'Crisp Cucumbers, peeled in stripes and sliced', amount: '2', unit: 'medium' },
      { id: 'i191', name: 'Red Onion, sliced in thin rings', amount: '0.5', unit: 'onion' },
      { id: 'i192', name: 'Kalamata Olives (with pit)', amount: '0.5', unit: 'cup' },
      { id: 'i193', name: 'Greek Sheep’s Milk Feta cheese block', amount: '200', unit: 'g slab' },
      { id: 'i194', name: 'Dried Greek Wild Oregano', amount: '1', unit: 'tbsp' },
      { id: 'i195', name: 'Extra Virgin Greek Olive Oil & Red Wine Vinegar', amount: '4', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Chop Tomatoes & Cucumbers',
        description: 'Cut ripe tomatoes into rustic wedges over the salad bowl to catch all sweet tomato juices. Add sliced cucumbers and green bell pepper rings.',
        durationMinutes: 5,
        tip: 'Never refrigerate tomatoes before slicing; room temperature enhances flavor.'
      },
      {
        stepNumber: 2,
        title: 'Tame the Red Onion',
        description: 'Slice red onion into thin rings and soak in cold water with a splash of vinegar for 5 minutes to remove sharp bite, then add to the bowl with Kalamata olives.',
        durationMinutes: 4,
        tip: 'Whole olives with pits retain firmer, juicier texture than pitted ones.'
      },
      {
        stepNumber: 3,
        title: 'Top with Whole Slab of Feta & Oregano',
        description: 'Toss vegetables lightly with olive oil and a splash of vinegar. Lay the whole block of feta squarely on top. Drizzle with more olive oil and rub dried oregano between palms directly over the cheese.',
        durationMinutes: 3,
        tip: 'In Greece, feta is served in a whole slab on top, never pre-crumbled!'
      }
    ],
    rating: 4.93,
    reviewCount: 30,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Elena Papadopoulos',
    isFeatured: false
  },

  // 12. CHINA
  {
    id: 'rec-cn-1',
    title: 'Szechuan Kung Pao Chicken (Gong Bao Ji Ding)',
    countryId: 'china',
    countryName: 'China',
    countryFlag: '🇨🇳',
    category: 'Dinner',
    cuisineType: 'Chinese',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 3,
    description: 'Velvety diced chicken breast stir-fried over roaring wok hei heat with toasted peanuts, fragrant dried red facing-heaven chilies, and tingling Szechuan peppercorns in a savory sweet-tangy sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i196', name: 'Chicken Breast or Thighs, diced into 1/2-inch cubes', amount: '450', unit: 'g' },
      { id: 'i197', name: 'Dried Szechuan Red Chilies, seeded', amount: '12', unit: 'chilies' },
      { id: 'i198', name: 'Szechuan Peppercorns', amount: '1', unit: 'tsp' },
      { id: 'i199', name: 'Roasted Unsalted Peanuts', amount: '0.5', unit: 'cup' },
      { id: 'i200', name: 'Scallions (white parts cut in 1/2-inch batons)', amount: '4', unit: 'stalks' },
      { id: 'i201', name: 'Chinkiang Black Vinegar & Light Soy Sauce', amount: '1.5', unit: 'tbsp each' },
      { id: 'i202', name: 'Shaoxing Rice Wine, Sugar, Cornstarch', amount: '1', unit: 'tbsp each' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Velvet the Chicken Cubes',
        description: 'Toss chicken cubes with 1 tbsp Shaoxing wine, 1 tsp light soy sauce, and 1 tbsp cornstarch. Let rest for 15 minutes to lock in moisture during rapid wok stir-fry.',
        durationMinutes: 8,
        tip: 'Cornstarch velveting creates a silky exterior and tender juicy interior.'
      },
      {
        stepNumber: 2,
        title: 'Whisk the Kung Pao Sauce',
        description: 'In a small bowl, whisk Chinkiang black vinegar, light soy sauce, dark soy sauce, sugar, 1 tsp cornstarch, and 2 tbsp water until dissolved.',
        durationMinutes: 3,
        tip: 'Premixing the sauce is essential because high-heat wok cooking happens in seconds.'
      },
      {
        stepNumber: 3,
        title: 'Fragrant Chili & Peppercorn Infusion',
        description: 'Heat 2 tbsp oil in a smoking hot wok over medium-low heat. Add dried chilies and Szechuan peppercorns; fry for 30 seconds until chilies darken to ruby red.',
        durationMinutes: 2,
        tip: 'Do not burn chilies; black chilies turn bitter.'
      },
      {
        stepNumber: 4,
        title: 'High Heat Wok Hei Sizzle & Finish',
        description: 'Turn heat to highest setting. Add chicken and stir-fry for 2-3 minutes until opaque. Add garlic, ginger, and scallion whites. Pour in sauce, tossing vigorously until glossy, and fold in peanuts.',
        durationMinutes: 4,
        tip: 'Add peanuts at the very end to keep them crunchy.'
      }
    ],
    rating: 4.94,
    reviewCount: 37,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Wei Zhang',
    isFeatured: true
  },
  {
    id: 'rec-cn-2',
    title: 'Handmade Steamed Pork & Scallion Dumplings',
    countryId: 'china',
    countryName: 'China',
    countryFlag: '🇨🇳',
    category: 'Street Food',
    cuisineType: 'Chinese',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    totalTimeMinutes: 45,
    servings: 4,
    description: 'Delicate hand-pleated dumplings stuffed with juicy seasoned ground pork, fresh scallions, ginger-infused dashi, and sesame oil, served steaming in bamboo baskets with spicy chili garlic vinegar.',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i203', name: 'Round Dumpling Wrappers', amount: '30', unit: 'wrappers' },
      { id: 'i204', name: 'Ground Pork (70/30 lean-to-fat)', amount: '400', unit: 'g' },
      { id: 'i205', name: 'Finely minced Scallions & Ginger', amount: '0.5', unit: 'cup' },
      { id: 'i206', name: 'Shaoxing Wine & Soy Sauce', amount: '1', unit: 'tbsp each' },
      { id: 'i207', name: 'Pure Toasted Sesame Oil', amount: '1', unit: 'tbsp' },
      { id: 'i208', name: 'Chili crisp & Chinkiang vinegar dipping sauce', amount: '1', unit: 'batch' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Beat Pork Filling in One Direction',
        description: 'Combine ground pork, scallions, ginger, soy sauce, Shaoxing wine, sesame oil, and white pepper. Stir vigorously in one clockwise direction for 4 minutes until sticky and paste-like.',
        durationMinutes: 8,
        tip: 'Beating in one direction develops protein strands for a bouncy, juicy bite.'
      },
      {
        stepNumber: 2,
        title: 'Pleat and Seal Dumplings',
        description: 'Place 1 tablespoon of filling in the center of a wrapper. Moisten edges with water, fold in half, and pinch 4-5 neat pleats along the front edge to seal tightly.',
        durationMinutes: 15,
        tip: 'Ensure no air pockets are trapped inside the pleats.'
      },
      {
        stepNumber: 3,
        title: 'Steam in Bamboo Baskets',
        description: 'Line bamboo steamer with perforated parchment or cabbage leaves. Arrange dumplings with 1/2 inch space between them. Steam over high boiling water for 10-12 minutes.',
        durationMinutes: 12,
        tip: 'Cabbage leaves prevent delicate dumpling wrappers from sticking to bamboo.'
      },
      {
        stepNumber: 4,
        title: 'Serve with Spicy Vinegar Dip',
        description: 'Serve immediately in the steaming basket with a bowl of black vinegar, chili oil, and fresh shredded ginger.',
        durationMinutes: 2,
        tip: 'Eat carefully while hot to savor the internal fragrant soup juices.'
      }
    ],
    rating: 4.91,
    reviewCount: 29,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Wei Zhang',
    isFeatured: false
  },

  // 13. GERMANY
  {
    id: 'rec-de-1',
    title: 'Crispy Bavarian Wiener Schnitzel',
    countryId: 'germany',
    countryName: 'Germany',
    countryFlag: '🇩🇪',
    category: 'Dinner',
    cuisineType: 'German',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 2,
    description: 'Paper-thin pounded veal or pork cutlets coated in a light flour, egg, and breadcrumb breading, fried in bubbling butter until golden brown with airy undulating soufflé waves.',
    imageUrl: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i209', name: 'Veal or Pork Loin Cutlets, pounded 1/8 inch thin', amount: '2', unit: 'cutlets (200g each)' },
      { id: 'i210', name: 'Fine Dry Breadcrumbs (Semmelbrösel)', amount: '1.5', unit: 'cups' },
      { id: 'i211', name: 'All-Purpose Flour', amount: '0.5', unit: 'cup' },
      { id: 'i212', name: 'Eggs, lightly beaten with 1 tbsp heavy cream', amount: '2', unit: 'eggs' },
      { id: 'i213', name: 'Clarified Butter or Lard for pan-frying', amount: '1', unit: 'cup' },
      { id: 'i214', name: 'Fresh Lemon wedges & Lingonberry jam', amount: '1', unit: 'garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Pound Cutlets Ultra-Thin',
        description: 'Place cutlets between plastic wrap. Gently pound with smooth flat meat mallet until uniformly 3mm (1/8 inch) thin from center to edges.',
        durationMinutes: 6,
        tip: 'Even thinness guarantees the meat cooks completely in just 3 minutes.'
      },
      {
        stepNumber: 2,
        title: 'Three-Stage Breading without Pressing',
        description: 'Dredge cutlets in flour, shake off excess. Dip in beaten egg, then drag through fine breadcrumbs without pressing down.',
        durationMinutes: 4,
        tip: 'Do not press breadcrumbs into the meat; loose breading allows it to soufflé and wave.'
      },
      {
        stepNumber: 3,
        title: 'Continuous Swirling Pan-Fry',
        description: 'Heat clarified butter in a wide skillet to 175°C (350°F). Slide schnitzel in and continuously swirl the pan in circular motions so hot butter washes over the top surface.',
        durationMinutes: 5,
        tip: 'Swirling hot fat over the top inflates the breading into famous golden ripples.'
      },
      {
        stepNumber: 4,
        title: 'Drain and Serve with Lemon & Lingonberries',
        description: 'Drain for 30 seconds on paper towels. Serve immediately with a juicy lemon crown, warm German potato salad, and sweet-tart lingonberry jam.',
        durationMinutes: 2,
        tip: 'Squeeze lemon over the crust just before the first crunchy bite.'
      }
    ],
    rating: 4.93,
    reviewCount: 31,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Hans Gruber',
    isFeatured: true
  },
  {
    id: 'rec-de-2',
    title: 'Schwarzwälder Kirschtorte (Black Forest Cake)',
    countryId: 'germany',
    countryName: 'Germany',
    countryFlag: '🇩🇪',
    category: 'Dessert',
    cuisineType: 'German',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 35,
    cookTimeMinutes: 30,
    totalTimeMinutes: 65,
    servings: 8,
    description: 'Classic German gateau layering airy cocoa genoise sponge soaked in aromatic Black Forest sour cherry schnapps (Kirschwasser), tart morello cherries, whipped cream, and chocolate curls.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i215', name: 'Cocoa Genoise Sponge Cake (sliced into 3 layers)', amount: '1', unit: 'cake (9-inch)' },
      { id: 'i216', name: 'Pitted Tart Sour Cherries (Morello)', amount: '500', unit: 'g' },
      { id: 'i217', name: 'Kirschwasser (Cherry Schnapps)', amount: '4', unit: 'tbsp' },
      { id: 'i218', name: 'Heavy Whipping Cream', amount: '600', unit: 'ml' },
      { id: 'i219', name: 'Powdered Sugar & Vanilla extract', amount: '0.5', unit: 'cup' },
      { id: 'i220', name: 'Dark Chocolate Curls', amount: '100', unit: 'g' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Simmer Sour Cherry Compote',
        description: 'Drain cherries, reserving juice. Simmer 1 cup cherry juice with 2 tbsp sugar and 1 tbsp cornstarch until thickened into a glossy syrup. Fold in cherries and 2 tbsp Kirschwasser; cool.',
        durationMinutes: 10,
        tip: 'Tart Morello cherries provide the authentic contrast against sweet whipped cream.'
      },
      {
        stepNumber: 2,
        title: 'Whip Cream to Stiff Peaks',
        description: 'Whip chilled heavy cream with powdered sugar, vanilla, and 1 tbsp Kirschwasser until firm peaks hold their shape.',
        durationMinutes: 6,
        tip: 'Chilling bowl and beaters ensures stabilized whipped cream.'
      },
      {
        stepNumber: 3,
        title: 'Assemble Sponge Layers',
        description: 'Brush bottom sponge with Kirschwasser syrup. Pipe rings of whipped cream and fill gaps with cherry compote. Top with second sponge and repeat.',
        durationMinutes: 10,
        tip: 'Brushing sponge generously with Kirschwasser keeps the cake moist.'
      },
      {
        stepNumber: 4,
        title: 'Frost and Garnish with Chocolate Curls',
        description: 'Frost top and sides with remaining whipped cream. Press dark chocolate curls around the sides, pipe decorative cream rosettes on top, and crown each with a cherry.',
        durationMinutes: 8,
        tip: 'Chill for 2 hours before slicing for clean, showstopping layers.'
      }
    ],
    rating: 4.96,
    reviewCount: 27,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Hans Gruber',
    isFeatured: false
  },

  // 14. INDONESIA
  {
    id: 'rec-id-1',
    title: 'Authentic Indonesian Nasi Goreng',
    countryId: 'indonesia',
    countryName: 'Indonesia',
    countryFlag: '🇮🇩',
    category: 'Dinner',
    cuisineType: 'Indonesian',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    servings: 2,
    description: 'The national fried rice of Indonesia: chilled day-old jasmine rice wok-fried with a fragrant bumbu paste of shallots, garlic, and shrimp paste (terasi), caramelized sweet soy sauce (kecap manis), topped with a crispy fried egg.',
    imageUrl: 'https://images.unsplash.com/photo-1603073163308-9655c7071e54?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i221', name: 'Chilled cooked Jasmine Rice (day-old)', amount: '3', unit: 'cups' },
      { id: 'i222', name: 'Indonesian Sweet Soy Sauce (Kecap Manis)', amount: '2.5', unit: 'tbsp' },
      { id: 'i223', name: 'Fresh Shallots & Garlic cloves', amount: '4', unit: 'shallots, 3 cloves' },
      { id: 'i224', name: 'Red Bird’s eye chilies & Shrimp paste (Terasi)', amount: '3', unit: 'chilies, 1/2 tsp terasi' },
      { id: 'i225', name: 'Chicken strips or Prawns', amount: '150', unit: 'g' },
      { id: 'i226', name: 'Eggs (fried sunny-side up)', amount: '2', unit: 'eggs' },
      { id: 'i227', name: 'Crispy fried shallots (Bawang Goreng) & Cucumber slices', amount: '1', unit: 'garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Pound the Bumbu Paste',
        description: 'Using a mortar and pestle or food processor, pound shallots, garlic, red chilies, toasted shrimp paste, and a pinch of salt into a fragrant coarse paste.',
        durationMinutes: 5,
        tip: 'Toasting shrimp paste in dry pan beforehand unlocks smoky umami.'
      },
      {
        stepNumber: 2,
        title: 'Sauté Bumbu & Meat in Smoking Wok',
        description: 'Heat 2 tbsp oil in a hot wok over medium-high heat. Sauté the bumbu paste for 2 minutes until intensely aromatic. Add chicken strips and toss until cooked.',
        durationMinutes: 4,
        tip: 'The bumbu must be caramelized in oil to release deep flavors.'
      },
      {
        stepNumber: 3,
        title: 'Toss Rice with Kecap Manis',
        description: 'Add cold rice to the wok, breaking up clumps with spatula. Drizzle sweet kecap manis and light soy sauce around edges of the wok. Stir-fry over high heat for 3-4 minutes.',
        durationMinutes: 4,
        tip: 'Drizzling sauce along wok perimeter caramelizes sugars for signature wok hei smoky aroma.'
      },
      {
        stepNumber: 4,
        title: 'Plate with Sunny-Side Egg & Kerupuk',
        description: 'Spoon fragrant rice onto plates. Top each with a crispy-edged sunny-side fried egg, cucumber and tomato slices, and shower with golden bawang goreng shallots.',
        durationMinutes: 2,
        tip: 'Break the runny egg yolk so it coats the hot savory grains.'
      }
    ],
    rating: 4.91,
    reviewCount: 32,
    isPublished: true,
    createdAt: '2026-02-21',
    authorName: 'Chef Ratna Sari',
    isFeatured: true
  },
  {
    id: 'rec-id-2',
    title: 'Padang Beef Rendang Minangkabau',
    countryId: 'indonesia',
    countryName: 'Indonesia',
    countryFlag: '🇮🇩',
    category: 'Dinner',
    cuisineType: 'Indonesian',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 120,
    totalTimeMinutes: 145,
    servings: 6,
    description: 'Voted the world’s most delicious food: beef chuck slowly simmered in rich coconut milk infused with lemongrass, kaffir lime, galangal, and turmeric leaves until the liquid evaporates and the meat caramelizes in its own fragrant coconut oil.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i228', name: 'Beef Chuck Roast, cut in 2-inch cubes', amount: '1', unit: 'kg' },
      { id: 'i229', name: 'Thick Coconut Milk & Coconut Cream', amount: '800', unit: 'ml' },
      { id: 'i230', name: 'Lemongrass stalks & Turmeric leaf', amount: '2', unit: 'stalks, 1 leaf' },
      { id: 'i231', name: 'Kaffir Lime leaves & Asam Kandis / Tamarind', amount: '4', unit: 'leaves, 1 piece' },
      { id: 'i232', name: 'Red chilies, shallots, garlic, galangal, ginger paste', amount: '1', unit: 'cup bumbu' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Coconut Milk with Aromatics',
        description: 'In a wide heavy pot, combine coconut milk, blended bumbu spice paste, bruised lemongrass, turmeric leaf, and kaffir lime leaves. Bring to gentle boil, stirring frequently.',
        durationMinutes: 15,
        tip: 'Continuous stirring early on prevents coconut milk from curdling.'
      },
      {
        stepNumber: 2,
        title: 'Add Beef and Simmer to Kalio Stage',
        description: 'Add beef cubes and reduce heat to medium-low. Cook uncovered for 1 hour until coconut milk reduces into thick golden-brown gravy (known as Kalio).',
        durationMinutes: 60,
        tip: 'Cooking uncovered allows water to evaporate while retaining coconut oil.'
      },
      {
        stepNumber: 3,
        title: 'Slow Fry in Coconut Oil to Dark Rendang',
        description: 'Lower heat to lowest setting. Stir constantly as the remaining liquid evaporates and the beef slow-fries in the rendered coconut oil for 45 minutes until deep dark brown.',
        durationMinutes: 45,
        tip: 'Keep stirring gently to prevent spices on the bottom of the pot from scorching.'
      },
      {
        stepNumber: 4,
        title: 'Rest and Serve with Steamed Rice',
        description: 'Allow Rendang to rest for 30 minutes before serving. The flavors intensify even further when eaten the next day.',
        durationMinutes: 5,
        tip: 'Rendang actually tastes even richer 24 hours later as spices permeate the beef.'
      }
    ],
    rating: 4.98,
    reviewCount: 44,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Ratna Sari',
    isFeatured: false
  },

  // 15. BRAZIL
  {
    id: 'rec-br-1',
    title: 'Traditional Brazilian Feijoada Completa',
    countryId: 'brazil',
    countryName: 'Brazil',
    countryFlag: '🇧🇷',
    category: 'Dinner',
    cuisineType: 'Brazilian',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    totalTimeMinutes: 115,
    servings: 6,
    description: 'Brazil’s revered national stew: rich black beans slow-simmered with smoked pork ribs, carne seca, paio and calabresa sausages, bay leaves, and orange peel, served with toasted farofa, collard greens, and white rice.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i233', name: 'Dried Black Beans (feijão preto), soaked', amount: '500', unit: 'g' },
      { id: 'i234', name: 'Smoked Pork Ribs cut in pieces', amount: '400', unit: 'g' },
      { id: 'i235', name: 'Linguiça Calabresa & Paio sausages, sliced', amount: '350', unit: 'g' },
      { id: 'i236', name: 'Bacon lardons, chopped', amount: '150', unit: 'g' },
      { id: 'i237', name: 'Bay leaves & Orange halves', amount: '3', unit: 'leaves, 1 orange' },
      { id: 'i238', name: 'Toasted Cassava Flour (Farofa) & Collard greens', amount: '1', unit: 'side' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown Meats and Render Bacon',
        description: 'In a large heavy pot, crisp bacon lardons until golden. Brown smoked pork ribs and sliced sausages in the rendered fat. Remove and set aside.',
        durationMinutes: 15,
        tip: 'Browning sausages first renders delicious smoky fat to season the beans.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Black Beans with Smoked Meats',
        description: 'Add soaked black beans, browned meats, bay leaves, halved orange, and 8 cups of water. Bring to a boil, then reduce heat and simmer gently for 75 minutes.',
        durationMinutes: 75,
        tip: 'Simmering an orange half cuts through rich pork fat and tenderizes the beans.'
      },
      {
        stepNumber: 3,
        title: 'Thicken Bean Gravy',
        description: 'Scoop 1 cup of beans and broth into a bowl; mash with a fork into a thick paste and stir back into the pot. Simmer for 15 minutes until gravy is silky and dark.',
        durationMinutes: 15,
        tip: 'Mashing a ladle of beans naturally thickens the stew without cornstarch.'
      },
      {
        stepNumber: 4,
        title: 'Serve Brazilian Feast Style',
        description: 'Serve steaming feijoada with white rice, toasted buttery farofa, garlic-sautéed couve collard greens, and fresh orange slices.',
        durationMinutes: 5,
        tip: 'Fresh orange slices aid digestion and refresh the palate between bites.'
      }
    ],
    rating: 4.93,
    reviewCount: 30,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Tiago Silva',
    isFeatured: true
  },
  {
    id: 'rec-br-2',
    title: 'Warm Pão de Queijo (Cassava Cheese Puffs)',
    countryId: 'brazil',
    countryName: 'Brazil',
    countryFlag: '🇧🇷',
    category: 'Appetizer',
    cuisineType: 'Brazilian',
    dietary: 'Vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    totalTimeMinutes: 35,
    servings: 6,
    description: 'Iconic Minas Gerais cheese bread: naturally gluten-free puffs made from sour tapioca flour, whole milk, butter, and cured Queijo Canastra or aged Parmesan, baked until puffed and chewy.',
    imageUrl: 'https://images.unsplash.com/photo-1598155523122-3842334d2c17?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i239', name: 'Sour Tapioca Flour (Polvilho Azedo)', amount: '250', unit: 'g' },
      { id: 'i240', name: 'Sweet Tapioca Starch (Polvilho Doce)', amount: '250', unit: 'g' },
      { id: 'i241', name: 'Whole Milk & Vegetable Oil', amount: '1', unit: 'cup milk, 1/2 cup oil' },
      { id: 'i242', name: 'Finely grated Aged Parmesan or Minas Cheese', amount: '250', unit: 'g' },
      { id: 'i243', name: 'Large Eggs', amount: '2', unit: 'eggs' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Scald Tapioca Flour',
        description: 'Bring milk, oil, and 1 tsp salt to a rolling boil in saucepan. Immediately pour over tapioca flours in a mixing bowl and stir with wooden spoon until clumpy.',
        durationMinutes: 5,
        tip: 'Scalding gelatinizes tapioca starch to create signature elastic stretch.'
      },
      {
        stepNumber: 2,
        title: 'Incorporate Eggs and Grated Cheese',
        description: 'Let dough cool for 5 minutes. Beat in eggs one by one until smooth and sticky. Knead in grated cheese until fully combined into a soft pliable dough.',
        durationMinutes: 6,
        tip: 'Aged salty cheese provides the iconic sharp golden crust.'
      },
      {
        stepNumber: 3,
        title: 'Roll into Balls and Bake',
        description: 'Grease hands with oil and roll dough into golf ball-sized spheres. Arrange on baking sheet with 2 inches space. Bake at 190°C (375°F) for 20 minutes until puffed and golden.',
        durationMinutes: 20,
        tip: 'Serve within 15 minutes of baking for maximum gooey cheese stretch.'
      }
    ],
    rating: 4.95,
    reviewCount: 38,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Tiago Silva',
    isFeatured: false
  },

  // 16. VIETNAM
  {
    id: 'rec-vn-1',
    title: 'Hanoi Beef Pho Bo with Star Anise Broth',
    countryId: 'vietnam',
    countryName: 'Vietnam',
    countryFlag: '🇻🇳',
    category: 'Soup',
    cuisineType: 'Vietnamese',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 30,
    cookTimeMinutes: 60,
    totalTimeMinutes: 90,
    servings: 4,
    description: 'Northern Vietnam’s legendary noodle soup: 12-hour simmered beef bone broth infused with charred ginger, shallots, star anise, cinnamon quills, and black cardamom, served over tender rice banh pho noodles with paper-thin rare beef eye of round.',
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i244', name: 'Flat Rice Pho Noodles (Banh Pho)', amount: '400', unit: 'g' },
      { id: 'i245', name: 'Beef Shank & Marrow Bones', amount: '1.5', unit: 'kg' },
      { id: 'i246', name: 'Raw Eye of Round Beef, sliced paper-thin', amount: '250', unit: 'g' },
      { id: 'i247', name: 'Star Anise pods & Cinnamon quills', amount: '5', unit: 'pods, 2 sticks' },
      { id: 'i248', name: 'Charred Ginger & Yellow Onions', amount: '1', unit: 'piece each' },
      { id: 'i249', name: 'Premium Fish Sauce (Nuoc Mam) & Rock Sugar', amount: '3', unit: 'tbsp each' },
      { id: 'i250', name: 'Thai Basil, Cilantro, Lime wedges, Chili slices', amount: '1', unit: 'herb platter' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Parboil Bones & Char Aromatics',
        description: 'Boil beef bones for 10 minutes to release impurities, then rinse clean under cold water. Char ginger knob and halved onions over an open flame until blackened.',
        durationMinutes: 15,
        tip: 'Parboiling and rinsing bones guarantees crystal clear broth.'
      },
      {
        stepNumber: 2,
        title: 'Toast Spices and Simmer Broth',
        description: 'Toast star anise, cinnamon, cardamom, and coriander seeds in dry pan for 2 minutes. Add bones, charred aromatics, toasted spices, rock sugar, and fish sauce into 12 cups water. Simmer gently on low heat.',
        durationMinutes: 60,
        tip: 'Gentle bare simmer prevents bone fats from clouding the broth.'
      },
      {
        stepNumber: 3,
        title: 'Assemble Bowls with Fresh Noodles',
        description: 'Cook rice noodles in boiling water for 15 seconds, drain, and divide among deep bowls. Lay paper-thin raw beef slices and cooked brisket slices neatly over noodles.',
        durationMinutes: 4,
        tip: 'Chill raw beef in freezer for 20 minutes to make paper-thin slicing effortless.'
      },
      {
        stepNumber: 4,
        title: 'Ladle Boiling Broth over Raw Beef',
        description: 'Strain boiling hot broth and ladle generously over the raw beef, cooking the meat to tender perfection instantly. Garnish with scallions and serve with fresh herb platter.',
        durationMinutes: 3,
        tip: 'The boiling broth must hit the rare beef directly to cook it pink and tender.'
      }
    ],
    rating: 4.97,
    reviewCount: 48,
    isPublished: true,
    createdAt: '2026-02-23',
    authorName: 'Chef Nguyen Van Minh',
    isFeatured: true
  },
  {
    id: 'rec-vn-2',
    title: 'Saigon Crispy Pork Banh Mi Sandwich',
    countryId: 'vietnam',
    countryName: 'Vietnam',
    countryFlag: '🇻🇳',
    category: 'Street Food',
    cuisineType: 'Vietnamese',
    dietary: 'Non-vegetarian',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    totalTimeMinutes: 30,
    servings: 2,
    description: 'Crispy airy Vietnamese French baguette smeared with French liver pâté and egg yolk mayo, stuffed with grilled lemongrass pork, pickled daikon and carrot (do chua), cucumber spears, fresh cilantro, and sliced jalapeño.',
    imageUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i251', name: 'Vietnamese Baguettes (thin crispy crust)', amount: '2', unit: 'baguettes' },
      { id: 'i252', name: 'Pork Tenderloin / Shoulder, thinly sliced', amount: '250', unit: 'g' },
      { id: 'i253', name: 'Lemongrass, garlic, honey, fish sauce marinade', amount: '3', unit: 'tbsp' },
      { id: 'i254', name: 'French Liver Pâté & Mayonnaise', amount: '2', unit: 'tbsp each' },
      { id: 'i255', name: 'Pickled Daikon & Carrot (Do Chua)', amount: '0.5', unit: 'cup' },
      { id: 'i256', name: 'Fresh Cilantro sprigs & Jalapeño slices', amount: '1', unit: 'garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate & Sear Lemongrass Pork',
        description: 'Toss pork slices with minced lemongrass, garlic, fish sauce, honey, and soy sauce. Sear in a smoking hot skillet for 4-5 minutes until caramelized and fragrant.',
        durationMinutes: 8,
        tip: 'Honey creates charred grill marks in minutes.'
      },
      {
        stepNumber: 2,
        title: 'Toast the Baguettes to Crispy Shatter',
        description: 'Warm baguettes in a 190°C (375°F) oven for 3 minutes until exterior crackles loudly when tapped.',
        durationMinutes: 3,
        tip: 'Rice flour in Vietnamese baguettes yields that signature featherlight crumb.'
      },
      {
        stepNumber: 3,
        title: 'Layer Pâté, Mayo, and Meat',
        description: 'Slice baguette lengthwise. Generously smear liver pâté along one side and rich mayo on the other. Pile warm lemongrass pork along the center.',
        durationMinutes: 3,
        tip: 'Pâté provides savory richness balancing crunchy tart pickles.'
      },
      {
        stepNumber: 4,
        title: 'Stuff with Pickles & Herbs',
        description: 'Stuff with crisp cucumber batons, drained pickled daikon and carrots, fresh cilantro sprigs, and spicy jalapeño rounds. Drizzle with Maggi seasoning and enjoy.',
        durationMinutes: 3,
        tip: 'Do chua pickle acidity cuts through rich pork fat for perfect harmony.'
      }
    ],
    rating: 4.94,
    reviewCount: 35,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Nguyen Van Minh',
    isFeatured: false
  },

  // 17. MOROCCO
  {
    id: 'rec-ma-1',
    title: 'Royal Chicken Tagine with Preserved Lemon & Olives',
    countryId: 'morocco',
    countryName: 'Morocco',
    countryFlag: '🇲🇦',
    category: 'Dinner',
    cuisineType: 'Moroccan',
    dietary: 'Non-vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    totalTimeMinutes: 70,
    servings: 4,
    description: 'Tender chicken braised in a traditional clay tagine with sweet caramelized red onions, garlic, saffron broth, ground ginger, turmeric, briny purple olives, and fragrant salted preserved lemons.',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i257', name: 'Bone-in Chicken thighs & drumsticks', amount: '800', unit: 'g' },
      { id: 'i258', name: 'Preserved Lemons, pulp removed & rind quartered', amount: '2', unit: 'lemons' },
      { id: 'i259', name: 'Moroccan Purple / Kalamata Olives, rinsed', amount: '0.5', unit: 'cup' },
      { id: 'i260', name: 'Yellow Onions, finely grated or sliced', amount: '2', unit: 'medium' },
      { id: 'i261', name: 'Saffron threads steeped in 1/2 cup warm water', amount: '0.5', unit: 'g' },
      { id: 'i262', name: 'Ground Ginger, Turmeric, Cumin', amount: '1', unit: 'tsp each' },
      { id: 'i263', name: 'Fresh Cilantro & Flat-leaf Parsley, tied', amount: '1', unit: 'bouquet' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate Chicken with Moroccan Spices',
        description: 'Rub chicken pieces with minced garlic, ground ginger, turmeric, cumin, half the saffron water, and 1 tbsp olive oil. Let marinate for 15 minutes.',
        durationMinutes: 15,
        tip: 'Preserved lemons are salty, so avoid adding extra salt until tasting.'
      },
      {
        stepNumber: 2,
        title: 'Caramelize Onions in Base of Tagine',
        description: 'Heat 2 tbsp olive oil in bottom of tagine or Dutch oven. Add grated onions and sauté for 5 minutes until soft and translucent.',
        durationMinutes: 6,
        tip: 'Grated onions dissolve into the iconic thick onion reduction (daghmira).'
      },
      {
        stepNumber: 3,
        title: 'Brown Chicken and Simmer under Conical Lid',
        description: 'Arrange chicken over onions. Pour remaining saffron water and add herb bouquet. Cover with conical lid and simmer on low heat for 40 minutes until chicken is meltingly tender.',
        durationMinutes: 40,
        tip: 'The conical tagine lid condenses steam back down, continually basting the meat.'
      },
      {
        stepNumber: 4,
        title: 'Add Preserved Lemon Rind & Olives',
        description: 'Discard herb bundle. Add preserved lemon rinds and olives into the sauce. Simmer uncovered for 10 minutes until sauce thickens into a rich golden glaze.',
        durationMinutes: 10,
        tip: 'Preserved lemon rind brings floral citrus depth without harsh acid.'
      }
    ],
    rating: 4.93,
    reviewCount: 31,
    isPublished: true,
    createdAt: '2026-02-22',
    authorName: 'Chef Fatima Zahra',
    isFeatured: true
  },
  {
    id: 'rec-ma-2',
    title: 'Seven-Vegetable Steamed Couscous',
    countryId: 'morocco',
    countryName: 'Morocco',
    countryFlag: '🇲🇦',
    category: 'Dinner',
    cuisineType: 'Moroccan',
    dietary: 'Vegetarian',
    difficulty: 'Medium',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    totalTimeMinutes: 70,
    servings: 6,
    description: 'Fluffy semolina couscous triple-steamed over a rich spiced broth of chickpeas, caramelized pumpkin, sweet carrots, zucchini, turnips, and cabbage scented with smen and ras el hanout.',
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    ingredients: [
      { id: 'i264', name: 'Medium Semolina Couscous grain', amount: '500', unit: 'g' },
      { id: 'i265', name: 'Cooked Chickpeas, drained', amount: '1', unit: 'can (400g)' },
      { id: 'i266', name: 'Carrots, Zucchini, Turnips, cut in large batons', amount: '2', unit: 'each' },
      { id: 'i267', name: 'Butternut Squash or Pumpkin chunks', amount: '300', unit: 'g' },
      { id: 'i268', name: 'Green Cabbage wedges', amount: '0.25', unit: 'head' },
      { id: 'i269', name: 'Ras el Hanout spice blend & Saffron', amount: '1.5', unit: 'tbsp' },
      { id: 'i270', name: 'Unsalted Butter or Smen (fermented butter)', amount: '3', unit: 'tbsp' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Build the Spiced Vegetable Broth',
        description: 'In the bottom of a couscoussier pot, sauté onions in olive oil with ras el hanout, turmeric, and ginger. Add water, cabbage, turnips, carrots, and chickpeas. Bring to a boil.',
        durationMinutes: 15,
        tip: 'Staggering vegetables keeps delicate squash from turning mushy.'
      },
      {
        stepNumber: 2,
        title: 'Moisten and Steam Semolina Grains',
        description: 'Sprinkle semolina with 1 cup salted water and olive oil, rubbing grains between palms to aerate. Place in steamer basket over simmering broth and steam for 15 minutes.',
        durationMinutes: 15,
        tip: 'Rubbing grains between palms separates individual couscous beads.'
      },
      {
        stepNumber: 3,
        title: 'Add Squash, Zucchini & Steam Again',
        description: 'Add quick-cooking zucchini and pumpkin to the broth. Fluff couscous with butter, place back in steamer basket, and steam for a final 20 minutes.',
        durationMinutes: 20,
        tip: 'Steam from the aromatic vegetable broth infuses directly into the couscous.'
      },
      {
        stepNumber: 4,
        title: 'Arrange the Traditional Pyramid',
        description: 'Heap fluffy couscous onto a wide communal platter, creating a hollow center. Ladle tender vegetables and chickpeas in decorative wedges over the top, and serve with bowls of rich golden broth.',
        durationMinutes: 5,
        tip: 'Pour hot spiced broth over each portion as you eat.'
      }
    ],
    rating: 4.90,
    reviewCount: 20,
    isPublished: true,
    createdAt: '2026-02-24',
    authorName: 'Chef Fatima Zahra',
    isFeatured: false
  }
];

export const INITIAL_CATEGORIES: CategoryInfo[] = [
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Hearty evening feasts, slow braises, rich curries, and comforting world mains.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    recipeCount: 16
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Quick bowls, noodles, gourmet burgers, and satisfying midday specialties.',
    imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=600&q=80',
    recipeCount: 6
  },
  {
    id: 'street-food',
    name: 'Street Food',
    description: 'Crispy tacos, skewers, savory buns, and bustling night market bites.',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    recipeCount: 5
  },
  {
    id: 'dessert',
    name: 'Dessert',
    description: 'Pastries, delicate flans, sweet baklavas, and frozen confections.',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    recipeCount: 4
  },
  {
    id: 'appetizer',
    name: 'Appetizer',
    description: 'Meze plates, crispy spring rolls, dumplings, and party starters.',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
    recipeCount: 4
  },
  {
    id: 'soup',
    name: 'Soup',
    description: 'Nourishing aromatic broths, ramen pots, and warming regional stews.',
    imageUrl: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80',
    recipeCount: 3
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    recipeId: 'rec-in-1',
    userId: 'u-1',
    userName: 'Ch. Ravi Kiran Reddy',
    rating: 5,
    comment: 'The royal dum technique explained here made the rice so fluffy and fragrant! My family loved the authenticity and rich saffron aroma.',
    createdAt: '2026-02-20'
  },
  {
    id: 'rev-2',
    recipeId: 'rec-it-1',
    userId: 'u-2',
    userName: 'Chiara Moretti',
    rating: 5,
    comment: 'As an Italian living abroad, this is the most authentic Neapolitan technique on the internet. Do not skip preheating the baking stone!',
    createdAt: '2026-02-21'
  },
  {
    id: 'rev-3',
    recipeId: 'rec-vn-1',
    userId: 'u-3',
    userName: 'David Miller',
    rating: 5,
    comment: 'The clear star anise bone broth was out of this world. Step-by-step progress tracker kept me on schedule throughout the simmer.',
    createdAt: '2026-02-22'
  },
  {
    id: 'rev-4',
    recipeId: 'rec-mx-1',
    userId: 'u-4',
    userName: 'Carlos Santana',
    rating: 5,
    comment: 'Charring the pineapple with the pork creates absolute magic. Outstanding street food experience at home.',
    createdAt: '2026-02-23'
  }
];

// USER PROFILE UPDATED TO: Ch. Ravi Kiran Reddy, 248x1a0534@khitguntur.ac.in
export const DEFAULT_USERS: UserProfile[] = [
  {
    id: 'u-ravi',
    name: 'Ch. Ravi Kiran Reddy',
    email: '248x1a0534@khitguntur.ac.in',
    avatar: '',
    role: 'admin',
    bio: 'Passionate Culinary Explorer and Lead Curator of World Recipe Explorer, celebrating authentic regional gastronomy from across the globe.',
    dietaryPreferences: ['Authentic Regional Cuisines', 'Loves Spicy Food', 'Global Gastronomy'],
    favoriteRecipeIds: ['rec-in-1', 'rec-it-1', 'rec-mx-1', 'rec-jp-1', 'rec-th-1', 'rec-vn-1', 'rec-de-1'],
    savedRecipeIds: ['rec-cn-1', 'rec-id-1', 'rec-br-1'],
    recentlyViewedIds: ['rec-in-1', 'rec-it-1', 'rec-vn-1', 'rec-de-1'],
    cookingHistory: [
      {
        recipeId: 'rec-in-1',
        recipeTitle: 'Authentic Royal Chicken Dum Biryani',
        countryFlag: '🇮🇳',
        completedAt: '2026-02-24 19:40'
      },
      {
        recipeId: 'rec-it-1',
        recipeTitle: 'Classic Neapolitan Pizza Margherita',
        countryFlag: '🇮🇹',
        completedAt: '2026-02-25 20:15'
      },
      {
        recipeId: 'rec-vn-1',
        recipeTitle: 'Hanoi Beef Pho Bo with Star Anise Broth',
        countryFlag: '🇻🇳',
        completedAt: '2026-02-26 13:30'
      }
    ],
    status: 'active',
    joinedDate: '2026-01-05'
  },
  {
    id: 'u-member',
    name: 'Global Explorer Member',
    email: 'member@recipe.com',
    avatar: '',
    role: 'user',
    bio: 'Avid home cook and international food enthusiast.',
    dietaryPreferences: ['Mediterranean & Asian'],
    favoriteRecipeIds: ['rec-in-1', 'rec-it-1'],
    savedRecipeIds: [],
    recentlyViewedIds: ['rec-in-1'],
    cookingHistory: [],
    status: 'active',
    joinedDate: '2026-02-01'
  }
];
