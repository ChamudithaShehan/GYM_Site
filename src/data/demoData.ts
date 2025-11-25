export interface DemoUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  dateOfBirth?: string;
  gender?: string;
  bloodType?: string;
  membershipPlan?: string;
  membershipExpiry?: string;
  height?: string;
  weight?: string;
  chest?: string;
  waist?: string;
  hips?: string;
  arms?: string;
  thighs?: string;
  bodyFat?: string;
  goalWeight?: string;
  targetDate?: string;
  primaryGoal?: string;
  medicalConditions?: string;
  allergies?: string;
  medications?: string;
  injuries?: string;
  emergencyName?: string;
  emergencyRelation?: string;
  emergencyPhone?: string;
}

export const demoUsers: DemoUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@demo.com",
    password: "demo123",
    phone: "+1 (555) 123-4567",
    address: "123 Fitness Street, Health City",
    city: "Health City",
    zipCode: "12345",
    dateOfBirth: "1990-05-15",
    gender: "male",
    bloodType: "o-positive",
    membershipPlan: "Premium",
    membershipExpiry: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now
    height: "5'10",
    weight: "180 lbs",
    chest: "42 inches",
    waist: "34 inches",
    hips: "38 inches",
    arms: "14 inches",
    thighs: "24 inches",
    bodyFat: "15%",
    goalWeight: "170 lbs",
    targetDate: "2024-12-31",
    primaryGoal: "weight-loss",
    medicalConditions: "None",
    allergies: "None",
    medications: "None",
    injuries: "Previous knee injury (2020) - fully recovered",
    emergencyName: "Jane Doe",
    emergencyRelation: "spouse",
    emergencyPhone: "+1 (555) 987-6543",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@demo.com",
    password: "demo123",
    phone: "+1 (555) 234-5678",
    address: "456 Wellness Avenue, Fit Town",
    city: "Fit Town",
    zipCode: "67890",
    dateOfBirth: "1992-08-22",
    gender: "female",
    bloodType: "a-positive",
    membershipPlan: "Elite",
    membershipExpiry: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // Expired 5 days ago
    height: "5'6",
    weight: "140 lbs",
    chest: "36 inches",
    waist: "28 inches",
    hips: "36 inches",
    arms: "11 inches",
    thighs: "22 inches",
    bodyFat: "18%",
    goalWeight: "135 lbs",
    targetDate: "2024-11-30",
    primaryGoal: "muscle-gain",
    medicalConditions: "None",
    allergies: "Peanuts",
    medications: "Multivitamin",
    injuries: "None",
    emergencyName: "Mike Johnson",
    emergencyRelation: "spouse",
    emergencyPhone: "+1 (555) 234-5679",
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    email: "mike@demo.com",
    password: "demo123",
    phone: "+1 (555) 345-6789",
    address: "789 Strength Road, Power City",
    city: "Power City",
    zipCode: "54321",
    dateOfBirth: "1988-03-10",
    gender: "male",
    bloodType: "b-positive",
    membershipPlan: "Basic",
    membershipExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    height: "6'0",
    weight: "200 lbs",
    chest: "44 inches",
    waist: "36 inches",
    hips: "40 inches",
    arms: "16 inches",
    thighs: "26 inches",
    bodyFat: "12%",
    goalWeight: "195 lbs",
    targetDate: "2025-01-15",
    primaryGoal: "strength",
    medicalConditions: "None",
    allergies: "None",
    medications: "Protein supplements",
    injuries: "None",
    emergencyName: "Maria Rodriguez",
    emergencyRelation: "parent",
    emergencyPhone: "+1 (555) 345-6790",
  },
];

export const getDemoUserByEmail = (email: string): DemoUser | undefined => {
  return demoUsers.find(user => user.email.toLowerCase() === email.toLowerCase());
};

export const getDemoUserById = (id: string): DemoUser | undefined => {
  return demoUsers.find(user => user.id === id);
};

