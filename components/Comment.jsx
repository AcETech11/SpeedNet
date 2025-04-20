'use client';
import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FaStar } from "react-icons/fa";
import { LuStarOff } from "react-icons/lu";


const Comment = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    rating: "",
    reviewText: "",
    image: null, // Ensure it's initially null for controlled behavior
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handles text input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handles file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  // Upload image to Sanity
  const uploadImageToSanity = async (file) => {
    if (!file) return "";

    const uploadUrl = `https://api.sanity.io/v1/assets/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body: formData,
      });

      const text = await res.text(); // Read raw response
      console.log("Sanity Response:", text); // Log response for debugging

      const data = JSON.parse(text); // Try to parse JSON
      return data?.url || ""; // Use `url` instead of `secure_url`
    } catch (error) {
      console.error("Image upload failed:", error);
      throw new Error("Image upload failed.");
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Ensure required fields are filled
    if (!formData.name || !formData.title || !formData.rating || !formData.reviewText) {
      setMessage("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadImageToSanity(formData.image);
      }

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, image: imageUrl }),
      });

      if (!res.ok) throw new Error(await res.text());

      setMessage("Review submitted successfully!");
      setFormData({ name: "", title: "", rating: "", reviewText: "", image: null });
    } catch (error) {
      setMessage("Error submitting review: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="font-headline text-primary-dark dark:text-primary-light">
            Leave Review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Review</DialogTitle>
            <DialogDescription>
              We value your feedback – share your experience and help us serve you better!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className='w-full h-full flex flex-col gap-3'>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-headline">
                FullName
              </Label>
              <Input
                name="name"
                id="name"
                placeholder="Pedro Duarte"
                className="col-span-3"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right font-headline">
                Company & Position
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="eg CEO Of SpeedNet"
                className="col-span-3"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Select
                name="rating"
                value={formData.rating}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, rating: value }))}
                className="w-full font-headline"
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ratings</SelectLabel>
                    <SelectItem value="1">1 <FaStar className="text-yellow-400" /> Star Rating</SelectItem>
                    <SelectItem value="2">2 <FaStar className="text-yellow-400" /> Stars Rating</SelectItem>
                    <SelectItem value="3">3 <FaStar className="text-yellow-400" /> Stars Rating</SelectItem>
                    <SelectItem value="4">4 <FaStar className="text-yellow-400" /> Stars Rating</SelectItem>
                    <SelectItem value="5">5 <FaStar className="text-yellow-400" /> Stars Rating</SelectItem>
                    <SelectItem value="0">No <LuStarOff className="text-red-400" /> Rating</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right font-headline">
                Upload Image*
              </Label>
              <Input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                className="col-span-3 text-sm font-light"
                onChange={handleFileChange}
                required
              />
            </div>
            <Textarea
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              required
              placeholder="Additional Information Here...... (Example Budget Range, etc)"
              className="w-full h-[14rem] font-headline font-light text-sm resize-none"
            />
            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Review'}
              </Button>
            </DialogFooter>
            {message && <p>{message}</p>}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Comment;
