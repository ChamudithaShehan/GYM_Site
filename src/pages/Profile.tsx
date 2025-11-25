import { useState } from "react";
import { Link } from "react-router-dom";
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
  X
} from "lucide-react";
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
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4">
      {/* Background Image */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">POWERFIT</span>
            </Link>
            <Link 
              to="/" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
            >
              Back to Home
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
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-white">John Doe</h1>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
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
                <p className="text-gray-400 mb-4">Premium Member since January 2024</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    <span>+1 (555) 123-4567</span>
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
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-900/50 mb-6">
                <TabsTrigger 
                  value="personal" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="physical" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Physical Stats
                </TabsTrigger>
                <TabsTrigger 
                  value="fitness" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Fitness Goals
                </TabsTrigger>
                <TabsTrigger 
                  value="medical" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
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
                        defaultValue="John Doe"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="john.doe@example.com"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="+1 (555) 123-4567"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="1990-05-15"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-gray-300">
                      Gender
                    </Label>
                    <Select disabled={!isEditing} defaultValue="male">
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
                    <Select disabled={!isEditing} defaultValue="o-positive">
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
                    defaultValue="123 Fitness Street, Health City, HC 12345"
                    disabled={!isEditing}
                    className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    rows={2}
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
                        defaultValue="5'10"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="180 lbs"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                      defaultValue="42 inches"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="waist" className="text-gray-300">
                      Waist (inches/cm)
                    </Label>
                    <Input
                      id="waist"
                      placeholder="Waist measurement"
                      defaultValue="34 inches"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hips" className="text-gray-300">
                      Hips (inches/cm)
                    </Label>
                    <Input
                      id="hips"
                      placeholder="Hips measurement"
                      defaultValue="38 inches"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="arms" className="text-gray-300">
                      Arms (inches/cm)
                    </Label>
                    <Input
                      id="arms"
                      placeholder="Arm measurement"
                      defaultValue="14 inches"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thighs" className="text-gray-300">
                      Thighs (inches/cm)
                    </Label>
                    <Input
                      id="thighs"
                      placeholder="Thigh measurement"
                      defaultValue="24 inches"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bodyFat" className="text-gray-300">
                      Body Fat Percentage
                    </Label>
                    <Input
                      id="bodyFat"
                      placeholder="e.g., 15%"
                      defaultValue="15%"
                      disabled={!isEditing}
                      className="bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="170 lbs"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                        defaultValue="2024-12-31"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="primaryGoal" className="text-gray-300">
                      Primary Fitness Goal
                    </Label>
                    <Select disabled={!isEditing} defaultValue="weight-loss">
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
                        defaultValue="Jane Doe"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation" className="text-gray-300">
                      Relationship
                    </Label>
                    <Select disabled={!isEditing} defaultValue="spouse">
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
                        defaultValue="+1 (555) 987-6543"
                        disabled={!isEditing}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white disabled:opacity-70"
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
                <p className="text-white text-lg font-semibold">Premium</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-400">Join Date</Label>
                <p className="text-white text-lg font-semibold">January 15, 2024</p>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-400">Status</Label>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

