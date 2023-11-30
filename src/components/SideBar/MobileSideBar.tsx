import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { NavOptions } from "./NavOptions";
// import { INavbarOptions } from "@/types/interface";
// import LinkItem from "./LinkItem";
import { RxHamburgerMenu, RxBackpack } from "react-icons/rx";

const MobileSideBar = ({ menu }: { menu: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex md:hidden">
          <RxHamburgerMenu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-4">
          <SheetTitle className="flex justify-center pb-6">
            <RxBackpack className="w-8 h-8" />
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when done.
          </SheetDescription> */}

          <div className="flex gap-3 flex-col items-center">{menu}</div>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
