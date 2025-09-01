import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="w-80 p-4 shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
      <CardContent className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-sm mb-3"
        />

        {/* Name & Role */}
        <h2 className="text-xl font-semibold text-gray-800">Vishal Parmar</h2>
        <p className="text-sm text-gray-500">Frontend Developer</p>

        {/* Details */}
        <div className="mt-4 space-y-2 text-gray-600 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Mail size={16} /> vparmar@example.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin size={16} /> Bhopal, India
          </p>
        </div>

        {/* Action Button */}
        <Button className="mt-4 w-full rounded-xl">Connect</Button>
      </CardContent>
    </Card>
  );
}
