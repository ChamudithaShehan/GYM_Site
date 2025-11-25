import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Dumbbell, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Ruler, 
  Weight, 
  Target, 
  Heart, 
  AlertCircle, 
  Users, 
  CreditCard,
  Edit2,
  Save,
  X,
  RefreshCw
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const { user, isAuthenticated, updateUser } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const isExpired = user.membershipExpiry 
    ? new Date(user.membershipExpiry) < new Date()
    : true;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 sm:py-20 px-3 sm:px-4">
      {/* Background Image */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold text-white">POWERFIT</span>
            </Link>
            <Link 
              to="/" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-32 w-32 border-4 border-orange-500">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
                <AvatarFallback className="bg-orange-500 text-white text-3xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between mb-2 gap-2 sm:gap-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">{user.name}</h1>
                  <div className="flex gap-2 w-full sm:w-auto">
                    {isExpired && user.membershipPlan && (
                      <Button
                        onClick={() => navigate("/renewal")}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base w-full sm:w-auto"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Renew/Upgrade
                      </Button>
                    )}
                    {isExpired && !user.membershipPlan && (
                      <Button
                        onClick={() => navigate("/#membership")}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base w-full sm:w-auto"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Get Membership
                      </Button>
                    )}
                    <Button
                      onClick={() => setIsEditing(!isEditing)}
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-sm sm:text-base w-full sm:w-auto"
                    >
                      {isEditing ? (
                        <>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </>
                      ) : (
                        <>
                          <Edit2 className="h-4 w-4 mr-2" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  {user.membershipPlan || "No"} Member {user.membershipExpiry ? `since ${formatDate(user.membershipExpiry)}` : ""}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{user.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Profile Information</CardTitle>
            <CardDescription className="text-gray-400">
              Manage your personal information and fitness data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-900/50 mb-4 sm:mb-6 h-auto">
                <TabsTrigger 
                  value="personal" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400 text-xs sm:text-sm py-2 sm:py-1.5"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="physical" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400 text-xs sm:text-sm py-2 sm:py-1.5"
                >
                  <span className="hidden sm:inline">Physical Stats</span>
                  <span className="sm:hidden">Physical</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="fitness" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400 text-xs sm:text-sm py-2 sm:py-1.5"
                >
                  <span className="hidden sm:inline">Fitness Goals</span>
                  <span className="sm:hidden">Fitness</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="medical" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400 text-xs sm:text-sm py-2 sm:py-1.5"
                >
                  Medical
                </TabsTrigger>
              </TabsList>

              {/* Personal Information Tab */}
              <TabsContent value="personal" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-300">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="fullName"
                        defaultValue={user.name}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue={user.phone}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-gray-300">
                      Date of Birth
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        defaultValue={user.dateOfBirth || "1990-05-15"}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ dateOfBirth: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-gray-300">
                      Gender
                    </Label>
                    <Select 
                      disabled={!isEditing} 
                      defaultValue={user.gender || "male"}
                      onValueChange={(value) => isEditing && updateUser({ gender: value })}
                    >
                      <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bloodType" className="text-gray-300">
                      Blood Type
                    </Label>
                    <Select 
                      disabled={!isEditing} 
                      defaultValue={user.bloodType || "o-positive"}
                      onValueChange={(value) => isEditing && updateUser({ bloodType: value })}
                    >
                      <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a-positive">A+</SelectItem>
                        <SelectItem value="a-negative">A-</SelectItem>
                        <SelectItem value="b-positive">B+</SelectItem>
                        <SelectItem value="b-negative">B-</SelectItem>
                        <SelectItem value="ab-positive">AB+</SelectItem>
                        <SelectItem value="ab-negative">AB-</SelectItem>
                        <SelectItem value="o-positive">O+</SelectItem>
                        <SelectItem value="o-negative">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-gray-300">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    defaultValue={user.address || ""}
                    disabled={!isEditing}
                    className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    rows={2}
                    onChange={(e) => isEditing && updateUser({ address: e.target.value })}
                  />
                </div>

                {isEditing && (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </TabsContent>

              {/* Physical Stats Tab */}
              <TabsContent value="physical" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-gray-300">
                      Height
                    </Label>
                    <div className="relative">
                      <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="height"
                        placeholder="e.g., 5'10 or 178 cm"
                        defaultValue={user.height || ""}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ height: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-gray-300">
                      Weight
                    </Label>
                    <div className="relative">
                      <Weight className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="weight"
                        placeholder="e.g., 180 lbs or 82 kg"
                        defaultValue={user.weight || ""}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ weight: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chest" className="text-gray-300">
                      Chest (inches/cm)
                    </Label>
                    <Input
                      id="chest"
                      placeholder="Chest measurement"
                      defaultValue={user.chest || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ chest: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="waist" className="text-gray-300">
                      Waist (inches/cm)
                    </Label>
                    <Input
                      id="waist"
                      placeholder="Waist measurement"
                      defaultValue={user.waist || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ waist: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hips" className="text-gray-300">
                      Hips (inches/cm)
                    </Label>
                    <Input
                      id="hips"
                      placeholder="Hips measurement"
                      defaultValue={user.hips || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ hips: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="arms" className="text-gray-300">
                      Arms (inches/cm)
                    </Label>
                    <Input
                      id="arms"
                      placeholder="Arm measurement"
                      defaultValue={user.arms || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ arms: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thighs" className="text-gray-300">
                      Thighs (inches/cm)
                    </Label>
                    <Input
                      id="thighs"
                      placeholder="Thigh measurement"
                      defaultValue={user.thighs || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ thighs: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bodyFat" className="text-gray-300">
                      Body Fat Percentage
                    </Label>
                    <Input
                      id="bodyFat"
                      placeholder="e.g., 15%"
                      defaultValue={user.bodyFat || ""}
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      onChange={(e) => isEditing && updateUser({ bodyFat: e.target.value })}
                    />
                  </div>
                </div>

                {isEditing && (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </TabsContent>

              {/* Fitness Goals Tab */}
              <TabsContent value="fitness" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="goalWeight" className="text-gray-300">
                      Goal Weight
                    </Label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="goalWeight"
                        placeholder="e.g., 170 lbs"
                        defaultValue={user.goalWeight || ""}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ goalWeight: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetDate" className="text-gray-300">
                      Target Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="targetDate"
                        type="date"
                        defaultValue={user.targetDate || "2024-12-31"}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ targetDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="primaryGoal" className="text-gray-300">
                      Primary Fitness Goal
                    </Label>
                    <Select 
                      disabled={!isEditing} 
                      defaultValue={user.primaryGoal || "weight-loss"}
                      onValueChange={(value) => isEditing && updateUser({ primaryGoal: value })}
                    >
                      <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Weight Loss</SelectItem>
                        <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                        <SelectItem value="endurance">Endurance Training</SelectItem>
                        <SelectItem value="strength">Strength Building</SelectItem>
                        <SelectItem value="flexibility">Flexibility & Mobility</SelectItem>
                        <SelectItem value="general-fitness">General Fitness</SelectItem>
                        <SelectItem value="athletic-performance">Athletic Performance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="fitnessNotes" className="text-gray-300">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="fitnessNotes"
                      placeholder="Any additional fitness goals or notes..."
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      rows={4}
                      defaultValue=""
                    />
                  </div>
                </div>

                {isEditing && (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </TabsContent>

              {/* Medical Information Tab */}
              <TabsContent value="medical" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="medicalConditions" className="text-gray-300">
                      Medical Conditions
                    </Label>
                    <Textarea
                      id="medicalConditions"
                      placeholder="List any medical conditions..."
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      rows={3}
                      defaultValue={user.medicalConditions || ""}
                      onChange={(e) => isEditing && updateUser({ medicalConditions: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="allergies" className="text-gray-300">
                      Allergies
                    </Label>
                    <Textarea
                      id="allergies"
                      placeholder="List any allergies..."
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      rows={2}
                      defaultValue={user.allergies || ""}
                      onChange={(e) => isEditing && updateUser({ allergies: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="medications" className="text-gray-300">
                      Current Medications
                    </Label>
                    <Textarea
                      id="medications"
                      placeholder="List any current medications..."
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      rows={2}
                      defaultValue={user.medications || ""}
                      onChange={(e) => isEditing && updateUser({ medications: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="injuries" className="text-gray-300">
                      Previous Injuries or Limitations
                    </Label>
                    <Textarea
                      id="injuries"
                      placeholder="List any previous injuries or physical limitations..."
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      rows={3}
                      defaultValue={user.injuries || ""}
                      onChange={(e) => isEditing && updateUser({ injuries: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyName" className="text-gray-300">
                      Emergency Contact Name
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="emergencyName"
                        placeholder="Emergency contact name"
                        defaultValue={user.emergencyName || ""}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ emergencyName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation" className="text-gray-300">
                      Relationship
                    </Label>
                    <Select 
                      disabled={!isEditing} 
                      defaultValue={user.emergencyRelation || "spouse"}
                      onValueChange={(value) => isEditing && updateUser({ emergencyRelation: value })}
                    >
                      <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="emergencyPhone" className="text-gray-300">
                      Emergency Contact Phone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        placeholder="Emergency contact phone"
                        defaultValue={user.emergencyPhone || ""}
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                        onChange={(e) => isEditing && updateUser({ emergencyPhone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Membership Information Card */}
        <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-orange-500" />
                  Membership Information
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  Your current membership details
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-400">Membership Plan</Label>
                <p className="text-white text-lg font-semibold">{user.membershipPlan || "No Plan"}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-400">Expiry Date</Label>
                <p className={`text-lg font-semibold ${isExpired ? 'text-red-400' : 'text-white'}`}>
                  {user.membershipExpiry ? formatDate(user.membershipExpiry) : "N/A"}
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-400">Status</Label>
                {isExpired ? (
                  <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                    Expired
                  </span>
                ) : (
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    Active
                  </span>
                )}
              </div>
            </div>
            {isExpired && (
              <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-orange-400 font-semibold mb-1">Membership Expired</p>
                    <p className="text-gray-400 text-sm mb-3">
                      Your membership has expired. Renew or upgrade your plan to continue enjoying our services.
                    </p>
                    {user.membershipPlan ? (
                      <Button
                        onClick={() => navigate("/renewal")}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Renew or Upgrade Now
                      </Button>
                    ) : (
                      <Button
                        onClick={() => navigate("/#membership")}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Get Membership
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

