
const AbstractShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large floating shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-crystal-200/30 to-crystal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-sunflower-200/25 to-sunflower-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-gradient-to-br from-moss-200/30 to-moss-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-rouge-200/25 to-rouge-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Smaller accent shapes */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-navy-300/20 to-navy-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-crystal-300/25 to-crystal-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Organic blob shapes */}
      <div className="absolute top-20 right-20 w-48 h-32 bg-gradient-to-br from-sunflower-300/20 to-sunflower-500/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl animate-pulse" style={{ animationDelay: '5s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-56 h-40 bg-gradient-to-br from-moss-300/15 to-moss-500/10 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default AbstractShapes;
