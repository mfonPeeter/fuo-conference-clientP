import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  role: string;
  institution: string;
  imageUrl: string;
}

export default function SpeakerCard({
  name,
  role,
  institution,
  imageUrl,
}: SpeakerCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="aspect-square relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073b4c]/90 via-[#073b4c]/40 to-transparent opacity-80" />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="font-bold text-lg text-[#073b4c]">{name}</h3>
        <p className="text-[#118ab2] font-medium">{role}</p>
        <p className="text-gray-500 text-sm">{institution}</p>
      </div>
    </div>
  );
}
