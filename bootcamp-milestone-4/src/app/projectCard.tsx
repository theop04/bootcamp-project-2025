import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export default function ProjectCard({ title, description, image, imageAlt, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg max-w-sm mx-auto">
      <Link href={link}>
        <div className="w-full relative">
          <Image
            src={image}
            alt={imageAlt}
            width={800} // width used for layout calculation
            height={600} // height used for layout calculation
            className="w-full h-auto object-contain"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <Link href={link} className="text-blue-600 hover:underline font-medium">
          Learn More →
        </Link>
      </div>
    </div>
  );
}
