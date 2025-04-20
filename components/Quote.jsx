import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


const Quote = () => {
  return (
    <div className="text-center">
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-headline text-primary-dark dark:text-primary-light">Get Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Get Quote</DialogTitle>
          <DialogDescription className="font-headline">
          Get a Customized Quote for Your Needs – Fast & Reliable!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-headline">
              FullName
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3 text-sm font-light"
            required/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right font-headline">
              Email
            </Label>
            <Input
              id="email"
              placeholder="example@speednet.com"
              className="col-span-3 text-sm font-light"
              required/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right font-headline">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="+234 456 7890 123"
              className="col-span-3 text-sm font-light"
              required/>
          </div>

          <div>
            <Select className="w-full font-headline" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>SpeedNet Services</SelectLabel>
                  <SelectItem value="cctv-installation">CCTV Installation</SelectItem>
                  <SelectItem value="internet-services">Internet Services</SelectItem>
                  <SelectItem value="computer-engineering">Computer Engineering</SelectItem>
                  <SelectItem value="computer-engineering">Solar Energy</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="home-automation">Home Automation</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right font-headline">
              Location*
            </Label>
            <Input
              id="location"
              placeholder="Full Address,Local-Gov,State,Country"
              className="col-span-3 text-sm font-light"
            required/>
          </div>

          <Textarea required placeholder="Additional Information Here...... (Example Budget Range, etc)" className="w-full h-[14rem]  font-headline font-light text-sm resize-none"/>

        </div>
        <DialogFooter>
          <Button type="submit" className="font-headline">Submit Quote</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default Quote