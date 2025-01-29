import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant/constant";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export const UserSocialApp = () => {
  const handleClick = () =>{
    toast.error("This is only demo purpose, click on the Sign In button to signin.");
  }
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Button tag="a" color="light" onClick={handleClick} target="_blank"><Linkedin className="txt-linkedin" /> {LinkedInIcon}</Button>
        <Button tag="a" color="light" onClick={handleClick} target="_blank"><Twitter className="txt-twitter" />{TwitterIcon}</Button>
        <Button tag="a" color="light" onClick={handleClick} target="_blank"><Facebook className="txt-fb" />{FacebookIcon}</Button>
      </div>  
    </div>
  );
};
