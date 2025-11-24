
const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength Training",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mike Rodriguez",
      specialty: "CrossFit Coach",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MEET OUR TRAINERS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert trainers dedicated to helping you achieve your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
              <p className="text-orange-500 font-semibold mb-1">{trainer.specialty}</p>
              <p className="text-gray-400">{trainer.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
