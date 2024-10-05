import "./BirthdayCard.css";
import cakegif from "../../assets/cakegif.gif";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const BirthdayCard = () => {
  return (
    <div class="birthdayCard">
      <div class="container">
        <div class="card">
          <div class="outside">
            <h1>Happy Birthday</h1>
            <h3>
              My dear best friend,may god bless you with abundant joy on your
              birthday and always!
              <br />
              Thank you for always being by my side and having my back.
            </h3>
          </div>
          <div class="inside">
            <img src={cakegif} alt="cake" />
            <h3>
              Sending you an infinite amount of love, joy, and happiness on your
              birthday!
            </h3>
          </div>
        </div>

        <div class="block">
          <div class="frames frame1">
            <img src={img1} alt="" />
            <p>Keep smiling,Keep shining</p>
          </div>
          <div class="frames frame2">
            <img src={img2} alt="" />
            <p>On this occasion bring you lot of happiness and success</p>
          </div>
          <div class="frames frame3">
            <img src={img3} alt="" />
            <p>May God bless you on your birthday, and always</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BirthdayCard;
