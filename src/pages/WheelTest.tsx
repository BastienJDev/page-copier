import SeoWheel from "@/components/SeoWheel";

const WheelTest = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-lg text-white/80">Aperçu de la roue SEO sur fond noir</p>
        </div>
        <SeoWheel />
      </div>
    </div>
  );
};

export default WheelTest;
