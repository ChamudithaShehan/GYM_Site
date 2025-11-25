import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { demoUsers, getDemoUserByEmail, type DemoUser } from "@/data/demoData";

interface User {
  id: string;
  name: string;
  email: string;
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

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string, name?: string, phone?: string): Promise<boolean> => {
    // Check for demo user first
    const demoUser = getDemoUserByEmail(email);
    if (demoUser && demoUser.password === password) {
      // Convert demo user to User format
      const userData: User = {
        id: demoUser.id,
        name: demoUser.name,
        email: demoUser.email,
        phone: demoUser.phone,
        address: demoUser.address,
        city: demoUser.city,
        zipCode: demoUser.zipCode,
        dateOfBirth: demoUser.dateOfBirth,
        gender: demoUser.gender,
        bloodType: demoUser.bloodType,
        membershipPlan: demoUser.membershipPlan,
        membershipExpiry: demoUser.membershipExpiry,
        height: demoUser.height,
        weight: demoUser.weight,
        chest: demoUser.chest,
        waist: demoUser.waist,
        hips: demoUser.hips,
        arms: demoUser.arms,
        thighs: demoUser.thighs,
        bodyFat: demoUser.bodyFat,
        goalWeight: demoUser.goalWeight,
        targetDate: demoUser.targetDate,
        primaryGoal: demoUser.primaryGoal,
        medicalConditions: demoUser.medicalConditions,
        allergies: demoUser.allergies,
        medications: demoUser.medications,
        injuries: demoUser.injuries,
        emergencyName: demoUser.emergencyName,
        emergencyRelation: demoUser.emergencyRelation,
        emergencyPhone: demoUser.emergencyPhone,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }

    // Check if user exists in localStorage (for custom signups)
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      // For demo, accept any password for existing users
      if (userData.email.toLowerCase() === email.toLowerCase()) {
        setUser(userData);
        return true;
      }
    }
    
    // New user signup - create new user
    const userData: User = {
      id: Date.now().toString(),
      name: name || "New User",
      email: email,
      phone: phone || "+1 (555) 000-0000",
      address: "",
      city: "",
      zipCode: "",
    };
    
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

