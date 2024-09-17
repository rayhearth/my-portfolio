import { Card } from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";

const ContactCard = ({ image, mediumImage, mediumImageUrl, name, description }) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-contain"
        />
        {mediumImageUrl ? (
          <img
            src={mediumImageUrl}
            alt="medium icon"
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        ) : (
          mediumImage && (
            <mediumImage className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
          )
        )}
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
    </Card>
  );
};

export default ContactCard;