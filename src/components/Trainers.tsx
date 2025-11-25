
const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength Training",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mike Rodriguez",
      specialty: "CrossFit Coach",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "David Thompson",
      specialty: "Cardio & Endurance",
      experience: "7 years",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="trainers" className="py-12 sm:py-16 md:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">MEET OUR TRAINERS</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Expert trainers dedicated to helping you achieve your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{trainer.name}</h3>
              <p className="text-orange-500 font-semibold mb-1 text-sm sm:text-base">{trainer.specialty}</p>
              <p className="text-gray-400 text-sm sm:text-base">{trainer.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
